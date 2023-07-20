export function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time * 1000);
  });
}

export function typeEffect(text, time, domObject) {
  if(time == 0){
    domObject.innerHTML = text;
    return;
  }
  return new Promise(async (resolve) => {
    let timePerChar = time / text.length;

    for (let char of text) {
      domObject.innerHTML += char;
      await delay(timePerChar);
    }
    resolve();
  });
}
