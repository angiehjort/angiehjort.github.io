// -----------------------
// GLOBAL CONSTANTS
// -----------------------
//var NORM_RFAILURE_MAX = 100;
//var NORM_IMPORTANCE_MAX = 100;

// scale convertors
//var voltageScale = d3.scale.threshold([1, 10, 100]).domain([1, 10, 100]).range(["Low","Medium","High","Extra high"]);
//var voltageToSize =d3.scale.threshold([1, 10, 100]).domain([1, 10, 100]).range([5.477,7.746,9.486,10.954]);

// colormaps
//var rofColorScaleHeavy = d3.scale.linear().domain([0, 1]).range(["#7ccc0e", "#f58705"]);
//var rofColorScaleLight = d3.scale.linear().domain([0, 1]).range(["#d3e8b5", "#fad3a6"]);
var colormapPriorities = d3.scale.ordinal()
            //.range(["#feb24c", "#fd8d3c", "#f03b20"]);
            //.range(["#99d594", "#fee08b", "#fc8d59"]);
              .range(["#35978f", "#dfc27d", "#bf812d"]); //#bf812d

var colormapGradient = d3.scale.linear()
              .range([
                        //"#629d98",// "#35978f",
                        //"#9cc4be",// "#80cdc1",
                        "#cec09e",// "#dfc27d",
                        "#b48f5d",// "#bf812d",
                        "#7e582a",// "#8c510a",
                        "#8b2500",// "#543005"
                        "#5d0000",// "#543005"
                        "#2c0000",// "#543005"
                                    ]);

// formatters
//var parseDate = d3.time.format("%Y-%m-%d").parse;
//var formatValueRof = d3.format(",.0f");
//var formatValueVolt = d3.format(",.0f");
var TIME_SERIES_RESOLUTION = 0.5; //data points per graphic pixel

var EVENT_ACTIVATION = 0;
var EVENT_BACKTONORM = 1;
var EVENT_ACKNOWLEDG = 2;

var OVERVIEW_DASHBOARD_TITLE = "Alarm Management Dashboard"
var ALARM_PRIORITY_LEVELS = 3;

var ASSET_ID = "assetID";
var TARGET_LO_ISGOOD = "low is good";
var TARGET_HI_ISGOOD = "high is good";


var HEY_GETTING_ASSET_LIST = 'getting assets list';
var HEY_ASSETS_READY = 'assets ready';
var HEY_PARSING_DATA = 'parsing data';
var HEY_DATA_LOADED = 'data loaded';
var HEY_VIEW_UPDATED = 'view updated';
var HEY_DATA_RECEIVED = 'received data';
var HEY_DATA_FAILED = 'failed to receive data';
var HEY_TIME_CHANGED = 'time changed';
var HEY_SHOWME_THEPLANT = 'going to one plant view';

var HEY_NO_ASSET_SELECTED = 'no asset selected';
