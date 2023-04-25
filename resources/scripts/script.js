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

  document.getElementById("playerBox").innerHTML = userChoice + '!';
  document.getElementById("computerBox").innerHTML = computerChoice + '!';

  document.querySelector("#playerBox").classList.add("filled");
  document.querySelector("#computerBox").classList.add("filled");


  return determineWinner(userChoice, computerChoice);
  
};