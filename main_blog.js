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

// HTML İLE YAPILAN ÜYE GİRİŞİ
$(function () {
    $("#btn-giris").click(function () {
        $("#myUye").modal();
    });
});

// user_email user_phone user_ipassword
// Form validation Jquery
$(function () {
    $("#btnSubmit").click(function () {

        var email, phone, password;
        email = $("#user_email").val();
        phone = $("#user_phone").val();
        password = $("#user_password").val();

        // validation_email validation_phone validation_password
        if (email == "") {
            $("#validation_email").html("Email boş geçilemez!");
        } else if (validateEmail(email) == false) {
            $('#validation_email').html("E-maili Uygun Formatta Giriniz..");
        }

        if (phone == "") {
            $("#validation_phone").html("Telefon boş geçilemez!");
        } else if ($.isNumeric(phone) == false) {
            $('#validation_phone').html("Sayı Girmelisiniz..");
        }

        if (password == "") {
            $("#validation_password").html("Şifre Boş Geçilemez!");
        } else {
            // Add your additional password validation logic here
        }
    });
});
