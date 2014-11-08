var convertGroupsToLinks = function(arrayOfGroups){
    //converts groups to pairwise connections

    var input = arrayOfGroups;
    var result = [];
    
    var doublePush = function(rule, array){
        array.push({
            "if": rule.alarms[0],
            "then": rule.alarms[1],
            "hits": rule.supp,
            "confidence": rule.conf
        });
        array.push({
            "if": rule.alarms[1],
            "then": rule.alarms[0],
            "hits": rule.supp,
            "confidence": rule.conf
        });    
        return array;
    };

    input.filter(function(rule){return rule.alarms.length == 2})
        .forEach(function(rule){

            // check if such element already exists in array
            if(result.filter(function(d){
                return d.if == rule.alarms[0] && d.then == rule.alarms[1]
                    || d.if == rule.alarms[1] && d.then == rule.alarms[0];
            }).length) log("duplicate found!")

            // push the new pair
            result = doublePush(rule, result);
            rule.processed = true;
        });

    input = input.filter(function(rule){return !rule.processed});

    input.forEach(function(rule){
        rule.alarms.forEach(function(a0){
            rule.alarms.forEach(function(a1){
                if(a0==a1)return;

                // check if such element already exists in array
                if(result.filter(function(d){
                    return d.if == a0 && d.then == a1
                        || d.if == a1 && d.then == a0;
                }).length)return;

                // push the new pair
                result = doublePush({alarms: [a0,a1], supp: rule.supp, conf: rule.conf}, result);      

            })
        })
    })


    //simple validation
    var badRules = result.filter(function(rule){return rule.if && rule.then && rule.support && rule.confidence});
    if (badRules.length) console.log("not all elements in the result have properties", badRules);

    return result;
}