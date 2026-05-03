export function showEndGame(winnerName, playerObj) {
  const gridWrapper = document.querySelector(".gridWrapper");
  clearUI(gridWrapper);
  const winnerPara = document.createElement("p");
  winnerPara.textContent = `Captain ${winnerName} wins this war!`;
  winnerPara.classList.add("winnerPara");
  const replayBtn = document.createElement("button");
  replayBtn.classList.add("replayGameBtn");
  replayBtn.textContent = "Play Again?";
  replayBtn.addEventListener("click", () => {
    window.location.reload();
  });
  const playAgainWrapper = document.createElement("section");
  playAgainWrapper.append(winnerPara, replayBtn);
  gridWrapper.append(playAgainWrapper);
}

const clearUI = (gridWrapper) => {
  gridWrapper.innerHTML = "";
};
