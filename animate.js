$("#kare").click(function(){
    $("#kare").animate({
        width:"300px",
        height:"300px",
        marginLeft:"20px",
        marginTop:"20px"
    },2000,function(){
        $("#kare").css("background-color","green");
    });

});