let colorSeq = [];
let userSeq = [];
let btnColor = ["red","blue","green","yellow"];
let h2s = document.querySelector("h2");
let level = 0;
let started = false;
let outerDiv = document.querySelector('.colorContainer')
let btns = document.querySelectorAll('.btn');
let icon = document.createElement('i');
let h3s = document.querySelector('h4')
let highScore = 0;

function flash(btn) {
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },850);
}

function checkAns(idx) {
    if(colorSeq[idx] === userSeq[idx]){
        if( userSeq.length === colorSeq.length){
        levelUp();
        }
    }else{
        h2s.innerText = "Game Over!! Press any Key to Restart the Game!!";
        outerDiv.style.backgroundColor = 'red';
        // setTimeout(()=>{
        //     outerDiv.style.backgroundColor = 'white';
        // },1000);
        HighScore();
        level = 0;
        started = false;
        colorSeq = [];
        Start();
    }
}

function clicked() {
    userFlash(this);
    userColor = this.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

function Start(){
    document.addEventListener('keypress', function(){
        if(started == false){
            outerDiv.style.backgroundColor = 'white';
        levelUp();    
        started = true;
        }
    });
}

function userFlash (btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },150);

}

function levelUp(){
    level++;
    var highScore = level;
    h2s.innerText = `level ${level}`;
    userSeq = [];
    let ranIDX = Math.floor(Math.random()*4);
    let ranColor = btnColor[ranIDX];
    let randmBtn = document.querySelector(`.${ranColor}`);
    colorSeq.push(ranColor);
    flash(randmBtn);
   
    
}
for(btn of btns){
    btn.addEventListener('click',clicked);
}

function HighScore() {
    if(highScore < level){
        highScore = level -1;
        h3s.innerText = `High Score : ${highScore}`;
    }
}
Start();