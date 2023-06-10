export function loadLife(actualLife, sceneDom){
    const {$textLife} = sceneDom;

    $textLife.innerHTML = `Life: ${actualLife}`;
}

export function increaseLife(health){

   
    if(health.lifePoints < health.maxLife) return health.lifePoints += health.heal;
    
    return health.lifePoints;
}

export function decreaseLife(health){
    if(health.lifePoints > health.minLife) return health.lifePoints -= health.damage;

    return health.lifePoints;
}