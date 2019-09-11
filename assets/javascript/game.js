$("document").ready(function(){
  // all of these crystals can be the same.
  var crystalOne = Math.floor(Math.random()*12)+1;
  var crystalTwo = Math.floor(Math.random()*12)+1;
  var crystalThree = Math.floor(Math.random()*12)+1;
  var crystalFour = Math.floor(Math.random()*12)+1;

  var currentScore=0
  var targetScore = Math.floor(Math.random()*(120-19+1) +19);

  var wins=0
  var losses=0

  function resetGame() {
   crystalOne = Math.floor(Math.random()*12)+1;
   crystalTwo = Math.floor(Math.random()*12)+1;
   crystalThree = Math.floor(Math.random()*12)+1;
   crystalFour = Math.floor(Math.random()*12)+1;
   targetScore = Math.floor(Math.random()*(120-19+1) +19);
   currentScore=0

  }

  function updateScore(){
    
  }





})