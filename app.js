let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let btns=["red", "green" , "orange", "blue"];

let h=document.querySelector('h5');

document.addEventListener("keypress" , function(){
    if(started==false){
        started=true;

        levelUp();
    }
});

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 400);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}



function levelUp(){
    userSeq=[];
    level++;
    h.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random() * 3);
    let randColor= btns[randIdx];
    gameSeq.push(randColor);
    let randBtn= document.querySelector(`.${randColor}`);

    flash(randBtn);
}

function btnPress(){
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let Items= document.querySelectorAll(".item");
for(item of Items){
    item.addEventListener("click",btnPress);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h.innerHTML=`Game Over! your score was <b>${level}</b> <br> Press any key to Start`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },500);
        reset();
    }
}


function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}

