// Scores for Player & CPU
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

// Play 5 rounds of RPS
function playFiveRounds() {
  playRound();
  roundCounter++;
  if (roundCounter < 5) {
    return;
  } else {
    compareScores();
  }
}

// Play a single round of RPS
function playRound() {

  // R,P,S selection of Player & CPU
  let playerSelection = playerPlay;
  let computerSelection = computerPlay();

  /* A block of code will run depending on player's/user's pick  */

  /* Player picks ROCK */
  if (playerSelection == 'rock') {
    if (computerSelection == 'paper') {
      div2.innerText = 'You lose! Paper BEATS Rock';
      computerScore++;
      div1.innerText = 'Player:' + playerScore + '- CPU:' + computerScore;
    } else if (computerSelection == 'scissors') {
      div2.innerText = 'You win! Rock BEATS Scissors';
      playerScore++;
      div1.innerText = `Player:${playerScore} - CPU:${computerScore}`;
    } else if (computerSelection == 'rock') {
      div2.innerText = 'It\'s a tie!';
      div1.innerText = `Player:${playerScore} - CPU:${computerScore}`;
    } else {
      console.log('ERROR');
    }
  }

  /* Player picks PAPER */
  if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      div2.innerText = 'You win! Paper BEATS Rock';
      playerScore++;
      div1.innerText = 'Player:' + playerScore + '- CPU:' + computerScore;
    } else if (computerSelection == 'paper') {
      div2.innerText = 'It\'s a tie!';
      div1.innerText = `Player:${playerScore} - CPU:${computerScore}`;
    } else if (computerSelection == 'scissors') {
      div2.innerText = 'You lose! Scissors BEATS Paper';
      computerScore++;
      div1.innerText = `Player:${playerScore} - CPU:${computerScore}`;
    } else {
      console.log('ERROR');
    }
  }

  /* Player picks SCISSORS */
  if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      div2.innerText = 'You lose! Rock BEATS Scissors';
      computerScore++;
      div1.innerText = 'Player:' + playerScore + '- CPU:' + computerScore;
    } else if (computerSelection == 'paper') {
      div2.innerText = 'You win! Scissors BEATS Paper';
      playerScore++;
      div1.innerText = 'Player:' + playerScore + '- CPU:' + computerScore;
    } else if (computerSelection == 'scissors') {
      div2.innerText = 'It\s a tie!';
      div1.innerText = `Player:${playerScore} - CPU:${computerScore}`;
    } else {
      console.log('ERROR')
    }
  }
}

/* Determine the winner according to their scores */
function compareScores() {
  if (playerScore > computerScore) {
    alert(`**FINAL SCORE**\nPlayer: ${playerScore} - CPU: ${computerScore}\nPlayer WINS!`)
  } else if (playerScore < computerScore) {
    alert(`**FINAL SCORE**\nPlayer: ${playerScore} - CPU: ${computerScore}\nCPU wins!`)
  } else if (playerScore == computerScore) {
    alert(`**FINAL SCORE**\nPlayer: ${playerScore} - CPU: ${computerScore}\nLook's like a TIE!`)
  } else {
    console.log('Umm, you shouldn\'t be reading this')
  }
}

// Player picks RPS
let playerPlay = () => {
  let result = '';
  result = console.log('Pick one - Rock, Paper, Scissors:\n');
  result = result.toLowerCase();

  if (result == 'rock' || result == 'paper' || result == 'scissors') {
    return result;
  } else {
    console.log('Ugh.. you should ONLY pick Rock, Paper, Scissors')
  }
}

// CPU picks RPS
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

// Container for div1 & div2, appends goes inside this container
const scoreContainer = document.querySelector('.score-container');

// Shows Players & CPU scores
const div1 = document.querySelector('.round-score');

// Logs the round results
const div2 = document.createElement('div');
div2.classList.add('round-log');

// BUTTONS

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', e => {
  playerPlay = 'rock', playFiveRounds(), scoreContainer.append(div1), scoreContainer.append(div2)
})

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', e => {
  playerPlay = 'paper', playFiveRounds(), scoreContainer.append(div1), scoreContainer.append(div2)
})

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', e => {
  playerPlay = 'scissors', playFiveRounds(), scoreContainer.append(div1), scoreContainer.append(div2)
})