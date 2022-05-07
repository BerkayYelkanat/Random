Get Metodu-2

<?php 

if(isset($_GET["isim"]) && isset($_GET["soyisim"])) {
    if($_GET["isim"]==""){
        echo "İsim girmediniz";
    }

    else if($_GET["soyisim"]=="") {
    echo "Soyisim girmediniz";
    }

    else {
        echo "İsim : ".$_GET["isim"];
        echo "<br>";
        echo "Soyisim : ".$_GET["soyisim"];
    }

}

?>

<form>
<input name="isim" type="text">
<input name="soyisim" type="text">
<input type="submit" value="Gönder">
</form>