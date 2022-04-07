

// for (let i = 0; i < ranks.length; i++) {
//   console.log(ranks)
// }

// GLOBAL VARIABLES


let suits = ['S', 'C', 'H', 'D']
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
let deck = []
let player1 = []
let player2 = []
let dealt = false
let newGame = document.querySelector('.new-game')
let flipCard = document.querySelector('.flip')


newGame.addEventListener('click', () => {
    let dealt = false
        if(dealt === false) {
            shuffleDeck(deck)
        
            let cutDeck = Math.ceil(deck.length / 2)
        
            player1 = deck.slice().splice(0, cutDeck)
            console.log(player1)
    
            player2 = deck.slice().splice(-cutDeck)
            console.log(player2)
        }
    // return deal()
    dealt = true
})


flipCard.addEventListener('click', () => {
     
        const draw = [player1.shift(), player2.shift()]
        // return draw
        console.log(player1, player2)
    
})



// creating 52 card deck
for (let i = 0; i < suits.length; i++) {
     for (let r = 0; r < ranks.length; r++) {
        // console.log(ranks[r] + suits[i])
    deck.push(ranks[r] + suits[i])
    // applying one of each suit to one of each rank
        }
}

// console.log(deck)



function shuffleDeck(array) {
    for (let i = 51; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        // this is the Fisher-Yates-Algorithm
    }
} 

// function deal() {
//     if(dealt === false) {
//         shuffleDeck(deck)
    
//         let cutDeck = Math.ceil(deck.length / 2)
    
//         player1 = deck.slice().splice(0, cutDeck)
//         console.log(player1)

//         player2 = deck.slice().splice(-cutDeck)
//         console.log(player2)
//     }
// // return deal()
// dealt = true
// }
// deal()



// function flip() {
//     const draw = [player1.shift(), player2.shift()]
//     return draw
// }
// console.log('flipping')
// flip()
// console.log(flip())
// console.log(flip())
// flip()
// flip()
// flip()
// console.log(flip())
console.log(player1)
console.log(player2)
// shuffled and cut deck then applied each player 26 cards
// maybe turn this into a function? call it deal?



