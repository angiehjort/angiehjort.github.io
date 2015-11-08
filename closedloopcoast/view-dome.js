var degToRad = function(a){return a/180*Math.PI}
var processData = function(x){
    x = +x/10;
    return d3.format(".1f")(x>100? 0 : x);
};

var channels = [{id: "1", a: 45, r: 0.6}, {id: "2", a: 135, r: 0.6}, {id: "3", a: 217, r: 0.51}, {id: "4", a: 315, r: 0.6}];


var dome = {
    
    init: function(placeholder){
        var _this = this;
        
        this.svg = d3.select(placeholder).append("svg");
        var domeGroup = this.svg.append("g");
        domeGroup.append("circle").attr("class", "dome-shell");
        domeGroup.append("circle").attr("class", "dome-reactor");
        var measurePoints = domeGroup.selectAll("g.dome-measurepoint")
            .data(channels)
            .enter().append("g")
            .attr("class", "dome-measurepoint");
        
        measurePoints.append("circle");
        measurePoints.append("text");
        measurePoints.append("path").attr("class", "sparkline-shade");
        measurePoints.append("path").attr("class", "sparkline");
        //measurePoints.append("circle").attr("class", "sparklinetip");
        
        
        this.sayDome = domeGroup.append("text")
            .attr("class", "dome-legend")
            .text("dome");
        
        this.sayReactor = domeGroup.append("text")
            .attr("class", "dome-legend")
            .text("biogas reactor");
        
        this.xScale = d3.scale.linear();
        this.yScale = d3.scale.linear();
        
        this.sparkline = d3.svg.line()
            .interpolate("basis")
            .x(function(d) { return _this.xScale(d.t); })
            .y(function(d) { return _this.yScale(d.v); });
    },
        

    
    resize: function(width, height){
        this.svg
            .attr("width", width)
            .attr("height", height);
        
        var domeRadius = Math.min(width, height) / 2 * 0.8;
        
        this.svg.select("g")
            .attr("transform", "translate("+width/2+","+height/2+")");
        
        this.svg.select("g").select("circle.dome-shell")
            .attr("r", domeRadius);
        
        this.svg.select("g").select("circle.dome-reactor")
            .attr("cx", -domeRadius * 0.3)
            .attr("cy", -domeRadius * 0.3)
            .attr("r", domeRadius * 0.25);
        
        this.svg.select("g").selectAll("g.dome-measurepoint")
            .attr("transform", function(d){return "translate(" + 
                  Math.sin(degToRad(d.a)) * d.r * domeRadius 
                  + "," +
                  Math.cos(degToRad(d.a)) * d.r * domeRadius                  
                  +")";})
        
        this.svg.select("g").selectAll("g.dome-measurepoint circle")
            .attr("r", domeRadius * 0.04);
        
        this.svg.select("g").selectAll("g.dome-measurepoint text")
            .style("font-size", (domeRadius * 0.10) + "px")
            .attr("y", "1.5em");
        
        this.sayReactor
            .attr("x", -domeRadius * 0.3)
            .attr("y", -domeRadius * (0.3 + 0.25 ))
        
        this.sayDome.attr("y", -domeRadius)
        
        this.svg.selectAll(".dome-legend")
            .attr("dy", "-0.5em")
            .style("font-size", domeRadius * 0.05 + "px")
        
        
        
        this.svg.selectAll(".sparkline-shade")
            .attr("stroke-width", domeRadius * 0.01 *2);
        
        this.svg.selectAll(".sparkline")
            .attr("stroke-width", domeRadius * 0.01);
        
        this.svg.selectAll(".sparklinetip")
            .attr("cx", -domeRadius * 0.02)
            .attr("r", domeRadius * 0.02);
        
        d3.select("#title").style("font-size", domeRadius * 0.15 + "px");
        d3.select("#container").style("font-size", domeRadius * 0.05 + "px");
        d3.select("#subtitle").style("font-size", domeRadius * 0.1 + "px");
        
        this.update();
    },
    
    update: function(data){
        var _this = this;
        
        if(!data) data = this.cache;
        if(!data) return;
        this.cache = data;
                
        var firstMeasure = data[0];
        
        this.svg.select("g").selectAll("g.dome-measurepoint")
            .each(function(d){
                var view = d3.select(this);
            
                view.select("text")
                    .text(processData(firstMeasure[d.id]) + "°C");
                
                var channelData = data.map(function(m){return {t: m["_id"], "v": m[d.id]};});
            
                _this.xScale.domain(d3.extent(channelData.map(function(m){return m.t})))
                _this.yScale.domain(d3.extent(channelData.map(function(m){return m.v})));
            
                var textbbox = view.select("text").node().getBBox();
            
                var yShift = textbbox.height * 1.3;
            
                _this.xScale.range([-textbbox.width/2, textbbox.width/2]);
                _this.yScale.range([yShift + textbbox.height / 4, yShift]);
            
                view.selectAll("path")
                    .datum(channelData)
                    .attr("d", _this.sparkline);
            
                view.select(".sparklinetip")
                    .attr("cy", _this.yScale(firstMeasure[d.id]))
                
                
            });

    }
    
    
}




