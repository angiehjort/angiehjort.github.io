// Check if array contains the instance
// helper function for unique element search
Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

// Return unique elements of the array
Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

// return the input string with first letter Uppercased
function uppercaseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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





// lazy hack for logging things
function log(d) {console.log(d)}
