import PauseIcon from "./assets/icons/pause.svg"
import {
  createAudio,
  createIcon,
  createSoundButton,
  createVolume
} from "./components"
import { soundObjectList } from "./data"
import "./index.scss"

let playingSoundId = null
let pausedSoundId = null

// ставим на фон первую картинку
const background = document.getElementById("background")
background.style.backgroundImage = `url(${soundObjectList[0].image})`

// добавляем контроль громкости
const volumeBlock = document.getElementById("volume")
const [volumeInput, volumeLabel] = createVolume()
volumeBlock.appendChild(volumeLabel)

const soundList = document.getElementById("list")
soundObjectList.forEach((soundParams) => {
  // создаем компонент списка
  const listItem = document.createElement("li")
  const soundComponent = document.createElement("div")
  soundComponent.classList.add("sound-block")

  // создаем внутренние компоненты
  const audio = createAudio(soundParams, volumeInput)
  const icon = createIcon(soundParams)
  const button = createSoundButton(soundParams, icon)

  // добавляем логику
  button.addEventListener("click", () => {
    // при нажатии меняем фоновую картинку
    background.style.backgroundImage = `url(${soundParams.image})`

    if (playingSoundId !== soundParams.id) {
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

      // включаем новый звук
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
  listItem.appendChild(soundComponent)
  soundList.appendChild(listItem)
})
