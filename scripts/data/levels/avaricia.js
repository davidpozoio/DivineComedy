import { decisionType } from "../decisionTypeData.js";

export const avaricia = {
    description: {
      context:
        "Al entrar al cuarto círculo, Dante encuentra a varias figuras históricas, como Midas, el rey de Frigia, conocido por su deseo insaciable de oro. Estas figuras representan a aquellos que en vida fueron consumidos por su afán de acumular riquezas y no supieron usarlas para fines justos o caritativos.",
      text: "VIRGILIO: El rey midas por su codicia cayó en la locura, pero se arrepintió al final, crees que merece ser castigado de tal manera?",
      time: 0.5,
    },
    imgUrl: "../assets/img/nivel 4.jpg",
    decisions: [
      { description: "Castigar", next: "pereza" },
      {
        description: "Absolver",
        type: decisionType.decreaseLife,
        appear: true,
      },
    ],
    styles: "sceneExample.css",
  }