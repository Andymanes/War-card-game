


// GLOBAL VARIABLES


let suits = [' h', ' s', ' c', ' d']
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
let scores = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// , '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
// 7, 8, 9, 10, 11, 12, 13, 14
let deck = []
let player1 = []
let player2 = []
let compare = []
let tiePile = []
let tie = false
let activeGame = false
let cardsAdded = ''
let newGame = document.querySelector('.new-game')
let flipCard = document.querySelector('.flip')
let declareWar = document.querySelector('.declare-war')
let player1Cards = document.querySelector('.player1-cards')
let player2Cards = document.querySelector('.player2-cards')
let player1Draw = document.querySelector('.player1-flip')
let player2Draw = document.querySelector('.player2-flip')
player1Draw.innerHTML = null
player2Draw.innerHTML = null




declareWar.addEventListener('click', () => {
    
    // set a variable for player 1 fourth array and another for player 2 fourth array
    let player1Flip = player1[4]
    let player2Flip = player2[4]
    let tiePile = [player1[0], player1[1], player1[2], player1[3], player1[4], player2[0], player2[1], player2[2], player2[3], player2[4]]
    // compare player 1 fourth index to player 2 fourth index and give all of the arrays in
    // tiePile to the winner then splice out first 4 array from each player's array
    
    // console.log(player1Flip, player2Flip)
    player1Draw.innerText = player1[4][1]
    // console.log('player2 war flip', player2[4][0])
    player2Draw.innerText = player2[4][1]
    console.log('tie pile', tiePile)
    console.log('war flip')
    console.log(player1Flip, player2Flip)
    player1.splice(0, 4)
    player2.splice(0, 4)
    // (cardsAdded %2==0)
        addCard(player1Draw)
      
        addCard(player2Draw)
      
    //   cardsAdded++
    // return (compare)
    // if a tie happens, do not remove 4 cards until declare war button clicked again
    if(activeGame === true && player1Flip[0] === player2Flip[0]) {
        let tiePile = [player1[0], player1[1], player1[2], player1[3], player2[0], player2[1], player2[2], player1[3]]
        console.log('war flip tied', tiePile)
        declareWar.style.visibility = 'visible'
        flipCard.style.visibility = 'hidden'
        return tiePile
    } else if(player1Flip[0] > player2Flip[0]) {
        // console.log(player1Flip)
        player1.push(...tiePile)
        player1.shift()
        player2.shift()
    } else if(player1Flip[0] < player2Flip[0]) {
        player2.push(...tiePile)
        player1.shift()
        player2.shift()
    }
    console.log('player1', player1)
    console.log('player2', player2)
    player1Cards.innerText = player1.length
    player2Cards.innerText = player2.length
    tie = false
    declareWar.style.visibility = 'visible'
    flipCard.style.visibility = 'visible'
    winner()
})

newGame.addEventListener('click', () => {
        // let player1 = []
        // let player2 = []
        // let
        // makeDeck()
        shuffleDeck(deck)
        player1Draw.innerHTML = null
        player2Draw.innerHTML = null
        activeGame = true
        let cutDeck = Math.ceil(deck.length / 2)
        
        player1 = deck.slice().splice(0, cutDeck)
        console.log('player1', player1)
    
        player2 = deck.slice().splice(-cutDeck)
        console.log('player2', player2)
        declareWar.style.visibility = 'visible'
        flipCard.style.visibility = 'visible'
        player1Cards.innerText = player1.length
        player2Cards.innerText = player2.length
        player1Draw.style.backgroundColor = null
        player1Draw.style.border = '0px'
        player2Draw.style.backgroundColor = null
        player2Draw.style.border = '0px'
})


flipCard.addEventListener('click', () => {
    
    if (activeGame === true) {
    // set first array of player 1 and player 2 to their own variables
    let player1Flip = player1[0]
    let player2Flip = player2[0]
    player1Draw.style.border = '1px solid black'
    player2Draw.style.border = '1px solid black'
    // compare first index of each variable then push both arrays into the deck of whichever
    // player won the flip then remove the first variable out of each player's deck
    // console.log(player2[0][1])
    // console.log(player1Flip, player2Flip)
    winner()
    player1Draw.style.backgroundColor = "white";
    player2Draw.style.backgroundColor = "white";
    player1Draw.innerText = player1Flip[1]
    player2Draw.innerText = player2Flip[1]
    console.log('flipping', player1Flip, player2Flip)
    if(player1Flip[0] === player2Flip[0] && tie === false) {
        tie = true
        declareWar.style.visibility = 'visible'
        flipCard.style.visibility = 'hidden'
        winner()

    } else if(player1Flip[0] > player2Flip[0] && tie === false) {
        player1.push(player1Flip, player2Flip)
        player1.shift()
        player2.shift()
        
    } else if(player1Flip[0] < player2Flip[0] && tie === false) {
        player2.push(player1Flip, player2Flip)
        player1.shift()
        player2.shift()
    }
    
    if(tie === false) {
        console.log('player1', player1)
        console.log('player2', player2)
        }
    winner()
    player1Cards.innerText = player1.length
    player2Cards.innerText = player2.length
    
    
}})


function addCard(target){
    for(let i = 0; i < 3; i++) {
    const newCard = document.createElement("div")
    newCard.setAttribute('class',"card new-card")
    newCard.innerText = cardsAdded
    newCard.style.top = `${10*cardsAdded}px`
    newCard.style.transform = `translateY(${20*i}px)`
    newCard.style.zIndex = '-1'
    target.prepend(newCard)
    }
    // translate y
    // newCard.style.left = `${1.2*cardsAdded}px`
    
    console.log(target)
  }

// creating 52 card deck
// function makeDeck() {
for (let i = 0; i < suits.length; i++) {
     for (let j = 0; j < ranks.length; j++) {
        //  for (let y = 0; y < scores.length; y++) {
            deck.push([scores[j], ranks[j] + suits[i]])
        // applying one of each suit to one of each rank
        }}
// }}


// shuffling deck
function shuffleDeck(array) {
    for (let i = 51; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        // this is the Fisher-Yates-Algorithm
    }
} 


// win condition:
// one player runs out of cards or if one player only has an ace left
function winner() {
if(player1.length === 0) {
    flipCard.style.visibility = 'hidden'
    declareWar.style.visibility = 'visible'
    declareWar.innerText = 'Player 2 Wins!'
    console.log('player 2 wins')
    activeGame = false
} else if (player2.length === 0) {
    console.log('player 1 wins')
    flipCard.style.visibility = 'hidden'
    declareWar.style.visibility = 'visible'
    declareWar.innerText = 'Player 1 Wins!'
    activeGame = false
} else if(player1.length < 5 && tie === true) {
    flipCard.style.visibility = 'hidden'
    declareWar.style.visibility = 'visible'
    console.log('player 2 wins')
    declareWar.innerText = 'Player 2 Wins!'
    activeGame = false
    return player2Cards
} else if(player2.length < 5 && tie === true) {
    console.log('player 1 wins')
    flipCard.style.visibility = 'hidden'
    declareWar.innerText = 'Player 1 Wins!'
    activeGame = false
    return player2Cards
}
}
// declareWar.style.visibility = 'hidden'
// flipCard.style.visibility = 'hidden'


// const lastItem = colors[colors.length - 1] 
// JAKE MIZE SPECIAL