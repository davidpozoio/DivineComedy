import { decisionType } from "./decisionTypeData.js"

export const scenes = {
    start:{
        description: {
            text: 
            `crees que el placer de la lujuria sea un pecado que deba ser castigado?
            buenas noches,
            buenos días,
            bom dia`,
            time: 2
        },
        imgUrl: "https://3.bp.blogspot.com/-Ll5H0jw65rE/Wq6ZkcQ0nXI/AAAAAAAADGA/1soISUHQy_Yv_co0CdTF8rJtHIhOZUr7ACLcBGAs/s1600/inferno-4.jpg",
        decisions: [
            {description: "castigar", next: "limbo"},
            {description: 'con vida', type: decisionType.withLifePoints},
            {description: 'sin vidad', type: decisionType.noLifePoints},
            {description: 'quitar vida', type: decisionType.decreaseLife}
            
        ],
        styles: "sceneExample.css"
    },
    limbo:{
        description: {
            text: `crees que el placer de la lujuria sea un pecado que deba ser castigado?
            buenas noches,
            buenos días,
            bom dia`,
            time: 0.1
        },
        imgUrl: "https://imagenes.elpais.com/resizer/iTvj-2_NqCqbV8Q8KxaC7uafCB0=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZM2ZBNP5XUKH63E4MNQDBLV3SI.jpg",
        decisions: [
            {description: "a la gula", next: "gula"},
            {description: "sumar vida", type: "increaseLife", appear: true},
            {description: "absolver1", type: "decreaseLife", appear: true}
        ],
        styles: "sceneExample2.css"
    },
    gula: {
        description: {
            text: 'soy Gula',
            time: 2
        },
        imgUrl: "https://emprendedoresnews.com/wp-content/uploads/2015/04/gula_conocimiento-1.jpg",
        decisions: [
            {description: "al comienzo", next: "start"}
        ],
        styles: "sceneExample.css"
    },
    gameover: {
        description: {},
        imgUrl: "https://static.vecteezy.com/system/resources/previews/000/105/438/original/vector-comic-style-game-over-illustration.jpg",
        decisions: [
            {description: "reintentar", next: 'start', type: 'reload'}
        ],
        styles: "sceneExample.css"
    }

}


