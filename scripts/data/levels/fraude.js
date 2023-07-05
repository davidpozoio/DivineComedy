import { decisionType } from "../decisionTypeData.js";

export const fraude = {
    title: "fraude",
    description: {
      context:
        'Tras pasar por el séptimo círculo Dantes se adentra en el octavo círculo del Infierno, conocido como el "Malebolge". Este círculo está dividido en diez fosas, cada una destinada a diferentes formas de fraude. Cada castigo se encuentra dividido por los diferentes tipos de fraude, como la hipocresía, el engaño, la seducción, la corrupción política y religiosa, entre otros. Cada fosa está reservada para un tipo específico de fraude y tiene su propio castigo particular.',
      text: "¿Cómo se castigan los actos de fraude en los diferentes círculos del Infierno según la visión de Dante?",
      time: 0.5,
    },
    imgUrl: "../assets/img/nivel 8.jpg",
    decisions: [
      {
        description:
          "Hay diez fosos que albergan a diferentes tipos de fraudulentos",
        next: "traicion",
      },
      {
        description:
          "Los fraudulentos son redimidos y perdonados, ya que se considera que su comportamiento deshonesto fue producto de circunstancias difíciles",
        type: decisionType.decreaseLife,
        appear: true,
      },
    ],
    styles: "sceneExample.css",
  }