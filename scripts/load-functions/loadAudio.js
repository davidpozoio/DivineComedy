export function loadTheme(audioSource, audioController){
    console.log(audioController.actualPlayingAudio.src, audioSource);

    if(audioController.actualPlayingAudio.src != audioSource){
        audioController.actualPlayingAudio.src = audioSource;
        audioController.actualPlayingAudio.play();
    }
}