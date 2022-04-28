
		document.getElementById("kontrol").onclick=function(){
			var sifre="maydanoz";
			var girilenKelime=document.getElementById("girilen").value;
			if(sifre==girilenKelime){
				document.getElementById("sonuc").innerHTML="DOĞRU BİLDİNİZ";
			}
			else{
				document.getElementById("sonuc").innerHTML="BİLEMEDİNİZ";
			}
		}
		
