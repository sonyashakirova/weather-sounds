import {
  createAudio,
  createIcon,
  createSoundButton
} from "./components"
import { soundObjectList } from "./data"
import "./index.scss"

const soundList = document.getElementById("list")

soundObjectList.forEach((soundParams) => {
  const listItem = document.createElement("li")
  const soundComponent = document.createElement("div")
  soundComponent.classList.add("sound-block")

  const audio = createAudio(soundParams)
  const icon = createIcon(soundParams)
  const button = createSoundButton(soundParams, icon)

  soundComponent.appendChild(audio)
  soundComponent.appendChild(button)
  listItem.appendChild(soundComponent)
  soundList.appendChild(listItem)
})
