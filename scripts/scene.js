export const $game = document.querySelector(".game");
export const nameScene = {
  actual: 'start'
};
export const health = {
  lifePoints: 3,
  minLife: 0,
  maxLife: 3,
  damage: 1,
  heal: 1,
  active: true
}

export const sceneDom = {
  $link: document.querySelector("link"),
  $sceneImg: document.querySelector(".scene__img"),
  $decisionsContainer: document.querySelector(".decisions"),
  $sceneDescription: document.querySelector(".scene__description"),
  $textLife: document.querySelector('.life')
};
