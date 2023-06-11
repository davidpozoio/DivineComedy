import { decreaseLife, increaseLife } from "./loadLife.js"
import { health } from "./scene.js"

export const decisionType = {
    increaseLife: 'increaseLife',
    decreaseLife: 'decreaseLife',
    reload: 'reload',
    noLifePoints: 'noLifePoints',
    withLifePoints: 'withLifePoints'
}

export const decisionTypeFunction = {
    [decisionType.increaseLife]: ()=>{
        health.lifePoints = increaseLife(health);
    } ,
    [decisionType.decreaseLife]: ()=>{
        health.lifePoints = decreaseLife(health);
    },
    [decisionType.reload]: ()=>{
        window.location.reload();
    },
    [decisionType.noLifePoints]: ()=>{
        health.active = false;
    },
    [decisionType.withLifePoints]: ()=>{
        health.active = true;
    }
}