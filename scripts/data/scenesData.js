import { decisionType } from "./decisionTypeData.js"

/**
 * STRUCTURE OF A SCENE
 * sceneName: {
 *      description: {
 *          text: "text of the scene",
 *          time: 1 //the time in seconds for the loading of the text
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
        description: {
            text: 
            `Inicio`,
            time: 0.1
        },
        imgUrl: "https://3.bp.blogspot.com/-Ll5H0jw65rE/Wq6ZkcQ0nXI/AAAAAAAADGA/1soISUHQy_Yv_co0CdTF8rJtHIhOZUr7ACLcBGAs/s1600/inferno-4.jpg",
        decisions: [
            {description: "start", next: "intro"},
            {description: 'con vida', type: decisionType.withLifePoints},
            {description: 'sin vidad', type: decisionType.noLifePoints},
            {description: 'quitar vida', type: decisionType.decreaseLife}
            
        ],
        styles: "sceneExample.css"
    },
    intro:{
        description: {
            context: `Dante se encuentra perdido en el bosque oscuro y se ve amenazado por bestias salvajes que simbolizan el pecado y la corrupción. En ese momento, el poeta romano Virgilio aparece y se convierte en su guía a través de los reinos infernales.`,
            text: "VIRGILIO: veo claramente que debes seguirme, yo seré tu guía y te sacaré de aquí para llevarte a un lugar eterno:",
            time: 1
        },
        imgUrl: "asd",
        decisions: [
            {description: "Seguir", next: "limbo"},
            {description: 'No seguir', next: 'start'}
        ],
        styles: "sceneExample2.css"
    },
    limbo:{
        description: {
            context: `Dante, llega al Limbo durante su viaje a través del Infierno. Se encuentra con personajes históricos y mitológicos, como Homero, Sócrates, Platón y César, que viven en una especie de felicidad relativa, pero sin la visión de Dios.`,
            text: "VIRGILIO: Tienes en tus manos el alma de estos personajes, ¿qué quieres hacer con ellos?",
            time: 0.5
        },
        imgUrl: "asd",
        decisions: [
            {description: "Castigar", next: "lujuria"},
            {description: 'Absolver', type: decisionType.decreaseLife, appear: true}
        ],
        styles: "sceneExample2.css"
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
            text: "¿Crees que el placer de la lujuria sea un pecado que deba ser castigado?",
            time: 0.1
        },
        imgUrl: "https://creacuervos.com/wp-content/uploads/2021/01/divina-comedia-suicidas.jpg",
        decisions: [
            {description: "Castigar", next:"gula"},
            {description: "Absolver", type: decisionType.decreaseLife, appear: true},
        ],
        styles: 'sceneExample.css'
        
    },

    gula: {
        description: {
            context:`A medida que Dante avanza por el infierno, llega al tercer círculo, donde se encuentra con alegorías y figuras que ilustran los efectos destructivos de la gula. Estos ejemplos contrastan con la virtud de la moderación y la necesidad de controlar los apetitos y deseos excesivos.A medida que Dante avanza, interactúa con algunos de los pecadores y escucha sus historias y lamentaciones. Estas interacciones ayudan a transmitir las consecuencias y la naturaleza del pecado de la gula.`,
            text: "VIRGILIO: ¿cómo te sientes tras tales acontecimientos escuchados?",
            time: 2
        },
        imgUrl: "https://www.otroangulo.info/fabricaweb/wp-content/uploads/Divina-comedia-1.jpg",
        decisions: [
            {description: "Hambriento", type: decisionType.decreaseLife, appear: true},
            {description: "Sin apetito", next:"start"},
            {description: "Quiero ayudarlos", type: decisionType.decreaseLife, appear: true},
            {description: "Vamonos de aqui", type: decisionType.decreaseLife, appear: true},
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
    
    
}




