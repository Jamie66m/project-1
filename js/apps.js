function hogwartsGame() {

  const width = 20
  const easyGrid = document.querySelector('.easygrid')
  const gridSize = width ** 2
  const cells = []
  let harry = 389
  // const voldemort = 229
  const dementors = [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96]
  // let harryLives = 3
  // let voldemortLives = 3
  // let score = null
  // const spellCell
  // const gridTopRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  
  const backgroundMusic = new Audio()
  backgroundMusic.src = 'sounds/background.mp3'
  backgroundMusic.volume = 0.1
  backgroundMusic.loop = 'loop'

  const mischief = new Audio()
  mischief.src = 'sounds/mischief.mp3'
  mischief.volume = 0.1

  const maraudersMap = new Audio()
  maraudersMap.src = 'sounds/maraudersmap.mp3'
  maraudersMap.volume = 0.2

  const expectoPatronumSound = new Audio()
  expectoPatronumSound.src = 'sounds/expectopatronum.mp3'
  expectoPatronumSound.playbackRate = 1
  expectoPatronumSound.volume = 0.1


  function homePage() {
    document.querySelector('.body').style.visibility = 'visible'
    document.querySelector('.easygrid').style.visibility = 'hidden'
    document.querySelector('.lives').style.visibility = 'hidden'
    document.querySelector('.score').style.visibility = 'hidden'
    document.querySelector('#harrywins').style.visibility = 'hidden'
    document.querySelector('#harrywins').style.display = 'none'
    document.querySelector('#harryloses').style.visibility = 'hidden'
    document.querySelector('#harryloses').style.display = 'none'
    document.querySelector('.divinstructions').style.display = 'none'
    document.querySelector('.fly').style.visibility = 'hidden'
    const bodyImageButtons = document.querySelectorAll('.bodyimagebutton')
    for (const bodyImageButton of bodyImageButtons) {
      bodyImageButton.classList.add('pulse')
    }
    backgroundMusic.play()
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
    backgroundMusic.pause()
  }

  function loadDementors() {
    for (let i = 0; i < gridSize; i++) {
      if (dementors.includes(i)) {
        cells[i].classList.add('dementors')
      }
    }
  }

  function moveDementors() {
    dementors.forEach(dementors => {
      cells[dementors].classList.remove('dementors')
    })
    for (var i = 0; i < dementors.length; i++) {
      dementors[i] += 1
    }
    dementors.forEach(dementors => {
      cells[dementors].classList.add('dementors')
    })
  }

  function moveDown() {
    dementors.forEach(dementors => {
      cells[dementors].classList.remove('dementors')
    })
    for (var i = 0; i < dementors.length; i++) {
      dementors[i] += 20
    }
    dementors.forEach(dementors => {
      cells[dementors].classList.add('dementors')
    })
  }

  function moveLeft() {
    dementors.forEach(dementors => {
      cells[dementors].classList.remove('dementors')
    })
    for (var i = 0; i < dementors.length; i++) {
      dementors[i] -= 1
    }
    dementors.forEach(dementors => {
      cells[dementors].classList.add('dementors')
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
      for (let i = 0; i < dementors.length; i++) {
        if (dementors[i] >= 359) {
          clearInterval(dementorMoveInterval)
          loseGame()
        }
      }
    }, 3000)
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
    } else if (event.key === ' ') {
      event.preventDefault()
      expectoPatronumSound.play()  
    } else if (event.key === 'a') {
      event.preventDefault()
      playRandomSpellSound()
    }
  })

  // function harrySpellPatronas() {

  // }

  function playRandomSpellSound() {
    // instead of doing different spells I think I am going to add randomSpellSounds for when I press spacebar.
    // play this function on the key e when you are trying to kill voldermort
  }

  // function harrySpellyStupify() {

  // }

  // function dementorSpell() {

  // }

  // function randomDementorSpell() {

  // }

  // function voldemortAppear() {

  // }

  // function voldermortMove() {

  // }

  // function voldemortLoseLife() {

  // }

  // function voldemortSpell() {

  //}

  // function voldemortSpellSound() {

  //}

  // function harryLoseLife() {

  // }

  function loseGame() {
    document.querySelector('.easygrid').style.visibility = 'hidden'
    document.querySelector('#harryloses').style.visibility = 'visible'
    document.querySelector('#harryloses').style.display = 'block'
    document.querySelector('.fly').style.visibility = 'visible'
    flyHome()
  }

  // function winGame() {
  //   document.querySelector('.easygrid').style.visibility = 'hidden'
  //   document.querySelector('#harrywins').style.visibility = 'visible'
  //   document.querySelector('#harrywins').style.display = 'block'
  //   document.querySelector('.fly').style.visibility = 'visible'
  //   flyHome()
  // }


  function flyHome() {
    const flyHomeButton = document.querySelector('.fly')
    flyHomeButton.addEventListener('click', () => {
      document.location.reload(true)
    })
  }

}

window.addEventListener('DOMContentLoaded', hogwartsGame)