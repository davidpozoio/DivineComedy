import { typeEffect } from "./typeEffectFunction.js";

export function loadDescription(description, sceneDom) {
  const { $decisionsContainer, $sceneDescription } = sceneDom;

  $sceneDescription.textContent = "";
  $decisionsContainer.innerHTML = "";

  return typeEffect(description, $sceneDescription);
}
