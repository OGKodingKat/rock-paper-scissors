let userWins = 0;
let computerWins = 0;
let draws = 0;
let rounds = 0;

// Load stored scores if available
function loadScores() {
  userWins = parseInt(localStorage.getItem("userWins")) || 0;
  computerWins = parseInt(localStorage.getItem("computerWins")) || 0;
  draws = parseInt(localStorage.getItem("draws")) || 0;
  rounds = parseInt(localStorage.getItem("rounds")) || 0;
  updateScoreboard();
}

function saveScores() {
  localStorage.setItem("userWins", userWins);
  localStorage.setItem("computerWins", computerWins);
  localStorage.setItem("draws", draws);
  localStorage.setItem("rounds", rounds);
}

// Function to update scoreboard UI
function updateScoreboard() {
  document.getElementById("user-score").textContent = `User Win: ${userWins}`;
  document.getElementById("computer-score").textContent = `Computer Win: ${computerWins}`;
  document.getElementById("draw-score").textContent = `Draws: ${draws}`;
  document.getElementById("rounds-played").textContent = `Rounds Played: ${rounds}`;
}

// Function to apply the selected theme to the document
function applyTheme(theme) {
  document.body.classList.remove("default", "cotton", "space", "retro");
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
}

// Event listener for the theme switcher button
document.getElementById("theme-submit").addEventListener("click", function () {
  const theme = document.getElementById("theme-switcher").value;
  applyTheme(theme);
});

// Load theme and scores on page load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme") || "default";
  applyTheme(savedTheme);
  document.getElementById("theme-switcher").value = savedTheme;
  loadScores();
});

// Determine the winner and return themed messages
const determineWinner = (userChoice, computerChoice) => {
  const theme = document.body.classList.contains('cotton') ? 'cotton' :
                document.body.classList.contains('space') ? 'space' :
                document.body.classList.contains('retro') ? 'retro' : 'default';

  const themedMessages = {
    default: {
      draw: `Wow, you both chose ${userChoice}. It's a draw!`,
      win: `Boom! Your ${userChoice} crushed the computer's ${computerChoice}. You win! 🎉`,
      lose: `Uh-oh! The computer's ${computerChoice} outsmarted your ${userChoice}. You lose this time. 🤖`,
    },
    cotton: {
      draw: `Aww, twinsies! You both picked ${userChoice}. It's a sweet little draw 🍭.`,
      win: `Yasss! Your ${userChoice} sparkled brighter than the computer's ${computerChoice}. You win, sugar! 💖`,
      lose: `Oh no! The computer's ${computerChoice} popped your bubblegum dream 😢.`,
    },
    space: {
      draw: `Galactic sync! Both selected ${userChoice}. Cosmic draw 🌌.`,
      win: `Supernova blast! Your ${userChoice} obliterated the computer's ${computerChoice}. You conquer the galaxy! 🚀`,
      lose: `Black hole moment! The computer’s ${computerChoice} consumed your ${userChoice}. Lost in space... 🌠`,
    },
    retro: {
      draw: `Whoa, that's totally radical—both picked ${userChoice}. It's a neon draw ✨.`,
      win: `Tubular win! Your ${userChoice} zapped the computer's ${computerChoice}. Victory dance time 💃🕺`,
      lose: `Bogus! The computer’s ${computerChoice} just outgamed your ${userChoice}. Better luck next round, cool cat. 😎`,
    },
  };

  const messages = themedMessages[theme] || themedMessages.default;

  if (userChoice === computerChoice) {
    return messages.draw;
  }

  const win =
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock");

  return win ? messages.win : messages.lose;
};

// Display result in the DOM
function displayResultMessage(message) {
  const resultElement = document.getElementById("result-message");
  if (resultElement) {
    resultElement.textContent = message;
  }
}

// Game logic when form is submitted
document.getElementById("rps-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const userChoice = document.getElementById("user-choice").value;
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const resultMessage = determineWinner(userChoice, computerChoice);
  displayResultMessage(resultMessage);

  // Update scores based on result
  if (resultMessage.toLowerCase().includes("draw")) {
    draws++;
  } else if (resultMessage.includes("You win") || resultMessage.includes("Yasss") || resultMessage.includes("Supernova") || resultMessage.includes("Tubular")) {
    userWins++;
  } else {
    computerWins++;
  }
  rounds++;

  saveScores();
  updateScoreboard();
});
