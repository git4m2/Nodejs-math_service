$(document).ready(function () {
    $('#btnAdd').on('click', addNumbers);
    $('#btnSubtract').on('click', subtractNumbers);
    $('#btnMultiplication').on('click', multiplyNumbers);
    $('#btnDivision').on('click', divideNumbers);

    // What is the jQuery Version?
    //if (typeof jQuery != 'undefined') {
    //    alert("jQuery Version = " + jQuery.fn.jquery);
    //}
});

function getFormData() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    return data;
}

function displayResult(serverData) {
    $('#result').html(serverData.result);
}

function addNumbers() {
    var data = getFormData();
    serverAddition(data).done(displayResult);
}

function serverAddition(data) {
    // Returns a promise object
    return $.getJSON('/addition', data);
}

function subtractNumbers() {
    var data = getFormData();
    serverSubtraction(data).done(displayResult);
}

function serverSubtraction(data) {
    // Returns a promise object
    return $.post('/subtraction', data, 'json');
}

function multiplyNumbers() {
    var data = getFormData();
    serverMultiplication(data).done(displayResult);
}

function serverMultiplication(data) {
    return $.ajax({
        url: '/multiply',
        data: data,
        type: 'PUT',
        dataType: 'json',
        cache: false
    });
}

function divideNumbers() {
    var data = getFormData();
    serverDivision(data).done(displayResult);
}

function serverDivision(data) {
    return $.ajax({
        url: '/divide',
        data: data,
        type: 'DELETE',
        dataType: 'json',
        cache: false
    });
}
