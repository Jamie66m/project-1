function hogwartsGame() {

  const width = 20
  const easyGrid = document.querySelector('.easygrid')
  const gridSize = width ** 2
  const cells = []
  let harry = 389
  let voldemort = 229
  const dementors = [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116]
  let harryLives = 3
  let lordVolLives = 6
  let score = 0
  let spellPosition
  let allSpellPosition
  const gridTopRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  const livesCount = document.querySelector('.lives')
  const scoreCount = document.querySelector('.score')
  const volLivesCount = document.querySelector('.voldemortlives')

  const expectoPatronumSound = new Audio()
  expectoPatronumSound.src = 'sounds/expectopatronum.mp3'
  expectoPatronumSound.playbackRate = 1
  expectoPatronumSound.volume = 0.1

  const gameMusic = new Audio()
  gameMusic.src = 'sounds/battleofhogwarts.mp3'
  gameMusic.volume = 1
  gameMusic.loop = 'loop'

  const voldemortLaugh = new Audio()
  voldemortLaugh.src = 'sounds/voldemortlaugh.mp3'

  const voldemortAppearMusic = new Audio()
  voldemortAppearMusic.src = 'sounds/voldemortappear.mp3'
  voldemortAppearMusic.volume = 0.5
  voldemortAppearMusic.loop = 'loop'

  const voldemortSpellSound = new Audio()
  voldemortSpellSound.src = 'sounds/avadakedavra.mp3'
  voldemortSpellSound.volume = 0.4
  // voldemortSpellSound.loop = 'loop'

  const harryHit = new Audio()
  harryHit.src = 'sounds/harryhit.mp3'
  harryHit.volume = 1

  const hogwartsMarch = new Audio()
  hogwartsMarch.src = 'sounds/hogwartsmarch.mp3'
  hogwartsMarch.volume = 1
  hogwartsMarch.loop = 'loop'

  const hogwartsConquered = new Audio()
  hogwartsConquered.src = 'sounds/procession.mp3'
  hogwartsMarch.volume = 1
  hogwartsMarch.loop = 'loop'

  function homePage() {
    document.querySelector('.easygrid').style.visibility = 'visible'
    document.querySelector('.lives').style.visibility = 'visible'
    document.querySelector('.voldemortlives').style.visibility = 'hidden'
    document.querySelector('.score').style.visibility = 'visible'
    document.querySelector('#harrywins').style.visibility = 'hidden'
    document.querySelector('#harrywins').style.display = 'none'
    document.querySelector('#harryloses').style.visibility = 'hidden'
    document.querySelector('#harryloses').style.display = 'none'
    document.querySelector('.fly').style.visibility = 'hidden'
    document.querySelector('.goldensnitch').style.visibility = 'hidden'
    document.querySelector('.goldensnitch').style.display = 'none'
    document.querySelector('.homeorrestart').style.visibility = 'hidden'
    document.querySelector('.homeorrestart').style.display = 'none'
    gameStart()
  }
  window.addEventListener('load', homePage)

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
    livesCount.innerHTML = `Harry Lives: ${harryLives}`
    scoreCount.innerHTML = `Score: ${score}`
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
      }, 1000)
      setTimeout(() => {
        moveDown()
      }, 1500)
      setTimeout(() => {
        moveLeft()
      }, 2000)
      for (let i = 0; i < dementors.length; i++) {
        if (dementors[i] >= 359) {
          clearInterval(dementorMoveInterval)
          loseGame()
        }
      }
    }, 2500)
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
          score += 100
          scoreCount.innerHTML = `Score: ${score}`
        }
        if (dementors.length === 0) {
          voldemortAppear()
          harryLives += 2
          livesCount.innerHTML = `Harry Lives: ${harryLives}`
          console.log(harryLives)
          voldemortLaugh.play()
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
        score += 500
        scoreCount.innerHTML = `Score: ${score}`
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

  const spells = ['sounds/stupefy.mp3',
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
    spellSound.volume = 0.8
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
        clearInterval(dementorSpellInterval)
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
    if (dementors.length === 0) {
      return
    }
    if (harryLives === 0) {
      return
    }
    cells[randomDementorSpells + width].classList.add('dementorSpell')
    console.log(cells[randomDementorSpells + width])
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
    volLivesCount.innerHTML = `Voldemort Lives: ${lordVolLives}`
    darkLordSpell()
    moveVoldemort()
    gameMusic.pause()
    expectoPatronumSound.pause()
    voldemortAppearMusic.play()
  }

  function moveVoldemort() {
    const voldemortMoveInterval = setInterval(() => {
      setTimeout(() => {
        voldemortMoveRight()
      }, 300)
      setTimeout(() => {
        voldemortMoveLeft()
      }, 500)
      setTimeout(() => {
        voldemortMoveRight()
      }, 950)
      if (lordVolLives === 0) {
        clearInterval(voldemortMoveInterval)
        voldemortSpellSound.pause()
        winGame()
      } else if (harryLives === 0) {
        clearInterval(voldemortMoveInterval)
        voldemortSpellSound.pause()
        loseGame()
      } else if (voldemort >= 359) {
        clearInterval(voldemortMoveInterval)
        loseGame()
      }
    }, 1000)
  }

  function voldemortMoveRight() {
    cells[voldemort].classList.remove('voldemort')
    voldemort += 1
    cells[voldemort].classList.add('voldemort')
  }

  function voldemortMoveLeft() {
    cells[voldemort].classList.remove('voldemort')
    voldemort -= 2
    cells[voldemort].classList.add('voldemort')
  }

  const voldemortSpellsArray = []
  let voldemortSpellsCast = 0
  let voldemortSpell = voldemort + width

  function voldemortMagic() {
    const voldemortMagicArray = voldemortSpellsArray[voldemortSpellsCast]
    const voldemortMagicInterval = setInterval(() => {
      if (harryLives === 0) {
        clearInterval(voldemortMagicInterval)
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
    }, 90)
  }

  let darkLordSpells
  function darkLordSpell() {
    const darkLordSpellInterval = setInterval(() => {
      darkLordSpells = voldemort
      defineDarkLordSpell()
    }, 450)
    if (lordVolLives === 0) {
      clearInterval(darkLordSpellInterval)
    }
  }

  function defineDarkLordSpell() {
    if (lordVolLives === 0) {
      return
    } else if (harryLives === 0) {
      return
    }
    cells[darkLordSpells + width].classList.add('voldemortSpell')
    voldemortSpellsArray.push([darkLordSpells + width])
    voldemortMagic()
    voldemortSpellsCast += 1
    voldemortSpellSound.play()
  }

  function voldemortLoseLife() {
    if (lordVolLives === 7) {
      lordVolLives -= 1
      volLivesCount.innerHTML = `Voldemort Lives: ${lordVolLives}`
      voldemortHitSound()
    } else if (lordVolLives === 6) {
      lordVolLives -= 1
      volLivesCount.innerHTML = `Voldemort Lives: ${lordVolLives}`
      voldemortHitSound()
    } else if (lordVolLives === 5) {
      lordVolLives -= 1
      volLivesCount.innerHTML = `Voldemort Lives: ${lordVolLives}`
      voldemortHitSound()
    } else if (lordVolLives === 4) {
      lordVolLives -= 1
      volLivesCount.innerHTML = `Voldemort Lives: ${lordVolLives}`
      voldemortHitSound()
    } else if (lordVolLives === 3) {
      lordVolLives -= 1
      volLivesCount.innerHTML = `Voldemort Lives: ${lordVolLives}`
      voldemortHitSound()
    } else if (lordVolLives === 2) {
      lordVolLives -= 1
      volLivesCount.innerHTML = `Voldemort Lives: ${lordVolLives}`
      voldemortHitSound()
    } else if (lordVolLives === 1) {
      lordVolLives -= 1
      volLivesCount.innerHTML = `Voldemort Lives: ${lordVolLives}`
      winGame()
      voldemortSpellSound.pause()
    }
  }
  const voldemortHit = ['sounds/goingtodestroyyou.mp3',
    'sounds/goingtokillyou.mp3',
    'sounds/howtoduel.mp3',
    'sounds/introduceyou.mp3',
    'sounds/lightleaveyoureyes.mp3',
    'sounds/lookatme.mp3',
    'sounds/pickupyourwand.mp3'
  ]
  let voldemortIsHit

  function generateRandomVoldemortHit(max) {
    return Math.floor(Math.random() * max)
  }
  function voldemortHitSound() {
    const x = generateRandomVoldemortHit(voldemortHit.length - 1)
    const voldemortHitSrc = voldemortHit[x]
    if (voldemortIsHit) {
      voldemortIsHit.pause()
    } else {
      voldemortIsHit = new Audio()
    }
    voldemortIsHit.src = voldemortHitSrc
    voldemortIsHit.volume = 1
    voldemortIsHit.play()
  }


  function harryLoseLife() {
    if (harryLives === 5) {
      harryLives -= 1
      livesCount.innerHTML = `Harry Lives: ${harryLives}`
      harryHit.play()
    } else if (harryLives === 4) {
      harryLives -= 1
      livesCount.innerHTML = `Harry Lives: ${harryLives}`
      harryHit.play()
    } else if (harryLives === 3) {
      harryLives -= 1
      livesCount.innerHTML = `Harry Lives: ${harryLives}`
      harryHit.play()
    } else if (harryLives === 2) {
      harryLives -= 1
      livesCount.innerHTML = `Harry Lives: ${harryLives}`
      harryHit.play()
    } else if (harryLives === 1) {
      harryLives -= 1
      livesCount.innerHTML = `Harry Lives: ${harryLives}`
      loseGame()
    }
    console.log(harryLives)
  }

  // Fix this to look better
  function loseGame() {
    document.querySelector('.easygrid').style.visibility = 'hidden'
    document.querySelector('#harryloses').style.visibility = 'visible'
    document.querySelector('#harryloses').style.display = 'block'
    document.querySelector('.fly').style.visibility = 'visible'
    document.querySelector('.goldensnitch').style.visibility = 'visible'
    document.querySelector('.goldensnitch').style.display = 'block'
    document.querySelector('.score').style.transform = 'translate(-50px, 200px)'
    document.querySelector('.lives').style.visibility = 'hidden'
    document.querySelector('.voldemortlives').style.visibility = 'hidden'
    document.querySelector('.homeorrestart').style.visibility = 'visible'
    document.querySelector('.homeorrestart').style.display = 'block'
    flyHome()
    voldemortAppearMusic.pause()
    harryHit.pause()
    gameMusic.pause()
    voldemortSpellSound.pause()
    hogwartsConquered.play()
  }

  // Fix this to look better
  function winGame() {
    document.querySelector('.easygrid').style.visibility = 'hidden'
    document.querySelector('#harrywins').style.visibility = 'visible'
    document.querySelector('#harrywins').style.display = 'block'
    document.querySelector('.voldemortlives').style.visibility = 'hidden'
    document.querySelector('.score').style.transform = 'translate(-50px, 200px)'
    document.querySelector('.lives').style.transform = 'translate(100px, 200px)'
    document.querySelector('.fly').style.visibility = 'visible'
    document.querySelector('.goldensnitch').style.visibility = 'visible'
    document.querySelector('.goldensnitch').style.display = 'block'
    document.querySelector('.homeorrestart').style.visibility = 'visible'
    document.querySelector('.homeorrestart').style.display = 'block'
    flyHome()
    voldemortSpellSound.pause()
    voldemortAppearMusic.pause()
    harryHit.pause()
    hogwartsMarch.play()
  }

  function flyHome() {
    const flyHomeButton = document.querySelector('.fly')
    flyHomeButton.addEventListener('click', () => {
      document.location.reload(true)
    })
  }

}

window.addEventListener('DOMContentLoaded', hogwartsGame)