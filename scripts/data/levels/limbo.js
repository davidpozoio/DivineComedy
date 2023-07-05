import { decisionType } from "../decisionTypeData.js";

export const limbo = {
  title: "Limbo",
  description: {
    context: `Dante, llega al Limbo durante su viaje a través del Infierno. Se encuentra con personajes históricos y mitológicos, como Homero, Sócrates, Platón y César, que viven en una especie de felicidad relativa, pero sin la visión de Dios.`,
    text: "VIRGILIO: Tienes en tus manos el alma de estos personajes, ¿qué quieres hacer con ellos?",
    time: 0.5,
  },
  imgUrl: "../assets/img/nivel 1.jpg",
  decisions: [
    { description: "Castigar", next: "lujuria" },
    {
      description: "Absolver",
      type: decisionType.decreaseLife,
      appear: true,
    },
  ],
  styles: "sceneExample2.css",
};
