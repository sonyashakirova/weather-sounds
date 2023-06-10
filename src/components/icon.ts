import { ISoundObject } from "../types"

export const createIcon = (soundParams: ISoundObject): HTMLImageElement => {
  const icon = document.createElement("img")
  icon.id = `icon-${soundParams.id}`
  icon.src = soundParams.icon
  icon.alt = soundParams.code
  icon.width = 40
  icon.height = 40

  return icon
}
