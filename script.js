let turn = "x";
let tiitle = document.querySelector(".title");
let player_X = 0;
let player_O = 0;
let squarss = [];

// reset time 
let resetTimeout = 0;

// CONSTANTS
const O_TURN = 'o';
const X_TURN = 'x';

const TURN_X_TITLE = 'Turn {X}';
const TURN_O_TITLE = 'Turn {O}';

// creat the line
const line = document.createElement("div");
line.classList.add("line");
line.id = "line";
document.querySelector(".game").appendChild(line);
let style_line = document.querySelector(".line");

// the game


function updateSquare(square, value) {
  square.innerHTML = value;
}

function updateTurnTitle(value) {
  tiitle.innerHTML = value;
}

function game(id) {
  const squar = document.getElementById(id);
  if (turn === X_TURN && squar.innerHTML === "") {
    updateSquare(squar, X_TURN);

    //line and box-shadow
    squar.setAttribute(
      "style",
      "text-shadow: 0 0 10px #004de8, 0 0 40px #004de8, 0 0 40px #004de8, 0 0 80px #004de8 , 0 0 180px #004de8; "
    );

    turn = O_TURN;
    updateTurnTitle(TURN_O_TITLE);

  } else if (turn === O_TURN && squar.innerHTML == "") {
    updateSquare(squar, O_TURN);

    turn = X_TURN;

    updateTurnTitle(TURN_X_TITLE);

    //line and box-shadow
    // line.classList.add("shadow_o")
    squar.setAttribute(
      "style",
      " text-shadow: 0 0 10px #F56B93, 0 0 40px #F56B93, 0 0 40px #F56B93,0 0 80px #F56B93 , 0 0 180px #F56B93;"
    );
  }
  check_winnner();
}

//.function check winner

function check_winnner() {
  for (let i = 1; i < 10; i++) {
    squarss[i] = document.getElementById("item" + i).innerHTML;
  }

  if (
    squarss[1] == squarss[2] &&
    squarss[2] == squarss[3] &&
    squarss[1] != ""
  ) {
    win(1, 2, 3);
    style_line.setAttribute(
      "style",
      "width: 340px; height: 4px; background-color: #fff; position: absolute; top: 29%"
    );
    //on mobile
    if (window.innerWidth <= 600) {
      style_line.setAttribute(
        "style",
        "width: 340px; height: 4px; background-color: #fff; position: absolute; top: 35%"
      );
    }

  } else if (
    squarss[4] == squarss[5] &&
    squarss[5] == squarss[6] &&
    squarss[6] != ""
  ) {
    win(4, 5, 6);
    style_line.setAttribute(
      "style",
      "width: 340px; height: 4px; background-color: #fff; position: absolute; top: 43%"
    );

    //on mobile
    if (window.innerWidth <= 600) {
      style_line.setAttribute(
        "style",
        "width: 340px; height: 4px; background-color: #fff; position: absolute; top: 40%"
      );
    }

  } else if (
    squarss[7] == squarss[8] &&
    squarss[8] == squarss[9] &&
    squarss[8] != ""
  ) {
    win(7, 8, 9);
    style_line.setAttribute(
      "style",
      "width: 340px; height: 4px; background-color: #fff; position: absolute; top: 57%"
    );


    //on mobile
    if (window.innerWidth <= 600) {
      style_line.setAttribute(
        "style",
        "width: 340px; height: 4px; background-color: #fff; position: absolute; top: 52.5%"
      );
    }
  }

  //check length
  else if (
    squarss[1] == squarss[4] &&
    squarss[7] == squarss[4] &&
    squarss[4] != ""
  ) {
    win(1, 4, 7);
    style_line.setAttribute(
      "style",
      "width: 4px; height: 330px; background-color: #fff; position: absolute ; right:57%; "
    );

    //on mobile
    if (window.innerWidth <= 600) {
      style_line.setAttribute(
        "style",
        "width: 4px; height: 330px; background-color:#fff; position: absolute; right:80.5%; "
      );
    }
  } else if (
    squarss[2] == squarss[5] &&
    squarss[5] == squarss[8] &&
    squarss[8] != ""
  ) {
    win(2, 5, 8);
    style_line.setAttribute(
      "style",
      "width: 4px; height: 310px; background-color: #fff; position: absolute; right:50%; "
    );

    //on mobile
    if (window.innerWidth <= 600) {
      style_line.setAttribute(
        "style",
        "width: 4px; height: 330px; background-color: #fff; position: absolute; right:50%; "
      );
    }
  } else if (
    squarss[3] == squarss[6] &&
    squarss[6] == squarss[9] &&
    squarss[9] != ""
  ) {
    win(3, 6, 9);
    style_line.setAttribute(
      "style",
      "width: 4px; height: 330px; background-color: #fff; position: absolute; right:42.7%; "
    );

    //on mobile
    if (window.innerWidth <= 600) {
      style_line.setAttribute(
        "style",
        "width: 4px; height: 330px; background-color: #fff; position: absolute; right:22%;"
      );
    }
  } else if (
    squarss[3] == squarss[5] &&
    squarss[7] == squarss[5] &&
    squarss[5] != ""
  ) {
    win(3, 5, 7);
    style_line.setAttribute(
      "style",
      "width: 445px; height: 4px; background-color: #fff; position: absolute; top: 44%; left: 36%; transform: rotate(-45deg); text-align: center;"
    );
    //on mobile
    if (window.innerWidth <= 600) {
      style_line.setAttribute(
        "style",
        "width: 430px; height: 4px; background-color: #fff; position: absolute; top: 38%; left: 0%; transform: rotate(-45deg); text-align: center;"
      );
    }
  } else if (
    squarss[1] == squarss[5] &&
    squarss[9] == squarss[5] &&
    squarss[5] != ""
  ) {
    win(1, 5, 9);
    style_line.setAttribute(
      "style",
      "width: 445px; height: 4px; background-color: #fff; position: absolute; top: 44%; left: 36%; transform: rotate(45deg); text-align: center;"
    );
    //on mobile
    if (window.innerWidth <= 600) {
      style_line.setAttribute(
        "style",
        "width: 430px; height: 4px; background-color: #fff; position: absolute; top: 40%; left: 0%; transform: rotate(45deg); text-align: center;"
      );
    }
  } else {
    // fair game
    let isBoardFull = squarss.every((square) => square !== "");
    if (isBoardFull) {
      tiitle.innerHTML = "Fair";
      resetTimeout = setTimeout(() => resetGame(), 1000);
    }
  }
}




  // squar disable
  function disableSquar(){
    for (let i = 1; i < 10; i++) {
      squarss[i] = document.getElementById("item" + i).innerHTML;
      document.getElementById("item" + i).classList.add("disabled-square");
    }
   }

//who is win

function win(nam1) {
  if (squarss[nam1] == "x") {
    line.classList.add("shadow_x");
    player_X++;
    turn = "x";
    document.querySelector("#playerX").innerHTML = player_X;
  } else {
    line.classList.add("shadow_o");
    turn = "o";
    player_O++;
    document.querySelector("#playerO").innerHTML = player_O;
  }
  tiitle.innerHTML = `${squarss[nam1]} winner`;



 disableSquar()
  resetTimeout = setTimeout(resetGame, 1000);

  // check score game
  checkGame(nam1)
}

function resetGame(isButton) {

  if (isButton) {
    player_X = 0;
    player_O = 0;

  }
  document.querySelector("#playerO").innerHTML = player_O;
  document.querySelector("#playerX").innerHTML = player_X;

  for (let i = 1; i < 10; i++) {
    squarss[i] = document.getElementById("item" + i).innerHTML;
    squarss.length = 0;
    document.getElementById("item" + i).innerText = "";
    document.getElementById("item" + i).style.backgroundColor = "#020236";
    document.getElementById("item" + i).classList.remove("disabled-square");
  }
  line.classList.remove("line");
  line.classList.remove("shadow_x");
  line.classList.remove("shadow_o");
  style_line.setAttribute("style", "width:0,height:0");
  clearTimeout(resetTimeout);
}

// score Game 



function checkGame(nam1) {

  if (player_O ===5 || player_X === 5) {
    if (squarss[nam1] == "x") {
        document.querySelector(".end").style.display = "flex"
        document.querySelector("#winner").textContent="X"
        document.querySelector("#buttn").classList.add("disabled-square")
        clearTimeout(resetTimeout);
        document.querySelector(".container").classList.add("none")
        

    }
    else {
      document.querySelector(".end").style.display = "flex"
      document.querySelector("#winner").textContent="O"
      document.querySelector("#buttn").classList.add("disabled-square")
      clearTimeout(resetTimeout);

      document.querySelector(".container").classList.add("none")

    }
  }
}




function newGame (){
  resetGame(true)
  document.querySelector(".end").style.display = "none"
  document.querySelector("#buttn").classList.remove("disabled-square")
  document.querySelector(".container").classList.remove("none")
}