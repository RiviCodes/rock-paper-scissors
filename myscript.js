/*Rock, Paper, Scissors */

function game() {

  let playerScore = parseInt(0);
  let computerScore = parseInt(0);

  /* For loop to play 5 rounds of the game */

  for (i = 0; i < 5; i++) {

    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    /* A block of code will run depending on player's/user's pick  */

    /* Player picks ROCK */
    if (playerSelection == 'rock') {
      if (/*playerSelection == 'rock' &&*/ computerSelection == 'paper') {
        alert('You lose! Paper BEATS Rock');
        computerScore++;
      } else if (/*playerSelection == 'rock' &&*/ computerSelection == 'scissors') {
        alert('You win! Rock BEATS Scissors');
        playerScore++;
      } else if (/*playerSelection == 'rock' &&*/ computerSelection == 'rock') {
        alert('It\'s a tie!');
      } else {
        alert('ERROR');
      }
    }
    /* Player picks PAPER */
    if (playerSelection == 'paper') {
      if (computerSelection == 'rock') {
        alert('You win! Paper BEATS Rock');
        playerScore++;
      } else if (computerSelection == 'paper') {
        alert('It\'s a tie!');
      } else if (computerSelection == 'scissors') {
        alert('You lose! Scissors BEATS Paper');
        computerScore++;
      } else {
        alert('ERROR');
      }
    }
    /* Player picks SCISSORS */
    if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        alert('You lose! Rock BEATS Scissors');
        computerScore++;
      } else if (computerSelection == 'paper') {
        alert('You win! Scissors BEATS Paper');
        playerScore++;
      } else if (computerSelection == 'scissors') {
        alert('It\s a tie!');
      } else {
        alert('ERROR')
      }
    }
  }
  /* Determine the winner according to their score */
  if (playerScore > computerScore) {
    window.prompt(`**FINAL SCORE**\nPlayer: ${playerScore} - CPU: ${computerScore}\nPlayer WINS!`)
  } else if (playerScore < computerScore) {
    window.prompt(`**FINAL SCORE**\nPlayer: ${playerScore} - CPU: ${computerScore}\nCPU wins!`)
  } else if (playerScore == computerScore) {
    window.prompt(`**FINAL SCORE**\nPlayer: ${playerScore} - CPU: ${computerScore}\nLook's like a TIE!`)
  } else {
    window.prompt('Umm, you shouldn\'t be reading this')
  }
}

function playerPlay() {
  let result = '';
  result = window.prompt('Pick one - Rock, Paper, Scissors:\n');
  result = result.toLowerCase();

  if (result == 'rock' || result == 'paper' || result == 'scissors') {
    return result;
  } else {
    alert('Ugh.. you should ONLY pick Rock, Paper, Scissors')
  }
}

function computerPlay() {
  let result = '';
  let computerPick = Math.floor(Math.random() * 3) + 1;
  if (computerPick == 1) {
    result = 'rock';
  } else if (computerPick == 2) {
    result = 'paper';
  } else if (computerPick == 3) {
    result = 'scissors';
  } else {
    console.log('ERROR')
  }
  return result;
}