import "./style.css";
import "./homepage.js";

skipToGameSelect();
function skipToGameSelect() {
  const userNameInput = document.querySelector("#userName");
  userNameInput.value = "Shriyash";
  const startBtn = document.querySelector(".startBtn");
  startBtn.click();
}
