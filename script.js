let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userMsg=document.querySelector("#user-score");
let compMsg=document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText="Game was Draw.Play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userMsg.innerText=`${userScore}`;
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compMsg.innerText=`${compScore}`;
        msg.innerText="You Lost.";
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    
    const compChoice=genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=(compChoice==="paper") ? false: true;
        }else if(userChoice==="paper"){
            userWin=(compChoice==="scissors") ? false : true;
        }else{
            userWin=(compChoice==="rock") ?false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.id;
        playGame(userChoice);
    });
});