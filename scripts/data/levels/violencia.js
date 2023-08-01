import { decisionType } from "../decisionTypeData.js";

export const violencia = {
  title: "Violencia",
  description: {
    context: `Al llegar al séptimo círculo Dante se encuentra con varias almas condenadas que son sumergidos en un río de sangre hirviente y son perseguidos y atacados por centauros. En el segundo círculo, llamado "Fosa de los Violentos contra sí mismos", se encuentran los suicidas, transformados en árboles y constantemente atormentados.`,
    text: "¿Cuáles son las diferentes formas de violencia que Dante encuentra a lo largo de su viaje en la obra?",
    time: 0.5,
  },
  imgUrl: "../assets/img/nivel 7.jpg",
  decisions: [
    {
      description:
      "Dante encuentra principalmente formas de violencia física, como asesinatos y torturas extremas",
      type: decisionType.decreaseLife,
      appear: false,
    },
    {
      description:
      "Dante encuentra principalmente formas de violencia física, como asesinatos y torturas extremas",
      type: decisionType.decreaseLife,
      appear: true,
    },
    {
      description:
        "Dante encuentra diversas formas de violencia, que incluyen la violencia física, la violencia política y la violencia moral",
      next: "fraude",
    },
  ],
  styles: "sceneExample.css",
};
