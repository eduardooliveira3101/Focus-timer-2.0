import sounds from './sound.js'
import timerFeatures from './timer_features.js'

const buttonPlay = document.querySelector('.play')
const buttonIncreaseTime = document.querySelector('.sum')
const buttonDecreaseTime = document.querySelector('.sub')
const buttonStop = document.querySelector('.stop')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
const cardFlorest = document.querySelector('.florest')
const cardRain = document.querySelector('.rain')
const cardCoffe = document.querySelector('.coffe')
const cardFireplace = document.querySelector('.fireplace')

const svgFlorest = document.querySelector('.svg-florest')
const svgRain = document.querySelector('.svg-rain')
const svgCoffe = document.querySelector('.svg-coffe')
const svgFirePlace = document.querySelector('.svg-fireplace')

const sound = sounds()

const timerfeatures = timerFeatures({
  displayMinutes, 
  displaySeconds, 
  sound
})

buttonPlay.addEventListener('click', function () {
  timerfeatures.countdown()
})

buttonIncreaseTime.addEventListener('click', function () {
  timerfeatures.addMinutes()
})

buttonDecreaseTime.addEventListener('click', function () {
  timerfeatures.subMinutes()
})

buttonStop.addEventListener('click', function() {
  timerfeatures.pause()
  timerfeatures.StopThemesCards()
})

buttonStop.addEventListener('dblclick', function() {
  timerfeatures.resetTheTimerWithDoubleClickOnStop()
} )

cardFlorest.addEventListener('click', function() {
  sound.florest.play()
  sound.rain.pause()
  sound.coffeeShop.pause()
  sound.firePlace.pause()
})

cardRain.addEventListener('click', function() {
  sound.rain.play()
  sound.coffeeShop.pause()
  sound.firePlace.pause()
  sound.florest.pause()

})

cardCoffe.addEventListener('click', function() {
  sound.coffeeShop.play()
  sound.rain.pause()
  sound.firePlace.pause()
  sound.florest.pause()

})

cardFireplace.addEventListener('click', function() {
  sound.firePlace.play()
  sound.coffeeShop.pause()
  sound.rain.pause()
  sound.florest.pause()


  svgFirePlace.classList.add('selected')
  cardFireplace.classList.add('selected')
})



