import { audioController } from "../audio-controller/audioController.js";
import {
  playClickAudio,
  playSceneTheme,
} from "../audio-controller/playAudio.js";
import { decisionTypeFunction } from "../data/decisionTypeData.js";
import { health, nameScene, sceneDom } from "../data/scene.js";
import { sceneThemes } from "../data/sceneThemes.js";
import { scenes } from "../data/scenesData.js";
import { hiddenDecisions } from "../load-functions/decision.js";
import { loadLife } from "../load-functions/loadLife.js";
import { loadScene } from "../load-functions/loadScene.js";

export function handleDecisionsClick(e) {
  let decision = e.target;
  let decisionType = e.target.dataset.type;
  let nextScene = decision.dataset.next;

  playSceneAudio(
    decision.id,
    sceneThemes[nextScene],
    audioController
  );

  if (decisionType in decisionTypeFunction) {
    decisionTypeFunction[decisionType]();
  }

  scenes[nameScene.actual].decisions = hiddenDecisions(
    decision,
    scenes[nameScene.actual]
  );

  updateLife(decision.id, health, sceneDom, () =>{
    playSceneTheme(sceneThemes["gameover"], audioController)
    loadScene(scenes["gameover"], sceneDom)
  });

  loadNextScene({
    targetId: decision.id,
    nextScene,
    scenes,
    sceneDom,
    nameScene,
  });
}

function playSceneAudio(targetId, sceneTheme, audioController) {
  if (targetId != "decisions") {
    playClickAudio(audioController);
  }
  playSceneTheme(sceneTheme, audioController);
}

function loadNextScene({ targetId, nextScene, scenes, sceneDom, nameScene }) {
  if (targetId != "decisions" && nextScene in scenes) {
    nameScene.actual = nextScene;
    loadScene(scenes[nextScene], sceneDom);
  }
}

function updateLife(targetId, health, sceneDom, gameover){
  if(targetId != "decisions"){
    loadLife(health, sceneDom, gameover);
  }
}
