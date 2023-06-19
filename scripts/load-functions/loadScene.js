import { loadDescription } from "./loadDescription.js";
import { loadDecisions } from "./decision.js";
import { loadSceneStyles } from "./loadSceneStyles.js";

export function loadScene(
  {
    title = "",
    description,
    imgUrl = "../assets/img-backgrounds/noImage.jpeg",
    decisions,
    styles,
  },
  sceneDom
) {
  const { $sceneImg, $sceneTitle } = sceneDom;

  $sceneImg.src = imgUrl;

  $sceneImg.onload = () => {
    loadSceneStyles(styles, sceneDom);
    $sceneTitle.innerHTML = title;
    loadDescription(description, sceneDom, true).then(() => {
      loadDecisions(decisions, sceneDom);
    });
  };

  $sceneImg.onerror = () => {
    $sceneImg.src = "../assets/img-backgrounds/noImage.jpeg";
  };
}
