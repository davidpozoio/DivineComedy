export function toogleAudio(audioController) {
  const actualPlayingAudio = audioController.actualPlayingAudio;

  if (audioController.active) {
    actualPlayingAudio.volume = 0;
    return audioController.active = false;
  } else {
    actualPlayingAudio.volume = audioController.actualVolume;
    return audioController.active = true;
  }
}


