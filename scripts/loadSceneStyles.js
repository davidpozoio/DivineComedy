export function loadSceneStyles(sceneStyle, sceneDom) {
  const {$link} = sceneDom;

  $link.href = `../styles/${sceneStyle}`;

}
