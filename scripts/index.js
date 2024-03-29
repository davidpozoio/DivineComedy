import { sceneDom, nameScene, health } from "./data/scene.js";
import { loadScene } from "./load-functions/loadScene.js";
import { scenes } from "./data/scenesData.js";
import { audioController } from "./audio-controller/audioController.js";
import { playHoverAudio } from "./audio-controller/playAudio.js";
import { loadImages } from "./load-functions/load-images/loadImages.js";
import { toogleAudio } from "./audio-controller/toogleAudio.js";
import { handleDecisionsClick } from "./event-functions/handleDecisionsClick.js";
import { loadAllAnimations } from "./animation-controller/animation-functions.js";
import { animations } from "./animation-controller/animations.js";
import { loadLife } from "./load-functions/loadLife.js";

sceneDom.$decisionsContainer.addEventListener("click", handleDecisionsClick);

sceneDom.$decisionsContainer.addEventListener("mouseover", (e) => {
  if (e.target.id != "decisions") {
    playHoverAudio(audioController);
  }
});

sceneDom.$toogleAudio.addEventListener("click", (e) => {
  if (toogleAudio(audioController)) {
    sceneDom.$toogleAudioImg.src = "./assets/icons/playing.jpg";
  } else {
    sceneDom.$toogleAudioImg.src = "./assets/icons/muted.jpg";
  }
});

function main() {
  loadLife(health, sceneDom, () => loadScene(scenes["gameover"], sceneDom));
  loadAllAnimations(animations)
    .then(() => loadImages(scenes, sceneDom))
    .then(() => loadScene(scenes[nameScene.actual], sceneDom));
}

main();
