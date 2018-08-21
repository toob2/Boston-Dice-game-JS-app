var activePlayer, round, roundScore, setRounds, dice, dice1DOM, dice2DOM, dice3DOM, highestNumber,firstThrow, secondThrow, thirdThrow;

dice1DOM = document.getElementById('dice-1');
dice2DOM = document.getElementById('dice-2');
dice3DOM = document.getElementById('dice-3');

dice1DOM.style.display = 'none';
dice2DOM.style.display = 'none';
dice3DOM.style.display = 'none';

roundScore = 0;
document.querySelector('.round-score-0').innerHTML = roundScore;
roundScoreDOM = document.querySelector('.round-score-0');
activePlayer = 0;
firstThrow = true;
secondThrow = false;
thirdThrow = false;


diceDOM = document.querySelectorAll('.dice__img');

document.querySelector('.roll__btn').addEventListener('click', function(){
   var dice1, dice2, dice3, diceArray;

   if (firstThrow){
      // set the state variables
      firstThrow = false;
      secondThrow = true;

      dice1 =  Math.floor(Math.random()*6) + 1;
      dice2 =  Math.floor(Math.random()*6) + 1;
      dice3 =  Math.floor(Math.random()*6) + 1;

      dice1DOM.style.display = 'block';
      dice2DOM.style.display = 'block';
      dice3DOM.style.display = 'block';

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

   if (secondThrow){
      document.querySelector('.roll__btn').addEventListener('click', function(){
         secondThrow = false;
         thirdThrow = true;


      });
   }


   
   if (thirdThrow){
      document.querySelector('.roll__btn').addEventListener('click', function(){

      })
   }



   




});


   
      
    












