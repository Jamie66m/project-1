function hogwartsGame() {

  const width = 20
  const easyGrid = document.querySelector('.easygrid')
  const gridSize = width ** 2
  const cells = []
  let harry = 389
  const voldemort = 209
  const dementors = [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116]
  let harryLives = 3
  let lordVolLives = 3
  // let score = 0
  let spellPosition
  let allSpellPosition
  const gridTopRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

  // Add sounds for when - 1)You click the house crest to start the game 
  // 2)When you win the game
  // 3)When you lose the game
  // 4)When you get hit by a spell
  // 5)When the dementors get hit by a spell
  // 6)When voldemort gets hit by a spell
  // 7) Pause gamemusic when voldemort appears and add new music

  const backgroundMusic = new Audio()
  backgroundMusic.src = 'sounds/background.mp3'
  backgroundMusic.volume = 0.1
  backgroundMusic.loop = 'loop'

  const mischief = new Audio()
  mischief.src = 'sounds/mischief.mp3'
  mischief.volume = 0.2

  const maraudersMap = new Audio()
  maraudersMap.src = 'sounds/maraudersmap.mp3'
  maraudersMap.volume = 0.2

  const expectoPatronumSound = new Audio()
  expectoPatronumSound.src = 'sounds/expectopatronum.mp3'
  expectoPatronumSound.playbackRate = 1
  expectoPatronumSound.volume = 0.05

  const gameMusic = new Audio()
  gameMusic.src = 'sounds/battleofhogwarts.mp3'
  gameMusic.volume = 1
  gameMusic.loop = 'loop'

  const voldemortLaugh = new Audio()
  voldemortLaugh.src = 'sounds/voldemortlaugh.mp3'

  const voldemortAppearMusic = new Audio()
  voldemortAppearMusic.src = 'sounds/game.mp3'
  voldemortAppearMusic.volume = 1
  voldemortAppearMusic.loop = 'loop'

  const voldemortSpellSound = new Audio()
  voldemortSpellSound.src = 'sounds/voldemortcrucio.mp3'
  voldemortSpellSound.volume = 0.5



  function homePage() {
    document.querySelector('.body').style.visibility = 'visible'
    document.querySelector('.easygrid').style.visibility = 'hidden'
    document.querySelector('.lives').style.visibility = 'hidden'
    document.querySelector('.voldemortlives').style.visibility = 'hidden'
    document.querySelector('.voldemortlives').style.display = 'none'
    document.querySelector('.score').style.visibility = 'hidden'
    document.querySelector('#harrywins').style.visibility = 'hidden'
    document.querySelector('#harrywins').style.display = 'none'
    document.querySelector('#harryloses').style.visibility = 'hidden'
    document.querySelector('#harryloses').style.display = 'none'
    document.querySelector('.divinstructions').style.display = 'none'
    document.querySelector('.divinstructions').style.visibility = 'hidden'
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

  function gameStart() {
    easyGrid.style.position = 'absolute'
    for (let i = 0; i < width ** 2; i++) {
      const cell = document.createElement('div') 
      easyGrid.appendChild(cell) 
      cells.push(cell)       
    }
    cells[harry].classList.add('harry')
    dementors.forEach((e) => {
      cells[e].classList.add('dementor')  
    })
    loadDementors()
    dementorMove()
    randomDementorSpell()
    document.querySelector('.score').style.visibility = 'visible'
    document.querySelector('.lives').style.visibility = 'visible'
    backgroundMusic.pause()
    gameMusic.play()
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
      spellPosition = harry - width
      patronasArray.push([spellPosition])
      harrySpellPatronas()
      spellsCast += 1
      expectoPatronumSound.play()
    } else if (event.key === 'a') {
      event.preventDefault()
      allSpellPosition = harry - width
      allSpellsArray.push([allSpellPosition])
      harryAllMagic()
      allSpellsCast += 1
      playSpellSound()
    }
  })

  const patronasArray = []
  let spellsCast = 0
  let patronasSpell = harry - width

  function harrySpellPatronas() {
    const spellArray = patronasArray[spellsCast]
    const spellInterval = setInterval(() => {
      cells[spellArray[0]].classList.remove('harrySpellExpecto')
      patronasSpell = spellArray[0] - width
      cells[patronasSpell].classList.add('harrySpellExpecto')
      spellArray.pop()
      spellArray.push(patronasSpell)
      for (let i = 0; i < dementors.length; i++) {
        if (spellArray.includes(dementors[i])) {
          clearInterval(spellInterval)
          cells[patronasSpell].classList.remove('dementors', 'harrySpellExpecto')
          dementors.splice(i, 1)
          if (dementors.length === 0) {
            voldemortAppear()
            voldemortLaugh.play()
          }
        }
      }
    }, 50)
    setTimeout(() => {
      clearInterval(spellInterval)
      setTimeout(() => {
        gridTopRow.forEach((i) => {
          if (cells[i].className === 'harrySpellExpecto') {
            cells[i].classList.remove('harrySpellExpecto')
          }
        })
      }, 30)
    }, 925)
  }

  const allSpellsArray = []
  let allSpellsCast = 0
  let allSpell = harry - width

  function harryAllMagic() {
    const allArray = allSpellsArray[allSpellsCast]
    const allInterval = setInterval(() => {
      cells[allArray[0]].classList.remove('harryAllSpells')
      allSpell = allArray[0] - width
      cells[allSpell].classList.add('harryAllSpells')
      allArray.pop()
      allArray.push(allSpell)
      if (allArray.includes(voldemort)) {
        cells[allSpell].classList.remove('harryAllSpells')
        clearInterval(allInterval)
        voldemortLoseLife()
      }  
    }, 50)
    setTimeout(() => {
      clearInterval(allInterval)
      setTimeout(() => {
        gridTopRow.forEach((i) => {
          if (cells[i].className === 'harryAllSpells') {
            cells[i].classList.remove('harryAllSpells')
          }
        })
      }, 30)
    }, 925)
  }

  const spells = [ 'sounds/stupefy.mp3', 
    'sounds/sectumsempra.mp3',
    'sounds/rictusempra.mp3',
    'sounds/reducto.mp3',
    'sounds/reducio.mp3',
    'sounds/periculum.mp3',
    'sounds/harrycrucio.mp3',
    'sounds/expelliarmus.mp3',
    'sounds/diffindo.mp3',
    'sounds/araniaexumai.mp3'
  ]
  let spellSound 

  function generateRandomNumber(max) {
    return Math.floor(Math.random() * max)
  }
  function playSpellSound() {
    const x = generateRandomNumber(spells.length - 1)
    const spellSrc = spells[x]
    if (spellSound) {
      spellSound.pause()
    } else {
      spellSound = new Audio()
    }
    spellSound.src = spellSrc
    spellSound.volume = 0.5
    spellSound.play()
  }
 
  const dementorSpellArray = []
  let dementorSpellsCast = 0
  let newDementorSpell 

  function spellDementor() {
    const arrayDementorSpell = dementorSpellArray[dementorSpellsCast]
    const dementorSpellInterval = setInterval(() => {
      if (harryLives === 0) {
        loseGame()
      } else if (dementors.length === 0) {
        clearInterval(dementorSpellInterval)
        setTimeout(() => {
          cells[arrayDementorSpell].classList.remove('dementorSpell')
        }, 60)
        voldemortAppear()
      }
      cells[arrayDementorSpell[0]].classList.remove('dementorSpell')
      newDementorSpell = arrayDementorSpell[0] + width
      cells[newDementorSpell].classList.add('dementorSpell')
      arrayDementorSpell.pop()
      arrayDementorSpell.push(newDementorSpell)
      if (cells[arrayDementorSpell].classList.contains('harry')) {
        harryLoseLife()
      }
      if (newDementorSpell >= 379) {
        clearInterval(dementorSpellInterval)
        setTimeout(() => {
          cells[arrayDementorSpell].classList.remove('dementorSpell')
        }, 60)
      } 
    }, 100)
  }

  let randomDementorSpells
  function randomDementorSpell() {
    const randomDementorSpellInterval = setInterval(() => {
      randomDementorSpells = dementors[Math.floor(Math.random() * dementors.length)]
      defineRandomDementorSpell()
    }, 500)
    if (dementors.length === 0) {
      clearInterval(randomDementorSpellInterval)
    }
  }

  function defineRandomDementorSpell() {
    cells[randomDementorSpells + width].classList.add('dementorSpell')
    dementorSpellArray.push([randomDementorSpells + width])
    spellDementor()
    dementorSpellsCast += 1
  }

  function voldemortAppear() {
    for (let i = 0; i < gridSize; i++) {
      if (i === voldemort) {
        cells[i].classList.add('voldemort')
      }
    }
    document.querySelector('.voldemortlives').style.visibility = 'visible'
    document.querySelector('.voldemortlives').style.display = 'block'
    document.querySelector('.voldemortlives').style.transform = 'translateY(-35px)'
    document.querySelector('.score').style.transform = 'translate(-200px, -460px)'
    document.querySelector('.lives').style.transform = 'translate(170px, -570px)'
    darkLordSpell()
    gameMusic.pause()
    voldemortAppearMusic.play()
    voldemortSpellSound.play()
  }

  // NEED TO CREAT A VOLDEMORT MOVE FUNCTION

  const voldemortSpellsArray = []
  let voldemortSpellsCast = 0
  let voldemortSpell = voldemort + width

  function voldemortMagic() {
    const voldemortMagicArray = voldemortSpellsArray[voldemortSpellsCast]
    const voldemortMagicInterval = setInterval(() => {
      if (harryLives === 0) {
        loseGame()
      } else if (lordVolLives === 0) {
        clearInterval(voldemortMagicInterval)
        winGame()
      }
      cells[voldemortMagicArray[0]].classList.remove('voldemortSpell')
      voldemortSpell = voldemortMagicArray[0] + width
      cells[voldemortSpell].classList.add('voldemortSpell')
      voldemortMagicArray.pop()
      voldemortMagicArray.push(voldemortSpell)
      if (cells[voldemortMagicArray].classList.contains('harry')) {
        harryLoseLife()
      }
      if (voldemortSpell >= 379) {
        clearInterval(voldemortMagicInterval)
        setTimeout(() => {
          cells[voldemortMagicArray].classList.remove('voldemortSpell')
        }, 60)
      } 
    }, 100)
  }

  let darkLordSpells
  function darkLordSpell() {
    const darkLordSpellInterval = setInterval(() => {
      darkLordSpells = voldemort
      defineDarkLordSpell()
    }, 400)
    if (lordVolLives === 0) {
      clearInterval(darkLordSpellInterval)
    }
  }

  function defineDarkLordSpell() {
    cells[darkLordSpells + width].classList.add('voldemortSpell')
    voldemortSpellsArray.push([darkLordSpells + width])
    voldemortMagic()
    voldemortSpellsCast += 1
  }

  function voldemortLoseLife() {
    if (lordVolLives === 3) {
      lordVolLives -= 1
    } else if (lordVolLives === 2) {
      lordVolLives -= 1
    } else if (lordVolLives === 1) {
      lordVolLives -= 1
      winGame()
    }
  }

  function harryLoseLife() {
    if (harryLives === 3) {
      harryLives -= 1
    } else if (harryLives === 2) {
      harryLives -= 1
    } else if (harryLives === 1) {
      harryLives -= 1
      loseGame()
    }
  }

  // Fix this to look better
  function loseGame() {
    document.querySelector('.easygrid').style.visibility = 'hidden'
    document.querySelector('#harryloses').style.visibility = 'visible'
    document.querySelector('#harryloses').style.display = 'block'
    document.querySelector('.fly').style.visibility = 'visible'
    document.querySelector('.score').style.transform = 'translate(-250px, -400px)'
    document.querySelector('.lives').style.visibility = 'hidden'
    document.querySelector('.voldemortlives').style.visibility = 'hidden'
    document.querySelector('.voldemortlives').style.display = 'none'
    flyHome()
    voldemortAppearMusic.pause()
  }

  // Fix this to look better
  function winGame() {
    document.querySelector('.easygrid').style.visibility = 'hidden'
    document.querySelector('#harrywins').style.visibility = 'visible'
    document.querySelector('#harrywins').style.display = 'block'
    document.querySelector('.voldemortlives').style.visibility = 'hidden'
    document.querySelector('.voldemortlives').style.display = 'none'
    document.querySelector('.fly').style.visibility = 'visible'
    document.querySelector('.score').style.transform = 'translate(-200px, -390px)'
    document.querySelector('.lives').style.transform = 'translate(170px, -500px)'
    flyHome()
    voldemortAppearMusic.pause()
  }

  function flyHome() {
    const flyHomeButton = document.querySelector('.fly')
    flyHomeButton.addEventListener('click', () => {
      document.location.reload(true)
    })
  }

}

window.addEventListener('DOMContentLoaded', hogwartsGame)