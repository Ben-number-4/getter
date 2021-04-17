const fs = require('fs');

function getImages() {
    var ims = new Array();
    for(var i in arguments) {
        var read = fs.readFile(arguments[i-1]);
        ims.push(read);
    }
    return texts;
}