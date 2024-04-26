const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors");
const start = document.querySelector(".start");
const images = document.querySelectorAll("img");
const airock = document.querySelector("#airock");
const aipaper = document.querySelector("#aipaper")
const aiscissors = document.querySelector("#aiscissors");
const para = document.createElement("p");
para.textContent = "AI's choice:";
const body = document.querySelector("body");

rock.addEventListener("click", choiceRock);
paper.addEventListener("click", choicePaper);
scissors.addEventListener("click", choiceScissors);
let aichoice;

function choiceRock(){
    aichoice = Math.floor(Math.random() * 3) + 1;
    images.forEach(img => {
        img.style.width = 0;
    });
    rock.style.width = "200px";
    start.append(para);
    if(aichoice === 1)
        airock.style.width = "200px";
    if(aichoice === 2)
        aipaper.style.width = "200px";
    if(aichoice === 3)
        aiscissors.style.width = "200px";
    setTimeout(function() {
        if(aichoice === 1)
            draw();
        if(aichoice === 2)
            lose();
        if(aichoice === 3)
            win();
    },50);
}

function choicePaper(){
    aichoice = Math.floor(Math.random() * 3) + 1;
    images.forEach(img => {
        img.style.width = 0;
    });
    paper.style.width = "200px";
    start.append(para);
    if(aichoice === 1)
        airock.style.width = "200px";
    if(aichoice === 2)
        aipaper.style.width = "200px";
    if(aichoice === 3)
        aiscissors.style.width = "200px";
    setTimeout(function(){
        if(aichoice === 1)
            win();
        if(aichoice === 2)
            draw();
        if(aichoice === 3)
            lose();
    },50);
}

function choiceScissors(){
    aichoice = Math.floor(Math.random() * 3) + 1;
    images.forEach(img => {
        img.style.width = 0;
    });
    scissors.style.width = "200px";
    start.append(para);
    if(aichoice === 1)
        airock.style.width = "200px";
    if(aichoice === 2)
        aipaper.style.width = "200px";
    if(aichoice === 3)
        aiscissors.style.width = "200px";
    setTimeout(function(){
    if(aichoice === 1)
        lose();
    if(aichoice === 2)
        win();
    if(aichoice === 3)
        draw();
    },50);
}

function resetGame(){
    start.removeChild(para);
    images.forEach(img => {
        img.style.width = "200px";
    });
    airock.style.width = 0;
    aipaper.style.width = 0;
    aiscissors.style.width = 0;
    body.style.backgroundColor = "papayawhip";
}

function lose(){
    body.style.backgroundColor = "red";
    setTimeout(function(){
        alert("You lost!");
        resetGame();
    },50);
}

function win(){
    body.style.backgroundColor = "green";
    setTimeout(function(){
        alert("You won!");
        resetGame();
    },50);
}

function draw(){
    body.style.backgroundColor = "yellow";
    setTimeout(function(){
        alert("Draw!");
        resetGame();
    },50);
}