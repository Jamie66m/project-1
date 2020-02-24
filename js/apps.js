function hogwartsGame() { 
  
  const width = 20
  const easyGrid = document.querySelector('.easygrid')
  const gridSize = width ** 2
  const cells = []
  let harry = 389
  // const voldemort = 229
  const dementors = [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96]
  const intervals = []
  // let harryLives = 3
  // let voldemortLives = 3
  // let score = null
  // const resetButton = document.querySelector('resetbutton')
  // const loseGame = document.querySelector('harryloses')
  // const winGame = document.querySelector('harrywins')
  // const spellCell
  // const gridTopRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

  function homePage() {
    document.querySelector('.body').style.visibility = 'visible'
    document.querySelector('.easygrid').style.visibility = 'hidden'
    document.querySelector('.lives').style.visibility = 'hidden'
    document.querySelector('.score').style.visibility = 'hidden'
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
      document.querySelector('.easygrid').style.visibility = 'visible'
      gameStart()
    })
  }
  const instructions = document.querySelector('.instructions')
  instructions.addEventListener('mouseover', () => {
    document.querySelector('.divinstructions').style.display = 'block'
    document.querySelector('.title').style.visibility = 'hidden'
    document.querySelector('.divlevels').style.visibility = 'hidden'
    document.querySelector('.bodyimages').style.visibility = 'hidden'
    document.querySelector('.bodyimages').style.display = 'none'
  })
  const exitInstructions = document.querySelector('.exit')
  exitInstructions.addEventListener('click', () => {
    document.querySelector('.divinstructions').style.display = 'none'
    document.querySelector('.title').style.visibility = 'visible'
    document.querySelector('.divlevels').style.visibility = 'visible'
    document.querySelector('.bodyimages').style.visibility = 'visible'
    document.querySelector('.bodyimages').style.display = 'block'
  })

  function gameStart() {
    easyGrid.style.position = 'absolute'
    document.querySelector('.score').style.visibility = 'visible'
    document.querySelector('.lives').style.visibility = 'visible'
    const harryLives = document.querySelector('#addlives')
    harryLives.innerHTML = 3
    const playerScore = document.querySelector('#addscore')
    playerScore.innerHTML = 0
    for (let i = 0; i < gridSize; i++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      if (i === harry) {
        cell.classList.add('harry')
      }
      easyGrid.appendChild(cell)
      cells.push(cell)
    }
    loadDementors()
    dementorMove()
  }

  function loadDementors() {
    for (let i = 0; i < gridSize; i++) {
      if (dementors.includes(i)) {
        cells[i].classList.add('dementors')
      }
    }
  }

  function moveDementors() {
    dementors.forEach(alien => {
      cells[alien].classList.remove('dementors')
    })
    for (var i = 0; i < dementors.length; i++) {
      dementors[i] += 1
    }
    dementors.forEach(alien => {
      cells[alien].classList.add('dementors')
    })
  }

  function moveDown() {
    dementors.forEach(alien => {
      cells[alien].classList.remove('dementors')
    })
    for (var i = 0; i < dementors.length; i++) {
      dementors[i] += 20
    }
    dementors.forEach(alien => {
      cells[alien].classList.add('dementors')
    })
  }

  function moveLeft() {
    dementors.forEach(alien => {
      cells[alien].classList.remove('dementors')
    })
    for (var i = 0; i < dementors.length; i++) {
      dementors[i] -= 1
    }
    dementors.forEach(alien => {
      cells[alien].classList.add('dementors')
    })
  }
	
  function dementorMove() {
    const dementorMoveInterval = setInterval(() => {
      setTimeout(() => {
        moveDementors()
      }, 1500)
      setTimeout(() => {
        moveDown() 
      }, 2000)
      setTimeout(() => {
        moveLeft()
      }, 2500)
    //   for (let i = 0; i < aliens.length; i++) {
    //     if (aliens[i] >= 359) {
    //       loseGame()
    //     }
    //   }
    }, 3000)
    intervals.push(dementorMoveInterval)
  }
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (harry === cells.length - 1) {
        return
      }
      cells[harry].classList.remove('harry')
      harry += 1
      cells[harry].classList.add('harry')
    } else if (event.key === 'ArrowLeft') {
      if (harry === 380) {
        return
      }
      cells[harry].classList.remove('harry')
      harry -= 1
      cells[harry].classList.add('harry')
    } 
  })

  // function harrySpellPatronas() {

  // }

  // function harrySpellyStupify() {

  // }

  // function dementorSpell() {

  // }

  // function voldemortAppear() {

  // }

  // function voldermortMove() {

  // }

  // function voldemortLoseLife() {

  // }

  // function harryLoseLife() {

  // }

  // function loseGame() {

  // }

  // function winGame() {

  // }

  // function resetGame() {

  // }

}

window.addEventListener('DOMContentLoaded', hogwartsGame)