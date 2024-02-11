let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector('h2');
let highestscore = 0;
let p = document.querySelector("p");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        p.style.display = "none";
        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4 - 0.1);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    console.log(randIdx);
    console.log(randcolor);
    console.log(randbtn);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnflash(randbtn);
}

function highscore(level){
    
    if(level>highestscore){
        highestscore = level;
        
    }
    return highestscore;
}

function checkAns(idx){
    console.log(`current level is : ${level}`);

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 700);
        }
    }
    else{
        console.log("Game Over! Press Any key to restart.");
        let highest_score = highscore(level);
        h2.innerHTML = `Game Over! Your Score was : <b>${level}</b><br> <i>Highest Score is</i> : ${highest_score} <br> Press Any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "rgba(38, 38, 38, 0.881)";
        },900);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    btnflash(btn);

    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userSeq.push(usercolor);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll('.btn');

for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

