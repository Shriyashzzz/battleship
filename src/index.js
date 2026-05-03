import { audio } from "./audio/audioObject.js";
import "./style.css";
import "./homepageDom/homepage.js";
import { Player } from "./Class/Player.js";
import { Ship } from "./Class/Ship.js";
import { createBattlePage } from "./versusPageDom/battlePage.js";
import { showEndGame } from "./versusPageDom/endGame.js";
import soundOn from "./icons/soundOn.svg";
import soundOff from "./icons/soundOff.svg";

export let audioChoice = false;

window.onload = function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
};

(() => {
  const playAudioBtn = document.createElement("button");
  const body = document.querySelector("body");
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
      audio.bgAudio.volume = 0.5;
      playImg.style.display = "block";

      playImg.classList.add("animate");
      setTimeout(() => {
        playImg.classList.remove("animate");
      }, 600);
      muteImg.style.display = "none";
      audio.bgAudio.loop = true;
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
  });
  body.appendChild(playAudioBtn);
})();
