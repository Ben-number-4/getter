// Make sure all the arguments are stylesheet urls
function getStylesheets() {
    var dish;
    for(var i in arguments) {
        dish = arguments[i-1];
        var styling = document.createElement("style");
        styling.innerHTML = "@import url('" + dish + "')";
        document.body.appendChild(styling);
  }
}

// Make shure all the arguments are script urls
function getScripts() {
    var dish;
    for(var i in arguments) {
        dish = arguments[i-1];
        var scription = document.createElement("style");
        scription.src = dish;
        document.body.appendChild(scription);
  }
}

getScripts("get text.js")
