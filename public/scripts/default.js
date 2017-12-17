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

    // Synchronous Call
    xmlhttp.open("GET", "/addition?x=" + x + "&y=" + y, false);
    xmlhttp.send();
    var jsonObject = JSON.parse(xmlhttp.response);
    result.innerHTML = jsonObject.result;
}
