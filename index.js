var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

started = false;

// button is clicked to start the game
$(".btn").click(function(){
    // prompt("Who do you want to play? Player 1 or Player 2")
    if (!started) {
        diceRoll();
        gameResult();
        started = true;
    }

});

// Player 1: you (button click, random number is chosen)


function diceRoll() {
    // player 1
    var randomImageSource1 ="./images/dice" + randomNumber1 + ".png";
    $(".img1").attr("src", randomImageSource1);

    // Player 2: computer (button click, random number is chosen)
    var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
    $(".img2").attr("src", randomImageSource2);

}

// Game result
function gameResult(){
    if (randomNumber1 > randomNumber2){
        $(".heading").text("🚩 Player 1 Won!");
        startOver();
    }
    else if (randomNumber1 < randomNumber2) {
        $(".heading").text("Player 2 Won 🚩");
        startOver();
    }
    else if (randomNumber1 === randomNumber2) {
        $(".heading").text("Draw");
        startOver();
    }
};

// Start game again
function startOver() {
    started = false;
}







// function playNow() {
//
//         // player 1
//     var randomNumber1 = Math.floor(Math.random()*6) + 1;
//     var randomImageSource1 ="./images/dice" + randomNumber1 + ".png";
//     document.querySelector(".img1").setAttribute("src", randomImageSource1);
//
//     // player 2
//     var randomNumber2 = Math.floor(Math.random()*6) + 1;
//     var randomImageSource2 ="./images/dice" + randomNumber2 + ".png";
//     document.querySelector(".img2").setAttribute("src", randomImageSource2);
//
//     // Game result
//
//     if (randomNumber1 > randomNumber2){
//         document.querySelector(".heading").innerHTML = "🚩 Player 1 Won!";
//     }
//     else if (randomNumber1 < randomNumber2) {
//         document.querySelector(".heading").innerHTML = "Player 2 Won 🚩";
//     }
//     else if (randomNumber1 === randomNumber2) {
//         document.querySelector(".heading").innerHTML = "Draw";
//     }
//
// }
