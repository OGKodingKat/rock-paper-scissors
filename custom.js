const determineWinner = (userChoice, computerChoice) => {
  // Get the theme class name, specifically looking for theme-related classes
  const theme = document.body.classList.contains('cotton-theme') ? 'cotton-theme' :
                document.body.classList.contains('space-theme') ? 'space-theme' :
                document.body.classList.contains('retro-theme') ? 'retro-theme' : 'default';

  // Themed messages object
  const themedMessages = {
    default: {
      draw: `Wow, you both chose ${userChoice}. It's a draw!`,
      win: `Boom! Your ${userChoice} crushed the computer's ${computerChoice}. You win! 🎉`,
      lose: `Uh-oh! The computer's ${computerChoice} outsmarted your ${userChoice}. You lose this time. 🤖`,
    },
    "cotton-theme": {
      draw: `Aww, twinsies! You both picked ${userChoice}. It's a sweet little draw 🍭.`,
      win: `Yasss! Your ${userChoice} sparkled brighter than the computer's ${computerChoice}. You win, sugar! 💖`,
      lose: `Oh no! The computer's ${computerChoice} popped your bubblegum dream 😢.`,
    },
    "space-theme": {
      draw: `Galactic sync! Both selected ${userChoice}. Cosmic draw 🌌.`,
      win: `Supernova blast! Your ${userChoice} obliterated the computer's ${computerChoice}. You conquer the galaxy! 🚀`,
      lose: `Black hole moment! The computer’s ${computerChoice} consumed your ${userChoice}. Lost in space... 🌠`,
    },
    "retro-theme": {
      draw: `Whoa, that's totally radical—both picked ${userChoice}. It's a neon draw ✨.`,
      win: `Tubular win! Your ${userChoice} zapped the computer's ${computerChoice}. Victory dance time 💃🕺`,
      lose: `Bogus! The computer’s ${computerChoice} just outgamed your ${userChoice}. Better luck next round, cool cat. 😎`,
    },
  };

  // Get messages for the active theme
  const messages = themedMessages[theme] || themedMessages.default;

  // Check if the game is a draw
  if (userChoice === computerChoice) {
    playSound("draw"); // Make sure this function exists elsewhere in your code
    return messages.draw;
  }

  // Determine if the user won
  const win =
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock");

  if (win) {
    playSound("win"); // Ensure win sound is defined
    return messages.win;
  } else {
    playSound("lose"); // Ensure lose sound is defined
    return messages.lose;
  }
};
