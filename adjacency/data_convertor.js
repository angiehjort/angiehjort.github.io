var convert = function(input){
    //converts groups to pairwise connections

    var result = [];

    input.filter(function(rule){return rule.alarms.length == 2})
        .forEach(function(rule){

            // check if such element already exists in array
            if(result.filter(function(d){
                return d.if == rule.alarms[0] && d.then == rule.alarms[1]
                    || d.if == rule.alarms[1] && d.then == rule.alarms[0];
            }).length) log("duplicate found!")

            // push the new pair
            result.push({
                "if": rule.alarms[0],
                "then": rule.alarms[1],
                "hits": rule.supp,
                "confidence": rule.conf
            });
            result.push({
                "if": rule.alarms[1],
                "then": rule.alarms[0],
                "hits": rule.supp,
                "confidence": rule.conf
            });

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

            })
        })
    })


    //simple validation
    if (result.length!=
        result.filter(function(rule){return rule.if && rule.then && rule.support && rule.confidence}).length
       ) log("not all elements in the result have properties");


    return result;
}