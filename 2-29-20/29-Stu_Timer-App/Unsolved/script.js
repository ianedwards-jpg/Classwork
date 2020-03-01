var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval; 

function startTimer() {
  // Write code to start the timer here
  // Clear todoList element and update todoCountSpan
totalseconds = totalseconds * (value.workMinutesInput * 60) 

  totalseconds--;
  minutesDisplay.textContent = (totalseconds / 60) ;

  secondsDisplay.textContent = secondsDisplay 

    for (var i = 60; i < 0; i--) {
      var totalSeconds = totalSeconds[i];
    }
  
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

}


playButton.addEventListener("click", startTimer);
