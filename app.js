let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const restartButton = document.getElementById("restartButton");

// Generate Computer's Choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Draw Game
const drawGame = () => {
    msg.innerText = "Game was a Draw. Play Again.";
    msg.style.backgroundColor = "yellow";
};

// Show Winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Play Game
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else {
            userWin = compChoice === "paper";
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Add Event Listeners to Choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Restart Game Function
function restartGame() {
    userscore = 0;
    compscore = 0;
    userScorePara.innerText = userscore;
    compScorePara.innerText = compscore;
    msg.innerText = "Game restarted! Make a choice.";
    msg.style.backgroundColor = "#ccc";
}

// Add Event Listener for Restart Button
restartButton.addEventListener("click", restartGame);
