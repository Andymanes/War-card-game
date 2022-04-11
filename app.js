


// GLOBAL VARIABLES


let suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds']
let ranks = [
[2, '2'], 
[3, '3'], 
[4, '4'], 
[5, '5'], 
[6, '6'], 
[7, '7'], 
[8, '8'], 
[9, '9'], 
[10, '10'], 
[11, 'J'], 
[12, 'Q'], 
[13, 'K'], 
[14, 'A']]
// let scores = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// 'j' > '2', '3', '4', '5', '6', '7', '8', '9', '10' 

let deck = []
let player1 = []
let player2 = []
let compare = []
let tiePile = []
let tie = false
let activeGame = false
let newGame = document.querySelector('.new-game')
let flipCard = document.querySelector('.flip')
let declareWar = document.querySelector('.declare-war')
let player1Cards = document.querySelector('.player1-cards')
let player2Cards = document.querySelector('.player2-cards')
let player1Draw = document.querySelector('.player1-flipped-card')
let player2Draw = document.querySelector('.player2-flipped-card')



declareWar.addEventListener('click', () => {
    let compare = [player1[0], player1[1], player1[2], player1[3], player2[0], player2[1], player2[2], player2[3]]
    player1Draw.innerText = player1[3]
    player2Draw.innerText = player2[3]
    console.log('tie pile', compare)
    player1.splice(0, 4)
    player2.splice(0, 4)
    console.log('war flip', parseInt(compare[3], 10), parseInt(compare[7], 10))
    // return (compare)
    // if a tie happens, do not remove 4 cards until declare war button clicked again
    if(activeGame === true && parseInt(compare[3], 10) === parseInt(compare[7], 10)) {
        let compare = [player1[0], player1[1], player1[2], player1[3], player2[0], player2[1], player2[2], player1[3]]
        console.log('war flip tied', compare)
        declareWar.style.visibility = 'visible'
        // return compare
    } else if(parseInt(compare[3], 10) > parseInt(compare[7], 10) ) {
        player1.push(...compare)
    } else {
        player2.push(...compare)
    }
    console.log('player1', player1)
    console.log('player2', player2)
    player1Cards.innerText = player1.length
    player2Cards.innerText = player2.length
    tie = false
    declareWar.style.visibility = 'visible'
})

newGame.addEventListener('click', () => {
    // let dealt = false
    //     if(dealt === false) {
        shuffleDeck(deck)
        player1Draw.innerText = null
        player2Draw.innerText = null
        activeGame = true
        let cutDeck = Math.ceil(deck.length / 2)
        
        player1 = deck.slice().splice(0, cutDeck)
        console.log('player1', player1)
    
        player2 = deck.slice().splice(-cutDeck)
        console.log('player2', player2)
        declareWar.style.visibility = 'visible'
        player1Cards.innerText = player1.length
        player2Cards.innerText = player2.length
    }
    // return deal()
    // dealt = true
)


flipCard.addEventListener('click', () => {
    if (activeGame === true) {
    let compare = [player1[0], player2[0]]
    player1Draw.innerText = player1[0]
    player2Draw.innerText = player2[0]
    // parseInt(compare[0])
    // parseInt(compare[1])
    console.log('flipping', parseInt(compare[0], 10), parseInt(compare[1], 10))
    if(parseInt(compare[0], 10) === parseInt(compare[1], 10) && tie === false) {
        tie = true
        declareWar.style.visibility = 'visible'
        return compare
    } else if(parseInt(compare[0], 10) > parseInt(compare[1], 10) && tie === false) {
        player1.push(...compare)
        player1.shift(), player2.shift()
    } else if(parseInt(compare[0], 10) < parseInt(compare[1], 10) && tie === false) {
        player2.push(...compare)
        player1.shift(), player2.shift()
    }
    
    if(tie === false) {
        console.log('player1', player1)
        console.log('player2', player2)
        }
    player1Cards.innerText = player1.length
    player2Cards.innerText = player2.length
    
}})




// creating 52 card deck
for (let i = 0; i < suits.length; i++) {
     for (let j = 0; j < ranks.length; j++) {
        //  for (let y = 0; y < scores.length; y++) {
            deck.push(ranks[j] + suits[i])
        //  }
        // console.log(ranks[r] + suits[i])
    
    // applying one of each suit to one of each rank
        }
}


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

if(player1.length == 1 && player1[0] == '14') {
    // have html class for this that can be manipulated to say whatever I want
    // hide player 1 section and button section
    // change player 2 section text to player 2 wins
    document.querySelector('.left').style.visibility = 'hidden'
    document.querySelector('.buttons').style.visibility = 'hidden'
    document.querySelector('pile2').innerText = 'WINS!'
    console.log('player 2 wins')
} else if(player2.length == 1 && player2[0] == '14') {
    document.querySelector('.right').style.visibility = 'hidden'
    document.querySelector('.buttons').style.visibility = 'hidden'
    document.querySelector('pile2').innerText = 'WINS!'
    console.log('player 1 wins')
    // when a player's deck gets low, undefined values show up and start filling in the arrays
    // maybe .filter() method to remove them
}
// const lastItem = colors[colors.length - 1] 
// JAKE MIZE SPECIAL