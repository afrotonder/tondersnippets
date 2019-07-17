
document.getElementById('fb-feed-options').addEventListener('click', function () {
    let val = document.getElementById('fb-open-close').getAttribute("value");
    if (val == "Open") {
        document.getElementById('fb-open-close').setAttribute("class", "fa fa-angle-right fa-4x");
        document.getElementById('fb-open-close').setAttribute("value", "Close");
        document.getElementById('fb-component').style.marginLeft = "-25em";

    }
    else {
        document.getElementById('fb-open-close').setAttribute("class", "fa fa-angle-left fa-4x");
        document.getElementById('fb-open-close').setAttribute("value", "Open");
        document.getElementById('fb-component').style.marginLeft = "0";
    }
});
