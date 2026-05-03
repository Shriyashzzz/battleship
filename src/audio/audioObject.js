import bgMusicFile from "./battleShip_bg.mp3";
import hitSE from "./bomb.mp3";
import missSE from "./miss.mp3";
import yoSE from "./yo.mp3";
export const audio = {
  bgAudio: new Audio(bgMusicFile),
  hit: new Audio(hitSE),
  miss: new Audio(missSE),
  yo: new Audio(yoSE),
};
