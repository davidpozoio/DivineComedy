export function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time * 1000);
  });
}

export function typeEffect({ text = "", time = 1 }, domObject) {
  return new Promise(async (resolve) => {
    let timePerChar = time / text.length;

    for (let char of text) {
      domObject.textContent += char;
      await delay(timePerChar);
    }
    resolve();
  });
}
