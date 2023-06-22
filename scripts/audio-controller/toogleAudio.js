export function toogleAudio(audioController) {
  if (audioController.active) {
    audioController.actualPlayingAudio.volume = 0;
    return audioController.active = false;
  } else {
    audioController.actualPlayingAudio.volume = audioController.actualVolume;
    return audioController.active = true;
  }
}


