export function loadLife(actualLife, sceneDom){
    const {$textLife} = sceneDom;

    $textLife.innerHTML = `Life: ${actualLife}`;
}