
export const intro = {
  description: {
    context: `Dante se encuentra perdido en el bosque oscuro y se ve amenazado por bestias salvajes que simbolizan el pecado y la corrupción. En ese momento, el poeta romano Virgilio aparece y se convierte en su guía a través de los reinos infernales.`,
    text: "VIRGILIO: veo claramente que debes seguirme, yo seré tu guía y te sacaré de aquí para llevarte a un lugar eterno:",
    time: 1,
  },
  imgUrl: "../assets/img/introduccion.jpg",
  decisions: [
    { description: "Seguir", next: "limbo" },
    { description: "No seguir", next: "start" },
  ],
  styles: "sceneExample2.css",
};
