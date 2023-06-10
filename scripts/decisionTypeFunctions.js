import { decreaseLife, increaseLife } from "./loadLife"
import { health } from "./scene"

export const decisionType = {
    increaseLife: ()=>{
        health.lifePoints = increaseLife(health);
    },
    decreaseLife: ()=>{
        health.lifePoints = decreaseLife(health);
    },
    reload: ()=>{
        window.location.reload();
    }
}