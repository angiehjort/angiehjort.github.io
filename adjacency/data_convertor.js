//converts groups to pairwise connections
var convertGroupsToLinks = function(arrayOfGroups){

    //output array
    var result = [];
    
    //sort all the groups so that we will preocess shorter groups first
    var input = arrayOfGroups.sort(function(a,b){ return a.alarms.length - a.alarms.length; })
    
    //for each rule get all pairwise combinations in alarms array
    input.forEach(function(rule){
        rule.alarms.forEach(function(a0){
            rule.alarms.forEach(function(a1){
                
                //skip self-pointing connections
                if(a0==a1)return;

                //check if such link already exists in results array. do nothing if yes
                if(result.filter(function(d){
                    return d.if == a0 && d.then == a1 || d.if == a1 && d.then == a0;
                }).length)return;

                // push the new pair twice (thus, links are not directional)
                result.push({
                    "if": a0,
                    "then": a1,
                    "hits": rule.supp,
                    "confidence": rule.conf
                });
                result.push({
                    "if": a1,
                    "then": a0,
                    "hits": rule.supp,
                    "confidence": rule.conf
                });    
            
            }); // alarm a1
        }); // alarm a0
    }); //rule


    //simple validation
    var badRules = result.filter(function(rule){return rule.if && rule.then && rule.hits && rule.confidence});
    if (badRules.length != result.length) console.warn("not all elements in the result have properties", badRules);

    return result;
}