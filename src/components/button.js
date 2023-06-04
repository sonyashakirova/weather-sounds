export const createSoundButton = (soundParams) => {
  const button = document.createElement("button")
  button.type = "button"
  button.classList.add("sound-button")
  button.style.backgroundImage = `url(${soundParams.image})`

  const buttonDescription = document.createElement("span")
  buttonDescription.textContent = "Play sound"
  buttonDescription.classList.add("visually-hidden")

  button.appendChild(buttonDescription)

  return button
}
