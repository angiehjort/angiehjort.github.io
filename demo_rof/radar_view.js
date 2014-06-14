// ----------------------------------------------
// Quick and dirty prototype of Risk of failure visualization
// ----------------------------------------------
// Author: Angie, 2014, konzeptmeister@gmail.com
// A project with ABB, Sweden
// ----------------------------------------------
// Implementation is based on the D3.js library (http://d3js.org/) by Mike Bostock (http://bost.ocks.org/mike/)
// To run the code use a modern web-browser. Code files and data/ folder have to be on a web-server
// D3 is released under BSD license (http://opensource.org/licenses/BSD-3-Clause)



function RadarView() {
    var self = this;


    //constants
    this.RADIUS = Math.min((app.WIDTH - app.MARGIN.right - app.MARGIN.left),
                           (app.HEIGHT - app.MARGIN.top - app.MARGIN.bottom)) / 2;

    this.CANVAS_ORIGIN_X = this.RADIUS + app.MARGIN.left; //px
    this.CANVAS_ORIGIN_Y = this.RADIUS + app.MARGIN.top; //px

    this.GRID_R_COUNT = 4;
    this.GRID_R_STEP = this.RADIUS / this.GRID_R_COUNT;

    this.SECTORSCTL_ORIGIN_X = -this.RADIUS; //relative to canvas origin
    this.SECTORSCTL_ORIGIN_Y = -this.RADIUS + app.MARGIN.top; //relative to canvas origin

    this.HISTCTL_ORIGIN_X = this.RADIUS/3; //relative to canvas origin
    this.HISTCTL_ORIGIN_Y = -this.RADIUS + app.MARGIN.top; //relative to canvas origin

    this.SECTORSCTL_STEP_Y = 20;
    this.SECTORSCTL_STEP_X = 25;


    this.SECTORS_TRANSITION_DURATION = 1000; //ms
    this.HIST_TRANSITION_DURATION = 1000; //ms
    this.TOOLTIP_TRANSITION_DURATION = 200; //ms

    this.SECTORSCTL_PRIORITIES = [1,2,5,10,20];

    this.HIST_TICKS_RADIUS = 2; //px
    this.HIST_STROKE_WIDTH = 1;


    // create a tooltip
    var div = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);


    //create an array of ones, of length model.uTypes
    this.sectors = Array.apply(null, new Array(model.uTypes.length)).map(Number.prototype.valueOf,1);


    // for each data element it returns start angle and end angle
    // need to specify how the layout will fetch the data
    this.pie = d3.layout.pie().value(function (d) { return d; });


    //create canvas
    var radarSvg = d3.select(".radarContainer")
        .append("svg")
        .attr("width", app.WIDTH + app.MARGIN.left + app.MARGIN.right)
        .attr("height", app.HEIGHT)
        .attr("viewBox", "0 0 "+app.VIEWBOX_WIDTH+" "+app.HEIGHT)
        .attr("preserveAspectRatio", "xMinYMin")
        .append("g")
        .attr("transform", "translate(" + (app.MARGIN.left + this.CANVAS_ORIGIN_X) + ","
                                        + (app.MARGIN.top + this.CANVAS_ORIGIN_Y) + ")");


    // add title to history controlls
    radarSvg.append("text")
        .attr("class", "historyCtrl header")
        .attr("transform", "translate(" + self.HISTCTL_ORIGIN_X + "," + self.HISTCTL_ORIGIN_Y + ")")
        .text("Set history tracks:");

    // add history controlls
    var historyCtlContainer = radarSvg.append("g")
        .attr("transform","translate(" + self.HISTCTL_ORIGIN_X + ","+(self.HISTCTL_ORIGIN_Y + self.SECTORSCTL_STEP_Y )+")");

    var historyCtl = new HistoryCtl(historyCtlContainer, function(){
        d3.selectAll(".radar.point.group").each(radarHistoryTrack);
        });


    //add title to sector priority controlls
    radarSvg.append("text")
        .attr("class", "sectorsCtrl header")
        .attr("transform", "translate(" + self.SECTORSCTL_ORIGIN_X + "," + self.SECTORSCTL_ORIGIN_Y + ")")
        .text("Set your interest:");

    //add labels to sector priority controlls
    radarSvg.selectAll(".sectorsCtrl.options")
        .data(model.uTypes)
      .enter().append("text")
        .attr("class", "sectorsCtrl options")
        .attr("transform", function(d, i){ return "translate("
            + (self.SECTORSCTL_ORIGIN_X + self.SECTORSCTL_STEP_X * self.SECTORSCTL_PRIORITIES.length) + ","
            + (self.SECTORSCTL_ORIGIN_Y + self.SECTORSCTL_STEP_Y * (i+1)) + ")" })
        .text(function(d){return uppercaseFirstLetter(d)});

    //add sector priority controlls
    var sectorsCtrl = radarSvg.selectAll("g.sectorsCtrl")
            .data(this.sectors)
          .enter().append("g")
            .attr("class", "sectorsCtrl")
            .attr("transform", "translate(" + (self.SECTORSCTL_ORIGIN_X+8) + "," + (self.SECTORSCTL_ORIGIN_Y+8+8) + ")")
            .each(function(d,iSector){

                d3.select(this).selectAll("line")
                    .data(self.SECTORSCTL_PRIORITIES)
                  .enter().append("line")
                    .attr("class", "sectorsCtrl")
                    .attr("y1", iSector*self.SECTORSCTL_STEP_Y)
                    .attr("y2", iSector*self.SECTORSCTL_STEP_Y)
                    .attr("x1", function(d,iLevel){return iLevel*self.SECTORSCTL_STEP_X - 18})
                    .attr("x2", function(d,iLevel){return iLevel*self.SECTORSCTL_STEP_X - 8})
                    .style("visibility", function(d,iLevel){return iLevel==0?"hidden":"visible"});

                d3.select(this).selectAll("circle")
                    .data(self.SECTORSCTL_PRIORITIES)
                  .enter().append("circle")
                    // first circle of every line gets active by default
                    .attr("class",function(d,iLevel){return iLevel==0?"sectorsCtrl active sector"+iSector:"sectorsCtrl sector"+iSector})
                    .attr("cx", function(d,iLevel){return iLevel*self.SECTORSCTL_STEP_X})
                    .attr("cy", iSector*self.SECTORSCTL_STEP_Y)
                    .attr("r", 8)
                    .on("click", function (d,iLevel) {

                        //select the circles of the line, where you clicked and remove active effect from them
                        sectorsCtrl.selectAll("circle").each(function (d, i) {
                            if (this.classList.contains("sector" + iSector)) {
                                this.classList.remove("active")
                            }
                        });

                        //add active effect to a clicked circle
                        this.classList.add("active");

                        //update priorities accordingly and rebuild the diagram
                        self.sectors[iSector] = d;
                        self.update();
                    })
                    .on("mouseover", function () {
                        //add effect on hover
                        this.classList.add("mouseover");
                    })
                    .on("mouseout", function () {
                        //remove effect on hover
                        this.classList.remove("mouseover");
                    });

            });








    this.update = function () {

        // create parts of the arcs - bind the data using layout converter d3.svg.arc()
        var arcData = [];
        for (i = 1; i<=self.GRID_R_COUNT; i++){
            // init arc path
            arcData.push(d3.svg.arc().innerRadius((i)*self.GRID_R_STEP-2).outerRadius(i*self.GRID_R_STEP));

            //create a placeholder arcs with data about the relevant start and end angles
            var arcs = radarSvg.selectAll("g.arc.radius" + i)
                .data(self.pie(self.sectors))

            //add paths to placeholders - they will inherit the data from pie() automatically
            arcs.enter().append("g")
                .attr("class", "arc radius" + i)
              .append("path")
                .attr("class", "grid radius" + i)
                .attr("fill", function(dd, ii){return rofColorScaleHeavy(i/(self.GRID_R_COUNT+1))});

            //supply d property for paths
            radarSvg.selectAll("path.grid.radius" + i)
                .data(self.pie(self.sectors))
                .attr("d", arcData[i-1]);
        }

        // add straight grid lines
        var gridLines = radarSvg.selectAll("line.grid")
            .data(self.pie(self.sectors))
          .enter().append("line")
            .attr("class", "grid")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", self.RADIUS)
            .attr("y2", 0)
            .attr("transform", function(d){return "rotate("+ (d.startAngle*360/2/Math.PI-90) +")"})

        // animate straight grid lines
        radarSvg.selectAll("line.grid").transition().duration(self.SECTORS_TRANSITION_DURATION)
            .attr("transform", function(d){return "rotate("+ (d.startAngle*360/2/Math.PI-90) +")"})

        // add labels using centroid method
        arcs.selectAll("text")
            .data(self.pie(self.sectors))
          .enter().append("text")
            .attr("class", "sectortitles")
            .attr("text-anchor", "middle")
            .text(function (d,i) {return model.uTypes[i];});

        // animate labels transition
        arcs.selectAll("text").transition().duration(self.SECTORS_TRANSITION_DURATION)
            .attr("transform", function(d){return "translate(" + arcData[arcData.length-1].centroid(d) + ")";})

        // add sectors of data circles
        radarSvg.selectAll(".radar.sector")
            .data(self.pie(self.sectors))
          .enter().append("g")
            .attr("class", "radar sector");

        // update the content of these sectors
        radarSvg.selectAll(".radar.sector").each(radarPoints);

    }








    // this function makes data circles
    function radarPoints(ds, is) {


        // map current sector to equipment types (create data filter)
        var typeFilter = function (d) {return d.type == model.uTypes[is] };


        // map current sector to angle range on a chart (create a scale)
        var angularScale = d3.scale.linear().domain([0, 1]).range([ds.startAngle, ds.endAngle]);


        // connect to the data
        var radarPoint = d3.select(this).selectAll(".radar.point.group")
            .data(model.data.filter(typeFilter).sort(function (a, b) {return b.voltage - a.voltage}));


        // add a group for each data point
        var radarPointGroup = radarPoint
            .enter().append("g")
            .attr("class", "radar point group");


        // add history traces
        radarPoint.each(radarHistoryTrack);


        // add the circles - actual dataviz, finally
        radarPointGroup.append("circle")
            .attr("class", "radar point circ")
            .attr("cx", function (d) { return -radar.RADIUS * d.latestRof * Math.sin(-ds.startAngle) })
            .attr("cy", function (d) { return -radar.RADIUS * d.latestRof * Math.cos(-ds.startAngle) })
            .attr("r", function (d) { return voltageToSize(d.voltage) })
            .style("fill", function (d) { return rofColorScaleHeavy(d.latestRof) })
            .style("stroke", function (d) { return rofColorScaleLight(d.latestRof) })

            // attach listeners
            .on("mouseover", function(d) {

                // build the tooltip data from the point
                div.html(d.type.slice(0,d.type.length-1)
                         + "<br/>" + d.id
                         + "<br/>" + "ROF: " + formatValueRof(d.latestRof*NORM_RFAILURE_MAX)
                         + "<br/>"+ "Importance: "+ formatValueRof(d.importance * NORM_IMPORTANCE_MAX)
                         + "<br/>"+ "Voltage: "+ formatValueVolt(d.voltage) + " kV"
                         + "<br/>"+ "Age: "+ d.age)
                    .style("left", (d3.event.pageX + 20) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");

                // show the tooltip
                div.transition()
                    .duration(radar.TOOLTIP_TRANSITION_DURATION)
                    .style("opacity", .8);

                // add hovering effect
                this.classList.add("mouseover");
            })
            .on("mouseout", function(d) {

                // hide the tooltip
                div.transition()
                    .duration(radar.TOOLTIP_TRANSITION_DURATION)
                    .style("opacity", 0);

                // remove hovering effect
                this.classList.remove("mouseover");
            });


        // animate the positions of the data circles
        radarPoint.selectAll(".radar.point.circ").transition().duration(radar.SECTORS_TRANSITION_DURATION)
            .attr("cx", function (d) { return -radar.RADIUS * d.latestRof * Math.sin(-angularScale(d.importance)) })
            .attr("cy", function (d) { return -radar.RADIUS * d.latestRof * Math.cos(-angularScale(d.importance)) });

    }







    // this function makes history traces after data circles
    radarHistoryTrack = function (d) {

        // restore the angles for current segment - a very dirty solution
        var ds = self.pie(self.sectors)[model.uTypes.indexOf(d.type)];
        var angularScale = d3.scale.linear().domain([0, 1]).range([ds.startAngle, ds.endAngle]);


        // PART ABOUT CIRCLES
        // bind the data
        var ticks = d3.select(this).selectAll(".radar.point.history.tick").data(d.rfailureH);

        // exit selection - remove circles that are no longer needed
        ticks.exit().transition().style("opacity", 0);

        // enter selection - add circles according to number of history points
        ticks.enter()
            .append("circle")
            .attr("class", "radar point history tick")
            .style("fill", function (dd) {return rofColorScaleLight(d.latestRof) })
            .style("opacity", 0)
            .attr("r", radar.HIST_TICKS_RADIUS)
            .attr("cx", function (dd) { return -radar.RADIUS * dd.rof * Math.sin(-ds.startAngle) })
            .attr("cy", function (dd) { return -radar.RADIUS * dd.rof * Math.cos(-ds.startAngle) });

        // update selection - adjust existing lines
        ticks.transition().duration(radar.HIST_TRANSITION_DURATION)
            .attr("cx", function (dd) {return -radar.RADIUS * dd.rof * Math.sin(-angularScale(d.importance)) })
            .attr("cy", function (dd) {return -radar.RADIUS * dd.rof * Math.cos(-angularScale(d.importance)) })
            .style("opacity", 1);


        // PART ABOUT LINES
        // bind the data
        var lines = d3.select(this).selectAll(".radar.point.history.line").data(d.rfailureH);

        // exit selection - remove lines that are no longer needed
        lines.exit().transition().style("opacity", 0);

        // enter selection - add lines according to number of history points
        lines.enter()
            .append("line")
            .attr("class", "radar point history line")
            .style("opacity", 0)
            .style("stroke-width", radar.HIST_STROKE_WIDTH + "px")
            .attr("stroke", function (dd) { return rofColorScaleLight(d.latestRof) })
            .attr("x1",function (dd,ii) {return -radar.RADIUS *
                (d.rfailureH[ii].rof) * Math.sin(-ds.startAngle);})
            .attr("y1",function (dd,ii) {return -radar.RADIUS *
                (d.rfailureH[ii].rof) * Math.cos(-ds.startAngle);})
            .attr("x2",function (dd,ii) {return -radar.RADIUS *
                (ii!=0?d.rfailureH[ii-1].rof:d.latestRof) * Math.sin(-ds.startAngle);})
            .attr("y2",function (dd,ii) {return -radar.RADIUS *
                (ii!=0?d.rfailureH[ii-1].rof:d.latestRof) * Math.cos(-ds.startAngle);});

        // update selection - adjust existing circles
        lines.transition().duration(radar.HIST_TRANSITION_DURATION)
            .attr("x1",function (dd,ii) {return -radar.RADIUS *
                (d.rfailureH[ii].rof) * Math.sin(-angularScale(d.importance));})
            .attr("y1",function (dd,ii) {return -radar.RADIUS *
                (d.rfailureH[ii].rof) * Math.cos(-angularScale(d.importance));})
            .attr("x2",function (dd,ii) {return -radar.RADIUS *
                (ii!=0?d.rfailureH[ii-1].rof:d.latestRof) * Math.sin(-angularScale(d.importance));})
            .attr("y2",function (dd,ii) {return -radar.RADIUS *
                (ii!=0?d.rfailureH[ii-1].rof:d.latestRof) * Math.cos(-angularScale(d.importance));})
            .style("opacity", 1);


    } // radarHistoryTrack()

}// RadarView class




