import { startBtnEventListener } from "./homePageEventListener.js";
import soundOn from "../icons/soundOn.svg";
import soundOff from "../icons/soundOff.svg";
import { audio } from "../audio/audioObject.js";

export let audioChoice = false;
const initializeHomePageElements = () => {
  const main = document.querySelector("main");
  main.classList.add("homePageMain");
  const container = document.createElement("div");
  container.classList.add("homePageContent");
  const playAudioBtn = document.createElement("button");
  playAudioBtn.classList.add("audioBtn");
  const playImg = document.createElement("img");
  playImg.classList.add("playImg", "icons");
  const muteImg = document.createElement("img");
  muteImg.classList.add("muteImg", "icons");
  muteImg.style.display = "block";
  playImg.style.display = "none";
  playImg.src = soundOn;
  muteImg.src = soundOff;
  playAudioBtn.append(playImg, muteImg);
  playAudioBtn.addEventListener("click", () => {
    if (audio.bgAudio.paused) {
      audioChoice = true;
      audio.bgAudio.play();
      audio.bgAudio.loop = true;
      audio.bgAudio.volume = 0.5;
      playImg.style.display = "block";

      playImg.classList.add("animate");
      setTimeout(() => {
        playImg.classList.remove("animate");
      }, 600);
      muteImg.style.display = "none";
      audio.bgAudio.loop = true; // Keep the battle music going!
    } else {
      audioChoice = false;
      audio.bgAudio.pause();
      muteImg.classList.add("animate");
      setTimeout(() => {
        muteImg.classList.remove("animate");
      }, 600);
      muteImg.style.display = "block";
      playImg.style.display = "none";
    }
    playAudioBtn.classList.remove("animate");
  });
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
  // audio toggle
  const body = document.querySelector("body");
  body.appendChild(playAudioBtn);
};

(() => {
  initializeHomePageElements();
  startBtnEventListener();
})();
