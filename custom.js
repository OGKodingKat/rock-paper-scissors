// Function to apply the selected theme to the document
function applyTheme(theme) {
  // Remove all possible theme classes from the body
  document.body.classList.remove("default", "cotton", "space", "retro");

  // Add the selected theme class
  document.body.classList.add(theme);

  // Save the theme in localStorage to persist the choice across page reloads
  localStorage.setItem("theme", theme);
}

// Event listener for the theme switcher button
document.getElementById("theme-submit").addEventListener("click", function () {
  const theme = document.getElementById("theme-switcher").value;
  applyTheme(theme);
});

// Load the theme from localStorage when the page loads
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme") || "default"; // Default to "default" theme if nothing is saved
  applyTheme(savedTheme);
  
  // Set the select dropdown to reflect the saved theme
  document.getElementById("theme-switcher").value = savedTheme;
});

// Function to determine the winner and return themed messages
const determineWinner = (userChoice, computerChoice) => {
  // Get the theme class name, specifically looking for theme-related classes
  const theme = document.body.classList.contains('cotton') ? 'cotton' :
                document.body.classList.contains('space') ? 'space' :
                document.body.classList.contains('retro') ? 'retro' : 'default';

  // Themed messages object
  const themedMessages = {
    default: {
      draw: `Wow, you both chose ${userChoice}. It's a draw!`,
      win: `Boom! Your ${userChoice} crushed the computer's ${computerChoice}. You win! 🎉`,
      lose: `Uh-oh! The computer's ${computerChoice} outsmarted your ${userChoice}. You lose this time. 🤖`,
    },
    "cotton": {
      draw: `Aww, twinsies! You both picked ${userChoice}. It's a sweet little draw 🍭.`,
      win: `Yasss! Your ${userChoice} sparkled brighter than the computer's ${computerChoice}. You win, sugar! 💖`,
      lose: `Oh no! The computer's ${computerChoice} popped your bubblegum dream 😢.`,
    },
    "space": {
      draw: `Galactic sync! Both selected ${userChoice}. Cosmic draw 🌌.`,
      win: `Supernova blast! Your ${userChoice} obliterated the computer's ${computerChoice}. You conquer the galaxy! 🚀`,
      lose: `Black hole moment! The computer’s ${computerChoice} consumed your ${userChoice}. Lost in space... 🌠`,
    },
    "retro": {
      draw: `Whoa, that's totally radical—both picked ${userChoice}. It's a neon draw ✨.`,
      win: `Tubular win! Your ${userChoice} zapped the computer's ${computerChoice}. Victory dance time 💃🕺`,
      lose: `Bogus! The computer’s ${computerChoice} just outgamed your ${userChoice}. Better luck next round, cool cat. 😎`,
    },
  };

  // Get messages for the active theme
  const messages = themedMessages[theme] || themedMessages.default;

  // Check if the game is a draw
  if (userChoice === computerChoice) {
    return messages.draw;
  }

  // Determine if the user won
  const win =
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock");

  if (win) {
    return messages.win;
  } else {
    return messages.lose;
  }
};

// Function to display the result message
function displayResultMessage(message) {
  const resultElement = document.getElementById("result-message");
  if (resultElement) {
    resultElement.textContent = message;
  }
}

