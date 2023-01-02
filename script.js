const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        winner(this.innerText, computerChoice);

        if (moves == 10) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  };

  const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".player");
    const computerScoreBoard = document.querySelector(".computer");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.textContent = "Tie :|";
    } else if (player == "rock") {
      if (computer == "paper") {
        result.textContent = "Computer wins!";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player wins!";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        result.textContent = "Computer won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "You win!";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        result.textContent = "Computer won!";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "You won!";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  };

  const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");
    const reloadBtn = document.querySelector(".reload");

    playerOptions.forEach((option) => {});

    chooseMove.innerText = "Game Over";

    if (playerScore > computerScore) {
      result.innerText = "You Won!";
    } else if (playerScore < computerScore) {
      result.innerText = "You Lost!";
    } else {
      result.innerText = "Tie";
    }
    reloadBtn.innerText = "Restart";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  playGame();
};

game();
