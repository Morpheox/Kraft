function intToString (value) {
        if (value>10000)
        {
    var suffixes = ["", "K", "M", "B","T","C","Q","S"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(3));
    if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(1);
    return shortValue+suffixes[suffixNum];
    }
    else {return parseFloat(value).toFixed(2);}
    }

function intToStringRound(value) {
        if (value>10000)
        {
    var suffixes = ["", "K", "M", "B","T","C","Q","S"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(3));
    if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(1);
    return shortValue+suffixes[suffixNum];
    }
    else {return Math.round(value);}
    }