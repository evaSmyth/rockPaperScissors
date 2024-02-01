'use strict'
const resultsMsg = document.querySelector('.results-msg');
const compScore = document.querySelector('.comp-score');
const playerScore = document.querySelector('.player-score');
const finalResultMsg = document.querySelector('.final-result-msg')
const buttons = document.querySelectorAll('.btn');
const cSelection = document.querySelector('.comp-random');
const pSelection = document.querySelector('.pSelection');
const resetBtnWrap = document.querySelector('.reset-btn-wrap')

let cScore = 0;
let pScore = 0;

function disableBtns() {
  if (cScore === 5 || pScore === 5) {
    finalResultMsg.textContent = `Final score: Player Scored ${pScore}... Comp Scored ${cScore}`;
    for (let i=0;i < buttons.length;i++) {
    buttons[i].disabled = true;
    resultsMsg.textContent = '';
  };
    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = 'PLAY AGAIN';
    resetBtnWrap.appendChild(resetBtn); 
    
    resetBtn.addEventListener('click', function() {
      window.location.reload();
    })
  };
};



const compChoice = ['ROCK', 'PAPER','SCISSORS'];

function gamePlay() {
  for (let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      const randomIndex = compChoice[Math.floor(Math.random() * compChoice.length)];
      const mySelection = buttons[i].innerHTML;
      
      pSelection.innerHTML = mySelection;
      cSelection.innerHTML = randomIndex;

      if(mySelection === randomIndex) {
        resultsMsg.textContent = 'TIE! Play Again';
        } else if (mySelection === 'ROCK' && randomIndex === 'SCISSORS' ||
        mySelection === 'SCISSORS' && randomIndex === 'PAPER' ||
        mySelection === 'PAPER' && randomIndex === "ROCK") {
          resultsMsg.textContent = 'YOU WIN THIS ROUND!';
          pScore += 1;
          playerScore.textContent = pScore;
        } else {
          resultsMsg.textContent = 'COMP WINS THIS ROUND!';
          cScore += 1;
          compScore.textContent = cScore;
        };
        disableBtns();
      })
    }
  }
gamePlay();
