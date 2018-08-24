const doc = document;

let activePlayer, round, roundScore, setRounds, dice, dice1DOM, dice2DOM, dice3DOM, highestNumber,firstThrow, secondThrow, thirdThrow;

dice1DOM = doc.getElementById('dice-1');
dice2DOM = doc.getElementById('dice-2');
dice3DOM = doc.getElementById('dice-3');

function hideDice(){
   dice1DOM.style.display = 'none';
   dice2DOM.style.display = 'none';
   dice3DOM.style.display = 'none';
}

function showDice(){
   dice1DOM.style.display = 'block';
   dice2DOM.style.display = 'block';
   dice3DOM.style.display = 'block';
}


hideDice();

roundScore = 0;
doc.querySelector('.round-score-0').innerHTML = roundScore;
roundScoreDOM = doc.querySelector('.round-score-0');
activePlayer = 0;
firstThrow = true;
secondThrow = false;
thirdThrow = false;

diceDOM = doc.querySelectorAll('.dice__img');



// Roll dice 
doc.querySelector('.roll__btn').addEventListener('click', function(){
   var dice1, dice2, dice3, diceArray;

   if (firstThrow){
      // set the state variables
      firstThrow = false;
      secondThrow = true;

      dice1 =  Math.floor(Math.random()*6) + 1;
      dice2 =  Math.floor(Math.random()*6) + 1;
      dice3 =  Math.floor(Math.random()*6) + 1;

      showDice();

      diceArray = new Array(dice1, dice2, dice3);
      
      dice1DOM.src = "images/dice-" + diceArray[0] + ".svg";
      dice2DOM.src = "images/dice-" + diceArray[1] + ".svg";
      dice3DOM.src = "images/dice-" + diceArray[2] + ".svg";

      //set timeout and run a function which removes the highest dice and display it in the DOM
      highestNumber = Math.max(...diceArray);
      
      roundScoreDOM.innerHTML = highestNumber;
      
      //remove the highest Dice from the DOM
      function removeHighest(){   
         if (diceArray[0] === highestNumber){
            dice1DOM.style.display = 'none';
         }
         else if (diceArray[1] === highestNumber && diceArray[0] !== highestNumber){
            dice2DOM.style.display = 'none';
         }
         else if (diceArray[2] === highestNumber && diceArray[0] !== highestNumber && diceArray[1] !== highestNumber){
            dice3DOM.style.display = 'none';
         }
      }
      setTimeout(removeHighest, 1000);
   };


// SECOND THROW
   if (secondThrow){
      doc.querySelector('.roll__btn').addEventListener('click', function(){
         secondThrow = false;
         thirdThrow = true;
      });
   }

// THIRD THROW
   if (thirdThrow){
      doc.querySelector('.roll__btn').addEventListener('click', function(){

      })
   }

});


   
      
    












