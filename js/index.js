/*juego del tricky 
-Problema encontrar un jugador
-el jugador escoge  X ó O e inicia el juego 
-como pintar el tablero 
-el jugador hace una jugada 

BOARD*/

var board = [
  (move1 = { p: "0,0", v: "X", index: "0" }),
  (move2 = { p: "0,1", v: "", index: "1" }),
  (move3 = { p: "0,2", v: "", index: "2" }),
  (move4 = { p: "1,0", v: "X", index: "3" }),
  (move5 = { p: "1,1", v: "", index: "4" }),
  (move6 = { p: "1,2", v: "", index: "5" }),
  (move7 = { p: "2,0", v: "X", index: "6" }),
  (move8 = { p: "2,1", v: "", index: "7" }),
  (move9 = { p: "2,2", v: "", index: "8" }),
];

const getPlayerBoard = (board, player) => {
  return board.filter((move) => move.v === player);
};

const boardPlayerX = getPlayerBoard(board, "X");
boardPlayerX;

const column1 = (boardPlayerX) => {
  return (
    boardPlayerX.filter(
      (b) => b.index === "0" || b.index === "3" || b.index === "6"
    ).length === 3
  );
};

const c1 = column1(boardPlayerX);
console.log(c1);

const column2 = (boardPlayerX) => {
  return (
    boardPlayerX.filter(
      (b) => b.index === "1" || b.index === "4" || b.index === "7"
    ).length === 3
  );
};
const c2 = column2(boardPlayerX);
console.log(c2);

const column3 = (boardPlayerX) => {
  return (
    boardPlayerX.filter(
      (b) => b.index === "2" || b.index === "5" || b.index === "8"
    ).length === 3
  );
};
const c3 = column3(boardPlayerX);
console.log(c3);
// rowa
const row1 = (boardPlayerX) => {
  return (
    boardPlayerX.filter(
      (b) => b.index === "0" || b.index === "1" || b.index === "2"
    ).length === 3
  );
};
const r1 = row1(boardPlayerX);
console.log(r1);

const row2 = (boardPlayerX) => {
  return (
    boardPlayerX.filter(
      (b) => b.index === "3" || b.index === "4" || b.index === "5"
    ).length === 3
  );
};
const r2 = row2(boardPlayerX);
console.log(r2);

const row3 = (boardPlayerX) => {
  return (
    boardPlayerX.filter(
      (b) => b.index === "6" || b.index === "7" || b.index === "8"
    ).length === 3
  );
};
const r3 = row3(boardPlayerX);
console.log(r3);

const diagonal1 = (boardPlayerX) => {
  return (
    boardPlayerX.filter(
      (b) => b.index === "0" || b.index === "4" || b.index === "8"
    ).length === 3
  );
};
const d1 = diagonal1(boardPlayerX);
console.log(d1);
const diagonal2 = (boardPlayerX) => {
  return (
    boardPlayerX.filter(
      (b) => b.index === "2" || b.index === "4" || b.index === "6"
    ).length === 3
  );
};
const d2 = diagonal2(boardPlayerX);
console.log(d2);

const calcularC = (p, board) => {
    const valor = [];
  
    for (let i = p; i <= 6 + p; i += 3) {
      valor.push(board[i].v); 
    }
    return valor;
  };
  
  const cal = calcularC(0, board); 
  console.log(cal); 