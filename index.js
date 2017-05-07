// add jQuery to page
javascript: (function (e, s) {
    e.src = s;
    e.onload = function () {
        jQuery.noConflict();
        console.log('jQuery injected');
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js');

// add number format function
var formatNumber = function (actualNumber, precision) {
    var formattedNumber = '';

    if (!isNaN(actualNumber)) {
        formattedNumber = actualNumber;
        var length = formattedNumber.toString().length;
        if (length < precision) {
            count = precision - length;
            for (var i = 0; i < count; i++) {
                formattedNumber = '0' + formattedNumber;
            }
        }
    }

    return formattedNumber;
}

// get all of them at once
var header = [];
var topic = [];
var formatLength = 2;
$('.module').each(function (index, val) {
    var ele = $(val);

    // get header
    var headerText = $(ele.find('h2')[0]).text();
    headerText = '"' + formatNumber((index + 1), formatLength) + ' - ' + headerText + '"';
    header.push(headerText);
    console.log('md ' + headerText);
    console.log('cd ' + headerText);

    // get topics under each header
    var topics = $(ele.find('h3')).each((topicIndex, topicVal) => {
        var topicText = $(topicVal).text();
        topic.push(topicText);
        console.log('echo.>"' 
                        + formatNumber((index + 1), formatLength) 
                        + ' - ' 
                        + formatNumber((topicIndex + 1), formatLength) 
                        + ' - ' 
                        + topicText + '.mp4'
                        + '"');
    });

    console.log('cd ..');
});