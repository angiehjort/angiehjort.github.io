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
                    return d.source == a0 && d.target == a1 || d.source == a1 && d.target == a0;
                }).length)return;

                // push the new pair twice (thus, links are not directional)
                result.push({
                    "source": a0,
                    "target": a1,
                    "hits": rule.supp,
                    "confidence": rule.conf
                });
                result.push({
                    "source": a1,
                    "target": a0,
                    "hits": rule.supp,
                    "confidence": rule.conf
                });    
            
            }); // alarm a1
        }); // alarm a0
    }); //rule


    //simple validation
    var badRules = result.filter(function(rule){return rule.source && rule.target && rule.hits && rule.confidence});
    if (badRules.length != result.length) console.warn("not all elements in the result have properties", badRules);

    return result;
}