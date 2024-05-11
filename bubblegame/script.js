var timer = 60;
var score = 0;
var data;
var bubble = document.querySelector("#pbottom");
var hit;

function generateBubbles() {
  var clutter = "";
  for (var i = 1; i <= 154; i++) {
    clutter += `<div class="bubble">${
      Math.floor(Math.random() * 49) + 1
    }</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}
function setTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timercount").textContent = timer;
    } else {
      clearInterval(timerInterval);
      bubble.innerHTML =`<h1> GAME OVER!!</h1>`;
    }
  }, 1000);
}
function getNewHit() {
  hit = Math.floor(Math.random() * 49) + 1;
  document.querySelector("#hit").innerHTML = hit;
}

function updateScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

bubble.addEventListener("click", function (e) {
  data = Number(e.target.textContent);
  if (data === hit) {
    updateScore();
    generateBubbles();
    getNewHit();
  } else {
  }
});
generateBubbles();
getNewHit();
setTimer();
