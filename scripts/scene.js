export const $game = document.querySelector(".game");
export const health = {
  lifePoints: 3,
  minLife: 0,
  maxLife: 3,
  damage: 1,
  heal: 1
}

export const sceneDom = {
  $head: document.querySelector("head"),
  $sceneImg: document.querySelector(".scene__img"),
  $decisionsContainer: document.querySelector(".decisions"),
  $sceneDescription: document.querySelector(".scene__description"),
  $textLife: document.querySelector('h1')
};
