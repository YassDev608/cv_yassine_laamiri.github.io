
let elt = "";
let options = document.getElementsByClassName("options-elt")
let btns = document.querySelectorAll("[data-buttons]");
let opnt = "";



document.getElementsByClassName("message")[0].children[1].addEventListener("click",()=>{
    window.location.reload();
});


for(let x of options) {
    x.addEventListener("click",()=>{
        document.getElementsByClassName("options").item(0).style.display = "none";
        elt =  x.textContent;
        opnt = oponent();
        document.getElementsByClassName("tic-tac-toe").item(0).style.display = "grid";
    })

}



function oponent() {
    switch(elt) {
        case "X":
            return "O"
        case "O":
            return "X"
        default:
            return ""
    }
}

function equals(a, b, c, x) {
    if (a == b && b == c && c == x && x != '') {
      return true;
    }
    return false;
  }


  function valueOf(L, xo) {
    if (xo == 'X') {
      if (equals(L[0][0], L[0][1], L[0][2], 'X') || equals(L[1][0], L[1][1], L[1][2], 'X') || equals(L[2][0], L[2][1], L[2][2], 'X') || equals(L[0][0], L[1][0], L[2][0], 'X') || equals(L[0][1], L[1][1], L[2][1], 'X') || equals(L[0][2], L[1][2], L[2][2], 'X') || equals(L[0][0], L[1][1], L[2][2], 'X') || equals(L[0][2], L[1][1], L[2][0], 'X')) {
        return 1;
      } else if (equals(L[0][0], L[0][1], L[0][2], 'O') || equals(L[1][0], L[1][1], L[1][2], 'O') || equals(L[2][0], L[2][1], L[2][2], 'O') || equals(L[0][0], L[1][0], L[2][0], 'O') || equals(L[0][1], L[1][1], L[2][1], 'O') || equals(L[0][2], L[1][2], L[2][2], 'O') || equals(L[0][0], L[1][1], L[2][2], 'O') || equals(L[0][2], L[1][1], L[2][0], 'O')) {
        return -1;
      } else {
        return 0;
      }
    }
    else if (xo == 'O') {
        if (equals(L[0][0], L[0][1], L[0][2], 'O') || equals(L[1][0], L[1][1], L[1][2], 'O') || equals(L[2][0], L[2][1], L[2][2], 'O') || equals(L[0][0], L[1][0], L[2][0], 'O') || equals(L[0][1], L[1][1], L[2][1], 'O') || equals(L[0][2], L[1][2], L[2][2], 'O') || equals(L[0][0], L[1][1], L[2][2], 'O') || equals(L[0][2], L[1][1], L[2][0], 'O')) {
          return 1;
        } else if (equals(L[0][0], L[0][1], L[0][2], 'X') || equals(L[1][0], L[1][1], L[1][2], 'X') || equals(L[2][0], L[2][1], L[2][2], 'X') || equals(L[0][0], L[1][0], L[2][0], 'X') || equals(L[0][1], L[1][1], L[2][1], 'X') || equals(L[0][2], L[1][2], L[2][2], 'X') || equals(L[0][0], L[1][1], L[2][2], 'X') || equals(L[0][2], L[1][1], L[2][0], 'X')) {
          return -1;
        } else {
          return 0;
        }
    }
  }
  
  function remainingPlaces(L) {
    let emptyPlaces = 0;
    let n = L.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (L[i][j] === '') {
          emptyPlaces += 1;
        }
      }
    }
    return emptyPlaces;
  }

 
  function minimaxX(L, player, depth) {
    if (depth === 0 || valueOf(L, 'X') === -1) {
      return valueOf(L, 'X');
    }
  
    if (player === 'X') {
      let max = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (L[i][j] === '') {
            L[i][j] = player;
            let score = minimaxX(L, 'O', depth - 1);
            L[i][j] = '';
            max = Math.max(max, score);
          }
        }
      }
      return max;
    }
  
    if (player === 'O') {
      let min = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (L[i][j] === '') {
            L[i][j] = player;
            let score = minimaxX(L, 'X', depth - 1);
            L[i][j] = '';
            min = Math.min(min, score);
          }
        }
      }
      return min;
    }
  }

  function minimaxO(L, player, depth) {
    if (depth === 0 || valueOf(L, 'O') === -1) {
      return valueOf(L, 'O');
    }
  
    if (player === 'O') {
      let max = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (L[i][j] === '') {
            L[i][j] = player;
            let score = minimaxO(L, 'X', depth - 1);
            L[i][j] = '';
            max = Math.max(max, score);
          }
        }
      }
      return max;
    }
  
    if (player === 'X') {
      let min = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (L[i][j] === '') {
            L[i][j] = player;
            let score = minimaxO(L, 'O', depth - 1);
            L[i][j] = '';
            min = Math.min(min, score);
          }
        }
      }
      return min;
    }
  }

  function bestPosition(L, player) {
    if (player === 'X') {
      let bestPosition = [-1, -1];
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (L[i][j] === '') {
            L[i][j] = player;
            let score = minimaxX(L, 'O', remainingPlaces(L));
            if (score > bestScore) {
              bestScore = score;
              bestPosition = [i, j];
            }
            L[i][j] = '';
          }
        }
      }
      return bestPosition;
    } else if (player === 'O') {
      let bestPosition = [-1, -1];
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (L[i][j] === '') {
            L[i][j] = player;
            let score = minimaxO(L, 'X', remainingPlaces(L));
            if (score > bestScore) {
              bestScore = score;
              bestPosition = [i, j];
            }
            L[i][j] = '';
          }
        }
      }
      return bestPosition;
    }
  }



function won(index) {
    if(btns[0].textContent===btns[1].textContent && btns[1].textContent===btns[2].textContent && btns[2].textContent===elt) {
        if(index){for(let i=0;i<3;i++) {btns[i].style.padding="0" ; btns[i].innerHTML = "<b>____</b>";  }}
        return true
    }
    else if(btns[3].textContent===btns[4].textContent && btns[4].textContent===btns[5].textContent && btns[5].textContent===elt) {
        if(index){for(let i=3;i<6;i++) {btns[i].style.padding="0" ; btns[i].innerHTML = "<b>____</b>";  }}
        return true
    }
    else if(btns[6].textContent===btns[7].textContent && btns[7].textContent===btns[8].textContent && btns[8].textContent===elt) {
        if(index){for(let i=6;i<9;i++) {btns[i].style.padding="0" ; btns[i].innerHTML = "<b>____</b>";  }}
        return true
    }
    else if(btns[0].textContent===btns[3].textContent && btns[3].textContent===btns[6].textContent && btns[6].textContent===elt) {
        if(index){for(let i=0;i<7;i+=3) {btns[i].style.padding="0";btns[i].style.lineHeight="10px" ; btns[i].innerHTML = "|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|";  }}
        return true
    }
    else if(btns[1].textContent===btns[4].textContent && btns[4].textContent===btns[7].textContent && btns[7].textContent===elt) {
        if(index){for(let i=1;i<8;i+=3) {btns[i].style.padding="0";btns[i].style.lineHeight="10px" ; btns[i].innerHTML = "|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|";  }}
        return true
    }
    else if(btns[2].textContent===btns[5].textContent && btns[5].textContent===btns[8].textContent && btns[8].textContent===elt) {
        if(index){for(let i=2;i<9;i+=3) {btns[i].style.padding="0";btns[i].style.lineHeight="10px" ; btns[i].innerHTML = "|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|";  }}
        return true
    }
    else if(btns[0].textContent===btns[4].textContent && btns[4].textContent===btns[8].textContent && btns[8].textContent===elt) {
        if(index){
        document.getElementById("one-hide").style.display = "block";document.getElementById("one-hide").style.color = "black";document.getElementById("one").style.display = "none";
        document.getElementById("five-hide").style.display = "block";document.getElementById("five-hide").style.color = "black";document.getElementById("five").style.display = "none";
        document.getElementById("nine-hide").style.display = "block";document.getElementById("nine-hide").style.color = "black";document.getElementById("nine").style.display = "none";}
        return true
    }
    else if(btns[2].textContent===btns[4].textContent && btns[4].textContent===btns[6].textContent && btns[6].textContent===elt) {
        return true
    }
    else {
        return false
    }    
}

function lost(index) {
    if(btns[0].textContent===btns[1].textContent && btns[1].textContent===btns[2].textContent && btns[2].textContent===opnt) {
        if(index){for(let i=0;i<3;i++) {btns[i].style.color="red"; btns[i].style.padding="0" ; btns[i].innerHTML = "<b>____</b>";  }}
        return true
    }
    else if(btns[3].textContent===btns[4].textContent && btns[4].textContent===btns[5].textContent && btns[5].textContent===opnt) {
        if(index){for(let i=3;i<6;i++) {btns[i].style.color="red"; btns[i].style.padding="0" ; btns[i].innerHTML = "<b>____</b>";  }}
        return true
    }
    else if(btns[6].textContent===btns[7].textContent && btns[7].textContent===btns[8].textContent && btns[8].textContent===opnt) {
        if(index){for(let i=6;i<9;i++) {btns[i].style.color="red"; btns[i].style.padding="0" ; btns[i].innerHTML = "<b>____</b>";  }}
        return true
    }
    else if(btns[0].textContent===btns[3].textContent && btns[3].textContent===btns[6].textContent && btns[6].textContent===opnt) {
        if(index){for(let i=0;i<7;i+=3) {btns[i].style.color="red"; btns[i].style.padding="0";btns[i].style.lineHeight="10px" ; btns[i].innerHTML = "|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|";  }}
        return true
    }
    else if(btns[1].textContent===btns[4].textContent && btns[4].textContent===btns[7].textContent && btns[7].textContent===opnt) {
        if(index){for(let i=1;i<8;i+=3) {btns[i].style.color="red"; btns[i].style.padding="0";btns[i].style.lineHeight="10px" ; btns[i].innerHTML = "|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|";  }}
        return true
    }
    else if(btns[2].textContent===btns[5].textContent && btns[5].textContent===btns[8].textContent && btns[8].textContent===opnt) {
        if(index){for(let i=2;i<9;i+=3) {btns[i].style.color="red"; btns[i].style.padding="0";btns[i].style.lineHeight="10px" ; btns[i].innerHTML = "|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|";  }}
        return true
    }
    else if(btns[0].textContent===btns[4].textContent && btns[4].textContent===btns[8].textContent && btns[8].textContent===opnt) {
        if(index) {
        document.getElementById("one-hide").style.display = "block";document.getElementById("one-hide").style.color = "red";document.getElementById("one").style.display = "none";
        document.getElementById("five-hide").style.display = "block";document.getElementById("five-hide").style.color = "red";document.getElementById("five").style.display = "none";
        document.getElementById("nine-hide").style.display = "block";document.getElementById("nine-hide").style.color = "red";document.getElementById("nine").style.display = "none";}
        return true
    }
    else if(btns[2].textContent===btns[4].textContent && btns[4].textContent===btns[6].textContent && btns[6].textContent===opnt) {
        return true
    }
    else {
        return false
    }    
}

function nullMatch() {
    for(let btn of btns) {
        if(btn.textContent=='') {
            return false
        }
    }
    return true
}

function extractPos(i) {
    switch(i) {
        case 0:
            return [0,0]
        case 1:
            return [0,1]
        case 2:
            return [0,2]
        case 3:
            return [1,0]
        case 4:
            return [1,1]
        case 5:
            return [1,2]
        case 6:
            return [2,0]
        case 7:
            return [2,1]
        case 8:
            return [2,2]    
    }
}

function extractNum(pos) {
    switch(pos.toString()) {
      case [0,0].toString():
        return 0;
      case [0,1].toString():
        return 1;
      case [0,2].toString():
        return 2;
      case [1,0].toString():
        return 3;
      case [1,1].toString():
        return 4;
      case [1,2].toString():
        return 5;
      case [2,0].toString():
        return 6;
      case [2,1].toString():
        return 7;
      case [2,2].toString():
        return 8;
      default:
        return -1;
    }
  }

for(let i in btns) {
btns[i].addEventListener("click",()=>{
    if(btns[i].innerHTML == "") {
        btns[i].innerHTML = "<b>"+elt+"</b>";
        if(won(true)) {
            document.getElementsByClassName("tic-tac-toe")[0].style.pointerEvents = "none";
            document.getElementsByClassName("tic-tac-toe")[0].style.opacity = "0.75";
            let message = document.getElementsByClassName("message")[0];
            message.style.display = "flex";
            message.children[0].innerHTML = "You Won";
            label.innerHTML = "";
        }

        if(nullMatch()) {
            document.getElementsByClassName("tic-tac-toe")[0].style.pointerEvents = "none";
            document.getElementsByClassName("tic-tac-toe")[0].style.opacity = "0.75";
            let message = document.getElementsByClassName("message")[0];
            message.style.display = "flex";
            message.children[0].innerHTML = "Null Match";
            label.innerHTML = "";
        }
        let label = document.getElementById("label");
        label.innerHTML = "Calculating";
        let L = [['','',''],['','',''],['','','']];
        for(let j in btns) {
            if(typeof  btns[j].textContent !== "undefined") {
                let pos = extractPos(parseInt(j));
                L[pos[0]][pos[1]] = btns[j].textContent;
            }
        }
        let bestPos="";
        if(opnt=='X') {
            bestPos = bestPosition(L,'X');
        } else {
            bestPos = bestPosition(L,'O');
        }
       
        

        

        
        
        
       
        
        btns[extractNum(bestPos)].innerHTML = "<b>"+opnt+"</b>";
      
       

        if(lost(true)) {
            document.getElementsByClassName("tic-tac-toe")[0].style.pointerEvents = "none";
            document.getElementsByClassName("tic-tac-toe")[0].style.opacity = "0.75";
            let message = document.getElementsByClassName("message")[0];
            message.style.display = "flex";
            message.children[0].innerHTML = "You Lost";
            label.innerHTML = "";
        }


        
                
        
        
        label.innerHTML = "";
    }    
})
}
