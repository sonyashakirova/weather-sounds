import PauseIcon from "./assets/icons/pause.svg"
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
let pausedSoundId = null

// ставим на фон первую картинку
const background = document.getElementById("background")
background.style.backgroundImage = `url(${soundObjectList[0].image})`

const soundList = document.getElementById("list")
soundObjectList.forEach((soundParams) => {
  // создаем компонент списка
  const listItem = document.createElement("li")
  const soundComponent = document.createElement("div")
  soundComponent.classList.add("sound-block")

  // создаем внутренние компоненты
  const audio = createAudio(soundParams)
  const icon = createIcon(soundParams)
  const button = createSoundButton(soundParams, icon)
  const volumeInput = createVolumeInput(soundParams, audio)
  const volumeBlock = createVolumeBlock(volumeInput)

  // добавляем логику
  button.addEventListener("click", () => {
    // при нажатии меняем фоновую картинку
    background.style.backgroundImage = `url(${soundParams.image})`

    if (playingSoundId !== soundParams.id) {
      if (pausedSoundId || playingSoundId) {
        // скрываем ползунок предыдущего звука
        const playingSoundVolume = document.getElementById(`volume-${playingSoundId || pausedSoundId}`)
        playingSoundVolume.classList.add("visually-hidden")
      }

      if (pausedSoundId) {
        // если предыдущий звук был поставлен на паузу, меняем его иконку
        const pausedSoundIcon = document.getElementById(`icon-${pausedSoundId}`)
        pausedSoundIcon.src = soundObjectList.find(({ id }) => id === pausedSoundId).icon
      }

      if (playingSoundId) {
        // если предыдущий звук еще играет, ставим на паузу
        const playingSoundAudio = document.getElementById(`audio-${playingSoundId}`)
        playingSoundAudio.pause()
      }

      // показываем ползунок и включаем новый звук
      volumeInput.classList.remove("visually-hidden")
      playingSoundId = soundParams.id
      audio.play()
    } else {
      // при повторном нажатии ставим звук на паузу и меняем иконку
      icon.src = PauseIcon
      pausedSoundId = soundParams.id
      playingSoundId = null
      audio.pause()
    }
  })

  // добавляем компоненты в DOM дерево
  soundComponent.appendChild(audio)
  soundComponent.appendChild(button)
  soundComponent.appendChild(volumeBlock)
  listItem.appendChild(soundComponent)
  soundList.appendChild(listItem)
})
