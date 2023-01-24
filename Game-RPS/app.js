const game=()=>{
    let playerScore=0;
    let computerScore=0;
    let moves=0;


const playGame=()=>{
    const rockBtn=document.querySelector('.rock');
    const paperBtn=document.querySelector('.paper');
    const scissorBtn=document.querySelector('.scissor');
    const playerOptions=[rockBtn,paperBtn,scissorBtn];
    const computerOptions=['rock','paper','scissor']


playerOptions.forEach((option)=>{
    option.addEventListener('click',function(){
        const movesLeft=document.querySelector('.movesleft');
        moves++;
        movesLeft.innerText=`Moves Left: ${10-moves}`;


        const choiceNumber=Math.floor(Math.random()*3);
        const computerChoice=computerOptions[choiceNumber];
        console.log("comp choice :"+computerOptions[choiceNumber]);
        console.log("user choice :"+this.innerText);
        
        winner(this.innerText,computerChoice)
        console.log("user choice :"+this.innerText);

        if(moves==10){
            gameOver(playerOptions,movesLeft);
        }
    })
})
}

/******************* DECIDE WINNER  *****************/


const winner=(player,computer)=>{
    const result = document.querySelector('.result');
    const playerScoreBoard= document.querySelector('.p-count');
    const computerScoreBoard=documrnt.querySelector('.c-count');
    player=player.toLowerCase();
    computer= computer.toLowerCase();

    console.log("player -"+player)
    console.log("computer -"+computer)
    if(player==computer){
        result.textContent='Tie'
    }

    else if(player=='rock'){
        if(computer=='paper'){
            result.textContent='Computer Won';
            computerScore++;
            computerScoreBoard.textContent=computerScore;
        }
        else {
            result.textContent='Player Won'
            playerScore++;
            playerScoreBoard.textContent=playerScore;
            }
    } 
    else if(player=='scissor'){
        if(computer=='rock'){
            result.textContent='Computer Won';
            computerScore++;
            computerScoreBoard.textContent=computerScore;
        }
        else {
            result.textContent='Player Won'
            playerScore++;
            playerScoreBoard.textContent=playerScore;
            }
    } 
    else if(player=='paper'){
        if(computer=='scissor'){
            result.textContent='Computer Won';
            computerScore++;
            computerScoreBoard.textContent=computerScore;
        }
        else {
            result.textContent='Player Won'
            playerScore++;
            playerScoreBoard.textContent=playerScore;
            }
    } 
}

const gameOver =(playerOptions,movesLeft)=>{
    const chooseMove=document.querySelector('.move');
    const result=document.querySelector('.result');
    const reloadBtn=document.querySelector('.reload');

    playerOptions.forEach(option=>{
        option.style.display='none';
    })


    chooseMove.innerText='Game Over!!';
    movesLeft.styles.display='none';

    if(playerScore>compterScore){
        result.style.fontSize='2rem';
        result.innerText='you won the Game';
        result.style.color='#308D46';
    }
    else if(playerScore<computerScore){
        result.style.fontSize='2rem';
        result.innerText='You Lost the game';
        rewsult.style.color='red';
    }
    else{
        result.style.fontSize='2rem';
        result.innerText='Tie';
        result.style.color='grey';
    }
    reloadBtn.innerText ='Restart';
    reloadBtn.style.display='flex';
    returnBtn.addEventListener('click',()=>{
        window.location.reload();
    })
} 

playGame();
}

game();