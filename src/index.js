import { createSoundButton, createIcon } from "./components"
import { soundObjectList } from "./data"
import "./index.scss"

const soundList = document.getElementById("list")

soundObjectList.forEach((soundParams) => {
  const listItem = document.createElement("li")
  const soundComponent = document.createElement("div")
  soundComponent.classList.add("sound-block")

  const icon = createIcon(soundParams)
  const button = createSoundButton(soundParams, icon)

  soundComponent.appendChild(button)
  listItem.appendChild(soundComponent)
  soundList.appendChild(listItem)
})
