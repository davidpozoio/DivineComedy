import { decisionType } from "../decisionTypeData.js";

export const herejia = {
  description: {
    context: `Dante y su guía, Virgilio, descienden a este círculo después de 
            atravesar los círculos de la avaricia, la gula, la lujuria y la 
            ira.
            Dante encuentra a diversas figuras históricas 
             y teológicas en este círculo, como Epicuro y 
            Federico II de Sicilia. Estas figuras representan
             a aquellos que, en vida, promovieron doctrinas 
             contrarias a la enseñanza de la Iglesia y fueron 
            considerados herejes.`,
    text: " ¿Cómo define la iglesia católica la herejía y cuáles son las consecuencias para aquellos acusados  de herejía?",
    time: 0.5,
  },
  imgUrl: "../assets/img/nivel 6.jpg",
  decisions: [
    {
      description:
      "La Iglesia no toma medidas enérgicas contra los herejes Y los acepta dentro de su comunidad religiosa",
      type: decisionType.decreaseLife,
      appear: false,
    },
    {
      description:
      "La Iglesia no toma medidas enérgicas contra los herejes Y los acepta dentro de su comunidad religiosa",
      type: decisionType.decreaseLife,
      appear: true,
    },
    {
      description:
        "Aquellos acusados de herejía podrían enfrentar diversas consecuencias",
      next: "violencia",
    },
  ],
  styles: "sceneExample.css",
};
