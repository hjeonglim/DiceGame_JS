function playNow() {

        // player 1
    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    var randomImageSource1 ="./images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomImageSource1);

    // player 2
    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    var randomImageSource2 ="./images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomImageSource2);

    // Game result

    if (randomNumber1 > randomNumber2){
        document.querySelector(".heading").innerHTML = "🚩 Player 1 Won!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector(".heading").innerHTML = "Player 2 Won 🚩";
    }
    else if (randomNumber1 === randomNumber2) {
        document.querySelector(".heading").innerHTML = "Draw";
    }

}
