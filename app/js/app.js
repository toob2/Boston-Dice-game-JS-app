const doc = document;
let activePlayer, btn, btnNG, counter, counterRounds, dice1, dice2, dice3, num1, num2, num3, rollArray1, rollArray2, highestNum1,  highestNum2, roundScore;

btn = doc.getElementById('button');
btnNG = doc.getElementById('newGame');
dice1 = doc.getElementById('dice-1');
dice2 = doc.getElementById('dice-2');
dice3 = doc.getElementById('dice-3');

activePlayer = 0;
roundScore = [0,0];
roundWon = [0,0];

function gameInit(){
   hideDice();
   btn.disabled =  false;
   counter = 0;
   roundScore = [0,0];
   activePlayer = 0;
   doc.getElementById('round-score-0').innerHTML = 0;
   doc.getElementById('round-score-1').innerHTML = 0;
   doc.querySelector('.game__player-0').classList.remove('active');
   doc.querySelector('.game__player-1').classList.remove('active');
   doc.querySelector('.game__player-0').classList.add('active');
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
   }
})














