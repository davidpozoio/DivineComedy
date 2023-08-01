import { decisionType } from "../decisionTypeData.js";

export const start = {
  title: "START GAME",
  description: {},
  imgUrl: "../assets/img/INICIO.jpg",
  decisions: [
    { description: "START", next: "intro" },
    { description: "CON VIDA", type: decisionType.withLifePoints },
    { description: "SIN VIDA", type: decisionType.noLifePoints },
    { description: "QUITAR VIDA", type: decisionType.decreaseLife },
  ],
  styles: "start.css",
};
