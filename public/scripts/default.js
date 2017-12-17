$(document).ready(function () {
    $('#btnAdd').on('click', addNumbers);

    // What is the jQuery Version?
    //if (typeof jQuery != 'undefined') {
    //    alert("jQuery Version = " + jQuery.fn.jquery);
    //}
});

function updateProgress(evt) {
    if (evt.lengthComputable) {
        var eventComplete = evt.loaded / evt.total;
        // display percentComplete
    } else {
        // Need total size to compute progress
    }
}

function transferFailed(evt) {
    alert("An error ocurrred");
}

function canceled(evt) {
    alert("Canceled by the user");
}

function addNumbers() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var result = document.getElementById('result');
    var xmlhttp = new XMLHttpRequest();

    // Asynchronous Call
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var jsonObject = JSON.parse(xmlhttp.response);
            result.innerHTML = jsonObject.result;
        }
    }

    xmlhttp.addEventListener("progress", updateProgress, false); // Progress Event Listener
    xmlhttp.addEventListener("error", transferFailed, false); // Error Event Listener
    xmlhttp.addEventListener("abort", canceled, false); // Abort Event Listener

    xmlhttp.open("GET", "/addition?x=" + x + "&y=" + y, true);
    xmlhttp.send();
}
