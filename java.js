$(document).ready(function() {

    var CntRight = 0;
    var CntWrong = 0;
    
    
    function myFunction() {
        timer--;
        $("#timer").html(timer + "  Seconds")
        if(timer == 0) {
            gameOver();
        }
    }

    var timer = 30;
    var countDown;
    $("#doit").on("click", function() {
        countDown=setInterval(myFunction, 1000)
        $("#mouse").show() 
        $(".bear").hide()
        $(".hippo").hide()
    });
    
    function gameOver() {
        $(".bear").show()
        $("#mouse").hide()
        $(".hippo").hide()
    }
    
    $("#monkey").on("click", gameOver)
    
    $("#mouse").hide()
    $(".bear").hide()
    
 //    
    $(".right").on("click", function(){
        CntRight++;
        console.log(CntRight);
        $("#gotit").text(CntRight);
        console.log("I clicked right");

   
});
$(".mindbobling").on("click", function(){
    CntWrong++;
    console.log(CntWrong);
    $("#didnot").text(CntWrong);
    console.log("I clicked wrong");


});

    $("#monkey").on("click", function() {

       console.log("I clicked the submit button");
        function game1() {
            // Get the checkbox
            
            var checkBox = document.getElementsByClassName("right");
            var checkBox1 = document.getElementsByClassName("mindbobling");
            console.log(checkBox);
            console.log(checkBox1);
        }
        game1()
    });
    });