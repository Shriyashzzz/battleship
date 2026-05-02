import { initializeGamePageDom } from "./initializeGamePage.js";

export const startBtnEventListener = () => {
  const startBtn = document.querySelector(".startBtn");
  const userNameInput = document.querySelector("#userName");
  startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (userNameInput.value.length >= 1) {
      userNameInput.classList.remove("is-invalid");
      const playerName = userNameInput.value;
      const homePageContent = document.querySelector(".homePageContent");
      homePageContent.innerHTML = "";
      const homePageMain = document.querySelector("main");
      homePageMain.classList.add("gameSelectMain");
      homePageMain.classList.remove("homePageMain");
      homePageContent.classList.add("gameSelectContent");
      homePageContent.classList.remove("homePageContent");
      initializeGamePageDom(playerName);
    } else {
      console.log("is invalid");
      userNameInput.classList.add("is-invalid");
    }
  });
};
