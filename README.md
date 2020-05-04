### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive

# HOGWARTS INVADERS <img src= images/harrypotter.png height=50 width=50 />

# Overview 

Hogwarts Invaders was the first project that I completed during a 3 month Software Engineering Immersive course at General Assembly. 

With only three weeks into the course and being a complete novice before the start I was extremely excited about taking on my first front-end development project. 

The task was to create a grid-based game and we were to choose a game from a selection of 10. All the games were given a level of difficulty between 1-3. These games were to utilise 'vanilla' JavaScript, HTML and CSS

Hogwarts Invaders is a level 2 grid-based game which is a take on the iconic _Space Invaders_. This was a solo project with a duration of one week. The aim was to translate the key aspects of Harry Potter into the game and so I focused heavily on animations, using set intervals and timeouts, and also the use of sound effects to create a sense of suspense and intensity around the game. 

I knew this was going to be a challenge due to my very basic understanding of JavaScript and interacting with the DOM, but I was comfortable in my understanding of CSS to make sure the user had a fun and entertaining experience when playing the game.

__Play Hogwarts Invaders [here](https://jamie66m.github.io/project-1/)__

## The Brief

- **Render a game in the browser**
- **Design logic for winning & visually display which player won**
- **Include separate HTML / CSS / JavaScript files**
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **Javascript** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
- Use **semantic markup** for HTML and CSS (adhere to best practices)

## Technologies Used

| Category | List |
| ---- | --- |
| Languages                            | Javascript (ECMAScript6), CSS, HTML5 |
| Typefaces                            | TrueType |
| Text Editor                          | VS Code |
| Browser                              | Chrome |
| Version control | Git and GitHub |

## Aim of the Game

The aim of the game is to move Harry left or right protecting Hogwarts by casting Expecto Patronum to remove the dementors and once all the dementors are removed from the game you will have to take down Voldemort casting from a range of spells.

## Approach

My approach to creating the game was similar to how an author would write a book. I decided I want to create the beginning of the game (the homepage) first, then the game and then the end. The reason I did this is because I wanted to picture the journey of the user through the game and this definitely helped when adding features such as music, font-style and the animations. 

- Homepage
  - Levels pulsating
  - Instructions 

### Homepage

As mentioned above I decided to tackle the Homepage first. I really wanted to create a page where the user (especially Harry Potter fans) immediately felt like they had entered the Harry Potter world and the game was to protect Hogwarts. Therefore, the dementors invading Hogwarts background image, replicating the Harry Potter font-style, using the Harry Potter theme tune and utilising the Hogwarts Crest to display the levels definitely does bring the game to life.

There are two core features to the homepage that I implemented in order that the page didn't feel static and they are the pulsating Hogwarts Crests and the interactive instructions guide. 


![](./images/HIHomePage.jpg)

__Hogwarts Crest & Instructions__

When the homepage loads the class <strong>pulse</strong> from the <strong>animate.css</strong> file is added to the class <strong>bodyimagebutton</strong>. The Hogwarts crests also scale when you hover over them. 

```js
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
```
```css
.pulse {
animation: pulse 3s infinite;
}

@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
```

![](./images/HIInstructions.jpg)


- Variables
- Grid
  - Adding Harry to the Grid
  - Adding Dementors to the Grid
  - Adding Voldemort to the Grid
- Harry Movement
- Harry Spells
  - Harry Spell Expecto Patronum against Dementors
    - Removing Dementor Life + Adding Score
  - Harry All Spells vs Voldemort
    - rotating through the different sounds
    - Removing Voldemort Life + Adding Score
- Dementor Movement
  - Set Intervals
- Dementor Spells
  - Randomising
- Voldemort Appearance
  - Once dementors were all removed
  - Adding on 2 lives to Harry 
- Voldemort Movement
  - Same principle as dementors 
- Harry Lose Life
  -  Sounds and losing a life
- Voldemort lose life
  - Randomised sounds and losing a life
  - Score increased by 500 every time Voldemort lost a life
- Levels
  - How I created three difficulties
    - What I was doing originally but then changed the day before that I had separate HTMLs

- Win Game, Lose Game, Restart Game, Go back to Homepage
  - Use of animations on Harry and the Snitch
  - Victory Music
  - Loser Music
  - Changing the state of the DOM


## Winners and Blockers

### Winners

  - The Music and Images
    - Getting all the sound features and being able to implement them correctly and pause them when necessary.
    - The images reflect exactly what the game is about and what is happening in the game.
  - The User Experience
    - Design of the game
  - It is true to Harry Potter
    - The use of animations gives it that magical touch.
  - The range of components and different areas of logic and functionality 
  - I had issues removing the spells from both Harry and the Dementors when they hit either the top or the bottom of the grid.
  - It took me a while to write the correct code to randomise the sound effects for the harry's spells at voldemort and when voldemort would lose a life.
  - Changing the score. 
    - Constantly got stuck on 100
  - Originally I had one level and from the homepage I would just change the DOM to remove everything on the homepage and then show the game. However, this was relatively impractical and came with a few bugs. It was only till when on the final evening of the project when I decided to implement levels that I would make the homepage and all three levels separate HTML files. This has slightly slowed down the rendering of each page however, it has definitely improved the overall performance of the game.

### Blockers and Challengers

  - I wanted to have the dementors moving to the wall of the grid, then down the grid by one row and then move in the opposite direction to the other wall. However I struggled with the logic and functionality of this and therefore stuck to using set intervals and timeouts.
  - Potentially spent to much time focusing on the design on certain components of the game and could have introduced extra features which are mentioned below.

## Future features
 -  If the spells collide then they are removed.
 -  Have voldemort appear by fading him and scaling him
 -  Be able to block spells
 -  Make the game mobile
 -  Make Harry's and Voldemort's movement fluid across the grid


## Key learning areas