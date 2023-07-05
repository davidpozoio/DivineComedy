import { decisionType } from "../decisionTypeData.js";

export const traicion = {
  title: "Traicion",
  description: {
    context:
      'Al llegar al último círculo Dantes se encuentra ante un lugar conocido como el "Traidores". Este círculo está dividido en cuatro fosas concéntricas, cada una destinada a diferentes tipos de traición. En este noveno círculo, se encuentran diferentes formas de traición, como la traición política, la traición a la familia, la traición a los huéspedes y la traición a los benefactores. Cada fosa tiene su propio castigo específico para cada tipo de traición',
    text: "¿Cuáles son las diferentes formas de traición que Dante encuentra a lo largo de su viaje en la obra?",
    time: 0.5,
  },
  imgUrl: "../assets/img/nivel 9.jpg",
  decisions: [
    {
      description:
        "Dante encuentra diferentes formas de traición, que incluyen la traición política, la traición familiar y la traición religiosa",
      next: "start",
    },
    {
      description: "Dante solo encuentra una forma de traición",
      type: decisionType.decreaseLife,
      appear: false,
    },
    {
      description: "Dante solo encuentra una forma de traición",
      type: decisionType.decreaseLife,
      appear: true,
    },
  ],
  styles: "sceneExample.css",
};
