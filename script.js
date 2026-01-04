const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const placeMarker = function (index, marker) {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    }

    return false;
  };

  return { getBoard, placeMarker };
})();

function createPlayer(name, marker) {
  return { name, marker };
}

const GameController = (function () {
  let gameActive = false;

  let player1 = {};
  let player2 = {};
  let activePlayer = {};

  const board = Gameboard.getBoard();

  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const startGame = function (name1, name2) {
    player1 = createPlayer(name1, "X");
    player2 = createPlayer(name2, "O");
    activePlayer = player1;
    gameActive = true;
  };

  const checkWin = function () {
    for (let condition of winCondition) {
      const [a, b, c] = condition;

      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }

    return false;
  };

  const checkResult = function () {
    if (checkWin()) {
      return "win";
    }
    if (!board.includes("")) {
      return "tie";
    }
    return "continue";
  };

  const playRound = function (index) {
    if (!gameActive) {
      return;
    }

    if (Gameboard.placeMarker(index, activePlayer.marker)) {
      if (checkResult() === "win") {
        return `${activePlayer.name} IS THE WINNER!`;
      } else if (checkResult() === "tie") {
        return "TIE GAME!";
      }

      activePlayer = activePlayer === player1 ? player2 : player1;
    }

    return Gameboard.getBoard();
  };

  return { startGame, playRound };
})();

const displayController = (function () {
  const setupForm = document.querySelector(".set-up-form");
  const player1 = setupForm.querySelector("#p1-name");
  const player2 = setupForm.querySelector("#p2-name");
  const startButton = setupForm.querySelector(".start-game-button");
  const board = document.querySelector(".game-board");

  const renderBoard = function () {
    board.innerHTML = "";

    Gameboard.getBoard().forEach((value, index) => {
      const cell = document.createElement("div");
      cell.classList.add("game-cell");

      cell.dataset.index = index;

      cell.textContent = value;
      if (value === "X") cell.classList.add("X-marker");
      if (value === "O") cell.classList.add("O-marker");

      board.appendChild(cell);
    });
  };

  board.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    GameController.playRound(index);
    renderBoard();
  });

  setupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    player1.disabled = true;
    player2.disabled = true;
    startButton.disabled = true;
    setupForm.classList.add("start-game");

    const p1Name = player1.value.trim().toUpperCase() || "PLAYER 1";
    const p2Name = player2.value.trim().toUpperCase() || "PLAYER 2";

    GameController.startGame(p1Name, p2Name);
  });

  return { renderBoard };
})();

displayController.renderBoard();
