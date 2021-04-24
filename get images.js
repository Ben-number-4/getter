function getImages() {
    var ims = new Array();
    for(var i in arguments) {
        var read = new Image(arguments(i));
        ims.push(read);
    }
    return ims;
}
