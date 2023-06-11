import { sceneDom, health, nameScene } from "./scene.js";
import { loadDecisions, hiddenDecisions } from "./decision.js";
import { scenes } from "./scenesData.js";
import { loadSceneStyles } from "./loadSceneStyles.js";
import { loadLife, increaseLife, decreaseLife } from "./loadLife.js";
import { cancelTypeEffect, typeEffect} from "./typeEffectFunction.js";

function loadScene({ description, imgUrl, decisions, style }, sceneDom) {
  const { $sceneDescription, $sceneImg, $decisionsContainer } = sceneDom;

  loadSceneStyles(style, sceneDom);

  if ($sceneDescription.textContent != description){
    $sceneDescription.textContent = '';
    $decisionsContainer.innerHTML = '';
    typeEffect(description, $sceneDescription)
      .then(()=>{
        loadDecisions(decisions, sceneDom);
      });
  }
    
  if ($sceneImg.src != imgUrl) $sceneImg.src = imgUrl;


}

sceneDom.$decisionsContainer.addEventListener("click",(e) => {
  if (e.target.dataset.type == "increaseLife")
    health.lifePoints = increaseLife(health);
  if (e.target.dataset.type == "decreaseLife")
    health.lifePoints = decreaseLife(health);
  if (e.target.dataset.type == "reload") window.location.reload();

  scenes[nameScene.actual].decisions = hiddenDecisions(
    e.target,
    scenes[nameScene.actual]
  );

  loadLife(health.lifePoints, sceneDom);
  if (health.lifePoints == 0) {
    loadScene(scenes["gameover"], sceneDom);
  }

  if (e.target.id != "decisions" && scenes.hasOwnProperty(e.target.id)) {
    nameScene.actual = e.target.id;
    loadScene(scenes[e.target.id], sceneDom);
  }
});

loadScene(scenes["start"], sceneDom);
