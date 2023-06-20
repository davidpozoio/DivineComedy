import { delay } from "../../effect-functions/typeEffectFunction.js";
import { increaseAmounInBar } from "./loadingBar.js";

export function loadImages(scenes, {$loadingBar}) {
  return new Promise(async (resolve) => {
    let images = [];
    let percentageBar = 0;
    let percentageAmount = 100/(Object.values(scenes).length);

    Object.values(scenes).forEach((value, index)=>{
        images.push({url: value.imgUrl, loaded: false, img: new Image()});
        images[index].img.src = images[index].url;
        images[index].img.onload = ()=>{
            images[index].loaded = true;
            percentageBar += percentageAmount;
            increaseAmounInBar($loadingBar, percentageBar);
        }
        images[index].img.onerror = ()=>{
            images[index].url = "../assets/img-backgrounds/noImage.jpeg";
            images[index].img.src = images[index].url;
            
        }
    });

    while(true){
        if(images.every(img => img.loaded)){
            break;
        }
        console.log("loading...");
        await delay(0.5);
    }

    updateImgUrls(scenes, images);

    resolve();

  });
}

export function updateImgUrls(scenes, imageUrls){
    let i = 0;
    
    for(let key in scenes){
        scenes[key].imgUrl = imageUrls[i].url;
        i++;
    }
}
