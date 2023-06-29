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
        imgUrl: "../assets/img/INICIO.jpg",
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
        imgUrl: "../assets/img/introduccion.jpg",
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
        imgUrl: "../assets/img/nivel 1.jpg",
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
        imgUrl: "../assets/img/nivel2.jpg",
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
        imgUrl: "../assets/img/nivel 3.jpg",
        decisions: [
            {description: "Hambriento", type: decisionType.decreaseLife, appear: true},
            {description: "Sin apetito", next:"avaricia"},
            {description: "Quiero ayudarlos", type: decisionType.decreaseLife, appear: true},
            {description: "Vamonos de aqui", type: decisionType.decreaseLife, appear: true},
        ],
        styles: "sceneExample.css"
    },
     avaricia:{
        
        description: {
            context: 'Al entrar al cuarto círculo, Dante encuentra a varias figuras históricas, como Midas, el rey de Frigia, conocido por su deseo insaciable de oro. Estas figuras representan a aquellos que en vida fueron consumidos por su afán de acumular riquezas y no supieron usarlas para fines justos o caritativos.',
            text: "VIRGILIO: El rey midas por su codicia cayó en la locura, pero se arrepintió al final, crees que merece ser castigado de tal manera?",
            time:0.5
        },
        imgUrl: "../assets/img/nivel 4.jpg",
        decisions: [
            {description: "Castigar", next:"pereza"},
            {description: "Absolver", type: decisionType.decreaseLife, appear: true},
        ],
        styles: "sceneExample.css"

    },
    pereza:{
       
        description: {
            context: `Conforme Dante avanza por los diferentes círculos del infierno llega al Pantano de Estigia. Dante encuentra a los pecadores que han sido consumidos por la ira y la violencia en vida.Los iracundos explosivos se encuentran, enfrentándose entre ellos y golpeándose mutuamente. Los iracundos reprimidos se encuentran más alejados y reprimen su ira, sumidos en un estado de tristeza y resentimiento.`,
            text: "¿Qué castigo sufren los pecadores en el círculo de la ira en La Divina Comedia?",            
            time:0.5
        },
        imgUrl: "../assets/img/nivel 5.jpg",
        decisions: [
            {description: "Son sumergidos en un pantano de lodo y se enfrentan entre sí.", next:"herejia"},
            {description: "Son congelados en el lago Cocito.", type: decisionType.decreaseLife, appear: false},
            {description: "Son sometidos a un fuego eterno.", type: decisionType.decreaseLife, appear: false},
            {description: "Se enfrentan entre sí.", type: decisionType.decreaseLife, appear: true},
        ],
        styles: "sceneExample.css"
    },

    herejia:{
       
        description: {
            context: `Dante y su guía, Virgilio, descienden a este círculo después de 
            atravesar los círculos de la avaricia, la gula, la lujuria y la 
            ira.
            Dante encuentra a diversas figuras históricas 
             y teológicas en este círculo, como Epicuro y 
            Federico II de Sicilia. Estas figuras representan
             a aquellos que, en vida, promovieron doctrinas 
             contrarias a la enseñanza de la Iglesia y fueron 
            considerados herejes.`,
            text: " ¿Cómo define la iglesia católica la herejía y cuáles son las consecuencias para aquellos acusados  de herejía?",
            time: 0.5,
        },
        imgUrl: "../assets/img/nivel 6.jpg",
        decisions: [
            {description: "Aquellos acusados de herejía podrían enfrentar diversas consecuencias", next: "violencia"},
            {description: "La Iglesia no toma medidas enérgicas contra los herejes Y los acepta dentro de su comunidad religiosa", type: decisionType.decreaseLife, appear: false},
        ],
        styles: "sceneExample.css"
    },
    violencia:{
        
        description: {
            context: `Al llegar al séptimo círculo Dante se encuentra con varias almas condenadas que son sumergidos en un río de sangre hirviente y son perseguidos y atacados por centauros. En el segundo círculo, llamado "Fosa de los Violentos contra sí mismos", se encuentran los suicidas, transformados en árboles y constantemente atormentados.`,
            text: "¿Cuáles son las diferentes formas de violencia que Dante encuentra a lo largo de su viaje en la obra?",
            time: 0.5,
        },
        imgUrl: "../assets/img/nivel 7.jpg",
        decisions: [
            {description: "Dante encuentra diversas formas de violencia, que incluyen la violencia física, la violencia política y la violencia moral", next: "fraude"},
            {description: "Dante encuentra principalmente formas de violencia física, como asesinatos y torturas extremas", type: decisionType.decreaseLife, appear: false},
        ],
        styles: "sceneExample.css"
    },
    fraude:{
        
        description:{
            context: 'Tras pasar por el séptimo círculo Dantes se adentra en el octavo círculo del Infierno, conocido como el "Malebolge". Este círculo está dividido en diez fosas, cada una destinada a diferentes formas de fraude. Cada castigo se encuentra dividido por los diferentes tipos de fraude, como la hipocresía, el engaño, la seducción, la corrupción política y religiosa, entre otros. Cada fosa está reservada para un tipo específico de fraude y tiene su propio castigo particular.',
            text: '¿Cómo se castigan los actos de fraude en los diferentes círculos del Infierno según la visión de Dante?',
            time: 0.5
        },
        imgUrl:"../assets/img/nivel 8.jpg",
        decisions:[
            {description: "Hay diez fosos que albergan a diferentes tipos de fraudulentos", next:"traicion"},
            {description: "Los fraudulentos son redimidos y perdonados, ya que se considera que su comportamiento deshonesto fue producto de circunstancias difíciles", type: decisionType.decreaseLife, appear: true},
        ],
        styles: "sceneExample.css"
    },
    traicion:{
       
        description:{
            context: 'Al llegar al último círculo Dantes se encuentra ante un lugar conocido como el "Traidores". Este círculo está dividido en cuatro fosas concéntricas, cada una destinada a diferentes tipos de traición. En este noveno círculo, se encuentran diferentes formas de traición, como la traición política, la traición a la familia, la traición a los huéspedes y la traición a los benefactores. Cada fosa tiene su propio castigo específico para cada tipo de traición',
            text: '¿Cuáles son las diferentes formas de traición que Dante encuentra a lo largo de su viaje en la obra?',
            time: 0.5
        },
        imgUrl:"../assets/img/nivel 9.jpg",
        decisions:[
            {description: 'Dante encuentra diferentes formas de traición, que incluyen la traición política, la traición familiar y la traición religiosa', next:"start"},
            {description: 'Dante solo encuentra una forma de traición', type: decisionType.decreaseLife, appear: false}
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




