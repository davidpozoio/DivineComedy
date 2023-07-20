import { start } from "./levels/start.js";
import { intro } from "./levels/intro.js";
import { limbo } from "./levels/limbo.js";
import { lujuria } from "./levels/lujuria.js";
import { gula } from "./levels/gula.js";
import { avaricia } from "./levels/avaricia.js";
import { pereza } from "./levels/pereza.js";
import { herejia } from "./levels/herejia.js";
import { violencia } from "./levels/violencia.js";
import { fraude } from "./levels/fraude.js";
import { traicion } from "./levels/traicion.js";
import { gameover } from "./levels/gameover.js";
import { final } from "./levels/final.js";
/**
 * STRUCTURE OF A SCENE
 * sceneName: {
 *      title: "title of the scene, it is optional attribute",
 *      description: {
 *          context: "here you can put the context of the scene or a brief description",
 *          text: "text of the scene, it can be a question or any thing",
 *          time: 1 //the time in seconds for the loading of the all description (context, text)
 *      },
 *      imgUrl: "link of the main img of a scene",
 *      decisions: [
 *          {
 *           description: 'text of decision',
 *           next: 'the name of the next scene that will be loaded when you click in this decision',
 *           type: 'type of decision, you can get these types of decisionType object',
 *           appear: true //optional boolean attribute, the decision will disappear when you click on it
 *          }
 *      ],
 *      styles: 'style name of this scene'
 * }
 */

export const firstSceneName = "start";

export const scenes = {
  start,
  intro,
  limbo,
  lujuria,
  gula,
  avaricia,
  pereza,
  herejia,
  violencia,
  fraude,
  traicion,
  gameover,
  final
};
