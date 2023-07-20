/**
 *
 * @param {Object} health is the health of the player
 * @param {Object} sceneDom an obligatory object that is used for the manipulation of the dom
 * @param {function} gameover it's a function that is executed when you die (lost all lifePoints)
 */

export function loadLife(
  { lifePoints, minLife, active },
  sceneDom,
  gameover = () => {}
) {
  const { $heartImg, $life } = sceneDom;
  if (active) {
    printHeart(lifePoints, $heartImg, $life);
  } else {
    $life.innerHTML = "";
  }

  if (lifePoints == minLife && active) {
    gameover();
  }
}

export function increaseLife(health) {
  if (health.lifePoints < health.maxLife)
    return (health.lifePoints += health.heal);

  return health.lifePoints;
}

export function decreaseLife(health) {
  if (health.lifePoints > health.minLife)
    return (health.lifePoints -= health.damage);

  return health.lifePoints;
}

function printHeart(lifePoints, heart, life) {
  life.innerHTML = "";

  let i = 0;
  let lifeFragment = document.createDocumentFragment();
  while (i < lifePoints) {
    let newHeart = heart.cloneNode(true);
    lifeFragment.appendChild(newHeart);
    i++;
  }

  life.appendChild(lifeFragment);
}
