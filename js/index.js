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

const light = document.querySelector('.light')
const dark = document.querySelector('.dark')

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

light.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode')
  dark.classList.toggle('hide')
})

dark.addEventListener('click', function(){
  document.body.classList.remove('dark-mode')
  dark.classList.toggle('hide')
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
  svgFlorest.classList.add('selectedOne')
  cardFlorest.classList.add('selectedOne')

  sound.rain.pause()
  svgRain.classList.remove('selectedTwo')
  cardRain.classList.remove('selectedTwo')
  
  sound.coffeeShop.pause()
  svgCoffe.classList.remove('selectedThree')
  cardCoffe.classList.remove('selectedThree')

  sound.firePlace.pause()
  svgFirePlace.classList.remove('selectedFour')
  cardFireplace.classList.remove('selectedFour')

})

cardRain.addEventListener('click', function() {

  sound.rain.play()
  svgRain.classList.add('selectedTwo')
  cardRain.classList.add('selectedTwo')

  sound.coffeeShop.pause()
  svgCoffe.classList.remove('selectedThree')
  cardCoffe.classList.remove('selectedThree')

  sound.firePlace.pause()
  svgFirePlace.classList.remove('selectedFour')
  cardFireplace.classList.remove('selectedFour')

  sound.florest.pause()
  svgFlorest.classList.remove('selectedOne')
  cardFlorest.classList.remove('selectedOne')

})

cardCoffe.addEventListener('click', function() {

  sound.coffeeShop.play()
  svgCoffe.classList.add('selectedThree')
  cardCoffe.classList.add('selectedThree')

  sound.rain.pause()
  svgRain.classList.remove('selectedTwo')
  cardRain.classList.remove('selectedTwo')


  sound.firePlace.pause()
  svgFirePlace.classList.remove('selectedFour')
  cardFireplace.classList.remove('selectedFour')

  sound.florest.pause()
  svgFlorest.classList.remove('selectedOne')
  cardFlorest.classList.remove('selectedOne')

})

cardFireplace.addEventListener('click', function() {

  sound.firePlace.play()
  svgFirePlace.classList.add('selectedFour')
  cardFireplace.classList.add('selectedFour')

  sound.coffeeShop.pause()
  svgCoffe.classList.remove('selectedThree')
  cardCoffe.classList.remove('selectedThree')

  sound.rain.pause()
  svgRain.classList.remove('selectedTwo')
  cardRain.classList.remove('selectedTwo')

  sound.florest.pause()
  svgFlorest.classList.remove('selectedOne')
  cardFlorest.classList.remove('selectedOne')

})



