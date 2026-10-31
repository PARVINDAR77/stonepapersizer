let userscore = 0;
let compscore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = (userwin,userChoice, compChoice) => {
    msg.innerText ="Game was draw.Paly again";
    msg.style.backgroundColor = "#081b31";
}


const showWinner = (userwin,userChoice, compChoice) => {
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win!Your${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lose!Your ${userChoice} loses to ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = generateCompChoice();

    if(userChoice === compChoice){
        //Game is draw
        drawGame();
    }else{
        let userwin = true;
        if(userChoice === "rock" ){
            //scissors,paper
            userwin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userwin = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});