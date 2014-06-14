// -----------------------
// SEMANTIC NAMES: return meaningful labels for data variables
// -----------------------
function columnSemanticNames(refName) {
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

// -----------------------
// DATA MODEL CLASS
// -----------------------
function DataModel(dataUrl) {
    var self = this;
    this.data = null;
    this.uCustomers = [];
    this.uTypes = [];
    this.latestDate = 0;

    // Get the data from specified URL. Code has to run on a web-server
    d3.tsv(dataUrl, function (error, data) {

        // for every data row
        data.forEach(function (d) {

            // ensure that the following data columns are numerical, not string
            d.importance = +d.importance / NORM_IMPORTANCE_MAX;
            d.voltage = +d.voltage;
            d.age = +d.age;

            d.rfailure = [];

            // parse data, search for history values and save them to an array
            for ( property in d) {
                if(property.substring(0,3)=="rof"){
                    d.rfailure.push({date: parseDate(property.substring(3,11)), rof: d[property]/NORM_RFAILURE_MAX});
                    delete d[property];
                }
            }

            // sort the rfailure history by dates
            // save the latest ROF separately for easier access
            d.rfailure.sort(function (a,b){return a.date - b.date;});
            d.latestRof = d.rfailure[d.rfailure.length-1].rof;

            // save latest date as a common property for all data
            self.latestDate = d.rfailure[d.rfailure.length-1].date;


        });

        // find unique lists of customers and devices
        self.uCustomers = data.map(function(d){return d.customer;}).unique();
        self.uTypes = data.map(function(d){return d.type;}).unique();

        // link model.data to the one just processed
        // alternatively you can set the current system date in case of a real implementation
        self.data = data;

        // communicate that the data is ready to the app
        app.setDataReady(true);

    });


    // DATA MODEL RECALCULATION OF HISTORY POINTS BASED ON DATA
    this.historyPoints = function(nPoints, interval){
        // set the origin - the point of "now"
        var origin = self.latestDate; // new Date(); uncomment to set the system date
        var historyDates = [];

        for(i = 0; i<nPoints; i++){

            historyDates.push(new Date(origin.getTime()));

            // get the timestamp of the history points of interest
            switch (interval){
                case "days":   historyDates[i].setDate(historyDates[i].getDate()-(i+1)); break;
                case "weeks":  historyDates[i].setDate(historyDates[i].getDate()-(i+1)*7);  break;
                case "months": historyDates[i].setDate(historyDates[i].getDate()-(i+1)*30);  break;
                case "years":  historyDates[i].setDate(historyDates[i].getDate()-(i+1)*365);  break;
                    default: historyDates[i].setDate(historyDates[i].getDate()-(i+1));
            }

        }

        // interpolate the intereting data
        self.data.forEach(function(d){

            d.rfailureH = [];

            historyDates.forEach(function(hdate){

                d.rfailureH.push({date: hdate, rof:
                linterpolateArray(d.rfailure.map(function(p){return p.date;}),
                                  d.rfailure.map(function(p){return p.rof;}),hdate,true)
                                 });
            });
        });

        return historyDates;
    }


}




// -----------------------
// APPLICATION MODEL CLASS
// -----------------------
function AppModel() {
    var self = this;

    this.MARGIN = { top: 30, right: window.innerWidth*0.05, bottom: window.innerHeight*0.05, left: window.innerWidth*0.05  };
    this.WIDTH = window.innerWidth - this.MARGIN.left - this.MARGIN.right,
    this.HEIGHT = window.innerHeight - this.MARGIN.top - this.MARGIN.bottom;

    this.VIEWBOX_WIDTH = window.innerWidth;

    this.dataReady = false;

    this.isDataReady = function(){ return self.dataReady; }

    this.setDataReady = function(b){
        self.dataReady = b;

        init();
    }
}
