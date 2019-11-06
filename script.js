var time = document.getElementById("timer")
var secondsLeft = 75




function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      time.textContent = "timer " + secondsLeft;
  
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }




  document.getElementById("start").addEventListener("click", setTime);
  