const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function playerChoice(playerSelection) {
  const computerSelection = getComputerChoice();

  document.getElementById('player').textContent = capitalize(playerSelection);
  document.getElementById('computer').textContent = capitalize(computerSelection);

  const result = determineWinner(playerSelection, computerSelection);
  document.getElementById('winner').textContent = result;

  document.getElementById('status').textContent = 'Game Over';

  // Disable buttons
  const buttons = document.querySelectorAll('.choices button');
  buttons.forEach(btn => btn.disabled = true);

  // Show reset button
  document.getElementById('resetBtn').style.display = 'inline-block';
}

function resetGame() {
  document.getElementById('player').textContent = '';
  document.getElementById('computer').textContent = '';
  document.getElementById('winner').textContent = '';
  document.getElementById('status').textContent = 'Make your move!';

  const buttons = document.querySelectorAll('.choices button');
  buttons.forEach(btn => btn.disabled = false);

  document.getElementById('resetBtn').style.display = 'none';
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}