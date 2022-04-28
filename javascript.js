$("#gonder").click(function () {
    if ($("#isimInput").val() == "") {
        $("#isimInput").attr("placeholder", "İsim boş bırakılamaz!");
    }

    if ($("#soyisimInput").val() == "") {
        $("#soyisimInput").attr("placeholder", "Soyisim boş bırakılamaz!");
    }

    if ($("#emailInput").val() == "") {
        $("#emailInput").attr("placeholder", "E-mail boş bırakılamaz!");
    }

    if ($("#sifreInput").val() == "") {
        $("#sifreInput").attr("placeholder", "Şifre boş bırakılamaz!");
    }

    if ($("#sifretekrarInput").val() == "") {
        $("#sifretekrarInput").attr("placeholder", "Şifreyi tekrar yazınız!");
    }

    //E-mailin geçerli olup olmadığını kontrol ediyoruz   
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    if ($("#emailInput").val() !== "") {

        if (isEmail($("#emailInput").val()) == false) {
            alert("Hatalı E-mail adresi");
        }
    }

    //Şifre kontrolü   

    if ($("#sifreInput").val() != "" && $("#sifretekrarInput").val() !== "") {//Eğer şifre inputları boş değilse
        if($("#sifreInput").val()!=$("#sifretekrarInput").val()) {//Şifreler birbirine eşit değilse
            alert("Şifreler uyuşmuyor")
        }
    }


});