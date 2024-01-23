let turn = "x";
let tiitle = document.querySelector(".title");
let player_X = 0;
let player_O = 0;
let squarss = [];



// creat the line
let line = document.createElement("div");
line.classList.add("line");
line.id ="line"
document.querySelector(".game").appendChild(line)
let style_line =document.querySelector(".line");


// the game
function game(id) {
  let squar = document.getElementById(id);
  if (turn === "x" && squar.innerHTML == "") {
    squar.innerHTML = "x";
    style_line.style.boxShadow = "0 0 10px #004de8, 0 0 40px #004de8, 0 0 40px #004de8, 0 0 80px #004de8, 0 0 180px #004de8";    
    squar.setAttribute("style","text-shadow: 0 0 10px #004de8, 0 0 40px #004de8, 0 0 40px #004de8, 0 0 80px #004de8 , 0 0 180px #004de8; ")
    turn = "o";
    tiitle.innerHTML = "Turn{O}";
  } else if (turn === "o" && squar.innerHTML == "") {
    squar.innerHTML = "o";
    turn = "x";
    tiitle.innerHTML = "Turn{X}";
    style_line.style.boxShadow = "0 0 10px #F56B93, 0 0 40px #F56B93, 0 0 40px #F56B93, 0 0 80px #F56B93, 0 0 180px #F56B93, 0 0 300px #F56B93";
    squar.setAttribute("style"," text-shadow: 0 0 10px #F56B93, 0 0 40px #F56B93, 0 0 40px #F56B93,0 0 80px #F56B93 , 0 0 180px #F56B93;")
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
    style_line.setAttribute("style","width: 340px; height: 4px; background-color: #fff; position: absolute; top: 29%")
  } else if (
    squarss[4] == squarss[5] &&
    squarss[5] == squarss[6] &&
    squarss[6] != ""
  ) {
    win(4, 5, 6);
    style_line.setAttribute("style","width: 340px; height: 4px; background-color: #fff; position: absolute; top: 43%")

  } else if (
    squarss[7] == squarss[8] &&
    squarss[8] == squarss[9] &&
    squarss[8] != ""
  ) {
    win(7, 8, 9);
    style_line.setAttribute("style","width: 340px; height: 4px; background-color: #fff; position: absolute; top: 57%")

  }
  //check length
  else if (
    squarss[1] == squarss[4] &&
    squarss[7] == squarss[4] &&
    squarss[4] != ""
  ) {
    win(1, 4, 7);
    style_line.setAttribute("style","width: 4px; height: 330px; background-color: #fff; position: absolute; right:57%; ")
  } else if (
    squarss[2] == squarss[5] &&
    squarss[5] == squarss[8] &&
    squarss[8] != ""
  ) {
    win(2, 5, 8);
    style_line.setAttribute("style","width: 4px; height: 310px; background-color: #fff; position: absolute; right:50%; ")

  } else if (
    squarss[3] == squarss[6] &&
    squarss[6] == squarss[9] &&
    squarss[9] != ""
  ) {
    win(3, 6, 9);
    style_line.setAttribute("style","width: 4px; height: 330px; background-color: #fff; position: absolute; right:42.7%; ")

  } else if (
    squarss[3] == squarss[5] &&
    squarss[7] == squarss[5] &&
    squarss[5] != ""
  ) {
    win(3, 5, 7);
    style_line.setAttribute("style","width: 445px; height: 4px; background-color: #fff; position: absolute; top: 44%; left: 36%; transform: rotate(-45deg); text-align: center;")

  } else if (
    squarss[1] == squarss[5] &&
    squarss[9] == squarss[5] &&
    squarss[5] != ""
  ) {
    win(1, 5, 9);
    style_line.setAttribute("style","width: 445px; height: 4px; background-color: #fff; position: absolute; top: 44%; left: 36%; transform: rotate(45deg); text-align: center;")
  }else{  
  // fair game 
  let isBoardFull = squarss.every(square => square !== "");
  if (isBoardFull) {
    tiitle.innerHTML = "Fair";
    setTimeout(() => resetGame(), 2000);
  }
  }
}
//add the score of game


//who is win

function win(nam1, nam2, nam3) {
  if (squarss[nam1] == "x") {
    player_X++;
    turn = "x"
    document.querySelector("#playerX").innerHTML = player_X;
  } else {
    turn="o"
    player_O++;
    document.querySelector("#playerO").innerHTML = player_O;
  }
  tiitle.innerHTML = `${squarss[nam1]} winner`;

  if(window.innerWidth<=600){
    document.getElementById("item" + nam1).style.background = "rgb(12, 12, 168)";
    document.getElementById("item" + nam2).style.background = "rgb(12, 12, 168)";
    document.getElementById("item" + nam3).style.background = "rgb(12, 12, 168)";
  }


    
// squar disable
  for (let i = 1; i < 10; i++) {
    squarss[i] = document.getElementById("item" + i).innerHTML;
    document.getElementById("item" + i).classList.add('disabled-square');

  }
  setTimeout(resetGame, 4000);

  
}





function resetGame(){
  for (let i = 1; i < 10; i++) {
    squarss[i] = document.getElementById("item" + i).innerHTML;
    squarss.length = 0;
    document.getElementById("item" + i).innerText = "";
    document.getElementById("item" + i).style.backgroundColor ="#020236";
    document.getElementById("item" + i).classList.remove('disabled-square'); 
  }
  line.classList.remove("line")
  style_line.setAttribute("style","width:0,height:0")
}


function restart (){
  for (let i = 1; i < 10; i++) {
    squarss[i] = document.getElementById("item" + i).innerHTML;
    squarss.length = 0;
    document.getElementById("item" + i).innerText = "";
    document.getElementById("item" + i).style.backgroundColor ="#020236";
    document.getElementById("item" + i).classList.remove('disabled-square'); 
  }
  line.classList.remove("line")
  style_line.setAttribute("style","width:0,height:0")
  }


  