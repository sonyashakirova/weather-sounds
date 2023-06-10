export const createVolume = () => {
  const label = document.createElement("label")

  const text = document.createElement("span")
  text.textContent = "Change sound volume"
  text.classList.add("visually-hidden")

  const input = document.createElement("input")
  input.type = "range"
  input.min = 0
  input.max = 100
  input.value = 50
  input.classList.add("volume-input")

  label.appendChild(text)
  label.appendChild(input)

  return [input, label]
}
