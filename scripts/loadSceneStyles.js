export function loadSceneStyles(sceneStyle, sceneDom) {
  const { $head } = sceneDom;

  $head.innerHTML = "";

  const $link = document.createElement("link");
  $link.rel = "stylesheet";
  $link.type = "text/css";
  $link.href = `../styles/${sceneStyle}`;

  $head.appendChild($link);
}
