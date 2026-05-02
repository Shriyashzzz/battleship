export const createBattlePage = (playerObj) => {
  let shipInfo = playerObj.playerGameBoard.battleSpace;
  cleanPage();
};

function cleanPage() {
  const gameSelectContent = document.querySelector(".gameSelectContent");
  gameSelectContent.classList.add("battlePageContent");
  gameSelectContent.classList.remove("gameSelectContent");
  gameSelectContent.innerHTML = "";
}
