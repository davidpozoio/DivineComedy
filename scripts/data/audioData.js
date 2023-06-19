/**
 * STRUCTURE OF AUDIO DATA
 * nameOfScene: {
 *      audioSource: "link of an audio",
 *      loop: "this attribute defines if the audio repeat or not",
 *      volume: 1//it defines the volume of the audio, 1 is 100% 
 * }
 */

export const audioData = {
    intro: {
        audioSource: "../assets/audio/soundtrack/abadiaIncio.mp3",
        loop: true,
        volume: 0.1
    },
    lujuria: {
        audioSource: "../assets/audio/soundtrack/Prelude in C minor, BWV 999.mp3",
        loop: true,
        volume: 1
    }
}