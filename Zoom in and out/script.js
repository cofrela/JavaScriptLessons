function bigPict() {
    var w = document.tigr.width;
    if (w < 302) {
        document.tigr.width = w + 10;
        document.tigr.src = "images/tigrenok.jpg";
        setTimeout("bigPict()", 50);
    }
};

function smallPict() {
    var w = document.tigr.width;
    if ( w > 102) {
        document.tigr.width = w - 100;
        document.tigr.src = "images/tigrenok.jpg";
        setTimeout("smallPict()", 50);
    }
};