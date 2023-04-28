// Player choice:
const getUserChoice = () => {
  return document.querySelector("input[name='choice']:checked").value;
};

// Computer choice:
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// Determine winner function:
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
};

// Shoot button (play game function):
const playGame = (event) => {
  event.preventDefault();
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();

  // Labels the boxes with their respective choices.
  document.getElementById("playerBox").innerHTML = userChoice + '!';
  document.getElementById("computerBox").innerHTML = computerChoice + '!';

  // Applies a class to each box for stylistic reasons.
  document.querySelector("#playerBox").classList.add("filled");
  document.querySelector("#computerBox").classList.add("filled");

  // Calls the function that determines the winner of a round.
  let outcome = determineWinner(userChoice, computerChoice);
  
  // Inserts the victory message in between the boxes.
  document.getElementById("outcome").innerHTML = outcome;

  // Appies a class to the outcome box for stylistic reasons.
  switch (outcome) {
    case 'You won!':
      document.querySelector("#outcome").classList.add("win");
      document.querySelector("#outcome").classList.remove("loss");
      document.querySelector("#outcome").classList.remove("tie");
      break;
    case 'The computer won!':
      document.querySelector("#outcome").classList.add("loss");
      document.querySelector("#outcome").classList.remove("win");
      document.querySelector("#outcome").classList.remove("tie");
      break;
    default:
      document.querySelector("#outcome").classList.add("tie");
      document.querySelector("#outcome").classList.remove("win");
      document.querySelector("#outcome").classList.remove("loss");
      break;
  }
};