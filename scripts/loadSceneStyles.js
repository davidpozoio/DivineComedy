/**
 * change the actual styles
 * @param {string} sceneStyles styles of a scene,
 * @param {object} sceneDom object with dom objects.
 */

export function loadSceneStyles(sceneStyles, sceneDom) {
  const {$link} = sceneDom;

  $link.href = `../styles/${sceneStyles}`;

}
