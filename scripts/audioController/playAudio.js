export function playSceneTheme(sceneAudio, audioController) {
  if (!sceneAudio) return new Error("no audio in this scene");

  let nameAudioSource = sceneAudio.audioSource.split("/");
  nameAudioSource = nameAudioSource[nameAudioSource.length - 1];

  let nameAudioController = audioController.actualPlayingAudio.src.split("/");
  nameAudioController = nameAudioController[nameAudioController.length - 1];

  if (nameAudioController != nameAudioSource) {
    audioController.actualPlayingAudio.src = sceneAudio.audioSource;
    audioController.actualPlayingAudio.loop = sceneAudio.loop;
    audioController.actualPlayingAudio.volume = sceneAudio.volume;
    audioController.actualPlayingAudio.play();
  }
}

export function playClickAudio(audioController) {
  audioController.clickAudio.play();
}

export function playHoverAudio(audioController) {
  audioController.hoverAudio = new Audio(audioController.hoverAudio.src);
  audioController.hoverAudio.play();
}
