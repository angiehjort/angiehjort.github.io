HierarchicalEdgeBundling = function(container) {
    var _this = this;
    
    var w = 100,
        h = 20,
        duration = 0,
        color = d3.scale.ordinal().range(["#000", "#000"]);
    var outerRadius = 200;
    var innerRadius = 100;
    var spaceForLeaves = 50;
    var spaceForHierarchy = 50;
    var view = "init should be called";
    var svg = "init should be called";

    var clusterHeb = d3.layout.cluster()     
        .separation(function(a, b){return 1})
        .sort(function(a, b){return d3.ascending(a.id, b.id)});     

    var bundle = d3.layout.bundle();

    var line = d3.svg.line.radial()
        .interpolate("bundle")
        .tension(0.8)
        .radius(function(d) { return d.y; })
        .angle(function(d) { return d.x / 180 * Math.PI; });

    var heblinks = null;
    var hebnodes = null;


    
    
    this.init = function(){
        
        innerRadius = outerRadius - spaceForLeaves - spaceForHierarchy;
        
        svg = d3.select(container)
            .append("svg")
            .attr("width", outerRadius*2)
            .attr("height", outerRadius*2);
        
        view = svg.append("g")
            .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");  
        
        clusterHeb
            .size([360, innerRadius]);
        
        return _this;
    };
    
    
    
    
    
    

    this.update = function(root){
        
        // Compute the new tree layout.
        model.nodesHeb = clusterHeb.nodes(model.root).reverse();
        
        var deltaAngle = 2*Math.PI/model.leaveNames.length;
        
        // Normalize for fixed-depth.
        model.nodesHeb.forEach(function (d) { 
            if(!d.children){
                d.y1 = d.y;
            }else{
                var includeLeaves = spaceForLeaves>0;
                d.y1 =innerRadius + spaceForLeaves + spaceForHierarchy * (1 - d.depth / (model.hieSteps-(includeLeaves?2:1))); 
            }
        });
        


        

        
        
        

        var nodeVis = view.selectAll("g.node.heb")
            .data(model.nodesHeb.filter(function(n) { return n.depth!=0 }));
        
        //groups
        var nodeEnter = nodeVis.enter().append("g")
            .attr("class", function(d){return "node heb id"+d.id})
            .on("click", click)
            .on("mouseover", hoverNodeON)
            .on("mouseout", hoverNodeOFF);
        
        nodeEnter.append("g")
            .attr("class", "textcontainer")
            .attr("transform", function(d) { return "rotate(" + (root.x0 - 90) + ")translate(" + root.y0 + ")"; })
            .append("text")
            .style("fill-opacity", 1e-6);
                
        nodeEnter.append("path")
            .attr("class", "tab")
//            .datum(function(d){
//                return {
//                    innerRadius: d.y1,
//                    outerRadius: d.y1,
//                    startAngle: model.getFirstLeaveY(d)/360*2*Math.PI - 0.2 * deltaAngle,  
//                    endAngle: model.getLastLeaveY(d)/360*2*Math.PI + 0.2 * deltaAngle, 
//                } 
//            })
//            .attr("d",d3.svg.arc());        
//        
        

        // Update for the existing nodes
        var nodeUpdate = nodeVis
            .classed("leaf", function (d) {return !d.children && !d._children;})
            .classed("collapsed", function (d) {return d._children})
            //.transition().duration(duration)


        nodeUpdate.select("g.textcontainer")
            .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y1 + ")"; });
        nodeUpdate.select("g.textcontainer text")
            .attr("dx", function(d) {return d.x < 180 ? 8 : -8;})
            .attr("dy", ".31em")
            .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
            .attr("transform", function(d) { return d.x < 180 ? null : "rotate(180)"; })
            .text(function (d) {return (spaceForLeaves>0 || d.children || d._children)?d.id:"";})
            .style("fill-opacity", 1);

//        nodeUpdate.select("path.tab")
//            .call(arcTween, Math.random() * 2*Math.PI)
//        
//        
//        function arcTween(transition, newAngle) {
//
//          transition.attrTween("d", function(d) {
//
//            var interpolate = d3.interpolate(d.endAngle, newAngle);
//
//            return function(t) {
//
//              d.endAngle = interpolate(t);
//
//              return d3.svg.arc(d);
//            };
//          });
//        }
        
        

        nodeUpdate.select("path")
            .style("visibility", function(d){return (d.children || spaceForLeaves==0)?"visible":"hidden"})
            .datum(function(d){
                return {
                    innerRadius: d.y1,
                    outerRadius: d.y1,
                    startAngle: model.getFirstLeaveY(d)/360*2*Math.PI - 0.2 * deltaAngle,  
                    endAngle: model.getLastLeaveY(d)/360*2*Math.PI + 0.2 * deltaAngle, 
                } 
            })
            .attr("d",d3.svg.arc());
        


        // Transition the removed nodes to the parent's new position.
        var nodeExit = nodeVis.exit()
            //.transition()
            //.duration(duration)
            .attr("transform", function(d) { return "rotate(" + (root.x - 90) + ")translate(" + root.y1 + ")"; })
            .remove();


        nodeExit.select("text").style("fill-opacity", 1e-6);
        nodeExit.select("path").style("fill-opacity", 1e-6);



        
        
        
        
        
        
        
        var linksVis = view.selectAll(".link.occurtogether").data(model.links)
            .each(function(d){d.test = 1});
        
        linksVis.exit().remove();
        
        linksVis.enter().append("path")
            .attr("class",function(d){return "link occurtogether id" + d.source + d.target; })
            .on("mouseover",hoverLinkON)
            .on("mouseout",hoverLinkOFF);
        
        linksVis
         //   .style("stroke-width", function(d){return sScale(d.hits); })
            .style("opacity", function(d){return oScale(d.confidence); })
            .attr("d", function(d){
                var anchorSource = model.getFirstVisibleNode(model.getNodeByNodeID(d.source));  
                var anchorTarget = model.getFirstVisibleNode(model.getNodeByNodeID(d.target));  

                return line(
                            bundle([{
                                source: anchorSource,
                                target: anchorTarget
                            }])[0]
                        )
            });
        
        
        
        var noactionsVis = view.selectAll(".link.noactions").data(model.noActions);

        noactionsVis.exit().remove();

        noactionsVis.enter().append("circle")
            .attr("class",function(d){return "link noactions id" + d.source + d.target})
            .attr("transform", function(d) { 
                return "rotate(" + (root.x0 - 90) + ")translate(" + (root.y0 - 10) + ")"; 
            })
            .attr("cy", 0)
            .attr("cx", 0)
            .attr("r", 0)
            .style("opacity", 0)
            .on("mouseover",hoverLinkON)
            .on("mouseout",hoverLinkOFF);


        noactionsVis.transition().duration(duration)
            .attr("transform", function(d) { 
                var anchor = model.getFirstVisibleNode(model.getNodeByNodeID(d.source));                
                return "rotate(" + (anchor.x - 90) + ")translate(" + (anchor.y - 10) + ")"; 
            })
            .attr("r", function(d){return rScale(d.hits)*2})
            .style("opacity", function(d){return oScale(d.confidence)});
        
        
        
        
          
          
          
          
          
          
          
//
//        view.selectAll(".node.root")
//              .data(nodes.filter(function(n) { return n.depth == 0; }))
//            .enter().append("text")
//              .attr("class", "node root")
//              .attr("x", 0)
//              .attr("y", -outerRadius)
//              .attr("dy", "1em")
//              .attr("text-anchor", "middle")
//              .text(function(d) { return d.id; });      


        return _this;  
    };
    
    
    
    
    
    

    //getters and setters
    this.outerRadius = function(arg) {if (!arguments.length) return outerRadius;       outerRadius = +arg;     return _this;};
    this.spaceForLeaves = function(arg) {if (!arguments.length) return spaceForLeaves;       spaceForLeaves = +arg;     return _this;};
    this.spaceForHierarchy = function(arg) {if (!arguments.length) return spaceForHierarchy;       spaceForHierarchy = +arg;     return _this;};

    this.width = function(arg) {if (!arguments.length) return w;       w = +arg;     return _this;};
    this.height = function(arg) {if (!arguments.length) return h;      h = +arg;     return _this;};
    this.duration = function(arg) {if (!arguments.length) return duration;  duration = +arg;     return _this;};
    this.color = function(arg) {if (!arguments.length) return color; color = arg;    return _this;};
    
    this.heblinks = function(arg) {if (!arguments.length) return heblinks; heblinks = arg;    return _this;};
    this.hebnodes = function(arg) {if (!arguments.length) return hebnodes; hebnodes = arg;    return _this;};
    return this;
};


