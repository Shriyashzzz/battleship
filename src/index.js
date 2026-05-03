import "./style.css";
import "./homepageDom/homepage.js";
import { Player } from "./Class/Player.js";
import { Ship } from "./Class/Ship.js";
import { createBattlePage } from "./versusPageDom/battlePage.js";
import { showEndGame } from "./versusPageDom/endGame.js";
window.onload = function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
};
