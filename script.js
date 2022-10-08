"use-strict";

const checkBtn = document.querySelector(".check");
const enteredNumber = document.querySelector(".number");
const message = document.querySelector(".message");
let scoreShow = document.querySelector(".score");
const againBtn = document.querySelector(".again");
const body = document.querySelector("body");
const highScore = document.querySelector(".highscore");
let inputValue;
let highScoreList = [];

// getting random number from 1-20
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

// Again button implementation

againBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  body.style.backgroundColor = "black";
  message.innerHTML = "Start guessing...";
  score = 20;
  inputValue = document.querySelector(".guess").value = "";
  enteredNumber.innerHTML = "?";
  highScore.innerHTML = Math.max(highScoreList);
});

// Check button implementation
checkBtn.addEventListener("click", function () {
  inputValue = document.querySelector(".guess");
  // when player enters no value
  if (!inputValue.value) {
    message.innerHTML = "Please, enter a number";
  } else if (score > 1) {
    // when player is won
    if (inputValue.value == randomNumber) {
      body.style.backgroundColor = "green";
      message.innerHTML = "Correct Number";
      enteredNumber.innerText = randomNumber;
      highScoreList.push(score);
      // when number is too high
    } else if (inputValue.value > randomNumber) {
      message.innerText = "Too high!";
      score--;
      scoreShow.innerHTML = score;
      inputValue.value = "";
      // when number is too low
    } else if (inputValue.value < randomNumber) {
      message.innerText = "Too low";
      score--;
      scoreShow.innerHTML = score;
      inputValue.value = "";
    }
    // if the score is less than 1
  } else {
    message.innerHTML = "You lost the game";
  }
});
