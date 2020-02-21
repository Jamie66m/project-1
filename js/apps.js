function hogwartsGame() { 
  
  const width = 20
  const easyGrid = document.querySelector('.easygrid')
  const gridSize = width ** 2
  const cells = []
  const harry = 389
  // const dementors = [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  //   60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78]

  function homePage() {
    document.querySelector('.body').style.visibility = 'visible'
    document.querySelector('.easygrid').style.visibility = 'hidden'
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
      gameStart()
    })
  }
  const instructions = document.querySelector('.instructions')
  instructions.addEventListener('mouseover', () => {
    document.querySelector('.divinstructions').style.display = 'block'
    document.querySelector('.title').style.visibility = 'hidden'
    document.querySelector('.divlevels').style.visibility = 'hidden'
    document.querySelector('.bodyimages').style.visibility = 'hidden'
  })
  const exitInstructions = document.querySelector('.exit')
  exitInstructions.addEventListener('click', () => {
    document.querySelector('.divinstructions').style.display = 'none'
    document.querySelector('.title').style.visibility = 'visible'
    document.querySelector('.divlevels').style.visibility = 'visible'
    document.querySelector('.bodyimages').style.visibility = 'visible'
  })

  function gameStart() {
    document.querySelector('.easygrid').style.visibility = 'visible'
    // document.querySelector('.easygrid').style.display = 'flex'
    for (let i = 0; i < gridSize; i++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      if (i === harry) {
        cell.classList.add('harry')
      }
      easyGrid.appendChild(cell)
      cells.push(cell)
    }
  }
}

window.addEventListener('DOMContentLoaded', hogwartsGame)