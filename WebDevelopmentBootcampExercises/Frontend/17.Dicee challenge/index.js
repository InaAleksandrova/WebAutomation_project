var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImageSouce = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImageSouce);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImageSouce2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDiceImageSouce2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 is the winner!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 is the winner! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw! Try again!";
}