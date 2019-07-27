//counter
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
    

//check qus ans with if else statments
//when you hit done, it will take you to new page
//give vales to correct ans and all
//

function check() {
    document.getElementById("mindbobling").checked = true;
  }
  function uncheck() {
    document.getElementById("mindbobling").checked = false;
}
$(document).ready(function() {

})

// function game1() {
//     // Get the checkbox
//     var checkBox = document.getElementById("clasic");
//     var checkBox1 = document.getElementById("mindbobling");
//     // Get the output text
//     var text = document.getElementById("right");
//     var text1 = document.getElementById("wrong");
  
    // If the checkbox is checked, display the output text
    // var right = document.getElementById("rt");
    // var wrong = document.getElementById("wr");

    //when i hit right ans 
    
//     $("#clasic").on("click", function(){

        
//         if (checkBox == true){
//             CntRight++;
            
//             console.log(CntRight);
//         } else if (checkBox1 == false){
//             CntWrong++;
            
//             console.log(CntWrong);
//         }
//     });

// game1();