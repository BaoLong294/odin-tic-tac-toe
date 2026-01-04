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
  const player1 = createPlayer("Long", "X");
  const player2 = createPlayer("Sim", "O");
  let activePlayer = player1;

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

  return { playRound };
})();

const displayController = (function () {
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

  return { renderBoard };
})();

// TEST
GameController.playRound(1);
GameController.playRound(4);
displayController.renderBoard();
