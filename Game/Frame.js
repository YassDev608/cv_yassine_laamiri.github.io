function startGame() {
    gameArea.start();
    cube.create();
}


var cube = new gameComponent("red",0,0,30,30);



var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.frameNo = 0;
        this.canvas.height = 440;
        this.canvas.width = 520;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGame,20);
        document.body.appendChild(this.canvas);
    },
    clear : function () {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
    }
}

var score = new scoreField(gameArea.canvas.width,30,"30px Verdana");

function moveUp() {
    cube.speedY = -3;
}

function moveDown() {
    cube.speedY = 3;
}

function clearMvmt() {
    cube.speedX = 0;
    cube.speedY= 0;
}

function scoreField(x,y,font) {
    this.x = x;
    this.y = y;
    this.font = font;
    this.update = function() {
        let ctx = gameArea.context;
        ctx.font = this.font;
        ctx.fillStyle = "black";
        ctx.fillText("Score : " + gameArea.frameNo,this.x,this.y,200);
    }
}

function gameComponent(color,x,y,w,h) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speedX = 0;
    this.speedY = 0;
    this.create = function() {
        let ctx = gameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
    this.update = function() {
        this.x += this.speedX;
        if(this.y + this.speedY>=0 && this.y + this.speedY<=410) {
            this.y += this.speedY;
        };
        let ctx = gameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
    this.crashWith = function(obstable) {
        var x1 = obstable.x;
        var x2 = obstable.x + obstable.w;
        var y1 = obstable.y;
        var y2 = obstable.y + obstable.h;
        if(this.x+this.w<x1 || y2<this.y || this.y+this.h<y1 || this.x>x2){
            return false;
        }
        return true;  
    }
}

var Obstables = [];

document.getElementById("reset").addEventListener('click',()=>{
    window.location.reload();
})

function updateGame() {
    gameArea.frameNo += 1;
    gameArea.clear();
    for(let obstable of Obstables) {
        if(cube.crashWith(obstable)){
            gameArea.stop();
            document.querySelector(".buttons").style.display = "none";
            document.getElementById("reset").style.display = "block";
            document.body.style.opacity = "0.75";
            break;
        }
    }
    score.update();
    if(gameArea.frameNo%150 == 0 || gameArea.frameNo == 1) {
        var gap = 100;
        var height = Math.floor(Math.random()*(gameArea.canvas.height - gap + 1));
        //var width = gameArea.canvas.width;
        Obstables.push(new gameComponent("green",510,0,10,height));
        Obstables.push(new gameComponent("green",510,height + gap,10,gameArea.canvas.height - height - gap));
    }
    for(let i=0;i<Obstables.length;i++) {
        Obstables[i].speedX = -1;
        Obstables[i].update();
    }
    cube.update();
}