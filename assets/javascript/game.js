$("document").ready(function(){
  // all of these crystals can be the same.
  var crystalOne = Math.floor(Math.random()*12)+1;
  var crystalTwo = Math.floor(Math.random()*12)+1;
  var crystalThree = Math.floor(Math.random()*12)+1;
  var crystalFour = Math.floor(Math.random()*12)+1;

  var currentScore=0;
  var targetScore = Math.floor(Math.random()*(120-19+1) +19);

  var wins=0;
  var losses=0;

  function resetGame() {
   crystalOne = Math.floor(Math.random()*12)+1;
   crystalTwo = Math.floor(Math.random()*12)+1;
   crystalThree = Math.floor(Math.random()*12)+1;
   crystalFour = Math.floor(Math.random()*12)+1;
   targetScore = Math.floor(Math.random()*(120-19+1) +19);
   currentScore=0;
   console.log(crystalOne)
   console.log(crystalTwo)
   console.log(crystalThree)
   console.log(crystalFour)

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
      $(".winner").text(wins);
      $(".loser").text(losses);
      resetDom();
      console.log(crystalOne +" crystal 1")
      console.log(crystalTwo +" crystal 2")
      console.log(crystalThree+" crystal 3")
      console.log(crystalFour+" crystal 4")
  }
    function resetDom(){
      $(".target").text(targetScore)
      $(".current").text(currentScore)
  }
  //each crystal will be controlled by a similar on.click function
    $(".one").on('click', function(){
      currentScore += crystalOne;
      $(".current").text(currentScore);
        scoreCheck();
      })


    $(".two").on('click', function(){
    currentScore += crystalTwo;
    $(".current").text(currentScore);
    scoreCheck();
      })


    $(".three").on('click', function(){
     currentScore += crystalThree;
     $(".current").text(currentScore);
     scoreCheck();
      })
  
    $(".four").on('click', function(){
      currentScore += crystalFour;
      $(".current").text(currentScore);
      scoreCheck();
      })

  updateScore();
  console.log(targetScore)
  





})