import { decisionType } from "./decisionTypeData.js"

export const scenes = {
    start:{
        description: 
        `crees que el placer de la lujuria sea un pecado que deba ser castigado?`,
        imgUrl: "https://3.bp.blogspot.com/-Ll5H0jw65rE/Wq6ZkcQ0nXI/AAAAAAAADGA/1soISUHQy_Yv_co0CdTF8rJtHIhOZUr7ACLcBGAs/s1600/inferno-4.jpg",
        decisions: [
            {description: "castigar", next: "limbo"},
            {description: 'con vida', type: decisionType.withLifePoints},
            {description: 'sin vidad', type: decisionType.noLifePoints},
            {description: 'quitar vida', type: decisionType.decreaseLife}
            
        ],
        style: "sceneExample.css"
    },
    limbo:{
        description: "soy limbo",
        imgUrl: "https://imagenes.elpais.com/resizer/iTvj-2_NqCqbV8Q8KxaC7uafCB0=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZM2ZBNP5XUKH63E4MNQDBLV3SI.jpg",
        decisions: [
            {description: "a la gula", next: "gula"},
            {description: "sumar vida", type: "increaseLife", appear: true},
            {description: "absolver1", type: "decreaseLife", appear: true}
        ],
        style: "sceneExample2.css"
    },
    gula: {
        description: "soy gula",
        imgUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OHXQVXBGDRBK5CLDTXEPBLXIXM.jpg",
        decisions: [
            {description: "al comienzo", next: "start"}
        ],
        style: "sceneExample.css"
    },
    gameover: {
        description: "",
        imgUrl: "https://static.vecteezy.com/system/resources/previews/000/105/438/original/vector-comic-style-game-over-illustration.jpg",
        decisions: [
            {description: "reintentar", next: 'start', type: 'reload'}
        ],
        style: "sceneExample.css"
    }

}


