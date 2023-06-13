import { decreaseLife, increaseLife } from "./loadLife.js"
import { health } from "./scene.js"

/**
 * TYPES OF A DECISION
 * when you click in a decision of this type
 * 
 * increaseLife -> you increase your life
 * decreaseLife -> you decrease your life
 * reload -> you reload the page, and all your progress is lost
 * noLifePoints -> you deactive life points and you can't die
 * withLifePoints -> you active life points 
 */

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