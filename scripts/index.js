import { sceneDom, health } from "./scene.js";
import { loadDecisions } from "./decision.js";
import { scenes } from "./scenesData.js";
import { loadSceneStyles } from "./loadSceneStyles.js";
import { loadLife } from "./loadLife.js";

function loadScene({ description, imgUrl, decisions, style }, sceneDom) {
  const { $sceneDescription, $sceneImg } = sceneDom;

  loadSceneStyles(style, sceneDom);

  if ($sceneDescription.textContent != description)
    $sceneDescription.textContent = description;
  if ($sceneImg.src != imgUrl) $sceneImg.src = imgUrl;

  loadDecisions(decisions, sceneDom);
}

sceneDom.$decisionsContainer.addEventListener("click", (e) => {
  if(e.target.id == "increaseLife") health.lifePoints += health.damage;
  if(e.target.id == "decreaseLife") health.lifePoints -= health.heal;

  loadLife(health.lifePoints, sceneDom);

  if (e.target.id != "decisions" && scenes.hasOwnProperty(e.target.id)) loadScene(scenes[e.target.id], sceneDom);
});

loadScene(scenes["start"], sceneDom);

