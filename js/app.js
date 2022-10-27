const span = document.querySelector(".span");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const botDecided = document.querySelector(".botDecided");
const youDecided = document.querySelector(".youDecided");

const you = document.querySelector(".you");
const bot = document.querySelector(".bot");

const won = document.querySelector(".won");
const lost = document.querySelector(".lost");
const tied = document.querySelector(".tied");

const yourPoints = document.querySelector(".your-points");
const botPoints = document.querySelector(".bot-points");
let yourPts = 0;
let botPts = 0;


function selectRock() {
    you.textContent = "rock";
    const random = Math.floor(Math.random() * 3)
    switch (random) {
        case 0:
            bot.textContent = "rock";
            break;
        case 1:
            bot.textContent = "paper";
            break;
        case 2:
            bot.textContent = "scissors";
            break;
    }
    botDecided.style.display = "block";
    youDecided.style.display = "block";
    if (random == 2) {
        won.style.display = "block";
        tied.style.display = "none";
        lost.style.display = "none";
        yourPts += 1;
        yourPoints.textContent = yourPts.toString();
    } else if (you.textContent == bot.textContent) {
        won.style.display = "none";
        tied.style.display = "block";
        lost.style.display = "none";
    } else {
        won.style.display = "none";
        tied.style.display = "none";
        lost.style.display = "block";
        botPts += 1;
        botPoints.textContent = botPts.toString();
    }
}

function selectPaper() {
    you.textContent = "paper";
    const random = Math.floor(Math.random() * 3)
    switch (random) {
        case 0:
            bot.textContent = "rock";
            break;
        case 1:
            bot.textContent = "paper";
            break;
        case 2:
            bot.textContent = "scissors";
            break;
    }
    botDecided.style.display = "block";
    youDecided.style.display = "block";
    if (random == 0) {
        won.style.display = "block";
        tied.style.display = "none";
        lost.style.display = "none";
        yourPts += 1;
        yourPoints.textContent = yourPts.toString();
    } else if (you.textContent == bot.textContent) {
        won.style.display = "none";
        tied.style.display = "block";
        lost.style.display = "none";
    } else {
        won.style.display = "none";
        tied.style.display = "none";
        lost.style.display = "block";
        botPts += 1;
        botPoints.textContent = botPts.toString();
    }
}

function selectScissors() {
    you.textContent = "scissors";
    const random = Math.floor(Math.random() * 3)
    switch (random) {
        case 0:
            bot.textContent = "rock";
            break;
        case 1:
            bot.textContent = "paper";
            break;
        case 2:
            bot.textContent = "scissors";
            break;
    }
    botDecided.style.display = "block";
    youDecided.style.display = "block";
    if (random == 1) {
        won.style.display = "block";
        tied.style.display = "none";
        lost.style.display = "none";
        yourPts += 1;
        yourPoints.textContent = yourPts.toString();
    } else if (you.textContent == bot.textContent) {
        won.style.display = "none";
        tied.style.display = "block";
        lost.style.display = "none";
    } else {
        won.style.display = "none";
        tied.style.display = "none";
        lost.style.display = "block";
        botPts += 1;
        botPoints.textContent = botPts.toString();
    }
}