import RainIcon from "./assets/icons/cloud-rain.svg"
import RainImage from "./assets/images/rainy-bg.jpg"
import RainSound from "./assets/sounds/rain.mp3"
import SummerIcon from "./assets/icons/sun.svg"
import SummerImage from "./assets/images/summer-bg.jpg"
import SummerSound from "./assets/sounds/summer.mp3"
import WinterIcon from "./assets/icons/cloud-snow.svg"
import WinterImage from "./assets/images/winter-bg.jpg"
import WinterSound from "./assets/sounds/winter.mp3"

export const soundObjectList = [
  {
    id: 1,
    code: "summer", 
    audio: SummerSound,
    image: SummerImage,
    icon: SummerIcon
  },
  {
    id: 2,
    code: "rain",
    audio: RainSound,
    image: RainImage,
    icon: RainIcon
  },
  {
    id: 3,
    code: "winter",
    audio: WinterSound,
    image: WinterImage,
    icon: WinterIcon
  }
]
