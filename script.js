const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => board;
  return { getBoard };
})();

function createPlayer(name, marker) {
  return { name, marker };
}
