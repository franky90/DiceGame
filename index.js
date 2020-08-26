
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomDiceImage1 = "images/dice" + randomNumber1 +".png"; // images/dice1.png
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);


var randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomDiceImage2 = "images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Win!";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Win!🚩";
}else{
  document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}











//
// function randomNumber(){

//
// if(randomNumber1 === 1){
// randomNumber1 = "images/dice1.png";
// return randomNumber1;
// }
// else if(randomNumber1 === 2){
//   randomNumber1 = "images/dice2.png";
//   return randomNumber1;
// }else if(randomNumber1 === 3){
//   randomNumber1 = "images/dice3.png";
//   return randomNumber1;
// }else if(randomNumber1 === 4){
//   randomNumber1 = "images/dice4.png";
//   return randomNumber1;
// }else if(randomNumber1 === 6){
//   randomNumber1 = "images/dice5.png";
//   return randomNumber1;
// }else{
//     randomNumber1 = "images/dice6.png";
//     return randomNumber1;
//   }
// }
