const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const placeMarker = function (index, marker) {
    if (board[index] === "") {
      board[index] = marker;
    }

    return board;
  };

  return { getBoard, placeMarker };
})();

function createPlayer(name, marker) {
  return { name, marker };
}
