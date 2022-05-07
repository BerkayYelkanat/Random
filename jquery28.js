<script type="text/javascript">  

$("#kare").click(function(){
            $("#kare").animate({
                width:"300px" , 
                height:"300px" ,
                marginLeft:"20px" ,
                marginTop:"20px"

            },2000,function(){
                $("#kare").css("background-color" , "green")    //birden fazla olacak olsaydı virgül yerine : konulur ve css koldarı süslü parentez içerisinde yazılır.
            });

        });

</script>