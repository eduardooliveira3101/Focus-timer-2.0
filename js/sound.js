export default function() {

  const florest = new Audio('./audios/Floresta.wav')
  const rain = new Audio ('./audios/Chuva.wav')
  const coffeeShop = new Audio('./audios/Cafeteria.wav')
  const firePlace = new Audio('./audios/Lareira.wav')
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  florest.loop = true
  rain.loop = true
  coffeeShop.loop = true
  firePlace.loop = true

  return {
    florest,
    rain,
    coffeeShop,
    firePlace,
    kitchenTimer
  }

}