const btnP1 = document.getElementById("submit1");
const btnP2 = document.getElementById("submit2");
const btnReset = document.getElementById("reset");
const spanP1 = document.getElementById("content4_sol");
const spanP2 = document.getElementById("content4_sağ");
const inputScore = document.getElementById("score");

let scoreP1 = 0;
let scoreP2 = 0;
let winScore = 5;
btnP1.addEventListener("click", increaseP1);
btnP2.addEventListener("click", increaseP2);
btnReset.addEventListener("click", resetScores);
inputScore.addEventListener("change", () => resetScores());
function endGame(winner) {
  btnP1.disabled = true;
  btnP2.disabled = true;
  if (winner === 1) {
    spanP1.style.color = "Green";
    spanP2.style.color = "rgb(255,0,0)";
  } else if (winner === 2) {
    spanP2.style.color = "Green";
    spanP1.style.color = "rgb(255,0,0)";
  }
}
function increaseP1() {
  scoreP1++;
  if (scoreP1 >= winScore) endGame(1);
  spanP1.innerHTML = scoreP1;
}
function increaseP2() {
  scoreP2++;
  if (scoreP2 >= winScore) endGame(2);
  spanP2.innerHTML = scoreP2;
}
function resetScores() {
  scoreP1 = 0;
  scoreP2 = 0;
  winScore = inputScore.value || 5;
  if (winScore <= 0) winScore = 5;
  inputScore.value = winScore;
  spanP1.innerHTML = scoreP1;
  spanP2.innerHTML = scoreP2;
  btnP1.removeAttribute("disabled");
  btnP2.removeAttribute("disabled");
  spanP1.style.color = "black";
  spanP2.style.color = "black";
}
