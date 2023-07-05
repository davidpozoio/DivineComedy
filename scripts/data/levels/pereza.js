import { decisionType } from "../decisionTypeData.js";

export const pereza = {
  title: "Pereza",
  description: {
    context: `Conforme Dante avanza por los diferentes círculos del infierno llega al Pantano de Estigia. Dante encuentra a los pecadores que han sido consumidos por la ira y la violencia en vida.Los iracundos explosivos se encuentran, enfrentándose entre ellos y golpeándose mutuamente. Los iracundos reprimidos se encuentran más alejados y reprimen su ira, sumidos en un estado de tristeza y resentimiento.`,
    text: "¿Qué castigo sufren los pecadores en el círculo de la ira en La Divina Comedia?",
    time: 0.5,
  },
  imgUrl: "../assets/img/nivel 5.jpg",
  decisions: [
    {
      description:
        "Son sumergidos en un pantano de lodo y se enfrentan entre sí.",
      next: "herejia",
    },
    {
      description: "Son congelados en el lago Cocito.",
      type: decisionType.decreaseLife,
      appear: false,
    },
    {
      description: "Son sometidos a un fuego eterno.",
      type: decisionType.decreaseLife,
      appear: false,
    },
    {
      description: "Se enfrentan entre sí.",
      type: decisionType.decreaseLife,
      appear: true,
    },
  ],
  styles: "gula.css",
};
