import {sceneDom} from "./scene.js"
import { loadDecisions } from "./decision.js";
import { scenes } from "./scenesData.js";



function loadScene({description, imgUrl, decisions}, sceneDom){
    const {$sceneDescription, $sceneImg} = sceneDom;

    if($sceneDescription.textContent != description) $sceneDescription.textContent = description;
    if($sceneImg.src != imgUrl) $sceneImg.src = imgUrl;
    loadDecisions(decisions, sceneDom);
}

sceneDom.$decisionsContainer.addEventListener("click",(e)=>{
    if(e.target.id != "decisions") loadScene(scenes[e.target.id], sceneDom); 

});

loadScene(scenes["start"], sceneDom);