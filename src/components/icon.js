export const createIcon = (soundParams) => {
  const icon = document.createElement("img")
  icon.id = `icon-${soundParams.id}`
  icon.src = soundParams.icon
  icon.alt = soundParams.code
  icon.width = 40
  icon.height = 40

  return icon
}
