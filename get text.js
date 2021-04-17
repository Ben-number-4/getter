const fs = require('fs');

function getText() {
    var texts = new Array();
    for(var i in arguments) {
        var read = fs.readFile(arguments[i-1]);
        texts.push(read);
    }
    return texts;
}