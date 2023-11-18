$(document).ready(function () {
    var autoComplete = [
        "Html5",
        "Asp",
        "C",
        "C++",
        "Css3",
        "JavaScript",
        "Jquery",
        "Api",
        "Python",
        "C#",
        ".Net",
        "Nodejs",
        "React",
        "Boostrap",
        "Java",
        "PHP",
        "Ruby",
        "Ajax",
        "Cobol"
    ];

    $("#tags").autocomplete({
        source: autoComplete
    });
});

$(function () {
    $("#btn_giris").click(function () {
        $("#myUye").modal('show');
    });
});
