

(function() {
  d3.dashPlot = function() {
    var interpolate = "linear", // or basis, monotone, step-before, etc.
        x = function(d) {return d[0];},
        y = function(d) {return d[1];},
        w = 960, h = 40,
        stepY = 10,
        dw = 0, dh = 0,
        dashH = 16,
        dashTargetH = 30,
        duration = 0,
        xMin = null,
        xMax = null,
        yMax = null,
        color = "#bd0026";

    // For each small multiple…
    function dashPlot(g) {
        g.each(function(d, i) {

            var kpiObject = new One();
            var keys = [];
            var kpiArray = [];
            for(k in kpiObject) {
                keys.push(k);
                kpiArray.push( d.map(function(d){return d[k]}));
            }

            var x = [];
            var xAxis = [];
            for(k in kpiArray) {
                var max = SCALAR_KPI_META[keys[k]].maximum; //Math.min(d3.max(kpiArray[k]), SCALAR_KPI_META[keys[k]].maximum);
                x.push(d3.scale.linear().nice().range([0, w]).domain([0,max]).clamp(true));
                xAxis.push(d3.svg.axis().scale(x[k]).orient("bottom").ticks(5).tickFormat(SCALAR_KPI_META[keys[k]].format));
            }

          d3.select(this).selectAll("g").remove();

            d3.select(this).selectAll("g")
                .data(kpiArray)
              .enter().append("g")
                .attr("class", "dashPlot oneKpi")
                .attr("transform",function(d,i){return "translate("+dw+","+(dh+stepY*i)+")"})
                .each(function(datum, kpiIndex){
                    var parent = d3.select(this);
                    var KPIMETA = SCALAR_KPI_META[keys[kpiIndex]];
                    var x_ = x[kpiIndex];

//                    if(kpiIndex==0){
//                      parent.selectAll(".target.legend")
//                        .data([null])
//                      .enter().append("line")
//                        .attr("class", "target legend")
//                        .attr("x1", w-45)
//                        .attr("x2", w-45)
//                        .attr("y1", -dashH*2.8)
//                        .attr("y2", -dashH*1.7);
//
//                    parent.selectAll(".targetValue.legend")
//                        .data([null])
//                      .enter().append("text")
//                        .attr("class", "targetValue legend")
//                        .attr("dx", w-40)
//                        .attr("dy", -dashH*2)
//                        .text("target");
//                    }

                    if(kpiIndex<kpiArray.length-1){
                        var x_1 = x[kpiIndex+1];

                        parent.selectAll(".connection")
                            .data(datum)
                          .enter().append("line")
                            .attr("class", function(d,i){return "connection hoverable opacityBasedOnSamples1 "+ASSET_ID})
                            .attr("id", function(d,i){return ASSET_ID + i})
                            .attr("x1",function(d,i){return x_(d)})
                            .attr("x2",function(d,i){return x_1(kpiArray[kpiIndex+1][i])})
                            .attr("y1",dashH/2)
                            .attr("y2",stepY-dashH/2);
                        }



                    parent.selectAll(".midLine")
                        .data([null])
                      .enter().append("line")
                        .attr("class", "midLine")
                        .attr("x1",0)
                        .attr("x2",w)
                        .attr("y1",0)
                        .attr("y2",0)

                    parent.selectAll(".x.axis")
                        .data([null])
                      .enter().append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + 10 + ")")
                        .call(xAxis[kpiIndex]);



                    var separator = (KPIMETA.method=="" || KPIMETA.units == "")?"":", ";

                    var topRow = parent.selectAll(".topRow")
                        .data([null])
                      .enter().append("g")
                        .attr("class", "topRow");

                    topRow.selectAll(".topline")
                        .data([null])
                      .enter().append("text")
                        .attr("class", "topline")
                        .attr("dy", -dashH*2)
                        .text(KPIMETA.method + " " + KPIMETA.name); // + " (" + KPIMETA.method + separator + KPIMETA.units + ")");

                    topRow.selectAll(".subline")
                        .data([null])
                      .enter().append("text")
                        .attr("class", "subline")
                        .attr("dx", 0)
                        .attr("dy", -dashH)
                        .text(KPIMETA.units); // KPIMETA.method + separator +

                    parent.selectAll(".background.bad")
                        .data([null])
                      .enter().append("rect")
                        .attr("class", "background bad")
                        .attr("x", KPIMETA.targetType==TARGET_HI_ISGOOD? 0 : x_(KPIMETA.target))
                        .attr("y", -dashH/2)
                        .attr("width", KPIMETA.targetType==TARGET_HI_ISGOOD? x_(KPIMETA.target) : w-x_(KPIMETA.target))
                        .attr("height", dashH);

                    parent.selectAll(".background.good")
                        .data([null])
                      .enter().append("rect")
                        .attr("class", "background good")
                        .attr("x", KPIMETA.targetType==TARGET_LO_ISGOOD? 0 : x_(KPIMETA.target))
                        .attr("y", -dashH/2)
                        .attr("width", KPIMETA.targetType==TARGET_LO_ISGOOD? x_(KPIMETA.target) : w-x_(KPIMETA.target))
                        .attr("height", dashH);




//                    parent.selectAll(".target.mark")
//                        .data([null])
//                      .enter().append("line")
//                        .attr("class", "target mark")
//                        .attr("x1", x_(KPIMETA.target))
//                        .attr("x2", x_(KPIMETA.target))
//                        .attr("y1",-dashTargetH/2)
//                        .attr("y2",+dashTargetH/2);
//
//                    parent.selectAll(".targetValue.mark")
//                        .data([null])
//                      .enter().append("text")
//                        .attr("class", "targetValue mark")
//                        .attr("dx", x_(KPIMETA.target)-3)
//                        .attr("dy", 27)
//                        .text(KPIMETA.format(KPIMETA.target));

                    parent.selectAll(".dash")
                        .data(datum)
                      .enter().append("line")
                        .attr("class", function(d,i){return "dash "+ASSET_ID+" hoverable opacityBasedOnSamples2"})
                        .attr("id", function(d,i){return ASSET_ID + i})
                        .attr("x1",function(d,i){return x_(d)})
                        .attr("x2",function(d,i){return x_(d)})
                        .attr("y1",-dashH/2)
                        .attr("y2",+dashH/2);


                    parent.selectAll(".bulletLine")
                        .data(datum)
                      .enter().append("line")
                        .attr("class", function(d,i){return "bulletLine opacityBasedOnSamples0 "+ASSET_ID+" hoverable"})
                        .attr("id", function(d,i){return ASSET_ID + i})
                        .style("stroke-width", 10/datum.length)
                        .attr("x1",function(d,i){return x_(0)})
                        .attr("x2",function(d,i){return x_(d)})
                        .attr("y1",function(d,i){return (i-datum.length/2+0.5)*20/datum.length})
                        .attr("y2",function(d,i){return (i-datum.length/2+0.5)*20/datum.length});


                    var boxplot = parent.selectAll(".boxplot")
                        .data([null])
                      .enter().append("g").attr("class", "boxplot opacityBasedOnSamples3");

                    boxplot.selectAll("line .minmin")
                        .data([null])
                      .enter().append("line")
                        .attr("class", "loLoLine")
                        .attr("x1",x_(d3.min(datum)))
                        .attr("x2",x_(d3.median(datum))-3)
                        .attr("y1",0)
                        .attr("y2",0);

                    boxplot.selectAll("line .hiHiLine")
                        .data([null])
                      .enter().append("line")
                        .attr("class", "hiHiLine")
                        .attr("x1",x_(d3.median(datum))+3)
                        .attr("x2",x_(d3.max(datum)))
                        .attr("y1",0)
                        .attr("y2",0);

                    boxplot.selectAll("line .loLine")
                        .data([null])
                      .enter().append("line")
                        .attr("class", "loLine")
                        .attr("x1",x_((d3.min(datum)+d3.median(datum))*0.5))
                        .attr("x2",x_(d3.median(datum))-3)
                        .attr("y1",0)
                        .attr("y2",0);

                    boxplot.selectAll("line .hiLine")
                        .data([null])
                      .enter().append("line")
                        .attr("class", "hiLine")
                        .attr("x1",x_(d3.median(datum))+3)
                        .attr("x2",x_((d3.max(datum)+d3.median(datum))*0.5))
                        .attr("y1",0)
                        .attr("y2",0);


                    parent.selectAll(".dashValueShadow")
                        .data(datum)
                      .enter().append("text")
                        .attr("class", function(d,i){return "dashValueShadow "+ASSET_ID+""})
                        .attr("id", function(d,i){return ASSET_ID + i})
                        .attr("dx",function(d,i){return x_(d)-5})
                        .attr("dy",-dashH)
                        .text(function(d){return KPIMETA.format(d)});

                    parent.selectAll(".dashValue")
                        .data(datum)
                      .enter().append("text")
                        .attr("class", function(d,i){return "dashValue "+ASSET_ID+""})
                        .attr("id", function(d,i){return ASSET_ID + i})
                        .attr("dx",function(d,i){return x_(d)-5})
                        .attr("dy",-dashH)
                        .text(function(d){return KPIMETA.format(d)});









            })



          /*
        var x0 = d3.scale.linear().domain([xMin, xMax]).range([0, w]),
            y0 = d3.scale.linear().domain([0, -yMax]).range([0, h]);

        var d1 = d3_lineChart
            .interpolate(interpolate)
            .x(function(d) { return x0(d[0]); })
            .y(function(d) { return y0(d[1]); })
            (d);



        g.selectAll("g")
            .data([null])
          .enter().append("g")
            .attr("transform","translate("+dw+","+dh+")");

        var path = g.select("g").selectAll("path")
            .data([1])

        path.enter().append("path").attr("d", d1);

        path.style("fill", "none").style("stroke", color)

        path.exit().remove();
        */
        });
    }

    //getters and setters
    dashPlot.stepy = function(arg) {if (!arguments.length) return stepY;   stepY = +arg;   return dashPlot;};
    dashPlot.width = function(arg) {if (!arguments.length) return w;       w = +arg;       return dashPlot;};
    dashPlot.height = function(arg) {if (!arguments.length) return h;      h = +arg;       return dashPlot;};
    dashPlot.dwidth = function(arg) {if (!arguments.length) return dw;     dw = +arg;      return dashPlot;};
    dashPlot.dheight = function(arg) {if (!arguments.length) return dh;    dh = +arg;      return dashPlot;};
    dashPlot.color = function(arg) {if (!arguments.length) return color;   color = arg;    return dashPlot;};
    dashPlot.xmin = function(arg) {if (!arguments.length) return xMin;     xMin = +arg;    return dashPlot;};
    dashPlot.xmax = function(arg) {if (!arguments.length) return xMax;     xMax = +arg;    return dashPlot;};
    dashPlot.ymax = function(arg) {if (!arguments.length) return yMax;     yMax = +arg;    return dashPlot;};
    dashPlot.dashH = function(arg) {if (!arguments.length) return dashH;     dashH = +arg;    return dashPlot;};


    return dashPlot;
  };



})();

