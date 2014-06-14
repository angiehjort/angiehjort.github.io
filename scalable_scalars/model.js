alarmsMockData = [
     {message: "Pressure high",	  				source: "EGF1245", codename: "AHHY01", timeline: [], staleAlarms: 1, priority: 1},
     {message: "Station not found",				source: "PC6013", codename: "O01", timeline: [], staleAlarms: 1, priority: 1},
     {message: "Motor lifetime near to end",	source: "PC6013", codename: "AHHY01", timeline: [], staleAlarms: 1, priority: 0},
     {message: "Missing Module",				source: "SDF1245", codename: "ALY01", timeline: [], staleAlarms: 1, priority: 0},
     {message: "Cable break",					source: "FC1021CO", codename: "ALY01", timeline: [], staleAlarms: 1, priority: 2},
     {message: "Temperature low",				source: "SDF1245", codename: "ALY01", timeline: [], staleAlarms: 1, priority: 0},
     {message: "Hard drive full",				source: "SSEG1245", codename: "AHHY01", timeline: [], staleAlarms: 1, priority: 1},
     {message: "IO system error: write to...",	source: "SDF1245", codename: "O245", timeline: [], staleAlarms: 1, priority: 0},
     {message: "historian error: disk is full",	source: "FC1021CO", codename: "AHHY01", timeline: [], staleAlarms: 1, priority: 0},
     {message: "Temperature low",				source: "SDF1245", codename: "ALY01", timeline: [], staleAlarms: 1, priority: 1},
     {message: "Volume exceeded",				source: "G_9055_3", codename: "AHHY01", timeline: [], staleAlarms: 1, priority: 2},
     {message: "Emergency valve open",			source: "SDF1245", codename: "E5", timeline: [], staleAlarms: 1, priority: 1},
     {message: "Flow reached critical level",	source: "AS1245", codename: "ALY01", timeline: [], staleAlarms: 1, priority: 0},
     {message: "Gas detected",					source: "PC6013", codename: "AHHY01", timeline: [], staleAlarms: 1, priority: 0},
     {message: "Power cable break",				source: "FC1021CO", codename: "ALY01", timeline: [], staleAlarms: 1, priority: 0},
     {message: "Pressure low",					source: "G_9055_3", codename: "AHHY01", timeline: [], staleAlarms: 1, priority: 0},
     {message: "Missing support module",		source: "QI6202NO", codename: "ALY01", timeline: [], staleAlarms: 1, priority: 2},
     {message: "Flow high",						source: "FC1021CO", codename: "AHHY01", timeline: [], staleAlarms: 1, priority: 1},
     {message: "Emergency valve open",			source: "SDF1245", codename: "ALY01", timeline: [], staleAlarms: 1, priority: 1},
     {message: "Flow reached critical level",	source: "PC6013", codename: "AHHY01", timeline: [], staleAlarms: 1, priority: 0},
     {message: "Gas detected",					source: "FC1021CO", codename: "ALY01", timeline: [], staleAlarms: 1, priority: 0},
     {message: "Power cable break",				source: "PC6013", codename: "AHHY01", timeline: [], staleAlarms: 1, priority: 0},
     {message: "Pressure low",					source: "FC1021CO", codename: "AHHY01", timeline: [], staleAlarms: 1, priority: 0},
     {message: "Missing support module",		source: "AF1245", codename: "AHHY01", timeline: [], staleAlarms: 1, priority: 2},
     {message: "Flow high",						source: "ASE1245", codename: "ALY01", timeline: [], staleAlarms: 1, priority: 1}
    ];

DATA_META = {
    number:           {name: "№",                   method: "",         units: ""},
    assetName:        {name: "Plant",               method: "",         units: ""}
}
SHARES_META = {
    priorityShares:   {name: "Priorities:",                method: "",         units: ""}
}
TIME_SERIES_META = {
    alarmRate:        {name: "Alarm rate over time", method: "colored by absolute average",        units: "/10min",
                       targetType: TARGET_LO_ISGOOD, target:1, maximum:20,
                       format: function(n){return (d3.round(n,2)==d3.round(n,0))?d3.round(n,0):d3.format(".2r")(n)},
                       colorStops: [1, 10, 20, 40, 60, 80]
                      },
    alarmsActive:     {name: "Alarms active",        method: "",        units: "1/10'", targetType: TARGET_LO_ISGOOD, target:1, maximum:10, format: d3.format(".3r")},
    timeOutsideTarget:     {name: "Time outside target ",        method: "",        units: "%", targetType: TARGET_LO_ISGOOD, target:1, maximum:10, format: d3.format(".3r")}
}
SCALAR_KPI_META = {
    alarmRateAvg:     {name: "Alarm rate",          nameShort: "Alarm rate",        id:"average_10min",    method: "Average",   methodShort: "Avg",     units: "/10min", targetType: TARGET_LO_ISGOOD, target:1, maximum:20, format: function(n){return (d3.round(n,2)==d3.round(n,0))?d3.round(n,0):d3.format(".2r")(n)}},//20
    alarmRatePeak:    {name: "Alarm rate",          nameShort: "rate",        id:"peak_10min_1",     method: "Peak",      methodShort: "Peak",    units: "/10min", targetType: TARGET_LO_ISGOOD, target:10, maximum:200, format: function(n){return (d3.round(n,2)==d3.round(n,0))?d3.round(n,0):d3.format(".2r")(n)}},//500
    timeToAck:        {name: "Time to acknowledge", nameShort: "Time to ackn",      id:"timetoacknow",     method: "Average",   methodShort: "Avg",     units: "min",   targetType: TARGET_LO_ISGOOD, target:3, maximum:20, format: function(n){return (n*60<1)?"0":minutesToMMSS(n)}},//60
    timeAlarmActive:  {name: "Time alm active",     nameShort: "Time active",       id:"",                 method: "Average",   methodShort: "Avg",     units: "h",     targetType: TARGET_LO_ISGOOD, target:1, maximum:10, format: d3.format(".3g")},
    timeInFlood:      {name: "Time in flood",       nameShort: "Time in flood",     id:"flood_10min_50",   method: "",          methodShort: "",        units: "%",     targetType: TARGET_LO_ISGOOD, target:1, maximum:10, format: function(n){return (d3.round(n,2)==d3.round(n,0))?d3.round(n,0):d3.format(".2r")(n)}},//10
    staleAlarms:      {name: "Standing alarms",     nameShort: "Standing alarms",   id:"staleall",         method: "Number of", methodShort: "",        units: "total",     targetType: TARGET_LO_ISGOOD, target:5, maximum:50, format: function(n){return (d3.round(n,2)==d3.round(n,0))?d3.round(n,0):d3.format(".2r")(n)}},//50
    staleAlarmsOldest:{name: "Standing alarm",      nameShort: "",    id:"staleoldest",      method: "Longest",   methodShort: "Longest", units: "months",  targetType: TARGET_LO_ISGOOD, target:1, maximum:12, format: function(n){return (d3.round(n,2)==d3.round(n,0))?d3.round(n,0):d3.format(".2r")(n)}},//24
    trainingsPassed:  {name: "Training passed",     nameShort: "Training passed",   id:"",                 method: "total",     methodShort: "",        units: "",      targetType: TARGET_HI_ISGOOD, target:0, maximum:1, format: d3.format(".3g")},
    improvements:     {name: "Improvements",        nameShort: "Improves",          id:"",                 method: "total",     methodShort: "",        units: "",      targetType: TARGET_HI_ISGOOD, target:0, maximum:1, format: d3.format(".3g")},
    empty:            {name: "",                    nameShort: "",                  id:"",                 method: "",          methodShort: "",        units: "",      targetType: TARGET_LO_ISGOOD, target:0, maximum:1, format: d3.format(".3g")}
}
function ScalarKpiSet() {
    this.alarmRateAvg = 0;
    this.alarmRatePeak = 0;
    this.timeToAck = 0;
    //this.timeAlarmActive = 0;
    this.timeInFlood = 0;
    this.staleAlarms = 0;
    this.staleAlarmsOldest = 0;
}
function TimeSeriesSet() {
    this.alarmRate=[];
    this.alarmsActive=[];
}
function PrioritiesSet() {
    //not used
}


// -----------------------
// DATA MODEL CLASS
// -----------------------

function DataModel(dataPath) {
    var self = this;

    //this.scalarKpiTargets = new ScalarKpiSet();
    //this.scalarKpiMaxValues = new ScalarKpiSet();
    this.scalarKpiNumber = 6;

    this.N_PLANTS = 100;
    this.readyCount = [{prios: 0, scalarKpi: 0, timeSeries: 0},{prios: 0, scalarKpi: 0, timeSeries: 0}];

    // an array of plant objects
    this.plants = {};
    this.assetIDs = [];
    this.assetSelectedIDs = [];







// ****************************************
// SETTERS - modify data in the model
// ****************************************


    this.updateAssetList = function(){
        app.hey(HEY_GETTING_ASSET_LIST);
        var callTimestamp = moment([1970,1,1]).valueOf();
        var callID = Math.round(Math.random()*100);

        call.request(callTimestamp, callID, null, null, null,
            function(target, timeFrame, data){
                // throw away the plants that don't have alarm management functionality
                data = data.filter(function(d){return d.activeApplications.filter(function(a){return a.id==2}).length>0 });

                dataModel.N_PLANTS = data.length;

                for(n = 0; n<dataModel.N_PLANTS; n++){
                    d=data[n];

                    // JD Angie, I did not fully understand the assetID mapping, please review this:
                    dataModel.assetIDs.push(d.id+"");
                    //dataModel.assetIDs[n] = d.id;

                    //dataModel.plants[self.assetIDs[d.id+""]] = {
                    dataModel.plants[d.id+""] = {
                        name: d.name,
                        manager: d.manager,
                        address: d.address,
                        latitude: d.latitude,
                        longitude: d.longitude,
                        owner: d.owner,
                        hidingRuleJobs: [],
                        TT: [
                            {prios: Array.apply(null, new Array(ALARM_PRIORITY_LEVELS)).map(Number.prototype.valueOf, 0),
                             scalarKpi: new ScalarKpiSet(),
                             timeSeries: new TimeSeriesSet(),
                             events: {} },
                            {prios: Array.apply(null, new Array(ALARM_PRIORITY_LEVELS)).map(Number.prototype.valueOf, 0),
                             scalarKpi: new ScalarKpiSet(),
                             timeSeries: new TimeSeriesSet(),
                             events: {} }
                            ]
                    };
                } // n in N_PLANTS

                dataModel.assetIDs = dataModel.assetIDs.sort(function(a,b){return +a - +b});

                // move plant 8 (Ladenburg to the last place)
                if (dataModel.assetIDs.indexOf("8") != -1){
                //    dataModel.assetIDs.push( dataModel.assetIDs.splice(dataModel.assetIDs.indexOf("8"),1)[0] );
                }

                // initialize selection
                dataModel.assetSelectedIDs = dataModel.assetIDs;
                app.hey(HEY_ASSETS_READY);
            },
            function(target, timeFrame){
                for(n = 0; n<dataModel.N_PLANTS; n++){
                    dataModel.assetIDs.push(1+n);

                    dataModel.plants[self.assetIDs[n]] = {
                        name: "asset"+(1+n),
                        manager: {"id":10,
                                "name":"Angie Skazka",
                                "email":"konzeptmeister@gmail.com",
                                "phone":"+46 768-326-452"
                                 },
                        address:"\"Forskargränd 1,\n72226 Västerås,\nSwweden\"",
                        latitude: 0,
                        longitude: 0,
                        owner: {id:1,name:"ABB"},
                        hidingRuleJobs: [],
                        TT: [
                            {prios: Array.apply(null, new Array(ALARM_PRIORITY_LEVELS)).map(Number.prototype.valueOf, 0),
                             scalarKpi: new ScalarKpiSet(),
                             timeSeries: new TimeSeriesSet(),
                             events: {}},
                            {prios: Array.apply(null, new Array(ALARM_PRIORITY_LEVELS)).map(Number.prototype.valueOf, 0),
                             scalarKpi: new ScalarKpiSet(),
                             timeSeries: new TimeSeriesSet(),
                             events: {}}
                            ]
                    };
                } // n in N_PLANTS

                // initialize selection
                dataModel.assetSelectedIDs = dataModel.assetIDs;
                app.hey(HEY_ASSETS_READY);

            }, call.METHOD_GET, call.URL_ASSET_LIST);
    }





    this.updateAlarmTable = function(target, timeFrame, callID){
        if (target==null)target=self.assetSelectedIDs;
        if (timeFrame==null)timeFrame = 0;
        //if (callID == null)callID = Math.round(Math.random()*10000);

        //dataModel.readyCount[timeFrame] = {prios: 0, scalarKpi: 0, timeSeries: 0};
        //var callTimestamp = moment().valueOf();

        for (t in target){
            var me = dataModel.plants[dataModel.assetIDs[t]].TT[timeFrame];
            me.events = {};

            for (i in alarmsMockData){
                var alarmID = "6be1656c-" + Math.round(Math.random()*10000);
                me.events[alarmID] = {};
                me.events[alarmID].message = alarmsMockData[i].message;
                me.events[alarmID].source = alarmsMockData[i].source;
                me.events[alarmID].codename = alarmsMockData[i].codename;
                me.events[alarmID].priority = alarmsMockData[i].priority;
                me.events[alarmID].timeline = [];

                for(k=0; k<Math.round(Math.random()*100); k++){
                    var timestamp = Math.round(Math.random()*(appModel.TT[timeFrame].tEnd - appModel.TT[timeFrame].tStart));
                    me.events[alarmID].timeline.push([appModel.TT[timeFrame].tStart + timestamp, EVENT_ACTIVATION]);
                }
                for(k=0; k<Math.round(Math.random()*100); k++){
                    var timestamp = Math.round(Math.random()*(appModel.TT[timeFrame].tEnd - appModel.TT[timeFrame].tStart));
                    me.events[alarmID].timeline.push([appModel.TT[timeFrame].tStart + timestamp, EVENT_BACKTONORM]);
                }
                for(k=0; k<Math.round(Math.random()*100); k++){
                    var timestamp = Math.round(Math.random()*(appModel.TT[timeFrame].tEnd - appModel.TT[timeFrame].tStart));
                    me.events[alarmID].timeline.push([appModel.TT[timeFrame].tStart + timestamp, EVENT_ACKNOWLEDG]);
                }

                me.events[alarmID].timeline.sort();

            }
        }
    }








    this.updateAllKpis = function(target, timeFrame, callID){
        if (target==null)target=self.assetSelectedIDs;
        if (timeFrame==null)timeFrame = 0;
        if (callID == null)callID = Math.round(Math.random()*10000);

        dataModel.readyCount[timeFrame] = {prios: 0, scalarKpi: 0, timeSeries: 0};
        var callTimestamp = moment().valueOf();
        // we want as many values as many pixels we have on the screen to display time series
        var timeSeriesSamples = (appModel.historyHidden?window.innerWidth/2:window.innerWidth/4)*TIME_SERIES_RESOLUTION;

        for (t in target){
            var p = target[t];

            var params = {};
            params.cache_time = 0;
            params.start_absolute = appModel.TT[timeFrame].tStart.valueOf();
            params.end_absolute = appModel.TT[timeFrame].tEnd.valueOf();
            params.metrics=[];
                for (i=1; i<ALARM_PRIORITY_LEVELS+1; i++) {
                    params.metrics.push({"tags": {"severity": [i+""]},"name": "plant-"+p+"_priority"});
                }
                params.metrics.push({"tags": {},"name": "plant-"+p+"_average_10min",
                    aggregators: [{name: "avg", align_sampling: true, sampling: timeSeriesSampling(appModel.TTStep, timeSeriesSamples)}]
                                    });

                for(k in dataModel.plants[dataModel.assetIDs[t]].TT[timeFrame].scalarKpi){
                    params.metrics.push({"tags": {},"name": "plant-"+p+"_"+SCALAR_KPI_META[k].id,
                        aggregators: [{name: "avg", align_sampling: true, sampling: {value: "24", unit: "hours"}}]
                                    });
                }


            call.request(callTimestamp, callID, params, t, timeFrame,
                function(target, timeFrame, data){
                    var me = dataModel.plants[dataModel.assetIDs[target]].TT[timeFrame];
                    var i = 0;

                    // ----------- priorities -------------
                    for (i=0; i<ALARM_PRIORITY_LEVELS; i++) {
                    me.prios[i] = d3.sum(data.queries[i].results[0].values.map(function(d){return d[1]}))
                    }
                    dataModel.readyCount[timeFrame].prios++;


                    // ----------- time series -------------
                    if (data.queries[i].results[0].values.length==0){
                        me.timeSeries.alarmRate = [];
                        var tStart = appModel.TT[timeFrame].tStart.valueOf();
                        var tEnd = appModel.TT[timeFrame].tEnd.valueOf();
                        for (k=1; k<timeSeriesSamples; k++)me.timeSeries.alarmRate.push([tStart+k*(tEnd-tStart)/timeSeriesSamples,0]);
                    }else{
                        me.timeSeries.alarmRate = data.queries[i].results[0].values;
                    }
                    i++;
                    dataModel.readyCount[timeFrame].timeSeries++;


                    // ----------- scalars -------------
                    for(k in me.scalarKpi){
                    if (data.queries[i].results[0].values.length==0  ){
                        me.scalarKpi[k] = 0;
                    }else{
                        me.scalarKpi[k] = d3.mean(data.queries[i].results[0].values.map(function(d){return d[1]}) );
                        // time to acknowledge comes in seconds. convert to minutes
                        if(k == "timeToAck") {me.scalarKpi[k] /= 60;}
                        //if (me.scalarKpi[k]>SCALAR_KPI_META[k].maximum) SCALAR_KPI_META[k].maximum = me.scalarKpi[k];
                    }
                    i++;
                    }
                    dataModel.readyCount[timeFrame].scalarKpi++;
                },
                function(target, timeFrame){
                    var me = dataModel.plants[dataModel.assetIDs[target]].TT[timeFrame];


                    // ----------- priorities -------------
                    for (i=0; i<ALARM_PRIORITY_LEVELS; i++) me.prios[i] = Math.round(Math.random()*100);
                    dataModel.readyCount[timeFrame].prios++;


                    // ----------- time series -------------
                    me.timeSeries.alarmRate = [];
                    var tStart = appModel.TT[timeFrame].tStart.valueOf();
                    var tEnd = appModel.TT[timeFrame].tEnd.valueOf();
                    var ran = Math.pow(Math.random()*1.1,4);
                    var offset = Math.random()*0.2;
                    var baseline = Math.random()*10 + 10;
                    for (k=1; k<timeSeriesSamples; k++)me.timeSeries.alarmRate.push([tStart+k*(tEnd-tStart)/timeSeriesSamples,
                        Math.pow(2,Math.random()*5)*(Math.random()>0.991?1:0)*ran*20+Math.random()*10 +baseline+ (offset-0.1)*k]);
                    dataModel.readyCount[timeFrame].timeSeries++;


                    // ----------- scalars -------------
                    for(k in me.scalarKpi){
                        if (k == "alarmRateAvg"){
                            me.scalarKpi[k] = d3.mean( me.timeSeries.alarmRate.map(function(d){return d[1]} )  );
                        }else if(k == "alarmRatePeak"){
                            me.scalarKpi[k] = d3.max( me.timeSeries.alarmRate.map(function(d){return d[1]} )  );
                        }else{
                            me.scalarKpi[k] = Math.random()*SCALAR_KPI_META[k].maximum*1.1;
                        }
                        //if (me.scalarKpi[k]>SCALAR_KPI_META[k].maximum) SCALAR_KPI_META[k].maximum = me.scalarKpi[k];
                    }
                    dataModel.readyCount[timeFrame].scalarKpi++;
                }
             );
        }
    }




// ****************************************
// GETTERS - retreive data from the model
// ****************************************

    // Alarm rate time series
    this.getTimeSeries = function(target, timeFrame){
        if (target==null)target=self.assetSelectedIDs[0];
        if (timeFrame==null)timeFrame = 0;


        if (target instanceof Array){
            var result = [];
            for (t in target)result.push(self.plants[target[t]].TT[timeFrame].timeSeries.alarmRate);
            return result;
        }else{
            return self.plants[target].TT[timeFrame].timeSeries.alarmRate;
        }
    }


    // Alarm priorities
    this.getAlarmPriorities = function(target, timeFrame){
        if (target==null)target=self.assetSelectedIDs;
        if (timeFrame==null)timeFrame = 0;

        if (target instanceof Array){
            var result = [];
            for (t in target)result.push(self.plants[target[t]].TT[timeFrame].prios);
            return result;
        }else{
            return self.plants[target].TT[timeFrame].prios;
        }
    }


    // Scalar KPIs
    this.getScalarKpi = function(target, timeFrame){
        if (target==null)target=self.assetSelectedIDs;
        if (timeFrame==null)timeFrame = 0;

        if (target instanceof Array){
            var result = [];
            for (t in target)result.push(self.plants[target[t]].TT[timeFrame].scalarKpi);
            return result;
        }else{
            return self.plants[target].TT[timeFrame].scalarKpi;
        }
    }

    // AlarmTable
    this.getAlarmTable = function(target, timeFrame){
        if (target==null)target=self.assetSelectedIDs;
        if (timeFrame==null)timeFrame = 0;

        if (target instanceof Array){
            var result = [];
            for (t in target)result.push(self.plants[target[t]].TT[timeFrame].events);
            return result;
        }else{
            return self.plants[target].TT[timeFrame].events;
        }
    }

}// DataModel class





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

// -----------------------
// APPLICATION MODEL CLASS
// -----------------------
function AppModel() {
    var self = this;
    this.TIMEFRAME_STEP_LEFT = 'left';
    this.TIMEFRAME_STEP_RIGHT = 'right';

    this.TIMEFRAME_STEP_DAY = 'days';
    this.TIMEFRAME_STEP_WEEK = 'weeks';
    this.TIMEFRAME_STEP_MONTH = 'months';
    this.TIMEFRAME_STEP_YEAR = 'years';

    this.BINSIZE_TENMIN = 'tenmin';
    this.BINSIZE_HOUR = 'hour';
    this.BINSIZE_DAY = 'day';
    this.BINSIZE_WEEK = 'week';

    this.TIME_INIT = moment([2008, 7, 1]);

    this.oneplantDisplayed = null;
    this.historyHidden = true;

    this.margin = { top: 10, right: 60, bottom: 0, left: 20  };

    this.updateDimensions=function(){
        self.width = window.innerWidth - self.margin.left - self.margin.right;
        self.height = window.innerHeight - self.margin.top - self.margin.bottom;
    }
    this.updateDimensions();

    this.TTStep = d3.select("#selectorTimeframe .selected").attr("value");
    this.binSize = d3.select("#selectorBinsize .selected").attr("value");

    this.TT = [{tStart: moment(this.TIME_INIT), tEnd: moment(this.TIME_INIT).add(self.TTStep, 1)},
               {tStart: moment(this.TIME_INIT), tEnd: moment(this.TIME_INIT).add(self.TTStep, 1)}];


    this.setTTLeftRight = function(index, way){

        var step = (way==self.TIMEFRAME_STEP_LEFT)?-1:+1;
        self.TT[index].tStart.add(self.TTStep, step);
        self.TT[index].tEnd.add(self.TTStep, step);

        app.hey(HEY_TIME_CHANGED, index);
    }


    this.setTTStep = function(step){
        self.TTStep=step;

        for (i in self.TT){
        self.TT[i].tEnd=moment(self.TT[i].tStart).add(self.TTStep, 1);
        }

        var callID = Math.round(Math.random()*10000);
        app.hey(HEY_TIME_CHANGED, 0, callID);
        if (!self.historyHidden)app.hey(HEY_TIME_CHANGED, 1, callID);
    }


} // application model class
