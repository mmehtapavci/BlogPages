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

$(function () {
    $("#btnSubmit").click(function () {

        var email, phone, password;
        email = $("#user_email").val();
        email = $.trim(email);

        phone = $("#user_phone").val();
        phone = jQuery.trim(phone);

        password = $("#user_password").val();
        password = password.trim(password);
        // validation_email validation_phone validation_password
        if (email == "") {
            $("#validation_email").html("Email boş geçilemez!");
        } else if (!validateEmail(email)) {
            $('#validation_email').html("E-maili uygun formatta giriniz.");
        }

        if (phone == "") {
            $("#validation_phone").html("Telefon boş geçilemez!");
        } else if (!$.isNumeric(phone)) {
            $('#validation_phone').html("Sayı girmelisiniz.");
        }

        if (password == "") {
            $("#validation_password").html("Şifre boş geçilemez!");
        } else {
            // Ek şifre doğrulama mantığınızı buraya ekleyin
        }

        // Email doğrulama fonksiyonu-Validation Email Regex
        function validateEmail(email) {
            var regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
            return regex.test(email);
        }

        // Phone doğrulama fonksiyonu-Validation Phone Number Regex
    });
});
