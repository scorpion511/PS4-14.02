var TARGET = "log=1&afterglow=run&mode=goldhen";
var countEl = document.getElementById("count");
var seconds = 3;

function start() {
  location.href = "jb.html?" + TARGET;
}

if (countEl) {
  countEl.textContent = "[ LAUNCHING IN " + seconds + "... ]";
}

var timer = setInterval(function () {
  seconds--;
  if (seconds > 0) {
    if (countEl) countEl.textContent = "[ LAUNCHING IN " + seconds + "... ]";
  } else {
    clearInterval(timer);
    if (countEl) countEl.textContent = "[ EXECUTING... ]";
    start();
  }
}, 1000);
