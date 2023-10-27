let turn = 'x' ;
let tiitle = document.querySelector('.title')
let squarss  = [] ;

function game (id) {
    let squar = document.getElementById(id)

    if ( turn === 'x' && squar.innerHTML == ""){
        squar.innerHTML =  'x'
        turn = 'o'
        tiitle.innerHTML = '...O..'
    }

    else if( turn === 'o' && squar.innerHTML == ""){
        squar.innerHTML = "o"
        turn = 'x'
        tiitle.innerHTML = "..X.."
    }
    check_winnner()
}

//.function check winner 

function check_winnner () {
    for ( let i = 1; i<10 ; i++ ){
        squarss  [i]  = document.getElementById("item" + i).innerHTML;
    }
     
    if (squarss [1] == squarss [2] && squarss [2] == squarss [3] && squarss [1] != ""){

        win(1,2,3)
       
    }
     else if (squarss [4] == squarss [5] && squarss [5] == squarss [6] && squarss [6] != ""){
       win(4,5,6)
    }
    else if (squarss [7] == squarss [8] && squarss [8] == squarss [9] && squarss [8] != ""){
       win(7,8,9)
    }
    //check length
    else if (squarss [1] == squarss [4] && squarss [7] == squarss [4] && squarss [4] != ""){
            win(1,4,7)
    }
    else if (squarss [2] == squarss [5] && squarss [5] == squarss [8] && squarss [8] != ""){
       win(2,5,8)
    }    
    
   else if (squarss [3] == squarss [6] && squarss [6] == squarss [9] && squarss [9] != ""){
        win(3,6,9)
    } 
    
    else if (squarss [3] == squarss [5] && squarss [7] == squarss [5] && squarss [5] != ""){
       win(3,5,7)
    }
    else if (squarss [1] == squarss [5] && squarss [9] == squarss [5] && squarss [5] != ""){
       win(1,5,9)
    }


}


function win (nam1 , nam2 , nam3){
    tiitle.innerHTML = `${squarss[nam1]} winner`
    document.getElementById("item" + nam1).style.background ="#000"
    document.getElementById("item" + nam2).style.background ="#000"
    document.getElementById("item" + nam3).style.background ="#000"

    setInterval(() =>tiitle.innerHTML += ".",1000);

    setTimeout(function relod() {
        location.reload()
        
    },4000)

}