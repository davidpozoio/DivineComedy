import { sceneDom, health, nameScene } from "./scene.js";
import { loadDecisions, hiddenDecision } from "./decision.js";
import { scenes } from "./scenesData.js";
import { loadSceneStyles } from "./loadSceneStyles.js";
import { loadLife, increaseLife, decreaseLife } from "./loadLife.js";

function loadScene({ description, imgUrl, decisions, style }, sceneDom) {
  const { $sceneDescription, $sceneImg } = sceneDom;

  loadSceneStyles(style, sceneDom);

  if ($sceneDescription.textContent != description)
    $sceneDescription.textContent = description;
  if ($sceneImg.src != imgUrl) $sceneImg.src = imgUrl;

  loadDecisions(decisions, sceneDom);
}

sceneDom.$decisionsContainer.addEventListener("click", (e) => {
  if (e.target.dataset.type == "increaseLife")
    health.lifePoints = increaseLife(health);
  if (e.target.dataset.type == "decreaseLife")
    health.lifePoints = decreaseLife(health);

  scenes[nameScene.actual].decisions = hiddenDecision(e.target, scenes[nameScene.actual]);


  loadLife(health.lifePoints, sceneDom);
  if (health.lifePoints == 0) loadScene(scenes["gameover"], sceneDom);

  if (e.target.id != "decisions" && scenes.hasOwnProperty(e.target.id)){
    nameScene.actual = e.target.id;
    loadScene(scenes[e.target.id], sceneDom);
  }
    
});

loadScene(scenes["start"], sceneDom);
