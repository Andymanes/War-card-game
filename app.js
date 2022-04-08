


// GLOBAL VARIABLES


let suits = ['S', 'C', 'H', 'D']
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
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

declareWar.addEventListener('click', () => {
    let compare = [player1[0], player1[1], player1[2], player1[3], player2[0], player2[1], player2[2], player2[3]]
    console.log('tie pile', compare)
    player1.splice(0, 4)
    player2.splice(0, 4)
    console.log('war flip', parseInt(compare[3], 10), parseInt(compare[7], 10))
    console.log(player1)
    console.log(player2)
    // return (compare)
    if(activeGame === true)
    if(parseInt(compare[3], 10) === parseInt(compare[7], 10)) {
        tie = true
        let compare = [player1[0], player1[1], player1[2], player1[3], player2[0], player2[1], player2[2], player1[3]]
        console.log(compare)
        player1.splice(0, 4)
        player2.splice(0, 4)
        document.querySelector('.declare-war').style.visibility = 'visible'
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
    document.querySelector('.declare-war').style.visibility = 'hidden'
})

newGame.addEventListener('click', () => {
    // let dealt = false
    //     if(dealt === false) {
        shuffleDeck(deck)
        activeGame = true
        let cutDeck = Math.ceil(deck.length / 2)
        
        player1 = deck.slice().splice(0, cutDeck)
        console.log('player1', player1)
    
        player2 = deck.slice().splice(-cutDeck)
        console.log('player2', player2)
    }
    // return deal()
    // dealt = true
)


flipCard.addEventListener('click', () => {
    if (activeGame === true) {
    let compare = [player1[0], player2[0]]
    // parseInt(compare[0])
    // parseInt(compare[1])
    console.log('flipping', parseInt(compare[0], 10), parseInt(compare[1], 10))
    if(parseInt(compare[0], 10) === parseInt(compare[1], 10) && tie === false) {
        tie = true
        document.querySelector('.declare-war').style.visibility = 'visible'
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


// function warTie() {
//     let tiePile = [[player1[0], player1[1], player1[2], player2[0], player2[1], player2[2]]]
//     player1.splice(0, 3)
//     player2.splice(0, 3)
//     console.log(tiePile)
//     console.log(player1)
//     console.log(player2)
// }
// console.log(warTie())
// if(tie === true)
// document.querySelector('.declare-war').style.visibility = 'visible'


// creating 52 card deck
for (let i = 0; i < suits.length; i++) {
     for (let r = 0; r < ranks.length; r++) {
        // console.log(ranks[r] + suits[i])
    deck.push(ranks[r] + suits[i])
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