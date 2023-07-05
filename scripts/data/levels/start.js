import { decisionType } from "../decisionTypeData.js";

export const start = {
  title: "START GAME",
  description: {},
  imgUrl: "../assets/img/INICIO.jpg",
  decisions: [
    { description: "start", next: "intro" },
    { description: "con vida", type: decisionType.withLifePoints },
    { description: "sin vidad", type: decisionType.noLifePoints },
    { description: "quitar vida", type: decisionType.decreaseLife },
  ],
  styles: "start.css",
};
