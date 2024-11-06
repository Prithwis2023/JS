let number = generateRandomNumber(1, 100);
let count = 0;

function generateRandomNumber(min, max) {
  max = Math.floor(max);
  min = Math.floor(min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeGuess() {
  let guessInput = document.getElementById("guessInput").value;
  let guess = parseInt(guessInput);
  let resultMessage = document.getElementById("resultMessage");
  let attemptsMessage = document.getElementById("attemptsMessage");
  let scoreMessage = document.getElementById("scoreMessage");

  if (isNaN(guess)) {
    resultMessage.textContent = "Please enter a valid number!";
    return;
  }

  count++;

  if (guess === number) {
    resultMessage.textContent = "You guessed it right!";
    if (count === 1) {
      attemptsMessage.textContent =
        "WOW!! You guessed it on the first attempt! 😎";
    } else {
      attemptsMessage.textContent = `You guessed it in ${count} attempts.`;
    }
    let score = 100 - (count - 1);
    scoreMessage.textContent = `Score: ${score}`;
    document.getElementById("guessInput").disabled = true;
  } else if (guess < number) {
    resultMessage.textContent = "Guess a greater number.";
  } else {
    resultMessage.textContent = "Guess a smaller number.";
  }
}

function resetGame() {
  count = 0;
  number = generateRandomNumber(1, 100);
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("resultMessage").textContent = "";
  document.getElementById("attemptsMessage").textContent = "";
  document.getElementById("scoreMessage").textContent = "";
}
