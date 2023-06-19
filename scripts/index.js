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

sceneDom.$decisionsContainer.addEventListener("click", (e) => {
  let button = e.target;
  let buttonType = e.target.dataset.type;

  if (button.id != "decisions") {
    playClickAudio(audioController);
  }

  playSceneTheme(audioData[button.dataset.next], audioController);

  if (decisionTypeFunction.hasOwnProperty(buttonType)){
    decisionTypeFunction[buttonType]();
  }

  scenes[nameScene.actual].decisions = hiddenDecisions(
    button,
    scenes[nameScene.actual]
  );

  loadLife(health, sceneDom, () => loadScene(scenes["gameover"], sceneDom));

  if (
    e.target.id != "decisions" &&
    scenes.hasOwnProperty(button.dataset.next)
  ) {
    nameScene.actual = button.dataset.next;
    loadScene(scenes[button.dataset.next], sceneDom);
  }
});

sceneDom.$decisionsContainer.addEventListener("mouseover", (e) => {
  if (e.target.id != "decisions") {
    playHoverAudio(audioController);
  }
});

loadScene(scenes["start"], sceneDom);
