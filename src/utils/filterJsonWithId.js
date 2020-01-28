function getShowDetail(data, key, value) {
    return data.filter((ele)=>ele[key] === value)
}


function curriedJsonCheck(func) {
    var cache ={};
    return function (json,parsingKey,requiredValue) {
        var key = requiredValue;
        if(key in cache){
            return cache[requiredValue]
        }
        else {
            cache[key] = func.call(null, json,parsingKey,requiredValue)
            return cache[key]
        }
    }
}

const getDetails = curriedJsonCheck(getShowDetail)
export default getDetails
