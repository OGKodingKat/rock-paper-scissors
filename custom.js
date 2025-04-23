const determineWinner = (userChoice, computerChoice) => {
  const theme = document.body.className;

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

  const messages = themedMessages[theme] || themedMessages.default;

  if (userChoice === computerChoice) {
    playSound("draw");
    return messages.draw;
  }

  const win =
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock");

  if (win) {
    playSound("win");
    return messages.win;
  } else {
    playSound("lose");
    return messages.lose;
  }
};

