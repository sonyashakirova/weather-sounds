import { ISoundObject } from "../types"

export const createAudio = (soundParams: ISoundObject, volumeInput: HTMLInputElement): HTMLAudioElement => {
  const audio = document.createElement("audio")
  audio.id = `audio-${soundParams.id}`
  audio.src = soundParams.audio
  audio.loop = true
  audio.volume = Number(volumeInput.value) * 0.01

  volumeInput.addEventListener("change", (e) => {
    audio.volume = Number((e.target as HTMLInputElement).value) * 0.01
  })

  return audio
}
