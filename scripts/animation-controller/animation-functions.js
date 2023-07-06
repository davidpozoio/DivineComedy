export function loadAllAnimations(animations) {
  const fetchAnimations = [];

  animations.forEach((animation, index) => {
    fetchAnimations[index] = fetch(animation.link);
  });

  return Promise.all([...fetchAnimations]).then((allAnimations) => {
    allAnimations.forEach(async (animation, index) => {
      animations[index].css = await animation.text();
    });
  });
}

function resetAnimation(sceneDom) {
  sceneDom.$scene.style.animation = "none";
  sceneDom.$scene.offsetHeight; /* trigger reflow */
  sceneDom.$scene.style.animation = null;
}

export function playAnimation(animationCss, sceneDom) {
  resetAnimation(sceneDom);

  sceneDom.$style.innerHTML = "";
  sceneDom.$style.innerHTML += animationCss;
}
