//to know rerun the game
var gameOver = false;

// image clicked to start play

startPlay = $(".img1").click(function(){
    diceRoll();
    gameResult();
});

// Player 1: you (button click, random number is chosen)
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function diceRoll() {
    // player 1
    var randomImageSource1 ="./images/dice" + randomNumber1 + ".png";
    $(".img1").attr("src", randomImageSource1);

    // Player 2: computer (button click, random number is chosen)
    var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
    $(".img2").attr("src", randomImageSource2);

}
var you_won = 0
var computer_won = 0

// Game result
function gameResult(){
    if (randomNumber1 > randomNumber2){
        you_won++
        $(".heading").text("🚩 Player 1 Won!");
        $(".score_board").text(`Current Score is: ${you_won} : ${computer_won}`)
        replay();
    }
    else if (randomNumber1 < randomNumber2) {
        $(".heading").text("Player 2 Won 🚩");
        computer_won++
        $(".score_board").text(`Current Score is: ${you_won} : ${computer_won}`)
        gameOver;
    }
    else if (randomNumber1 === randomNumber2) {
        $(".heading").text("Draw");
        $(".score_board").text(`Current Score is: ${you_won} : ${computer_won}`)
        !gameOver
        replay();
    }
};

// Start game again to refresh page
reload = $(document).keypress(function() {
    location.reload();
});

// Replay
function replay() {
    !gameOver
    if (!gameOver) {
        reload
        startPlay;
    }
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
