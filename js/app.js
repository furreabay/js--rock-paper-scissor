const span = document.querySelector(".span");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const buttons = document.querySelectorAll('button')
const botDecided = document.querySelector(".botDecided");
const youDecided = document.querySelector(".youDecided");

const youSpan = document.querySelector(".you");
const botSpan = document.querySelector(".bot");

const won = document.querySelector(".won");
const lost = document.querySelector(".lost");
const tied = document.querySelector(".tied");

const yourPoints = document.querySelector(".your-points");
const botPoints = document.querySelector(".bot-points");
let yourPts = 0;
let botPts = 0;


function updateScore() {
    yourPoints.innerText = yourPts;
    botPoints.innerText = botPts;
}
buttons.forEach(function (button) {
    button.addEventListener('click', select);
});



// skapa en ny funktion som tar 0 argument
// den slumpar fram ett tal
// returnerar en av tre strängar:
// "rock", "paper", "scissors"

function randomRPS() { // bot player
    const random = Math.floor(Math.random() * 3)
    switch (random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function checkWinner(you, bot) {
    // this function takes two arguments int he form of strings
    // 'rock', 'paper', 'scissors' for both bot and player
    // returns 'won' if player won
    if (you == bot) {
        return "tied";
    }

    if ((you == "rock" && bot == "scissors") || (you == "paper" && bot == "rock") || (you == "scissors" && bot == "paper")) {
        return "won";
    }
    // returns 'lost' if player lost and bot won
    // returns 'tie' if neither player or bot won

    return 'lost'

}

function calculatePoints(checkWinner) {
    //if checkwinner returned "WON" give 1 pts
    if (checkWinner == "won") {
        yourPts += 1;
        //return yourPts.toString();
    }
    //if checkwinner returned "LOST" take 1 pts
    else if (checkWinner == "lost") {
        botPts += 1;
        //return botPts.toString();
    }

}

function select(event) {
    //console.log(this)
    const player = event.target.classList[0]; // player did
    // this funciton takes one argument
    // rock, paper or scissors are inputs
    // rock takes scissors
    // paper takes rock
    // scissors takes paper
    // if player and bot got same, no points are awarded
    const bot = randomRPS(); // bot

    youSpan.textContent = player;
    botSpan.textContent = bot;

    const outcome = checkWinner(player, bot);

    // who won?

    // assign points

    // show result

    // 

    const displayObject = {
        lost: lost,
        tied: tied,
        won: won
    }
    //console.log(displayObject[outcome]) // hej om outcome ="lost"
    won.style.display = "none";
    tied.style.display = "none";
    lost.style.display = "none";
    displayObject[outcome].style.display = "block"

    youDecided.style.display = "block";
    botDecided.style.display = "block";

    calculatePoints(outcome);
    updateScore();
    //botPoints.innerText = calculatePoints("lost");

    // swtich på outcome
    // om won öka yourPts
    // om lost öka botPts

    // efter switch anropa update
}

/* 
    switch (outcome) {
        case 'lost':
            console.log("lost");
            won.style.display = "none";
            tied.style.display = "none";
            lost.style.display = "block";
            break;
        case 'tied':
            console.log("tied");
            won.style.display = "none";
            tied.style.display = "block";
            lost.style.display = "none";
            break;
        case 'won':
            console.log("won");
            won.style.display = "block";
            tied.style.display = "none";
            lost.style.display = "none";
            break;
    } */

/* function selectPaper() {
    you.textContent = "paper";
    bot.textContent = randomRPS();
    /*     const random = Math.floor(Math.random() * 3)
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
                            /* function selectRock() {
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
                             */