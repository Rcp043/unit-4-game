// lets get this over with

// this is were the scores will hopefully be set up
var yourScore = document.getElementById('yourScore');
yourScore.innerHTML = 0;
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(100, 40);
// this in theory should log the target score but i can never be too sure because javascript hurts my brain
console.log(targetScore);

// so apperently parseINT("") turns whatevers inside into an integer...

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

var onebtn = document.getElementById("onebtn");
// please god log 1
console.log(onebtn.value);

var twobtn = document.getElementById("twobtn");
// please god log 20
console.log(twobtn.value);

var threebtn = document.getElementById("threebtn");
//please god log 3
console.log(threebtn.value);

var fourbtn = document.getElementById("fourbtn");
// please god log 69
console.log(fourbtn.value);

// add an event listeners yo
onebtn.addEventListener('click', function () {
  addToScore(this.value);
  checkPlayerScore();
});


twobtn.addEventListener('click', function () {
  addToScore(this.value);
  checkPlayerScore();
});

threebtn.addEventListener('click', function () {
  addToScore(this.value);
  checkPlayerScore();
});

fourbtn.addEventListener('click', function () {
  addToScore(this.value);
  checkPlayerScore();
});


function getRandomValue(a, b) {
  return Math.floor((Math.random() * a) + b);
}


function checkPlayerScore() {
  //yourScore, targetScore hopefully?
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {
    alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  }
}
console.log("web development is hard");