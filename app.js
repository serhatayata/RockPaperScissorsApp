const game = () => {
    let pScore = 0;
    let cScore = 0;
    //Game begins
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        playBtn.addEventListener('click',() =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //Match begins
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation = '';
            });
        })
        //Options of computer
        const computerOptions = ['rock','paper','scissors'];
        options.forEach(option => {
            option.addEventListener('click', function() {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //Compare hands

                setTimeout(() => {
                    compareHands(this.textContent,computerChoice)
                    //Change images
                    playerHand.src = `./img/${this.textContent}.png`;
                    computerHand.src = `./img/${computerChoice}.png`;
                },2000)

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
       };
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice,computerChoice) => {
        //update text
        const winner = document.querySelector('.winner');
        //Control for a tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }
        //Control for Rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }
    };
    startGame();
    playMatch();
};
game();

