import { typeEffect } from "../effect-functions/typeEffectFunction.js";

export function loadDescription(description, sceneDom, sequentialLoad = true) {
  const { $decisionsContainer, $sceneContext, $sceneText } = sceneDom;

  $sceneContext.innerHTML = "";
  $sceneText.innerHTML = "";
  $decisionsContainer.innerHTML = "";

  if (sequentialLoad) {
    return loadContext(description, sceneDom).then(() => {
      return loadText(description, sceneDom);
    });
  }

  return Promise.all([
    loadContext(description, sceneDom),
    loadText(description, sceneDom),
  ]);
}

export function loadContext({ context = "", time = 1 }, sceneDom) {
  const { $sceneContext } = sceneDom;

  return typeEffect(context, time, $sceneContext);
}

export function loadText({ text = "", time = 1 }, sceneDom) {
  const { $sceneText } = sceneDom;

  return typeEffect(text, time, $sceneText);
}
