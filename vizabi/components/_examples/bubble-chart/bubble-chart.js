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
        bubbles,
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

    // Various accessors that specify the dimensions of data to visualize.
    function x(d, indicator) {
        return d[indicator];
    }

    function y(d, indicator) {
        return d[indicator];
    }

    function radius(d, indicator) {
        return d[indicator] || 1;
    }

    function key(d) {
        return d.name;
    }

    function color(d) {
        return d.region;
    }

    function position(dot) {

        dot.attr("cy", function(d) {
                return yScale(y(d, indicators[0]));
            })
            .attr("cx", function(d) {
                return xScale(x(d, indicators[1]));
            })
            .attr("r", function(d) {
                return radiusScale(radius(d, indicators[2]));
            });
    }

    function order(a, b) {
        return radius(b) - radius(a);
    }

    var BubbleChart = Component.extend({
        init: function(context, options) {
            this.name = 'bubble-chart';
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
            bubbles = graph.select('.vzb-bc-bubbles');

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
            yScale = d3.scale[scales[0]]()
                .domain([min[0], max[0]]);

            xScale = d3.scale[scales[1]]()
                .domain([min[1], max[1]]);

            radiusScale = d3.scale[scales[2]]()
                .domain([min[2], max[2]]);

            yAxis = d3.svg.axis()
                .tickFormat(function(d) {
                    return d / units[0];
                }).tickSize(6, 0);

            xAxis = d3.svg.axis()
                .tickFormat(function(d) {
                    return d / units[1];
                }).tickSize(6, 0);

            colorScale = d3.scale.category10();

            //bubbles
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
            //size the bubbles
            this.resizeBubbles();

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

        resizeBubbles: function() {
            //scales
            yScale = yScale.range([height, 0]).nice();
            xScale = xScale.range([0, width]).nice();

            var maxRadius = (this.getLayoutProfile() == "large") ? 50 : 30;
            radiusScale = radiusScale.range([1, maxRadius]);

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

            //bubbles
            bubbles.selectAll(".vzb-bc-bubble")
                .call(position)
                .sort(order);
        },

        setYear: function(year) {

            yearEl.text(year);
            bubbles.selectAll(".vzb-bc-bubble").remove();
            bubbles.selectAll(".vzb-bc-bubble")
                .data(interpolateData(data, indicators, year))
                .enter().append("circle")
                .attr("class", "vzb-bc-bubble")
                .style("fill", function(d) {
                    return colorScale(color(d));
                })
                .attr("data-tooltip", function(d) {
                    return d.name;
                });

            this.resize();
            this.resizeStage();
            this.resizeBubbles();
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

    return BubbleChart;
});
