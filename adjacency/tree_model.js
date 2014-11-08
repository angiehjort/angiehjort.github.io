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

Model = function(tree, rules){
    var self = this;

    this.root = tree;
    this._root = JSON.parse(JSON.stringify(tree));



    this.init = function(){
        self.leaves = self.getLeaves(self.root);
        self.leafNames = self.leaves.map(function(l){return l.id});

        self.hieLevel = d3.max(self.leaves.map(function(d){return d.depth})) - 1;
        self.hieLevelMax = self.hieLevel;

        self.links = self.generateLinks(self.leafNames, Math.random()*1000);
    }



    this.generateLinks = function(possibleNodes, howMany){
//        var links = [];
//        for(var i=0; i<howMany; i++){
//            links.push({
//                if: possibleNodes[Math.floor(Math.random()*possibleNodes.length)],
//                then: possibleNodes[Math.floor(Math.random()*possibleNodes.length)],
//                hits: Math.floor(Math.exp(Math.random()*7)),
//                confidence: Math.random()
//            });
//        }
//        return links;
        var input = 
            
            [{
    "alarms": ["DMC08-O01", "DMC18-O01", "DMC10-O01"],
    "supp": 53,
    "conf": 88.33
}, {
    "alarms": ["DMC08-O01", "DMC18-O01", "DMC15-O01"],
    "supp": 52,
    "conf": 86.67
}, {
    "alarms": ["DMC08-O01", "DMC18-O01", "DMC25-O01", "DMC15-O01"],
    "supp": 52,
    "conf": 85.25
}, {
    "alarms": ["DMC08-O01", "DMC18-O01", "DMC25-O01"],
    "supp": 52,
    "conf": 86.67
}, {
    "alarms": ["DMC08-O01", "DMC18-O01"],
    "supp": 54,
    "conf": 93.1
}, {
    "alarms": ["DMC09-O01", "DMC10-O01"],
    "supp": 52,
    "conf": 88.14
}, {
    "alarms": ["DMC10-O01", "DMC11-O01"],
    "supp": 52,
    "conf": 89.66
}, {
    "alarms": ["DMC10-O01", "DMC15-O01", "DMCFEEDM-O01", "DMC14-O01"],
    "supp": 51,
    "conf": 86.44
}, {
    "alarms": ["DMC10-O01", "DMC18-O01", "DMC08-O01", "DMC25-O01"],
    "supp": 51,
    "conf": 82.26
}, {
    "alarms": ["DMC11-O01", "DMC15-O01"],
    "supp": 53,
    "conf": 94.64
}, {
    "alarms": ["DMC11-O01", "DMC18-O01", "DMC08-O01", "DMC25-O01", "DMC15-O01"],
    "supp": 51,
    "conf": 82.26
}, {
    "alarms": ["DMC11-O01", "DMC25-O01", "DMC15-O01"],
    "supp": 52,
    "conf": 91.23
}, {
    "alarms": ["DMC11-O01", "DMC25-O01"],
    "supp": 52,
    "conf": 91.23
}, {
    "alarms": ["DMC11-O02", "DMC21-O02"],
    "supp": 36,
    "conf": 94.74
}, {
    "alarms": ["DMC12-O01", "DMC10-O01", "DMC11-O01", "DMC15-O01"],
    "supp": 47,
    "conf": 81.03
}, {
    "alarms": ["DMC12-O01", "DMC11-O01", "DMC15-O01"],
    "supp": 49,
    "conf": 87.5
}, {
    "alarms": ["DMC12-O01", "DMC11-O01"],
    "supp": 50,
    "conf": 89.29
}, {
    "alarms": ["DMC12-O01", "DMC15-O01"],
    "supp": 50,
    "conf": 90.91
}, {
    "alarms": ["DMC12-O01", "DMC18-O01", "DMC08-O01", "DMC10-O01", "DMC11-O01", "DMC15-O01"],
    "supp": 46,
    "conf": 74.19
}, {
    "alarms": ["DMC12-O01", "DMC18-O01", "DMC08-O01", "DMC11-O01", "DMC15-O01"],
    "supp": 47,
    "conf": 77.05
}, {
    "alarms": ["DMC12-O01", "DMC18-O01", "DMC08-O01", "DMC11-O01"],
    "supp": 48,
    "conf": 78.69
}, {
    "alarms": ["DMC12-O01", "DMC18-O01", "DMC08-O01", "DMC15-O01"],
    "supp": 48,
    "conf": 80
}, {
    "alarms": ["DMC12-O01", "DMC18-O01", "DMC08-O01"],
    "supp": 49,
    "conf": 81.67
}, {
    "alarms": ["DMC13-O01", "DMC11-O01", "DMC15-O01"],
    "supp": 50,
    "conf": 86.21
}, {
    "alarms": ["DMC13-O01", "DMC11-O01", "DMC25-O01", "DMC15-O01", "DMC23-O01"],
    "supp": 48,
    "conf": 78.69
}, {
    "alarms": ["DMC13-O01", "DMC11-O01", "DMC25-O01", "DMC15-O01"],
    "supp": 49,
    "conf": 83.05
}, {
    "alarms": ["DMC13-O01", "DMC15-O01"],
    "supp": 51,
    "conf": 91.07
}, {
    "alarms": ["DMC13-O01", "DMC18-O01", "DMC11-O01", "DMC15-O01", "DMC23-O01"],
    "supp": 48,
    "conf": 75
}, {
    "alarms": ["DMC13-O01", "DMC25-O01", "DMC15-O01"],
    "supp": 50,
    "conf": 87.72
}, {
    "alarms": ["DMC14-O01", "DMC09-O01", "DMC10-O01", "DMC15-O01", "DMCFEEDM-O01"],
    "supp": 49,
    "conf": 77.78
}, {
    "alarms": ["DMC14-O01", "DMC10-O01", "DMC11-O01", "DMC15-O01", "DMCFEEDM-O01", "DMC24-O01"],
    "supp": 49,
    "conf": 80.33
}, {
    "alarms": ["DMC14-O01", "DMC10-O01", "DMC11-O01", "DMC15-O01", "DMCFEEDM-O01"],
    "supp": 50,
    "conf": 83.33
}, {
    "alarms": ["DMC14-O01", "DMC10-O01", "DMC15-O01", "DMCFEEDM-O01", "DMC24-O01"],
    "supp": 50,
    "conf": 83.33
}, {
    "alarms": ["DMC14-O01", "DMC18-O01", "DMC08-O01", "DMC10-O01", "DMC11-O01", "DMC25-O01", "DMC15-O01", "DMCFEEDM-O01"],
    "supp": 49,
    "conf": 75.38
}, {
    "alarms": ["DMC14-O01", "DMC18-O01", "DMC08-O01", "DMC10-O01", "DMC25-O01", "DMC15-O01", "DMCFEEDM-O01", "DMC24-O01"],
    "supp": 49,
    "conf": 75.38
}, {
    "alarms": ["DMC14-O01", "DMC18-O01", "DMC08-O01", "DMC10-O01", "DMC25-O01", "DMC15-O01", "DMCFEEDM-O01"],
    "supp": 50,
    "conf": 78.13
}, {
    "alarms": ["DMC14-O01", "DMC24-O01"],
    "supp": 51,
    "conf": 96.23
}, {
    "alarms": ["DMC15-O01", "DMC18-O01", "DMC08-O01", "DMC11-O01"],
    "supp": 51,
    "conf": 83.61
}, {
    "alarms": ["DMC16-O01", "DMC18-O01", "DMC20-O01", "DMC08-O01", "DMC10-O01", "DMC25-O01", "DMC15-O01", "DMCQUENCH-O01"],
    "supp": 48,
    "conf": 72.73
}, {
    "alarms": ["DMC16-O01", "DMC18-O01", "DMC20-O01", "DMC08-O01", "DMC10-O01", "DMCQUENCH-O01"],
    "supp": 49,
    "conf": 75.38
}, {
    "alarms": ["DMC16-O01", "DMC18-O01", "DMC20-O01", "DMC08-O01", "DMC25-O01", "DMC15-O01", "DMCQUENCH-O01"],
    "supp": 49,
    "conf": 75.38
}, {
    "alarms": ["DMC18-O02", "DMC08-O02"],
    "supp": 25,
    "conf": 86.21
}, {
    "alarms": ["DMC19-O01", "DMC09-O01"],
    "supp": 52,
    "conf": 86.67
}, {
    "alarms": ["DMC19-O01", "DMC18-O01", "DMC08-O01"],
    "supp": 52,
    "conf": 83.87
}, {
    "alarms": ["DMC19-O01", "DMC18-O01", "DMC09-O01", "DMC08-O01", "DMC10-O01"],
    "supp": 51,
    "conf": 76.12
}, {
    "alarms": ["DMC19-O01", "DMC18-O01", "DMC09-O01"],
    "supp": 51,
    "conf": 78.46
}, {
    "alarms": ["DMC19-O01", "DMC18-O01", "DMC20-O01", "DMC08-O01"],
    "supp": 51,
    "conf": 79.69
}, {
    "alarms": ["DMC19-O01", "DMC18-O01", "DMC20-O01"],
    "supp": 51,
    "conf": 80.95
}, {
    "alarms": ["DMC19-O01", "DMC18-O01"],
    "supp": 52,
    "conf": 85.25
}, {
    "alarms": ["DMC19-O02", "DMC09-O02"],
    "supp": 47,
    "conf": 92.16
}, {
    "alarms": ["DMC20-O01", "DMC18-O01", "DMC08-O01", "DMC10-O01"],
    "supp": 52,
    "conf": 83.87
}, {
    "alarms": ["DMC20-O01", "DMC18-O01", "DMC08-O01", "DMC25-O01"],
    "supp": 51,
    "conf": 82.26
}, {
    "alarms": ["DMC20-O01", "DMC18-O01", "DMC08-O01"],
    "supp": 53,
    "conf": 88.33
}, {
    "alarms": ["DMC20-O01", "DMC18-O01", "DMC21-O01", "DMC08-O01", "DMC11-O01"],
    "supp": 51,
    "conf": 78.46
}, {
    "alarms": ["DMC20-O01", "DMC18-O01", "DMC21-O01", "DMC08-O01"],
    "supp": 51,
    "conf": 80.95
}, {
    "alarms": ["DMC20-O01", "DMC18-O01", "DMC21-O01"],
    "supp": 51,
    "conf": 82.26
}, {
    "alarms": ["DMC20-O01", "DMC18-O01"],
    "supp": 53,
    "conf": 89.83
}, {
    "alarms": ["DMC21-O01", "DMC11-O01"],
    "supp": 53,
    "conf": 92.98
}, {
    "alarms": ["DMC21-O01", "DMC18-O01", "DMC08-O01", "DMC10-O01", "DMC11-O01"],
    "supp": 51,
    "conf": 79.69
}, {
    "alarms": ["DMC21-O01", "DMC18-O01", "DMC08-O01", "DMC10-O01"],
    "supp": 51,
    "conf": 80.95
}, {
    "alarms": ["DMC21-O01", "DMC18-O01", "DMC08-O01", "DMC11-O01", "DMC25-O01"],
    "supp": 51,
    "conf": 79.69
}, {
    "alarms": ["DMC21-O01", "DMC18-O01", "DMC08-O01", "DMC11-O01"],
    "supp": 52,
    "conf": 82.54
}, {
    "alarms": ["DMC21-O01", "DMC18-O01", "DMC08-O01"],
    "supp": 52,
    "conf": 85.25
}, {
    "alarms": ["DMC21-O01", "DMC18-O01"],
    "supp": 52,
    "conf": 86.67
}, {
    "alarms": ["DMC22-O01", "DMC18-O01", "DMC08-O01", "DMC10-O01"],
    "supp": 46,
    "conf": 71.88
}, {
    "alarms": ["DMC22-O01", "DMC18-O01", "DMC08-O01"],
    "supp": 47,
    "conf": 75.81
}, {
    "alarms": ["DMC22-O01", "DMC18-O01", "DMC20-O01", "DMC08-O01"],
    "supp": 46,
    "conf": 71.88
}, {
    "alarms": ["DMC22-O01", "DMC18-O01", "DMC21-O01", "DMC08-O01"],
    "supp": 46,
    "conf": 70.77
}, {
    "alarms": ["DMC23-O01", "DMC10-O01", "DMC15-O01"],
    "supp": 50,
    "conf": 84.75
}, {
    "alarms": ["DMC23-O01", "DMC11-O01", "DMC15-O01", "DMC13-O01"],
    "supp": 49,
    "conf": 81.67
}, {
    "alarms": ["DMC23-O01", "DMC11-O01", "DMC15-O01"],
    "supp": 50,
    "conf": 86.21
}, {
    "alarms": ["DMC23-O01", "DMC15-O01", "DMC13-O01"],
    "supp": 50,
    "conf": 86.21
}, {
    "alarms": ["DMC23-O01", "DMC15-O01"],
    "supp": 51,
    "conf": 91.07
}, {
    "alarms": ["DMC23-O01", "DMC18-O01", "DMC08-O01", "DMC10-O01", "DMC25-O01", "DMC15-O01"],
    "supp": 49,
    "conf": 76.56
}, {
    "alarms": ["DMC23-O01", "DMC18-O01", "DMC08-O01", "DMC11-O01", "DMC25-O01", "DMC15-O01"],
    "supp": 49,
    "conf": 76.56
}, {
    "alarms": ["DMC23-O01", "DMC18-O01", "DMC08-O01", "DMC25-O01", "DMC15-O01"],
    "supp": 50,
    "conf": 79.37
}, {
    "alarms": ["DMC23-O01", "DMC25-O01", "DMC15-O01", "DMC13-O01"],
    "supp": 49,
    "conf": 83.05
}, {
    "alarms": ["DMC23-O02", "DMC13-O02"],
    "supp": 28,
    "conf": 87.5
}, {
    "alarms": ["DMC24-O01", "DMC09-O01", "DMC10-O01", "DMC11-O01", "DMC15-O01", "DMCFEEDM-O01", "DMC14-O01"],
    "supp": 47,
    "conf": 72.31
}, {
    "alarms": ["DMC24-O01", "DMC09-O01", "DMC10-O01", "DMC15-O01", "DMCFEEDM-O01", "DMC14-O01"],
    "supp": 48,
    "conf": 75
}, {
    "alarms": ["DMC24-O01", "DMC18-O01", "DMC08-O01", "DMC10-O01", "DMC11-O01", "DMC25-O01", "DMC15-O01", "DMCFEEDM-O01", "DMC14-O01"],
    "supp": 48,
    "conf": 72.73
}, {
    "alarms": ["DMC24-O01", "DMC18-O01", "DMC09-O01", "DMC10-O01", "DMC25-O01", "DMC15-O01", "DMCFEEDM-O01", "DMC14-O01"],
    "supp": 47,
    "conf": 69.12
}, {
    "alarms": ["DMC25-O01", "DMC15-O01"],
    "supp": 53,
    "conf": 96.36
}, {
    "alarms": ["DMC25-O01", "DMC18-O01", "DMC08-O01", "DMC15-O01", "DMCFEEDM-O01"],
    "supp": 51,
    "conf": 82.26
}, {
    "alarms": ["DMC25-O02", "DMC15-O02"],
    "supp": 33,
    "conf": 89.19
}, {
    "alarms": ["DMCFEEDM-O01", "DMC10-O01", "DMC15-O01"],
    "supp": 51,
    "conf": 87.93
}, {
    "alarms": ["DMCFEEDM-O01", "DMC11-O01", "DMC15-O01"],
    "supp": 51,
    "conf": 89.47
}, {
    "alarms": ["DMCFEEDM-O01", "DMC15-O01"],
    "supp": 52,
    "conf": 94.55
}, {
    "alarms": ["DMCFEEDM-O01", "DMC18-O01", "DMC08-O01", "DMC10-O01", "DMC25-O01", "DMC15-O01"],
    "supp": 50,
    "conf": 79.37
}, {
    "alarms": ["DMCFEEDM-O01", "DMC18-O01", "DMC08-O01", "DMC11-O01", "DMC25-O01", "DMC15-O01"],
    "supp": 50,
    "conf": 79.37
}, {
    "alarms": ["DMCQUENCH-O01", "DMC16-O01"],
    "supp": 52,
    "conf": 96.3
}, {
    "alarms": ["DMCQUENCH-O01", "DMC18-O01", "DMC08-O01", "DMC16-O01"],
    "supp": 51,
    "conf": 83.61
}, {
    "alarms": ["DMCQUENCH-O01", "DMC18-O01", "DMC08-O01", "DMC25-O01", "DMC15-O01", "DMC16-O01"],
    "supp": 50,
    "conf": 79.37
}, {
    "alarms": ["DMCQUENCH-O01", "DMC18-O01", "DMC08-O01", "DMC25-O01", "DMC15-O01"],
    "supp": 50,
    "conf": 80.65
}, {
    "alarms": ["DMCQUENCH-O01", "DMC18-O01", "DMC08-O01", "DMC25-O01", "DMC16-O01"],
    "supp": 50,
    "conf": 80.65
}, {
    "alarms": ["DMCQUENCH-O01", "DMC18-O01", "DMC08-O01"],
    "supp": 51,
    "conf": 85
}, {
    "alarms": ["DMCQUENCH-O01", "DMC18-O01", "DMC20-O01", "DMC08-O01", "DMC16-O01"],
    "supp": 50,
    "conf": 79.37
}, {
    "alarms": ["DMCQUENCH-O01", "DMC25-O01", "DMC15-O01", "DMC16-O01"],
    "supp": 51,
    "conf": 87.93
}, {
    "alarms": ["DMCQUENCH-O01", "DMC25-O01", "DMC15-O01"],
    "supp": 51,
    "conf": 89.47
}, {
    "alarms": ["FC1021COARW-O05", "DMC26-O02", "FC1031COARW-O05", "PC1010ARW-O05"],
    "supp": 19,
    "conf": 46.34
}, {
    "alarms": ["FC1021COARW-O05", "DMC26-O02", "FC1031COARW-O05"],
    "supp": 19,
    "conf": 46.34
}, {
    "alarms": ["FC1021COARW-O05", "DMC26-O02"],
    "supp": 19,
    "conf": 46.34
}, {
    "alarms": ["FC1021COARW-O05", "FC1031COARW-O05", "PC1010ARW-O05"],
    "supp": 20,
    "conf": 95.24
}, {
    "alarms": ["PC6012ARW-O05", "DMC19-O02", "DMC09-O02", "TC6222COARW-O05", "TC6122COARW-O05"],
    "supp": 22,
    "conf": 41.51
}, {
    "alarms": ["PC6012ARW-O05", "DMC19-O02", "DMC09-O02", "TC6222COARW-O05"],
    "supp": 22,
    "conf": 41.51
}, {
    "alarms": ["PC6012ARW-O05", "DMC19-O02", "DMC09-O02"],
    "supp": 22,
    "conf": 41.51
}, {
    "alarms": ["PC6012ARW-O05", "TC6222COARW-O05", "TC6122COARW-O05"],
    "supp": 23,
    "conf": 92
}, {
    "alarms": ["PC6012ARW-O05", "TC6222COARW-O05"],
    "supp": 23,
    "conf": 92
}, {
    "alarms": ["PC6016ARW-O05", "DMC13-O02", "TC6226COARW-O05", "TC6128COARW-O05", "TC6126COARW-O05"],
    "supp": 17,
    "conf": 54.84
}, {
    "alarms": ["PC6016ARW-O05", "DMC13-O02", "TC6226COARW-O05", "TC6128COARW-O05"],
    "supp": 18,
    "conf": 58.06
}, {
    "alarms": ["PC6016ARW-O05", "DMC13-O02", "TC6226COARW-O05"],
    "supp": 18,
    "conf": 58.06
}, {
    "alarms": ["PC6016ARW-O05", "DMC13-O02"],
    "supp": 18,
    "conf": 58.06
}, {
    "alarms": ["PC6016ARW-O05", "FC6206ARW-O05", "TC6226COARW-O05", "TC6128COARW-O05", "TC6126COARW-O05"],
    "supp": 17,
    "conf": 53.13
}, {
    "alarms": ["PC6016ARW-O05", "FC6206ARW-O05", "TC6226COARW-O05", "TC6128COARW-O05"],
    "supp": 18,
    "conf": 56.25
}, {
    "alarms": ["PC6016ARW-O05", "FC6206ARW-O05", "TC6226COARW-O05"],
    "supp": 18,
    "conf": 56.25
}, {
    "alarms": ["PC6016ARW-O05", "FC6206ARW-O05"],
    "supp": 18,
    "conf": 56.25
}, {
    "alarms": ["PC6016ARW-O05", "TC6226COARW-O05", "TC6128COARW-O05", "TC6126COARW-O05"],
    "supp": 18,
    "conf": 94.74
}, {
    "alarms": ["PC6016ARW-O05", "TC6226COARW-O05"],
    "supp": 19,
    "conf": 100
}, {
    "alarms": ["PI1020_1-AHHY01", "PI1030_1-AHHY01"],
    "supp": 19,
    "conf": 70.37
}, {
    "alarms": ["PI1050_1-AHHY01", "PI1040_1-AHHY01"],
    "supp": 19,
    "conf": 76
}, {
    "alarms": ["P_1113CO-O03", "P_1111CO-O03"],
    "supp": 20,
    "conf": 95.24
}, {
    "alarms": ["QI6104-AHHY01", "QI6104-AHY01"],
    "supp": 42,
    "conf": 91.3
}, {
    "alarms": ["TC6029COARW-O05", "DMC09-O01", "PC6019ARW-O05"],
    "supp": 17,
    "conf": 29.31
}, {
    "alarms": ["TC6029COARW-O05", "DMC11-O01", "DMC15-O01", "DMC13-O01", "PC6019ARW-O05"],
    "supp": 17,
    "conf": 28.33
}, {
    "alarms": ["TC6029COARW-O05", "PC6019ARW-O05"],
    "supp": 18,
    "conf": 94.74
}, {
    "alarms": ["TC6222COARW-O05", "DMC09-O02", "TC6122COARW-O05"],
    "supp": 23,
    "conf": 46
}, {
    "alarms": ["TC6222COARW-O05", "DMC09-O02"],
    "supp": 23,
    "conf": 46
}];
        
        
        return convert(input);
        
        
    }


    //collapse everything starting from d and down the hierarchy
    this.collapseAll = function(node) {
        if (node.children) {
            node._children = node.children;
            node._children.forEach(self.collapseAll);
            node.children = null;
        };
        return node;
    };

    this.getNodeByNodeID = function(id){
        return self.getAllNodes(self.root).filter(function(d){return d.id==id})[0];
    };

    this.getAllNodes = function(node){
        var result = [node];
        if (node.children) {
            for (var i in node.children) result = result.concat(self.getLeavesEvenHidden(node.children[i]))
        }
        if (node._children) {
            for (var i in node._children) result = result.concat(self.getLeavesEvenHidden(node._children[i]))
        }
        return result;
    };

    this.getLeaves = function(node) {
        var result = [];
        if (node.children==null)return[node];
        for (var i in node.children) result = result.concat(self.getLeaves(node.children[i]))
        return result;
    };

    this.getLeavesEvenHidden = function(node) {
        var result = [];
        if (node.children==null && node._children==null)return [node];

        if (node.children) {
            for (var i in node.children) result = result.concat(self.getLeavesEvenHidden(node.children[i]))
        }
        if (node._children) {
            for (var i in node._children) result = result.concat(self.getLeavesEvenHidden(node._children[i]))
        }
        return result;
    };

    this.getFirstLeaveY = function(node) {
        return self.getLeaves(node)[0].x;
    };

    this.getLastLeaveY = function(node) {
        var l = self.getLeaves(node);
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
            self.getLeavesEvenHidden(node).forEach(function(n){
                result = result.concat(
                    self.links.filter(function(d){return inIfs && d.if==n.id || inThens && d.then==n.id})
                );
            });
            return arrayUnique(result);
        }else{
            return self.links.filter(function(d){return inIfs && d.if==node.id || inThens && d.then==node.id});
        }
    };

    this.reduceTreeToDepth = function(root, targetDepth){
        if(root.children || root._children){
            if (root.depth == targetDepth){
                root.children = self.getLeavesEvenHidden(root);
                root.children.forEach(function(c){c.parent = root; c.depth = targetDepth+1});
                root._children = null;
                return root;
            }
            if (root.depth < targetDepth){
                root.children.forEach(function(c){self.reduceTreeToDepth(c, targetDepth)});
                return root;
            }
            if (root.depth > targetDepth){
                return root;
            }
        }
    };
}
