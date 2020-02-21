function hogwartsGame() { 
  
  const width = 20
  const easyGrid = document.querySelector('.grid')
  const gridSize = width ** 2
  const cells = []
  let Harry

  function homePage() {
    document.querySelector('.body').style.visibility = 'visible'
    document.querySelector('.divinstructions').style.display = 'none'
    const bodyImageButtons = document.querySelectorAll('.bodyimagebutton')
    for (const bodyImageButton of bodyImageButtons) {
      bodyImageButton.classList.add('pulse')
    }
  }
  window.addEventListener('load', homePage)

  const bodyImageButtons1 = document.querySelectorAll('.bodyimagebutton')
  const body = document.querySelector('.body') 
  for (const bodyImageButton2 of bodyImageButtons1) {
    bodyImageButton2.addEventListener('mouseover', () => {
      bodyImageButton2.classList.add('buttonhover')
    })
    bodyImageButton2.addEventListener('mouseout', () => {
      bodyImageButton2.classList.remove('buttonhover')
    })
    bodyImageButton2.addEventListener('click', () => {
      document.body.style.visibility = 'hidden'
      document.querySelector('.title').style.visibility = 'hidden'
      document.querySelector('.divlevels').style.visibility = 'hidden'
      document.querySelector('.bodyimages').style.visibility = 'hidden'
      body.classList.add('mainimg')
    })
  }
  const instructions = document.querySelector('.instructions')
  instructions.addEventListener('mouseover', () => {
    document.querySelector('.divinstructions').style.display = 'block'
    document.querySelector('.title').style.visibility = 'hidden'
    document.querySelector('.divlevels').style.visibility = 'hidden'
    document.querySelector('.bodyimages').style.visibility = 'hidden'
  })
  const exit = document.querySelector('.exit')
  exit.addEventListener('click', () => {
    document.querySelector('.divinstructions').style.display = 'none'
    document.querySelector('.title').style.visibility = 'visible'
    document.querySelector('.divlevels').style.visibility = 'visible'
    document.querySelector('.bodyimages').style.visibility = 'visible'
  })
}

window.addEventListener('DOMContentLoaded', hogwartsGame)