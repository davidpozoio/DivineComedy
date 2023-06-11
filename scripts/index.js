import { sceneDom, health, nameScene } from "./scene.js";
import { loadDecisions, hiddenDecisions } from "./decision.js";
import { scenes } from "./scenesData.js";
import { loadSceneStyles } from "./loadSceneStyles.js";
import { loadLife} from "./loadLife.js";
import { typeEffect} from "./typeEffectFunction.js";
import { decisionTypeFunction } from "./decisionTypeData.js";

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

  if(decisionTypeFunction.hasOwnProperty(e.target.dataset.type))
  decisionTypeFunction[e.target.dataset.type]();

  scenes[nameScene.actual].decisions = hiddenDecisions(
    e.target,
    scenes[nameScene.actual]
  );

  loadLife(health, sceneDom);
  if (health.lifePoints == 0 && health.active) {
    loadScene(scenes["gameover"], sceneDom);
  }

  if (e.target.id != "decisions" && scenes.hasOwnProperty(e.target.dataset.next)) {
    nameScene.actual = e.target.dataset.next;
    loadScene(scenes[e.target.dataset.next], sceneDom);
  }
});

loadScene(scenes["start"], sceneDom);
