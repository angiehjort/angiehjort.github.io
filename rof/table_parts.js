function tablerow(d,i){
    var index = i;

    d3.select(this).append("g")
        .attr("transform", function(d,i) { return "translate(" + table.COLUMN_X0[0] + ",0)"; })
        .each(idplot);
    d3.select(this).append("g")
        .attr("transform", function(d,i) { return "translate(" + table.COLUMN_X0[2] + ",0)"; })
        .each(barplot);
    d3.select(this).append("g")
        .attr("class", "barplotHistory")
        .attr("transform", function(d,i) { return "translate(" + table.COLUMN_X0[2] + ",0)"; })
        .each(barplotHistory);
    d3.select(this).append("g")
        .attr("transform", function(d,i) { return "translate(" + table.COLUMN_X0[3] + ",0)"; })
        .each(voltbar);
    d3.select(this).append("g")
        .attr("transform", function(d,i) { return "translate(" + table.COLUMN_X0[4] + ",0)"; })
        .call(customersPlot, index);
    d3.select(this).append("g")
        .attr("transform", function(d,i) { return "translate(" + table.COLUMN_X0[5] + ",0)"; })
        .each(beardbar);

    //active layer of every row - keep it a last child!
    d3.select(this).append("g")
        .attr("class", "tablerow active")
        .each(tablerowActive);

   this.lastChild.style.visibility="hidden";
}







function tablerowActive(d,i){

    d3.select(this).append("rect")
        .attr("class", "overlay")
        .attr("x", 0)
        .attr("y", -5)
        .attr("height", table.ROW_HEIGHT)
        .attr("width", table.COLUMN_X0[6]);


    d3.select(this).append("g")
        .attr("transform", function(d,i) { return "translate(" + table.COLUMN_X0[0] + ",0)"; })
        .each(idplotActive);
    d3.select(this).append("g")
        .attr("transform", function(d,i) { return "translate(" + table.COLUMN_X0[2] + ",0)"; })
        .each(barplotActive);
    d3.select(this).append("g")
        .attr("transform", function(d,i) { return "translate(" + table.COLUMN_X0[3] + ",0)"; })
        .each(voltbarActive);
    d3.select(this).append("g")
        .attr("transform", function(d,i) { return "translate(" + table.COLUMN_X0[4] + ",0)"; })
        .each(customersPlotActive);
    d3.select(this).append("g")
        .attr("transform", function(d,i) { return "translate(" + table.COLUMN_X0[5] + ",0)"; })
        .each(beardbarActive);
}







function idplot(d,i) {
    d3.select(this).append("text")
        .attr("class", "idplot")
        .attr("dy", "8px")
        .attr("x", 0)
        .attr("y", 0)
        .attr("text-anchor", "left")
        .text(function(d) { return d.id; });

    d3.select(this).append("circle")
        .attr("class", "idplot")
        .attr("r", 3)
        .attr("cx", function(d) { return table.COLUMN_X0[1] + d.importance * table.IMPORTANCE_BAR_LENGTH; })
        .attr("cy", 15);

    d3.select(this).append("line")
        .attr("class", "idplot")
        .attr("x1", table.COLUMN_X0[1])
        .attr("x2", function(d) { return table.COLUMN_X0[1] +  d.importance * table.IMPORTANCE_BAR_LENGTH; })
        .attr("y1", 15)
        .attr("y2", 15);
}

function idplotActive(d,i) {
    d3.select(this).append("text")
        .attr("class", "idplot active")
        .attr("y", "8px")
        .attr("x", function(d) { return table.COLUMN_X0[1] +  d.importance * table.IMPORTANCE_BAR_LENGTH; })
        .attr("text-anchor", "left")
        .text(formatValueRof(d.importance * NORM_IMPORTANCE_MAX));
}








function barplot(d,i) {
    d3.select(this).append("rect")
            .style("fill", function(d) { return rofColorScaleHeavy(d.latestRof);})
            .attr("x", 0)
            .attr("y", 0)
            .attr("height", 10)
            .attr("width", function(d) { return d.latestRof*table.ROF_BAR_LENGTH; });

    d3.select(this).append("rect")
            .style("fill", function(d) { return rofColorScaleLight(d.latestRof);})
            .attr("x", function(d) { return d.latestRof*table.ROF_BAR_LENGTH; })
            .attr("y", 0)
            .attr("height", 10)
            .attr("width", function(d) { return (1-d.latestRof)*table.ROF_BAR_LENGTH; });
}

function barplotHistory(d,i) {
    // returns opacity values 1 to 0.2 for the specified range of dates
    var histOpacityScale = d3.scale.linear()
            .clamp(true)
            .domain([d3.max(d.rfailureH.map(function(d){return d.date})),
                     d3.min(d.rfailureH.map(function(d){return d.date}))])
            .range(table.HIST_TICKS_OPACITY_LIMITS);

    var ticks = d3.select(this).selectAll(".history").data(d.rfailureH);

    ticks.exit().remove();

    ticks.enter().append("rect")
            .attr("class","history ticks")
            .attr("x", 0)
            .attr("y", 0)
            .attr("height", 10)
            .attr("width", table.HIST_TICKS_THICKNESS);

    ticks.transition().duration(table.HIST_TRANSITION_DURATION)
            .style("fill", function(dd) { return dd.rof<d.latestRof? rofColorScaleLight(d.latestRof): rofColorScaleHeavy(d.latestRof); })
            .style("opacity", function(dd,i){return histOpacityScale(dd.date);})
            .attr("x", function(dd) { return dd.rof*table.ROF_BAR_LENGTH; });

}


function barplotActive(d, i) {

    // normalization
    var reasons = table.SAMPLEDATA_FAILURE_REASONS_VALS;
    var reasonsText = table.SAMPLEDATA_FAILURE_REASONS_NAMES;

    var acc = 0;
    for (r = 0; r < reasons.length; r++) acc += reasons[r];
    for (r = 0; r < reasons.length; r++) reasons[r] = reasons[r]/acc;

    acc = 0;
    for (r = 0; r < reasons.length; r++) {
        d3.select(this).append("rect")
            .style("fill", rofReasonsColor(r))
            .attr("x", d.latestRof * acc*table.ROF_BAR_LENGTH)
            .attr("y", 0)
            .attr("height", 10)
            .attr("width", function (d) {
                return d.latestRof * reasons[r] *table.ROF_BAR_LENGTH;
            });

        acc += reasons[r];
    }


    var fonts = table.ROF_REASONS_FONTSIZE;

    acc = 0;
    for (r = 0; r < reasons.length; r++) {
        d3.select(this).append("text")
            .style("fill", rofReasonsColor(r))
            .style("font-size", fonts+"px")
            .attr("x", acc)
            .attr("y", 17)
            .attr("text-anchor", "left")
            .text(reasonsText[r]);

        if (reasons[r] * table.ROF_BAR_LENGTH * d.latestRof < reasonsText[r].length * fonts/2) {
            acc += (reasonsText[r].length+1)*fonts/2;
        } else {
            acc += reasons[r]* d.latestRof  * table.ROF_BAR_LENGTH;
        }
    }

    d3.select(this).append("text")
        .attr("class", "rofbar active")
        .attr("dy", "8px")
        .attr("x", table.ROF_BAR_LENGTH - 20)
        .attr("y", 0)
        .attr("text-anchor", "left")
        .text(Math.floor(d.latestRof * NORM_RFAILURE_MAX));
}








function voltbar(d,i) {
d3.select(this).append("polygon")
        .attr("class", "voltbar on")
        .attr("points", "0,8, 0,10, 10,10, 10,6");

d3.select(this).append("polygon")
        .attr("class", function(d) { return voltageScale(d.voltage)!="Medium"?  "voltbar on": "voltbar off"; })
        .attr("points", "0,6, 0,10, 10,10, 10,4")
        .attr("transform", "translate(" + 11 + "," + 0 + ")");

d3.select(this).append("polygon")
        .attr("class", function(d) { return voltageScale(d.voltage)!="Medium"&&d.voltage!="High"?  "voltbar on": "voltbar off"; })
        .attr("points", "0,4, 0,10, 10,10, 10,2")
        .attr("transform", "translate(" + 22 + "," + 0 + ")");

d3.select(this).append("polygon")
        .attr("class", function(d) { return voltageScale(d.voltage)=="Extra high"?  "voltbar on": "voltbar off"; })
        .attr("points", "0,2, 0,10, 10,10, 10,0")
        .attr("transform", "translate(" + 33 + "," + 0 + ")");
}


function voltbarActive(d,i) {
d3.select(this).append("text")
        .attr("class", "voltbar active")
        .attr("dy", "8px")
        .attr("dx", "-8px")
        .attr("text-anchor", "left")
        .text(formatValueVolt(d.voltage) + " kV");
}







function customersPlot(d,i) {

    var index = i;

    d3.select(this[0][0]).append("line")
            .attr("class", "customer")
            .attr("x1", function(d) { return 15*model.uCustomers.indexOf(d.customer); })
            .attr("x2", function(d) { return 15*model.uCustomers.indexOf(d.customer); })
            .attr("y2", 5)
            .attr("y1", function(d) {

                if (table.lastCoords[model.uCustomers.indexOf(d.customer)]==-1){
                    var a = 0;
                }else{
                    var a = -table.ROW_HEIGHT*(index - table.lastCoords[model.uCustomers.indexOf(d.customer)]);
                }

                table.lastCoords[model.uCustomers.indexOf(d.customer)] = index;

                return 5+a; });


    d3.select(this[0][0]).append("circle")
        .attr("class", "customer")
        .attr("r", 3)
        .attr("cx", function(d) { return 15*model.uCustomers.indexOf(d.customer); })
        .attr("cy", 5);
}


function customersPlotActive(d,i) {
d3.select(this).append("text")
    .attr("class", "customer active")
    .attr("dy", "8px")
    .attr("dx", "0px")
    .attr("x", function(d) { return 15*model.uCustomers.indexOf(d.customer); })
    .attr("text-anchor", "middle")
    .text(d.customer);
}






function beardbar(d,i) {
    // set how many years are in one segment of the beard
    a = Math.ceil(d.age/table.BEARD_YEARS_PER_SEGMENT);

    d3.select(this).append("text")
            .attr("class", "beardbar")
            .attr("dy", "8px")
            .attr("text-anchor", "left")
            .text(":-)");

    d3.select(this).append("rect")
            .attr("class", "beard on")
            .attr("x", 12)
            .attr("y", -3)
            .attr("height", 2)
            .attr("width", 5*Math.floor(a/5)+5*(a%5==3||a%5==4));

    d3.select(this).append("rect")
            .attr("class", "beard on")
            .attr("x", 13)
            .attr("y", 0)
            .attr("height", 2)
            .attr("width", 5*Math.floor(a/5)+5*(a%5==2||a%5==4));

    d3.select(this).append("rect")
            .attr("class", "beard on")
            .attr("x", 14)
            .attr("y", 3)
            .attr("height", 2)
            .attr("width", 5*Math.floor(a/5)+5*(a%5==1||a%5==3));

    d3.select(this).append("rect")
            .attr("class", "beard on")
            .attr("x", 13)
            .attr("y", 6)
            .attr("height", 2)
            .attr("width", 5*Math.floor(a/5)+5*(a%5==2||a%5==4));

    d3.select(this).append("rect")
            .attr("class", "beard on")
            .attr("x", 12)
            .attr("y", 9)
            .attr("height", 2)
            .attr("width", 5*Math.floor(a/5)+5*(a%5==3||a%5==4));
}


function beardbarActive(d,i) {
    d3.select(this).append("text")
            .attr("class", "beardbar active")
            .attr("dy", "8px")
            .attr("dx", "10px")
            .attr("text-anchor", "left")
            .text(d.age + " years");
}
