import { createSoundButton } from "./components"
import { soundObjectList } from "./data"
import "./index.scss"

const soundList = document.getElementById("list")

soundObjectList.forEach((soundParams) => {
  const listItem = document.createElement("li")
  const soundComponent = document.createElement("div")
  soundComponent.classList.add("sound-block")

  const button = createSoundButton(soundParams)

  soundComponent.appendChild(button)
  listItem.appendChild(soundComponent)
  soundList.appendChild(listItem)
})
