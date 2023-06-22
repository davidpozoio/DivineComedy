import { sceneDom, health, nameScene } from "./data/scene.js";
import { loadScene } from "./load-functions/loadScene.js";
import { hiddenDecisions } from "./load-functions/decision.js";
import { scenes } from "./data/scenesData.js";
import { loadLife } from "./load-functions/loadLife.js";
import { decisionTypeFunction } from "./data/decisionTypeData.js";
import { audioController } from "./audio-controller/audioController.js";
import { sceneThemes } from "./data/sceneThemes.js";
import {
  playClickAudio,
  playHoverAudio,
  playSceneTheme,
} from "./audio-controller/playAudio.js";
import { loadImages } from "./load-functions/load-images/loadImages.js";
import { toogleAudio } from "./audio-controller/toogleAudio.js";

sceneDom.$decisionsContainer.addEventListener("click", (e) => {
  let decision = e.target;
  let decisionType = e.target.dataset.type;

  if  (decision.id != "decisions") {
    playClickAudio(audioController);
  }

  playSceneTheme(sceneThemes [decision.dataset.next], audioController);

  if (decisionType in decisionTypeFunction) {
    decisionTypeFunction[decisionType]();
  }

  scenes[nameScene.actual].decisions = hiddenDecisions(
   decision,
    scenes[nameScene.actual]
  );

  loadLife(health, sceneDom, () => loadScene(scenes["gameover"], sceneDom));

  if (e.target.id != "decisions" && decision.dataset.next in scenes) {
    nameScene.actual = decision.dataset.next;
    loadScene(scenes [decision.dataset.next], sceneDom);
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
