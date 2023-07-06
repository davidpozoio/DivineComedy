import { sceneDom, nameScene } from "./data/scene.js";
import { loadScene } from "./load-functions/loadScene.js";
import { scenes } from "./data/scenesData.js";
import { audioController } from "./audio-controller/audioController.js";
import { playHoverAudio } from "./audio-controller/playAudio.js";
import { loadImages } from "./load-functions/load-images/loadImages.js";
import { toogleAudio } from "./audio-controller/toogleAudio.js";
import { handleDecisionsClick } from "./event-functions/handleDecisionsClick.js";
import { loadAllAnimations } from "./animation-controller/animation-functions.js";
import { animations } from "./animation-controller/animations.js";

sceneDom.$decisionsContainer.addEventListener("click", handleDecisionsClick);

sceneDom.$decisionsContainer.addEventListener("mouseover", (e) => {
  if (e.target.id != "decisions") {
    playHoverAudio(audioController);
  }
});

sceneDom.$toogleAudio.addEventListener("click", (e) => {
  if (toogleAudio(audioController)) {
    e.target.src = "./assets/icons/playing.jpg";
  } else {
    e.target.src = "./assets/icons/muted.jpg";
  }
});

loadAllAnimations(animations)
  .then(() => loadImages(scenes, sceneDom))
  .then(() => loadScene(scenes[nameScene.actual], sceneDom));
