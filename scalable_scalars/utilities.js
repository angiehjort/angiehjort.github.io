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



minutesToMMSS = function(n){
return (n>=60? Math.floor(n/60)+":" : "")  // hours if needed
+ d3.format("0"+(n>=60?2:1)+"d")(Math.floor(n%60)) // minutes with padding
+ ":"
+ d3.format("02d")(Math.floor((n-Math.floor(n))*60));  //seconds with padding
}



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


