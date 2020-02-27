function hogwartsGame() {

  const backgroundMusic = new Audio()
  backgroundMusic.src = 'sounds/background.mp3'
  backgroundMusic.volume = 0.2
  backgroundMusic.loop = 'loop'

  const mischief = new Audio()
  mischief.src = 'sounds/mischief.mp3'
  mischief.volume = 0.2

  const maraudersMap = new Audio()
  maraudersMap.src = 'sounds/maraudersmap.mp3'
  maraudersMap.volume = 0.2

  function homePage() {
    document.querySelector('.divinstructions').style.display = 'none'
    document.querySelector('.divinstructions').style.visibility = 'hidden'
    const bodyImageButtons = document.querySelectorAll('.bodyimagebutton')
    for (const bodyImageButton of bodyImageButtons) {
      bodyImageButton.classList.add('pulse')
    }
    backgroundMusic.play()
  }
  window.addEventListener('load', homePage)

  const bodyImageButton1 = document.querySelectorAll('.bodyimagebutton')
  for (const bodyImageButton2 of bodyImageButton1) {
    bodyImageButton2.addEventListener('mouseover', () => {
      bodyImageButton2.classList.add('buttonhover')
    })
    bodyImageButton2.addEventListener('mouseout', () => {
      bodyImageButton2.classList.remove('buttonhover')
    })
  }
  const instructions = document.querySelector('.instructions')
  instructions.addEventListener('mouseover', () => {
    document.querySelector('.divinstructions').style.display = 'block'
    document.querySelector('.divinstructions').style.visibility = 'visible'
    document.querySelector('.title').style.visibility = 'hidden'
    document.querySelector('.divlevels').style.visibility = 'hidden'
    document.querySelector('.bodyimages').style.visibility = 'hidden'
    document.querySelector('.bodyimages').style.display = 'none'
    maraudersMap.play()
    backgroundMusic.pause()
  })
  const exitInstructions = document.querySelector('.exit')
  exitInstructions.addEventListener('click', () => {
    document.querySelector('.divinstructions').style.display = 'none'
    document.querySelector('.title').style.visibility = 'visible'
    document.querySelector('.divlevels').style.visibility = 'visible'
    document.querySelector('.bodyimages').style.visibility = 'visible'
    document.querySelector('.bodyimages').style.display = 'block'
    backgroundMusic.play()
    mischief.play()
    maraudersMap.pause()
  })

}

window.addEventListener('DOMContentLoaded', hogwartsGame)