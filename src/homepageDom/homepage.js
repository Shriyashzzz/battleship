import { startBtnEventListener } from "./homePageEventListener.js";

const initializeHomePageElements = () => {
  const main = document.querySelector("main");
  main.classList.add("homePageMain");
  const container = document.createElement("div");
  container.classList.add("homePageContent");
  const gameName = document.createElement("p");
  gameName.textContent = "BATTLESHIP";

  const userName = document.createElement("input");
  userName.id = "userName";
  userName.type = "text";
  userName.placeholder = "Your Name Sire";
  userName.required;
  const nameForm = document.createElement("form");
  userName.minLength = 1;
  const startBtn = document.createElement("button");
  startBtn.textContent = "Start Game";
  startBtn.classList.add("startBtn");
  startBtn.type = "submit";
  nameForm.append(userName, startBtn);
  container.append(gameName, nameForm);

  const gameInfo = document.createElement("div");
  gameInfo.classList.add("gameInfo");
  const whatPara = document.createElement("p");
  whatPara.textContent = "How do I play this game?";
  const gameInfoLink = document.createElement("a");
  gameInfoLink.href = "https://www.youtube.com/watch?v=HM1ctXz1w4Y";
  gameInfoLink.textContent = "Game Intro";
  gameInfoLink.target = "_blank";
  gameInfoLink.classList.add("gameInfoLink");
  whatPara.classList.add("whatPara");
  gameInfo.append(whatPara, gameInfoLink);

  main.append(container, gameInfo);
};

(() => {
  initializeHomePageElements();
  startBtnEventListener();
})();
