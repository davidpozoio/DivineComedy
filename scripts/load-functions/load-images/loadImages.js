import { delay } from "../../effect-functions/typeEffectFunction.js";
import { increaseAmounInBar } from "./loadingBar.js";

export function loadImages(scenes, { $loadingBar }) {
  return new Promise(async (resolve) => {
    let images = [];
    let percentageBar = 0;
    let percentageAmount = 100 / Object.values(scenes).length;

    Object.values(scenes).forEach((value, index) => {
      images.push({ loaded: false, img: new Image() });
      images[index].img.src = value.imgUrl;

      images[index].img.onload = () => {
        images[index].loaded = true;
        percentageBar += percentageAmount;
        increaseAmounInBar($loadingBar, percentageBar);
      };

      images[index].img.onerror = () => {
        images[index].img.src = "../assets/img-backgrounds/noImage.jpeg";
      };
    });

    while (true) {
      if (images.every((img) => img.loaded)) {
        break;
      }
      console.log("loading...");
      await delay(0.5);
    }
    console.log("loading complete!");

    updateImgUrls(scenes, images);

    resolve();
  });
}

export function updateImgUrls(scenes, imageUrls) {
  let i = 0;

  for (let key in scenes) {
    scenes[key].imgUrl = imageUrls[i].img.src;
    i++;
  }
}
