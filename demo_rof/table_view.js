// ----------------------------------------------
// Quick and dirty prototype of Risk of failure visualization
// ----------------------------------------------
// Author: Angie, 2014, konzeptmeister@gmail.com
// A project with ABB, Sweden
// ----------------------------------------------
// Implementation is based on the D3.js library (http://d3js.org/) by Mike Bostock (http://bost.ocks.org/mike/)
// To run the code use a modern web-browser. Code files and data/ folder have to be on a web-server
// D3 is released under BSD license (http://opensource.org/licenses/BSD-3-Clause)


function TableView() {
    var self = this;


    //constants
    this.HEADER_HIGHT = 50;
    this.ROW_HEIGHT = 25;
    this.HEADER_Y0 = 0;
    this.COLUMN_X0 = [0, 30, 150, 410, 480, 580, 650];
    this.COLUMN_HEADERS = ["id","importance","rfailure","voltage","customer","age"];
    this.ROF_BAR_LENGTH = this.COLUMN_X0[3] - this.COLUMN_X0[2]-20;
    this.IMPORTANCE_BAR_LENGTH = 100;

    this.HIST_TRANSITION_DURATION = 1000; //ms
    this.HIST_TICKS_THICKNESS = 1; //px
    this.HIST_TICKS_OPACITY_LIMITS = [1, 0.2];

    this.SAMPLEDATA_FAILURE_REASONS_VALS = [10, 20, 45, 55, 11, 8];
    this.SAMPLEDATA_FAILURE_REASONS_NAMES  = ["me", "age", "overload", "heat", "moisture", "cold"];

    this.BEARD_YEARS_PER_SEGMENT = 2; //one or two

    // since calculations depend on it, it is too tricky to keep it in CSS, sorry =)
    this.ROF_REASONS_FONTSIZE = 8;

    this.lastCoords = [];

    //set up the canvas
    var tableSvg = d3.select(".tableContainer")
        .append("svg")
        .attr("width", app.WIDTH + app.MARGIN.left + app.MARGIN.right)
        .attr("height", 5000)
        .attr("viewBox", "0 0 "+app.VIEWBOX_WIDTH*0.8+" " + 3000)
        .attr("preserveAspectRatio", "xMinYMin")
        .append("g")
        .attr("transform", "translate(" + app.MARGIN.left + "," + app.MARGIN.top + ")");


    // add table header
    var titles = tableSvg.append("g").attr("transform", function (d, i) {
        return "translate(" + 0 + "," + self.HEADER_Y0 + ")";
        });

    titles.selectAll(".header")
        .data(self.COLUMN_HEADERS)
      .enter().append("text")
        .attr("class", "header")
        .attr("x", function(d,i){return self.COLUMN_X0[i] + "px"})
        .attr("y", 0 + "px")
        .text(function(d){return columnSemanticNames(d)});



    // add a history controller
    var historyCtlContainer = titles.append("g")
        .attr("transform","translate(" + (this.COLUMN_X0[2]+90) + ",0)");

    var historyCtl = new HistoryCtl(historyCtlContainer, function(){
        d3.selectAll(".barplotHistory").each(barplotHistory);
        });








    // call when the data is updated
    this.update = function () {
        d3.selectAll(".tablerow, .sep").remove();

        var tablerowOffset = 0;

        // for every equipment type:
        for (k = 0; k<model.uTypes.length; k++){


            // dirty solution for lines, that are connecting customers
            // the rest of implementation is in table_parts.js - function "customersplot"
            self.lastCoords = Array.apply(null, new Array(model.uCustomers.length)).map(Number.prototype.valueOf, -1);


            // add table rows for data entries of a certain equipment type
            tableSvg.selectAll()
                .data(model.data.filter(function(d){return d.type == model.uTypes[k]}))
              .enter().append("g")
                .attr("class", "tablerow")
                .attr("transform", function (d, i) {
                    return "translate(" + 0 + "," + (i * self.ROW_HEIGHT + tablerowOffset + self.HEADER_HIGHT) + ")";
                })
                .each(tablerow)
                .on("mouseover", function () {
                    this.lastChild.style.visibility = "visible";
                })
                .on("mouseout", function () {
                    this.lastChild.style.visibility = "hidden";
                });


            // add table separators for equipment categories
            var tableSeparator = tableSvg.selectAll(".table.sep." + model.uTypes[k])
                .data([model.uTypes[k]])
              .enter();

            tableSeparator.append("text")
                .attr("class", "table sep " + model.uTypes[k])
                .attr("x", 50)
                .attr("y", tablerowOffset+self.HEADER_HIGHT/2+5)
                .text(model.uTypes[k]);

            tableSeparator.append("line")
                .attr("class", "table sep " + model.uTypes[k])
                .attr("x1", 0)
                .attr("x2", 40)
                .attr("y1", tablerowOffset+this.ROW_HEIGHT)
                .attr("y2", tablerowOffset+this.ROW_HEIGHT);

            tableSeparator.append("line")
                .attr("class", "table sep " + model.uTypes[k])
                .attr("x1", 50 + model.uTypes[k].length*9)
                .attr("x2", self.COLUMN_X0[6])
                .attr("y1", tablerowOffset+this.ROW_HEIGHT)
                .attr("y2", tablerowOffset+this.ROW_HEIGHT);


            // this is what makes rows of different sections appear in different places
            tablerowOffset += model.data.filter(function(d){ return d.type == model.uTypes[k]}).length*self.ROW_HEIGHT + self.HEADER_HIGHT;

        }

    } // update()

}
