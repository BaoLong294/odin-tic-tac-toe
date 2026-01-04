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

  const playRound = function (index) {
    if (Gameboard.placeMarker(index, activePlayer.marker)) {
      activePlayer = activePlayer === player1 ? player2 : player1;
    }

    return Gameboard.getBoard();
  };

  return { playRound };
})();
