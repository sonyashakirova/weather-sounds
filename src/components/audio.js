export const createAudio = (soundParams, volumeInput) => {
  const audio = document.createElement("audio")
  audio.id = `audio-${soundParams.id}`
  audio.src = soundParams.audio
  audio.loop = true
  audio.volume = volumeInput.value * 0.01

  volumeInput.addEventListener("change", (e) => {
    audio.volume = e.target.value * 0.01
  })

  return audio
}
