//var User = function(name, age) {
//    this.name = name;
//    this.age = age;
//}
//
//User.prototype = {
//    getName: function() {
//        return this.name;
//    },
//
//    setName: function(name) {
//        this.name = name;
//    }
//}
//var user = new User('Mike', 29);
//user.setName('John');
//alert(user.getName()); //should be 'John'

Model = function(dataTree, dataRules){
    var _this = this;

    this.root = dataTree;
    this._root = JSON.parse(JSON.stringify(dataTree));
    this.dataRules = dataRules;

    this.init = function(){
        _this.leaves = _this.getLeaves(_this.root);
        _this.leafNames = _this.leaves.map(function(l){return l.id});

        _this.hieLevel = d3.max(_this.leaves.map(function(d){return d.depth})) - 1;
        _this.hieLevelMax = _this.hieLevel;

        //_this.links = _this.generateLinks(_this.leafNames, Math.random()*1000);
        _this.links = convertGroupsToLinks(_this.dataRules);
    }



    // GENERATE LINKS
    // generates @howMany random links 
    // between the specified @possibleNodes
    this.generateLinks = function(possibleNodes, howMany){
        var links = [];
        for(var i=0; i<howMany; i++){
            links.push({
                if: possibleNodes[Math.floor(Math.random()*possibleNodes.length)],
                then: possibleNodes[Math.floor(Math.random()*possibleNodes.length)],
                hits: Math.floor(Math.exp(Math.random()*7)),
                confidence: Math.random()
            });
        }
        return links;
    }


    //collapse everything starting from d and down the hierarchy
    this.collapseAll = function(node) {
        if (node.children) {
            node._children = node.children;
            node._children.forEach(_this.collapseAll);
            node.children = null;
        };
        return node;
    };

    this.getNodeByNodeID = function(id){
        return _this.getAllNodes(_this.root).filter(function(d){return d.id==id})[0];
    };

    this.getAllNodes = function(node){
        var result = [node];
        if (node.children) {
            for (var i in node.children) result = result.concat(_this.getLeavesEvenHidden(node.children[i]))
        }
        if (node._children) {
            for (var i in node._children) result = result.concat(_this.getLeavesEvenHidden(node._children[i]))
        }
        return result;
    };

    this.getLeaves = function(node) {
        var result = [];
        if (node.children==null)return[node];
        for (var i in node.children) result = result.concat(_this.getLeaves(node.children[i]))
        return result;
    };

    this.getLeavesEvenHidden = function(node) {
        var result = [];
        if (node.children==null && node._children==null)return [node];

        if (node.children) {
            for (var i in node.children) result = result.concat(_this.getLeavesEvenHidden(node.children[i]))
        }
        if (node._children) {
            for (var i in node._children) result = result.concat(_this.getLeavesEvenHidden(node._children[i]))
        }
        return result;
    };

    this.getFirstLeaveY = function(node) {
        return _this.getLeaves(node)[0].x;
    };

    this.getLastLeaveY = function(node) {
        var l = _this.getLeaves(node);
        return l[l.length-1].x;
    };

    this.getFirstVisibleNode = function(node){
        var trail = [];

        while (node!=null){
            if (node.parent!=null){
                trail[node.depth] = node.parent.children!=null?node:null;
            }else{
                trail[node.depth] = node;
            }

            node = node.parent;
        }

        if (trail.indexOf(null) == -1) return trail[trail.length-1]
        return trail[trail.indexOf(null)-1];
    };

    this.getLinksByNode = function(node, inIfs, inThens, includeNestedNodes){
        //defaults
        if (inIfs==null)inIfs=true;
        if (inThens==null)inThens=true; //by default
        if (includeNestedNodes==null)includeNestedNodes=true; //by default

        if (includeNestedNodes){
            var result = [];
            _this.getLeavesEvenHidden(node).forEach(function(n){
                result = result.concat(
                    _this.links.filter(function(d){return inIfs && d.if==n.id || inThens && d.then==n.id})
                );
            });
            return arrayUnique(result);
        }else{
            return _this.links.filter(function(d){return inIfs && d.if==node.id || inThens && d.then==node.id});
        }
    };

    this.reduceTreeToDepth = function(root, targetDepth){
        if(root.children || root._children){
            if (root.depth == targetDepth){
                root.children = _this.getLeavesEvenHidden(root);
                root.children.forEach(function(c){c.parent = root; c.depth = targetDepth+1});
                root._children = null;
                return root;
            }
            if (root.depth < targetDepth){
                root.children.forEach(function(c){_this.reduceTreeToDepth(c, targetDepth)});
                return root;
            }
            if (root.depth > targetDepth){
                return root;
            }
        }
    };
}
