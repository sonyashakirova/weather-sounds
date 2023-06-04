export const createAudio = (soundParams) => {
  const audio = document.createElement("audio")
  audio.id = `audio-${soundParams.id}`
  audio.src = soundParams.audio
  audio.loop = true
  audio.volume = 0.5

  return audio
}
