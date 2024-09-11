const choices = ["rock", "paper", "scissors"];

const getUserChoice = () => {
  const selectElement = document.getElementById("user-choice");
  return selectElement.value;
};

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return (
      "Wow, you both chose " +
      userChoice +
      ". It's like you're psychic... or just really indecisive. It's a draw!"
    );
  }

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return `Boom! Your ${userChoice} crushed the computer's ${computerChoice}. You win! 🎉`;
  } else {
    return `Uh-oh! The computer's ${computerChoice} outsmarted your ${userChoice}. You lose this time. 🤖`;
  }
};

// Step 5: Update the HTML div with funny results
const displayResults = (userChoice, computerChoice, winner) => {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <p><strong>You chose:</strong> ${userChoice}</p>
    <p><strong>Computer chose:</strong> ${computerChoice}</p>
    <p><strong>${winner}</strong></p>
    <p>Wanna try again, or are you afraid the robot uprising starts here? 😏</p>
  `;
};
document.getElementById("rps-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);

  displayResults(userChoice, computerChoice, winner);
});
