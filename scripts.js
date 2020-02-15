//create and display a clock
// create a Timer
// create start and stop button for Timer
// trigger event when timer reaches 0
// create a sound when event is triggered
// create multiple timers
// have timers start in succession


const clock = document.querySelector("#currentTime");

const startButton = document.querySelector("#startButton");
const timer = document.querySelector("#timer");
const stopButton = document.querySelector("#stopButton");


function updateClock(){
  var currentTime = new Date ( );
  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  clock.firstChild.nodeValue = currentTimeString;
}


function timerButton(){
  //change start button to stop
  startButton.classList.toggle("stopped")
  if(startButton.innerHTML == "pause"){
    startButton.innerHTML = "Start";
    console.log("paused");
  }else{
    startButton.innerHTML = "pause";
    console.log("running");
  }
  //change stop button to start
  startButton.classList.toggle("running")
}


function restartTimer(){
  console.log("Restart Timer");
}


// Notes on how one user did the toggle clock
//
// // START
// startButton.addEventListener('click', () => {
//   toggleClock();
// })
//
// // PAUSE
// stopButton.addEventListener('click', () => {
//   toggleClock();
// })
