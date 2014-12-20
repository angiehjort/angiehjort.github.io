// Check if array contains the instance
// helper function for unique element search
arrayContains = function(v, array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] === v) return true;
    }
    return false;
};

// Return unique elements of the array
arrayUnique = function(array) {
    var arr = [];
    for(var i = 0; i < array.length; i++) {
        if(!arrayContains(array[i], arr)) {
            arr.push(array[i]);
        }
    }
    return arr;
}

// return the input string with first letter Uppercased
function uppercaseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

String.prototype.unpixel = function(){return this.substr(0,this.length-2)};
String.prototype.fingerprint = function(){var result=0; for(var i=0; i<this.length; i++){result += this.charCodeAt(i)}; return result;};


arraySortingIndeces = function(toSort) {
    var i = toSort.length;
    var temp = [];

    //save current indeces in property k
    while (i--) temp[i] = { k: i, v: toSort[i] };
    temp.sort(function (a, b) {return +a.v - +b.v});

    return temp.map(function(d){return d.k});
}



function quartiles(data) {
    return {
        q25: d3.quantile(data, .25),
        q75: d3.quantile(data, .75),
        q10: d3.quantile(data, .10),
        q90: d3.quantile(data, .90)
    };
}



var timeSeriesSampling = function(step, samples){
    if (samples==null) var samples = 500;
    switch (step){
        case 'days': return {value: Math.round(86400000/samples)+"", unit: "milliseconds"};
        case 'weeks': return {value: Math.round(86400000*7/samples)+"", unit: "milliseconds"};
        case 'months': return {value: Math.round(86400000*31/samples)+"", unit: "milliseconds"};
        case 'years': return {value: Math.round(86400000*365/samples)+"", unit: "milliseconds"};
        default: return {value: "1", unit: "hours"};
    }
}




// get the closest element from array
function getIndexOfNearest(num, ar)
{
    var i = 0, closest, closestDiff, currentDiff;
    if(ar.length)
    {
        closest = ar[0];
        for(i;i<ar.length;i++)
        {
            closestDiff = Math.abs(num - closest);
            currentDiff = Math.abs(num - ar[i]);
            if(currentDiff < closestDiff)
            {
                closest = ar[i];
            }
            closestDiff = null;
            currentDiff = null;
        }
        //returns first element that is closest to number
        return closest;
    }
    //no length
    return false;
}




minutesToMMSS = function(n){
return (n>=60? Math.floor(n/60)+":" : "")  // hours if needed
+ d3.format("0"+(n>=60?2:1)+"d")(Math.floor(n%60)) // minutes with padding
+ ":"
+ d3.format("02d")(Math.floor((n-Math.floor(n))*60));  //seconds with padding
}


//jQuery.fn.mouseIsOver = function () {
//    return $(this).parent().find($(this).selector + ":hover").length > 0;
//};


// a simple linear array interpolator.
// needed to get the history points of any step, given only some historty points
//
// returns the value of the function Yo(Xo) given the function Y(X)
// option clamp assigns Y_first or Y_last to all Yo(Xo) out of the range
// otherwise the linear extrapolation is performed
//
// arrays must be sorted before
function linterpolateArray(x,y,x0,clamp){
var xend = x.length-1;
var n;

    if (x0<x[0]) {
            n=1;
        if (clamp) return y[0];
    }else if (x[xend]<x0) {
            n = xend;
        if (clamp) return y[xend];
    }else{
        for (i=0; i<xend; i++){
        if (x[i]<=x0 && x0<=x[i+1]){
            n=i+1; break;
        }
        }
    }

return y[n-1]+(y[n]-y[n-1])*(x0-x[n-1])/(x[n]-x[n-1]);
}


    this.alarmRateAvg = 0;
    this.alarmRatePeak = 0;
    this.timeToAck = 0;
    this.timeAlarmActive = 0;
    this.timeInFlood = 0;
    this.staleAlarms = 0;
    this.staleAlarmsOldest = 0;
    this.trainingsPassed = 0;
    this.improvements = 0;

// -----------------------
// SEMANTIC NAMES: return meaningful labels for data variables
// -----------------------
function humanize(refName) {
    switch (refName) {
    case "rfailure":
        return "Risk of failure";
        break;
    case "age":
        return "Age beard";
        break;
    default:
        return uppercaseFirstLetter(refName);
    }
}


// lazy hack for logging things
function log(d) {console.log(d)}


