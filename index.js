var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");

alert(randomNumber1);
alert(randomNumber2);

var randomDice1 = "dice" + randomNumber1 + ".png";
var randomDice2 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "images/" + randomDice1;
var randomImageSource2 = "images/" + randomDice2;

alert(randomImageSource1);
alert(randomImageSource2);

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);
// image1.setAttribute("src","images/dice1.png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player2 wins";
} else {
  document.querySelector("h1").innerHTML = "⚖️ It's a Draw";
}
