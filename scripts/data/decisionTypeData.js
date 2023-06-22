import { audioController } from "../audio-controller/audioController.js";
import { playDamageAudio } from "../audio-controller/playAudio.js";
import { decreaseLife, increaseLife } from "../load-functions/loadLife.js";
import { health } from "./scene.js";

/**
 * TYPES OF A DECISION
 * when you click in a decision of this type
 *
 * increaseLife -> you increase your life
 * decreaseLife -> you decrease your life
 * reload -> you reload the page, and all your progress is lost
 * noLifePoints -> you deactive life points and you can't die
 * withLifePoints -> you active life points
 */

export const decisionType = {
  increaseLife: "increaseLife",
  decreaseLife: "decreaseLife",
  reload: "reload",
  noLifePoints: "noLifePoints",
  withLifePoints: "withLifePoints",
  toggleLife: "toggleLife"
};

export const decisionTypeFunction = {
  [decisionType.increaseLife]: () => {
    health.lifePoints = increaseLife(health);
  },
  [decisionType.decreaseLife]: () => {
    playDamageAudio(audioController);
    health.lifePoints = decreaseLife(health);
  },
  [decisionType.reload]: () => {
    window.location.reload();
  },
  [decisionType.noLifePoints]: () => {
    health.active = false;
  },
  [decisionType.withLifePoints]: () => {
    health.active = true;
  },
  [decisionType.toggleLife]: () => {
    health.active = !health.active;
  }
};
