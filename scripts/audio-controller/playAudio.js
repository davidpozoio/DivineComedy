export function playSceneTheme(sceneAudio, audioController) {
  if (!sceneAudio) return new Error("no audio in this scene");

  const actualPlayingAudio = audioController.actualPlayingAudio;

  let nameAudioSource = sceneAudio.audioSource.split("/");
  nameAudioSource = nameAudioSource[nameAudioSource.length - 1];

  let nameAudioController = actualPlayingAudio.src.split("/");
  nameAudioController = nameAudioController[nameAudioController.length - 1];

  if (nameAudioController != nameAudioSource) {
    actualPlayingAudio.src = sceneAudio.audioSource;
    actualPlayingAudio.loop = sceneAudio.loop;
    actualPlayingAudio.volume = audioController.active
      ? sceneAudio.volume
      : 0;
    audioController.actualVolume = sceneAudio.volume;
    actualPlayingAudio.play();
  }
}

export function playClickAudio(audioController) {
  const clickAudio = audioController.clickAudio;

  if (audioController.active) {
    clickAudio.play();
  }
}

export function playHoverAudio(audioController) {
  let hoverAudio = audioController.hoverAudio;

  if (audioController.active) {
    hoverAudio = new Audio(hoverAudio.src);
    hoverAudio.play();
  }
}

export function playDamageAudio(audioController) {
  let damageAudio = audioController.damageAudio;

  if (audioController.active) {
    damageAudio = new Audio(damageAudio.src);
    damageAudio.play();
  }
}
