import sounds from './sound.js'

export default function timerFeatures ({displayMinutes, displaySeconds, sound }) {

let minutes = Number(displayMinutes.textContent)
let timertimeout

function StopThemesCards() {
  sound.rain.pause()
  sound.coffeeShop.pause()
  sound.firePlace.pause()
  sound.florest.pause()
  return
}

function updateTimerDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  
  displayMinutes.textContent = String(newMinutes).padStart(2, '0')
  displaySeconds.textContent = String(seconds).padStart(2, '0')
}

function addMinutes() {
  let minutes = Number(displayMinutes.textContent)

  if (minutes >= 60) {
    alert('Desculpe, o limite do aplicativo é apenas 60 minutos')
    return
  }

  updateTimerDisplay(String(minutes + 5), 0)
}

function subMinutes() {
  let minutes = Number(displayMinutes.textContent)

  if (minutes <= 0) {
    updateTimerDisplay()
    alert('Seu Focus Timer está zerado!')
    return
  }

  updateTimerDisplay(String(minutes - 5), 0)
}

function countdown() {

  timertimeout = setTimeout(function () {
    let minutes = Number(displayMinutes.textContent)
    let seconds = Number(displaySeconds.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      StopThemesCards()
      sound.kitchenTimer.play()
      updateTimerDisplay()
      return
    }

    if (seconds <= 0) {
      seconds = 61
        --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()

  }, 1000)

}

function resetTheTimerWithDoubleClickOnStop() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timertimeout)
}

function pause() {
  clearTimeout(timertimeout)
}

return {
  StopThemesCards,
  updateTimerDisplay,
  addMinutes,
  subMinutes,
  countdown,
  resetTheTimerWithDoubleClickOnStop,
  pause
}

}