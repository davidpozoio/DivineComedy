import { firstSceneName } from "./scenesData.js";

export const $game = document.querySelector(".game");
export const nameScene = {
  actual: firstSceneName
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
  $style: document.querySelector(".style"),
  $loadingBar: document.querySelector(".loading__bar"),
  $scene: document.querySelector(".scene"),
  $sceneImg: document.querySelector(".scene__img"),
  $toogleAudio: document.querySelector(".toogle-audio"),
  $sceneTitle: document.querySelector(".scene__title"),
  $life: document.querySelector('.life'),
  $heartImg: document.querySelector('.heart'),
  $sceneDescription: document.querySelector(".description"),
  $sceneText: document.querySelector(".description__text"),
  $sceneContext: document.querySelector(".description__context"),
  $decisionsContainer: document.querySelector(".decisions"),
};
