İF-ELSE KOŞULLU İFADELER

<?php 

$x = "5";
$y = "10";
$z = "15";
$toplam = "$x+$y";

if($x==$y && $z==$toplam) {
    echo "x=y ve z değişkeni=toplam değişkeni";
}

else if($x==$z) {
    echo "x=z";
}

else if($z==$toplam) {
    echo "z değişkeni=toplam değişkeni";
}

else {
    echo "Hiçbiri doğru değil";
}

?>