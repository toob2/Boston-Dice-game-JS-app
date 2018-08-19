var activePlayer, round, roundScore, setRounds, dice, diceDOM;

activePlayer = 0;


diceDOM = document.querySelectorAll('.dice__img');


document.querySelector('.roll__btn').addEventListener('click', function(){
   var dice1, dice2, dice3, dice1DOM, dice2DOM, dice3DOM;
   dice1 =  Math.floor(Math.random()*6) + 1;
   dice2 =  Math.floor(Math.random()*6) + 1;
   dice3 =  Math.floor(Math.random()*6) + 1;

   dice1DOM = document.getElementById('dice-1');
   dice2DOM = document.getElementById('dice-2');
   dice3DOM = document.getElementById('dice-3');
   
   dice1DOM.src = "images/dice-" + dice1 + ".svg";
   dice2DOM.src = "images/dice-" + dice2 + ".svg";
   dice3DOM.src = "images/dice-" + dice3 + ".svg";

   if (dice1 >= dice2 && dice1 >= dice3){
      dice1DOM.style.display = 'none';
   }
   
   if (dice2 >= dice1 && dice2 >= dice3){
      dice2DOM.style.display = 'none';
   }
   if (dice3 >= dice1 && dice3 >= dice2){
      dice3DOM.style.display = 'none';
   }


   console.log(dice1, dice2, dice3);
   
   
   
   
   
   
   
   
   
   // diceDOM.forEach(function(a){
   //    dice =  Math.floor(Math.random()*6) + 1;
   //    a.src = "images/dice-" + dice + ".svg";
   
   // })
});








