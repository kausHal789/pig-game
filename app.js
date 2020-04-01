var activePlayer, scores, roundScore, gameState;

//document.querySelector('.dice').style.display = 'none';

/*
document.querySelector('.dice').addEventListener('click', function() {
  
});

document.querySelector('.dice').addEventListener('click', function-name);

*/


function rollDice() {
  if (gameState) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-' + dice + '.png';
    document.querySelector('.dice').style.display = 'block';

    if(dice === 1) {
      nextPlayer();
      return;
    }
  //  dice += parseInt(document.querySelector("#current-" + activePlayer).textContent);
  //  document.querySelector("#current-" + activePlayer).textContent = dice;
  //  another method
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  }
}


function hold() {
  if (gameState) {
    scores[activePlayer] += parseInt(document.querySelector("#current-" + activePlayer).textContent);
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    document.querySelector("#current-" + activePlayer).textContent = roundScore;

    if(scores[activePlayer] >= 10) { 
      document.getElementById('name-' + activePlayer).textContent = 'Winner';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gameState = false;
      return;
    } else {
      nextPlayer();
      return;
    }
  }
}

function nextPlayer() {
//    scores[activePlayer] += parseInt(document.querySelector("#current-" + activePlayer).textContent);
//    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
  roundScore = 0;
  activePlayer = (activePlayer === 0) ? 1 : 0;
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}

function newGame() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gameState = true;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}