import {
  createAudio,
  createIcon,
  createSoundButton,
  createVolumeBlock,
  createVolumeInput
} from "./components"
import { soundObjectList } from "./data"
import "./index.scss"

let playingSoundId = null

const background = document.getElementById("background")
background.style.backgroundImage = `url(${soundObjectList[0].image})`

const soundList = document.getElementById("list")
soundObjectList.forEach((soundParams) => {
  const listItem = document.createElement("li")
  const soundComponent = document.createElement("div")
  soundComponent.classList.add("sound-block")

  const audio = createAudio(soundParams)
  const icon = createIcon(soundParams)
  const button = createSoundButton(soundParams, icon)
  const volumeInput = createVolumeInput(soundParams, audio)
  const volumeBlock = createVolumeBlock(volumeInput)

  soundComponent.appendChild(audio)
  soundComponent.appendChild(button)
  soundComponent.appendChild(volumeBlock)
  listItem.appendChild(soundComponent)
  soundList.appendChild(listItem)
})
