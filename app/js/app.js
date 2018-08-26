const doc = document;
let btn, dice1, dice2, dice3;

btn = document.getElementById('button');
dice1 = doc.getElementById('dice-1');
dice2 = doc.getElementById('dice-2');
dice3 = doc.getElementById('dice-3');

function hideDice(){
   doc.querySelectorAll('.dice__img').forEach(function(dice){
      dice.style.display = 'none';
   })
};




let counter = 0;

btn.addEventListener('click', function(){
   
   counter += 1;

   if(counter === 1){
      console.log(1);
   }
   if(counter === 2){
      console.log(2);
   }
   if(counter === 3){
      console.log(3);
   }
   if(counter === 4){
      console.log('game over');
   }
})














