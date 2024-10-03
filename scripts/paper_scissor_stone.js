let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();

  /*
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  */ 
  function playGame(playerMove){
    const computerMove = selectComputerMove();     
    let result = '';
    if (playerMove === 'stone'){
        if (computerMove === 'paper') {
                result = 'You lose.';
            } else if (computerMove === 'scissors') {
                result = 'You win.';
            } else if (computerMove === 'stone') {
                result = 'Tie.';
            }
            
    } else if (playerMove === 'scissors'){
        if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        } else if (computerMove === 'stone') {
            result = 'You lose.';
        }

    } else if (playerMove === 'paper'){
        if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        } else if (computerMove === 'stone') {
            result = 'You win.';
        }
    }
   
    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = ` Me
    <img src="images/${playerMove}.png" class="adjust-button">
    <img src="images/${computerMove}.png" class="adjust-button">
    Computer`;
    

    /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);*/
  }

  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  
  function selectComputerMove(){
    const ranNumber = Math.random();        
    let computerMove = '';   
    if (ranNumber >= 0 && ranNumber < 1 / 3) {
        computerMove = 'paper';
    } else if (ranNumber >= 1 / 3 && ranNumber < 2 / 3) {
        computerMove = 'scissors';
    } else if (ranNumber >= 2 / 3 && ranNumber < 1) {
        computerMove = 'stone';
    }
    return computerMove;
  }