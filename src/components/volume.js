export const createVolumeBlock = (input) => {
  const volumeBlock = document.createElement("label")

  const label = document.createElement("span")
  label.textContent = "Change sound volume"
  label.classList.add("visually-hidden")

  volumeBlock.appendChild(label)
  volumeBlock.appendChild(input)

  return volumeBlock
}

export const createVolumeInput = (soundParams, audio) => {
  const input = document.createElement("input")
  input.type = "range"
  input.min = 0
  input.max = 100
  input.value = audio.volume * 100
  input.id = `volume-${soundParams.id}`
  input.classList.add("volume-input", "visually-hidden")

  input.addEventListener("change", (e) => {
    audio.volume = e.target.value * 0.01
  })

  return input
}
