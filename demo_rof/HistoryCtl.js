// ------------------------------
// HISTORY CONTROLS [7 days] [4 weeks] [3 months] [1 year]
// ------------------------------
// this function creates controls for switching between history levels
// and appends it to the specified container
// when the control is clicked, clickCallback function is executed,
// but the ROF history recalculated based on the control which is clicked

function HistoryCtl(container, clickCallback) {
    var self = this;

    // define the controls: label, number of intervals, length of one interval
    this.options = [{label: "[7 days] ",  n:7, ia:"days"},
                    {label: "[4 weeks]",  n:4, ia:"weeks"},
                    {label: "[3 months]", n:3, ia:"months"},
                    {label: "[1 year]",   n:1, ia:"years"}]


    var lettersSoFar = 0;
    container.selectAll(".historyCtrl.options")
            .data(self.options)
          .enter().append("text")
            .text(function(d,i){return d.label})
            .attr("class", function(d,i){return i==0?"historyCtrl options active":"historyCtrl options"})
            .attr("y", 0)
            .attr("x", function(d,i){

                //get the fontsize of the label from CSS
                var fontsize = d3.select(this).style("font-size").substring(0,d3.select(this).style("font-size").length-2);

                //shift labels according to the fontsize and accumulated number of letters
                h_=lettersSoFar;  lettersSoFar+=d.ia.length; return h_*fontsize

                })

            //attach listeners
            .on("click", function (d) {

                // remove active state of all history controllers, add active state to a clicked one
                d3.selectAll(".historyCtrl.options").each(function(){this.classList.remove("active")});
                this.classList.add("active");

                //history recalculated based on the control which is clicked
                model.historyPoints(d.n, d.ia);

                //callback executed, this is something like update part of the view that shows history
                clickCallback();
            })
            .on("mouseover", function () {

                // highlight the controls that are not active
                if (!this.classList.contains("active")) this.classList.add("mouseover");
            })
            .on("mouseout", function () {

                // unhighlight
                this.classList.remove("mouseover");
            });


}
