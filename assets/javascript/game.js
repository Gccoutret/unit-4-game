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
  function scoreCheck(){
      if(currentScore === targetScore){
      alert("You Win!");
      wins++;
      resetGame();
      updateScore();
    
    }else if (currentScore > targetScore){
      alert("You Lose!");
      losses++;
      resetGame();
      updateScore();
    }
  }
    

  function updateScore(){
    $("#winner").text(wins);
    $("#losser").text(losses);
    resetDom();
  }
  function resetDom(){
    $("target").text(targetScore)
    $("current").text(currentScore)
  }

    $("one").on('click', function(){
    currentScore += crystalOne;
    $("current").text(currentScore);
      scoreCheck();
    })


    $("two").on('click', function(){
    currentScore += crystalOne;
    $("current").text(currentScore);
    scoreCheck();
      })


    $("three").on('click', function(){
     currentScore += crystalOne;
     $("current").text(currentScore);
     scoreCheck();
      })
  
    $("four").on('click', function(){
      currentScore += crystalOne;
      $("current").text(currentScore);
      scoreCheck();
      })

  updateScore();





})