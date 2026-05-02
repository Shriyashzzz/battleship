import { initializeGamePageDom } from "./initializeGamePage.js";

export const startBtnEventListener = () => {
  const startBtn = document.querySelector(".startBtn");
  const userNameInput = document.querySelector("#userName");
  startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (userNameInput.value.length >= 1) {
      userNameInput.classList.remove("is-invalid");
      const playerName = userNameInput.value;
      const homePageContent = (document.querySelector(
        ".homePageContent",
      ).innerHTML = "");
      const homePageMain = document
        .querySelector("main")
        .classList.remove("homePageMain");
      initializeGamePageDom(playerName);
    } else {
      console.log("is invalid");
      userNameInput.classList.add("is-invalid");
    }
  });
};
