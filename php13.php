POST METODU

<?php 

if(isset($_POST["gizlibilgi"])) {
    $gizlibilgi=$_POST["gizlibilgi"];
    echo $gizlibilgi;
}

?>

<form method="post">
    <input name="gizlibilgi" type="text">
    <input type="submit" value="gönder">
</form>