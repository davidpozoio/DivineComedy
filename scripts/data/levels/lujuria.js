import { decisionType } from "../decisionTypeData.js";

export const lujuria = {
  description: {
    context: `Durante su travesía y a través del 
            círculo de la lujuria  Dante encuentra
            a varias figuras históricas, como 
            Cleopatra, Helena de Troya y Tristán 
            e Isolda. Estas figuras simbolizan la 
            fama y las consecuencias trágicas que 
            surgieron de la lujuria en vida.
            `,
    text: "¿Crees que el placer de la lujuria sea un pecado que deba ser castigado?",
    time: 0.1,
  },
  imgUrl: "../assets/img/nivel2.jpg",
  decisions: [
    { description: "Castigar", next: "gula" },
    {
      description: "Absolver",
      type: decisionType.decreaseLife,
      appear: true,
    },
  ],
  styles: "sceneExample.css",
};
