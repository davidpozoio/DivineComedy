export function loadLife({lifePoints, active}, sceneDom) {
  const { $textLife } = sceneDom;
  if(active){
    $textLife.innerHTML = `Life: ${lifePoints}`;
  }else{
    $textLife.innerHTML = '';
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
