import { ISoundObject } from "../types"

export const createSoundButton = (soundParams: ISoundObject, icon: any): HTMLButtonElement => {
  const button = document.createElement("button")
  button.type = "button"
  button.classList.add("sound-button")
  button.style.backgroundImage = `url(${soundParams.image})`

  const buttonDescription = document.createElement("span")
  buttonDescription.textContent = "Play sound"
  buttonDescription.classList.add("visually-hidden")

  button.appendChild(buttonDescription)
  button.appendChild(icon)

  return button
}
