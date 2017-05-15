function maxZnach(obj) {
    var a = 1 * obj.zn1.value;
    var b = 1 * obj.zn2.value;
    var c = 1 * obj.zn3.value;
    
    // способ 1
    //var m = a;
    //if (b > m) m = b;
    //if (c > m) m = c;
    //obj.res.value = m;
    
    // способ 2
    obj.res.value = Math.max(Math.max(a,b),c);

}