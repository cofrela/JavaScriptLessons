function nTime(obj) {
    var t = new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();
    
    if (h < 10) { 
        h = "0" + h; 
    } else {
        h = h;
    }
    
    if (m < 10) { 
        m = "0" + m; 
    } else {
        m = m;
    }
    
    if (s < 10) { 
        s = "0" + s; 
    } else {
        s = s;
    }
    
    var result = h + ":" + m + ":" + s;
    obj.res.value = result;
}