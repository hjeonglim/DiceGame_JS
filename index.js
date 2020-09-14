function playNow(){

        // Player 1

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number 1-6

    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

    var randomImageSource = "images/" + randomDiceImage; //images/dice1.png -images/dice6.png

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);


    // Player 2 - shorter code

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    // Depending on the game result, change the heading text

    if (randomNumber1 > randomNumber2) {
        document.querySelector(".heading").innerHTML = "🚩 Player 1 Won!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector(".heading").innerHTML = "Player 2 Won! 🚩";
    }
    else {
        document.querySelector(".heading").innerHTML = "Draw!";
    }
}
