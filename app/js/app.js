const doc = document;
let activePlayer, btn, btnNG, counter, counterRounds, dice1, dice2, dice3, num1, num2, num3, rollArray1, rollArray2, roundNo, highestNum1,  highestNum2, roundScore;

btn = doc.getElementById('button');
btnNG = doc.getElementById('newGame');
dice1 = doc.getElementById('dice-1');
dice2 = doc.getElementById('dice-2');
dice3 = doc.getElementById('dice-3');

activePlayer = 0;
roundScore = [0,0];
roundsWon = [0,0];

function gameInit(){
   hideDice();
   btn.disabled =  false;
   counter = 0;
   roundScore = [0,0];
   roundsWon = [0,0];
   activePlayer = 0;
   doc.getElementById('roundNo').innerHTML = 1;
   doc.getElementById('rounds-won-0').innerHTML = 0;
   doc.getElementById('rounds-won-1').innerHTML = 0;
   doc.getElementById('round-score-0').innerHTML = 0;
   doc.getElementById('round-score-1').innerHTML = 0;
   doc.querySelector('.game__player-0').classList.remove('active');
   doc.querySelector('.game__player-1').classList.remove('active');
   doc.querySelector('.game__player-0').classList.add('active');
   doc.querySelector('.player-0-name').innerHTML = 'PLAYER 1';
   doc.querySelector('.player-1-name').innerHTML = 'PLAYER 2';
   doc.querySelector('.game__player-0').classList.remove('winner');
   doc.querySelector('.game__player-1').classList.remove('winner');
}

function hideDice(){
   doc.querySelectorAll('.dice__img').forEach(function(dice){
      dice.style.display = 'none';
   })
};
hideDice();

function roll(){
   num1 = Math.floor(Math.random()*6) + 1;
   num2 = Math.floor(Math.random()*6) + 1;
   num3 = Math.floor(Math.random()*6) + 1;
};

btnNG.addEventListener('click', gameInit);

counter = 0;
counterRounds = 0;
btn.addEventListener('click', function(){  
   if(counter === 0 && activePlayer === 0){
      roundScore = [0,0];
      doc.getElementById('round-score-0').innerHTML = 0;
      doc.getElementById('round-score-1').innerHTML = 0;
   } 

   counter += 1;
   console.log(counter);
   if(counter === 1){
      roll();
      rollArray1 = new Array(num1, num2, num3);
      highestNum1 = Math.max(...rollArray1);
      roundScore[activePlayer] += highestNum1;
      doc.getElementById('round-score-' + activePlayer).innerHTML = roundScore[activePlayer];
      dice1.src = 'images/dice-' + num1 + '.svg';
      dice2.src = 'images/dice-' + num2 + '.svg';
      dice3.src = 'images/dice-' + num3 + '.svg';
      doc.querySelectorAll('.dice__img').forEach(function(dice){
         dice.style.display = 'block';
      })
   }

   if(counter === 2){
      hideDice();
      roll();
      rollArray2 = new Array(num1, num2);
      highestNum2 = Math.max(...rollArray2);
      roundScore[activePlayer] += highestNum2;
      doc.getElementById('round-score-' + activePlayer).innerHTML = roundScore[activePlayer];
      dice1.src = 'images/dice-' + num1 + '.svg';
      dice2.src = 'images/dice-' + num2 + '.svg';
      dice1.style.display = 'block';
      dice2.style.display = 'block';
   }

   if(counter === 3){
      hideDice();
      roll();
      dice1.src = 'images/dice-' + num1 + '.svg';
      dice1.style.display = 'block';
      roundScore[activePlayer] += num1;
      doc.getElementById('round-score-' + activePlayer).innerHTML = roundScore[activePlayer];
   }

   if(counter === 4){
      hideDice();
   }

   if(counter === 5 && activePlayer === 0){
      activePlayer = 1;
      counter = 0;
      doc.querySelector('.game__player-0').classList.toggle('active');
      doc.querySelector('.game__player-1').classList.toggle('active');
   }

   if(counter === 5 && activePlayer === 1){
      activePlayer = 0;
      counter = 0;
      doc.querySelector('.game__player-0').classList.toggle('active');
      doc.querySelector('.game__player-1').classList.toggle('active');

      if(roundScore[0] > roundScore[1]){
         roundsWon[0] += 1;
         doc.getElementById('rounds-won-0').innerHTML = roundsWon[0];
      }
      if(roundScore[0] < roundScore[1]){
         roundsWon[1] += 1;
         doc.getElementById('rounds-won-1').innerHTML = roundsWon[1];
      }
   }

   doc.getElementById('roundNo').innerHTML = 1 + roundsWon[0] + roundsWon[1];

   if(roundsWon[0] + roundsWon[1] === 5){
      btn.disabled = true;
      doc.getElementById('roundNo').innerHTML = 5;  
   }

   if(roundsWon[0] + roundsWon[1] === 5 && roundsWon[0] > roundsWon[1]){
      doc.querySelector('.player-0-name').innerHTML = 'WINNER';
      doc.querySelector('.game__player-0').classList.add('winner');
      doc.querySelector('.game__player-0').classList.remove('active');
      doc.querySelector('.game__player-1').classList.remove('active');
   }

   if(roundsWon[0] + roundsWon[1] === 5 && roundsWon[0] < roundsWon[1]){
      doc.querySelector('.player-1-name').innerHTML = 'WINNER';
      doc.querySelector('.game__player-1').classList.add('winner');
      doc.querySelector('.game__player-0').classList.remove('active');
      doc.querySelector('.game__player-1').classList.remove('active');
   }
})














