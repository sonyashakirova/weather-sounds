import { soundObjectList } from "./data"
import "./index.scss"

const soundList = document.getElementById("list")

soundObjectList.forEach((soundParams) => {
  const listItem = document.createElement("li")
  listItem.textContent = soundParams.code
  soundList.appendChild(listItem)
})
