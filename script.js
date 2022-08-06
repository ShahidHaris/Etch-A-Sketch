const body = document.body;
const container = document.createElement("div");
container.className = "main-div";

for (x = 0; x < 9; x++) {
  let board = document.createElement("div");
  board.className = "grid-div";

  container.appendChild(board);
}

body.appendChild(container);
