import { sceneDom, health, nameScene } from "./scene.js";
import { loadDecisions, hiddenDecisions } from "./decision.js";
import { scenes } from "./scenesData.js";
import { loadSceneStyles } from "./loadSceneStyles.js";
import { loadLife } from "./loadLife.js";
import { decisionTypeFunction } from "./decisionTypeData.js";
import { loadDescription } from "./loadDescription.js";

function loadScene({ description, imgUrl, decisions, styles }, sceneDom) {
  const {$sceneImg } = sceneDom;

  $sceneImg.src = imgUrl;

  $sceneImg.onload = () => {
    loadSceneStyles(styles, sceneDom);

    loadDescription(description, sceneDom).then(() =>
      loadDecisions(decisions, sceneDom)
    );
  };
  
}

sceneDom.$decisionsContainer.addEventListener("click", (e) => {
  let button = e.target;
  let buttonType = e.target.dataset.type;

  if (decisionTypeFunction.hasOwnProperty(buttonType))
    decisionTypeFunction[buttonType]();

  scenes[nameScene.actual].decisions = hiddenDecisions(
    button,
    scenes[nameScene.actual]
  );

  loadLife(health, sceneDom);
  if (health.lifePoints == health.minLife && health.active) {
    loadScene(scenes["gameover"], sceneDom);
  }

  if (
    e.target.id != "decisions" &&
    scenes.hasOwnProperty(button.dataset.next)
  ) {
    nameScene.actual = button.dataset.next;
    loadScene(scenes[button.dataset.next], sceneDom);
  }
});

loadScene(scenes["start"], sceneDom);
