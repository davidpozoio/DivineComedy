import { decisionType } from "./decisionTypeData.js"

/**
 * STRUCTURE OF A SCENE
 * sceneName: {
 *      title: "title of the scene, it is optional attribute",
 *      description: {
 *          context: "here you can put the context of the scene or a brief description",
 *          text: "text of the scene, it can be a question or any thing",
 *          time: 1 //the time in seconds for the loading of the all description (context, text)
 *      },
 *      imgUrl: "link of the main img of a scene",
 *      decisions: [
 *          {
 *           description: 'text of decision',
 *           next: 'the name of the next scene that will be loaded when you click in this decision', 
 *           type: 'type of decision, you can get these types of decisionType object',
 *           appear: true //optional boolean attribute, the decision will disappear when you click on it
 *          }
 *      ],
 *      styles: 'style name of this scene'
 * }
 */

export const scenes = {
    start:{
        title: "START GAME",
        description: {},
        imgUrl: "https://3.bp.blogspot.com/-Ll5H0jw65rE/Wq6ZkcQ0nXI/AAAAAAAADGA/1soISUHQy_Yv_co0CdTF8rJtHIhOZUr7ACLcBGAs/s1600/inferno-4.jpg",
        decisions: [
            {description: "start", next: "limbo"},
            {description: 'con vida', type: decisionType.withLifePoints},
            {description: 'sin vidad', type: decisionType.noLifePoints},
            {description: 'quitar vida', type: decisionType.decreaseLife}
            
        ],
        styles: "sceneExample.css"
    },
    limbo:{
        description: {
            context: `crees que el placer de la lujuria sea un pecado que deba ser castigado?
            buenas noches,
            buenos días,
            bom dia`,
            text: "bom dia hola",
            time: 0.5
        },
        imgUrl: "asd",
        decisions: [
            {description: "Castigar", next: "lujuria"},
            {description: 'al limbo', next: 'start'}
        ],
        styles: "sceneExample2.css"
    },
    gula: {
        description: {
            text: 'soy Gula',
            time: 2
        },
        imgUrl: "https://www.otroangulo.info/fabricaweb/wp-content/uploads/Divina-comedia-1.jpg",
        decisions: [
            {description: "al comienzo", next: "start"}
        ],
        styles: "sceneExample.css"
    },
    gameover: {
        description: {
            text:"GAME OVER"
        },
        imgUrl: "https://i.pinimg.com/originals/dc/66/78/dc6678f5dd9b6e61d9852666981afe7b.gif",
        decisions: [
            {description: "reintentar", type: 'reload'}
        ],
        styles: "gameover.css"
    },
    lujuria: {
        description: {
            context: `Durante su travesía y a través del 
            círculo de la lujuria  Dante encuentra
             a varias figuras históricas, como 
            Cleopatra, Helena de Troya y Tristán 
            e Isolda. Estas figuras simbolizan la 
            fama y las consecuencias trágicas que 
            surgieron de la lujuria en vida.
            `,
            time: 0.1
        },
        imgUrl: "https://creacuervos.com/wp-content/uploads/2021/01/divina-comedia-suicidas.jpg",
        decisions: [
            {description: "Castigar", next:"gula"},
            {description: "Absolver", type: decisionType.decreaseLife, appear: true},
        ],
        styles: 'sceneExample.css'
        
    }
    
}



