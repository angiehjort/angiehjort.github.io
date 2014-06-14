// -----------------------
// GLOBAL CONSTANTS
// -----------------------
var NORM_RFAILURE_MAX = 100;
var NORM_IMPORTANCE_MAX = 100;

// scale convertors
var voltageScale = d3.scale.threshold([1, 10, 100]).domain([1, 10, 100]).range(["Low","Medium","High","Extra high"]);
var voltageToSize =d3.scale.threshold([1, 10, 100]).domain([1, 10, 100]).range([5.477,7.746,9.486,10.954]);

// colormaps
var rofColorScaleHeavy = d3.scale.linear().domain([0, 1]).range(["#7ccc0e", "#f58705"]);
var rofColorScaleLight = d3.scale.linear().domain([0, 1]).range(["#d3e8b5", "#fad3a6"]);
var rofReasonsColor = d3.scale.ordinal()
            .range(["#00b7a8", "#cbb300", "#8703e2", "#00cc27", "#c71200", "#003cc3", "#696969"]);

// formatters
var parseDate = d3.time.format("%Y%m%d").parse;
var formatValueRof = d3.format(",.0f");
var formatValueVolt = d3.format(",.0f");
