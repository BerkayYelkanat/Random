GET METODU

<?php 

if(isset($_GET["soyisim"])){
  echo  $_GET["soyisim"];
}

else{echo "Henüz bir soyisim değeri girilmedi";}

?>

<form>
<input name="soyisim" type="text">
<input type="submit" value="Gönder">
</form>
--------