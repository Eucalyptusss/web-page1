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
var timerReseter=8;

function startGame(){
  // initialize game variables
  
  for(let i=0;i<=pattern.length-1;i++){
    pattern[i]=randomInt(1,4);
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
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
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
function startTimer(){
  interval=setInterval(timer,2000);
  
}
function timer(){
  
  timerCounter++;
  document.getElementById("timer"+timerCounter).classList.add("hidden");
  timerResetter=timerCounter
  if(timerCounter==8){loseGame()}
  
}
function resetTimer(){
  clearInterval(interval);
  for(let i=8;i>=0;i--){
    document.getElementById("timer"+i).classList.remove("hidden");
  }
  
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
