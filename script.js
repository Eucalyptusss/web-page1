// global constants
const clueHoldTime=1000; //how long to hold each clue's. light/sound
const cluePauseTime = 100; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence




//Global Variables


var pattern=[2, 2, 4, 3, 2, 1, 2, 4];
var pattern;
var progress =0;
var gamePlaying = false;
var tonePlaying=false;
var volume=.5;
var guessCounter=0;
var timerCounter=0;
var interval;
var timerResetter=9;
var sone=100;
var stwo=200;
var sthree=300;
var sfour=400;
var sfive=500;
var ssix=500;

function startGame(){
  // initialize game variables
  
  for(let i=0;i<=pattern.length-1;i++){
    pattern[i]=randomInt(1,5);
  }
  freqMap ={
    1:randomInt(50,500),
    2:randomInt(50,500),
    3:randomInt(50,500),
    4:randomInt(50,500),
    5:randomInt(50,500),
    6:randomInt(50,500),
        
  }
  
  progress=0;
  console.log("the value of patter 0 is "+ pattern[0]);
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

//Functions for lighting or clearing a button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function stopGame(){  
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden");
  
}


// swap the Start and Stop BUttons
// Sound Synthesis Functions
var freqMap = {
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600,
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//playing a single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
//starts timer
function startTimer(){
  interval=setInterval(timer,2000);
  
}

//this is the function. called if the interval reaches the alloted time
function timer(){
  if(gamePlaying==false) {
    resetTimer();
    return;
  }
  timerCounter++;
  document.getElementById("timer"+timerCounter).classList.add("hidden");
  timerResetter=timerCounter;
  if(timerCounter==8){loseGame()}
  
}
//Resets the timer bar.
function resetTimer(){
  timerCounter=0;
  clearInterval(interval);
  if(timerResetter==9) return;
  for(let i=1;i<=timerResetter;i++){
    document.getElementById("timer"+i).classList.remove("hidden");
  }
  timerResetter=9;
  
}
//play the sequence with this function
function playClueSequence(){
  
  startTimer()
  guessCounter=0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function randomInt(min, max){
  return Math.floor(Math.random() * (max-min)+min); 
  
}

function guess(btn){
  console.log("user guessed: " + btn);
  console.log("the correct anwser was " + pattern[guessCounter]);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter==progress){
      if(progress == pattern.length - 1){
        resetTimer();
        winGame();
      }else{
        progress++;
        resetTimer();
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    resetTimer();
    loseGame();
  }
}    
  



//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
