import { decisionType } from "../decisionTypeData.js";

export const gula = {
  description: {
    context: `A medida que Dante avanza por el infierno, llega al tercer círculo, donde se encuentra con alegorías y figuras que ilustran los efectos destructivos de la gula. Estos ejemplos contrastan con la virtud de la moderación y la necesidad de controlar los apetitos y deseos excesivos.A medida que Dante avanza, interactúa con algunos de los pecadores y escucha sus historias y lamentaciones. Estas interacciones ayudan a transmitir las consecuencias y la naturaleza del pecado de la gula.`,
    text: "VIRGILIO: ¿cómo te sientes tras tales acontecimientos escuchados?",
    time: 2,
  },
  imgUrl: "../assets/img/nivel 3.jpg",
  decisions: [
    {
      description: "Hambriento",
      type: decisionType.decreaseLife,
      appear: true,
    },
    { description: "Sin apetito", next: "avaricia" },
    {
      description: "Quiero ayudarlos",
      type: decisionType.decreaseLife,
      appear: true,
    },
    {
      description: "Vamonos de aqui",
      type: decisionType.decreaseLife,
      appear: true,
    },
  ],
  styles: "gula.css",
};
