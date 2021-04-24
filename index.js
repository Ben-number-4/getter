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

// Make sure all the arguments are script urls
function getScripts() {
  var dish;
  for(var i in arguments) {
      dish = arguments[i-1];
      var scription = document.createElement("style");
      scription.src = dish;
      document.body.appendChild(scription);
  }
}

const bootstrap = () => {
  getStylesheets("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css");
  getScripts("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
  getScripts("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js");
  getScripts("https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js");
}

// Example usage
getScripts("get text.js", "get images.js", "download.js");
