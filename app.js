let colorSeq = [];
let userSeq = [];
let btnColor = ["red","blue","green","yellow"];
let h2s = document.querySelector("h2");
let level = 0;
let started = false;
let outerDiv = document.querySelector('.colorContainer')
let btns = document.querySelectorAll('.btn');
let icon = document.createElement('i');

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
        levelUp();    
        started = true;
        }
    });
}

function userFlash (btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },250);

}

function levelUp(){
    level++;
    highScore = level;
    h2s.innerText = `level ${level}`;
    userSeq = [];
    let ranIDX = Math.floor(Math.random()*3);
    let ranColor = btnColor[ranIDX];
    let randmBtn = document.querySelector(`.${ranColor}`);
    colorSeq.push(ranColor);
    flash(randmBtn);
    
}
for(btn of btns){
    btn.addEventListener('click',clicked);
}

function highScore(level) {
    if(highScore < level){
        highScore = level;
        let h3 = document.createElement('h3');
        h2s.ammendChild('h3');
    }
}
Start();