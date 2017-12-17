$(document).ready(function () {
    $('#btnAdd').on('click', addNumbers);

    // What is the jQuery Version?
    //if (typeof jQuery != 'undefined') {
    //    alert("jQuery Version = " + jQuery.fn.jquery);
    //}
});

function addNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.ajax({
        url: '/addition',
        data: data,
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function (data) {
            $('#result').html(data.result);
        }
    });
}
