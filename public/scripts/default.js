$(document).ready(function () {
    $('#btnAdd').on('click', addNumbers);

    // What is the jQuery Version?
    //if (typeof jQuery != 'undefined') {
    //    alert("jQuery Version = " + jQuery.fn.jquery);
    //}
});

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

    xmlhttp.open("GET", "/addition?x=" + x + "&y=" + y, true);
    xmlhttp.send();
}
