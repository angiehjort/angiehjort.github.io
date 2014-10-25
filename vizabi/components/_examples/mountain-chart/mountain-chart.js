define([
    'jquery',
    'd3',
    'underscore',
    'base/component'
], function($, d3, _, Component) {

    var profiles = {
        "small": {
            margin: {
                top: 30,
                right: 20,
                left: 40,
                bottom: 40
            },
            tick_spacing: 60
        },
        "medium": {
            margin: {
                top: 30,
                right: 60,
                left: 60,
                bottom: 40
            },
            tick_spacing: 80
        },
        "large": {
            margin: {
                top: 30,
                right: 60,
                left: 60,
                bottom: 40
            },
            tick_spacing: 100
        }
    };

    var size,
        //scales
        xScale,
        yScale,
        radiusScale,
        colorScale,
        //axis
        xAxis,
        yAxis,
        //elements
        graph,
        mountains,
        xAxisEl,
        yAxisEl,
        yearEl,
        //sizes
        height,
        width,
        margin,
        tick_spacing,
        //data
        data,
        countries = [],
        selected_countries,
        indicators;


    //path generator
    var area = d3.svg.area()
        .x(function(d) { return xScale(d.arg) })
        .y0(function(d) { return yScale(0) })
        .y1(function(d) { return yScale(d.pdf) });



    // Various accessors that specify the dimensions of data to visualize.
    function x(d, indicator) {
        return d[indicator];
    }

    function y(d, indicator) {
        return d[indicator];
    }

    function pdf(x, mu, sigma, scale) {
        if(x<=0) return 0;
        var m = /*x **/ sigma * Math.sqrt(2 * Math.PI);
        var e = Math.exp(-Math.pow((/*Math.log(x)*/x - mu)/sigma, 2) / 2);
        return e / m * scale;

    };


    function key(d) {
        return d.name;
    }

    function color(d) {
        return d.region;
    }

    function position(oneMountain) {
        oneMountain.attr("d", function(d){
            // vectorize the measure we have
            var mu = x(d,indicators[1])/x(d,indicators[2])/365;
            var sigma = 100 - x(d,indicators[0]);
            var scale = x(d,indicators[2]);


            var min = xScale.domain()[0];
            var max = xScale.domain()[1];

            a = xScale;
            //console.log(mu)

            var values = d3.range(min, max, (max-min)/200)
                .map(function(dd){return {arg:dd, pdf:pdf(dd, mu, sigma, scale)}});
            return area(values)
            });
    }

    function order(a, b) {
        return y(b) - y(a);
    }

    var MountainChart = Component.extend({
        init: function(context, options) {
            this.name = 'mountain-chart';
            this.template = 'components/_examples/' + this.name + '/' + this.name;
            this.tool = context;
            this._super(context, options);
        },

        // After loading template, select HTML elements
        postRender: function() {

            graph = this.element.select('.vzb-bc-graph');
            yAxisEl = graph.select('.vzb-bc-axis-y');
            xAxisEl = graph.select('.vzb-bc-axis-x');
            yTitleEl = graph.select('.vzb-bc-axis-y-title');
            xTitleEl = graph.select('.vzb-bc-axis-x-title');
            yearEl = graph.select('.vzb-bc-year');
            mountains = graph.select('.vzb-bc-mountains');

            this.update();
        },


        /*
         * UPDATE:
         * Executed whenever data is changed
         * Ideally, it contains only operations related to data events
         */
        update: function() {
            data = this.model.getData()[0];
            indicators = this.model.getState("indicator"),
            categories = this.model.getState("show")["geo.categories"];

            var _this = this,
                year = this.model.getState("time"),
                minValue = _.map(indicators, function(indicator) {
                    return d3.min(data, function(d) {
                        return +d[indicator];
                    })
                }),
                maxValue = _.map(indicators, function(indicator) {
                    return d3.max(data, function(d) {
                        return +d[indicator];
                    })
                }),
                scales = this.model.getState("scale"),

                //10% difference margin in min and max
                min = _.map(scales, function(scale, i) {
                    return ((scale == "log") ? 1 : (minValue[i] - (maxValue[i] - minValue[i]) / 10));
                }),
                max = _.map(scales, function(scale, i) {
                    return maxValue[i] + (maxValue[i] - minValue[i]) / 10;
                }),
                units = this.model.getState("unit") || [1, 1, 1],
                indicator_names = indicators;

            //axis
            yScale = d3.scale[scales[2]]()
                //.domain([min[2], max[2]]);
                .domain([0, max[2]/30]);

            xScale = d3.scale[scales[1]]()
                //.domain([min[1], max[1]]);
                .domain([0, 180]);

            yAxis = d3.svg.axis()
                .tickFormat(function(d) {
                    return d / units[2];
                }).tickSize(6, 0);

            xAxis = d3.svg.axis()
                .tickFormat(function(d) {
                   // return d / units[1];
                    return d / 1;

                }).tickSize(6, 0);

            colorScale = d3.scale.category10();

            //mountains
            this.setYear(year);

            $.simpTooltip();

        },

        /*
         * RESIZE:
         * Executed whenever the container is resized
         * Ideally, it contains only operations related to size
         */
        resize: function() {

            margin = profiles[this.getLayoutProfile()].margin;
            tick_spacing = profiles[this.getLayoutProfile()].tick_spacing;

            //size the stage
            this.resizeStage();
            //size the mountains
            this.resizeMountains();

            //size year
            widthAxisY = yAxisEl[0][0].getBBox().width;
            heightAxisX = xAxisEl[0][0].getBBox().height;

            yearEl.attr("x", "50%")
                .attr("y", "50%")
                .attr("transform", "translate(" + (-1 * widthAxisY) + ", " + (heightAxisX) + ")");

        },

        resizeStage: function() {

            //stage
            height = parseInt(this.element.style("height"), 10) - margin.top - margin.bottom;
            width = parseInt(this.element.style("width"), 10) - margin.left - margin.right;

            graph
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            //year
            widthAxisY = yAxisEl[0][0].getBBox().width;
            heightAxisX = xAxisEl[0][0].getBBox().height;

            yearEl.attr("x", "50%")
                .attr("y", "50%")
                .attr("transform", "translate(" + (-1 * widthAxisY) + ", " + (heightAxisX) + ")");
        },

        resizeMountains: function() {
            //scales
            yScale = yScale.range([height, 0]).nice();
            xScale = xScale.range([0, width]).nice();

//            var maxRadius = (this.getLayoutProfile() == "large") ? 50 : 30;
//            radiusScale = radiusScale.range([1, maxRadius]);

            //axis
            yAxis = yAxis.scale(yScale)
                .orient("left")
                .ticks(Math.max(height / tick_spacing, 2));

            xAxis = xAxis.scale(xScale)
                .orient("bottom")
                .ticks(Math.max(width / tick_spacing, 2));

            xAxisEl.attr("transform", "translate(0," + height + ")");

            yAxisEl.call(yAxis);
            xAxisEl.call(xAxis);

            //mountains
            mountains.selectAll(".vzb-bc-mountain")
                .call(position)
                .sort(order);
        },

        setYear: function(year) {

            yearEl.text(year);
            mountains.selectAll(".vzb-bc-mountain").remove();
            mountains.selectAll(".vzb-bc-mountain")
                .data(interpolateData(data, indicators, year))
                .enter().append("path")
                .attr("class", "vzb-bc-mountain")
                .style("fill", function(d) {
                    return colorScale(color(d));
                })
                .attr("data-tooltip", function(d) {
                    return d.name;
                });

            this.resize();
            this.resizeStage();
            this.resizeMountains();
        }


    });

    // Interpolates the dataset for the given (fractional) year.
    function interpolateData(data, indicators, year) {

        yearData = _.filter(data, function(d) {
            return (d.time == year);
        });

        return yearData.map(function(d) {
            var obj = {
                name: d["geo.name"],
                region: d["geo.region"] || "world"
            };
            _.each(indicators, function(indicator) {
                obj[indicator] = d[indicator];
            });

            return obj;
        });
    }

    //tooltip plugin (hotfix)
    //TODO: remove this plugin from here
    $.extend({
        simpTooltip: function(options) {
            var defaults = {
                position_x: -30,
                position_y: 20,
                target: "[data-tooltip]",
                extraClass: ""
            };
            options = $.extend(defaults, options);
            var targets = $(options.target);
            var xOffset = options.position_x;
            var yOffset = options.position_y;
            targets.hover(function(e) {
                var t = $(this).attr('data-tooltip');
                $("body").append("<div id='simpTooltip' class='simpTooltip " + options.extraClass + "'>" + t + "</div>");
                $("#simpTooltip").css("top", (e.pageY - xOffset) + "px").css("left", (e.pageX + yOffset) + "px").fadeIn("fast");
            }, function() {
                $("#simpTooltip").remove();
            });
            targets.mousemove(function(e) {
                $("#simpTooltip").css("top", (e.pageY + yOffset) + "px").css("left", (e.pageX + xOffset) + "px");
            });
        }
    });

    return MountainChart;
});
