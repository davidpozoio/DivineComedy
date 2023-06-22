import { sceneDom, health, nameScene } from "./data/scene.js";
import { loadScene } from "./load-functions/loadScene.js";
import { hiddenDecisions } from "./load-functions/decision.js";
import { scenes } from "./data/scenesData.js";
import { loadLife } from "./load-functions/loadLife.js";
import { decisionTypeFunction } from "./data/decisionTypeData.js";
import { audioController } from "./audioController/audioController.js";
import { audioData } from "./data/audioData.js";
import {
  playClickAudio,
  playHoverAudio,
  playSceneTheme,
} from "./audioController/playAudio.js";
import { loadImages } from "./load-functions/load-images/loadImages.js";
import { toogleAudio } from "./audioController/toogleAudio.js";

sceneDom.$decisionsContainer.addEventListener("click", (e) => {
  let button = e.target;
  let buttonType = e.target.dataset.type;

  if (button.id != "decisions") {
    playClickAudio(audioController);
  }

  playSceneTheme(audioData[button.dataset.next], audioController);

  if (buttonType in decisionTypeFunction) {
    decisionTypeFunction[buttonType]();
  }

  scenes[nameScene.actual].decisions = hiddenDecisions(
    button,
    scenes[nameScene.actual]
  );

  loadLife(health, sceneDom, () => loadScene(scenes["gameover"], sceneDom));

  if (e.target.id != "decisions" && button.dataset.next in scenes) {
    nameScene.actual = button.dataset.next;
    loadScene(scenes[button.dataset.next], sceneDom);
  }
});

sceneDom.$decisionsContainer.addEventListener("mouseover", (e) => {
  if (e.target.id != "decisions") {
    playHoverAudio(audioController);
  }
});

sceneDom.$toogleAudio.addEventListener("click", (e) => {
  if(toogleAudio(audioController)){
    e.target.src = "./assets/icons/playing.jpg"
  }else{
    e.target.src = "./assets/icons/muted.jpg"
  }
});

loadImages(scenes, sceneDom).then(() => {
  loadScene(scenes[nameScene.actual], sceneDom);
});
