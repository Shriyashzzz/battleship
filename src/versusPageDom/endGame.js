export function showEndGame(winnerName, playerObj) {
  const gridWrapper = document.querySelector(".gridWrapper");
  clearUI(gridWrapper);
  const winnerPara = document.createElement("p");
  winnerPara.textContent = `Captain ${winnerName} wins this war!`;
  winnerPara.classList.add("winnerPara");
  gridWrapper.append(winnerPara);
}

const clearUI = (gridWrapper) => {
  gridWrapper.innerHTML = "";
};
