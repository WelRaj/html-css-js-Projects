
var score = 0;
var timer = 60;
var ab = 0;

function increasescore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function makebubble() {
  var clutter = "";
  for (var i = 1; i <= 360; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function gethit() {
  ab = Math.floor(Math.random() * 10);
  document.querySelector("#hittime").textContent = ab;
}

function runtimer() {
  var timeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timeint);
      alert("Game Over! Your score is: " + score);
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  if (dets.target.classList.contains("bubble")) {
    var bubblenumber = Number(dets.target.textContent);
    if (bubblenumber === ab) {
      increasescore();
      gethit(); 
    }
  }
});

gethit();
runtimer();
makebubble();
