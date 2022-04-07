// suits array
// let suits = ['S', 'C', 'H', 'D']
// console.log(suits)

// let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
// console.log(ranks)
// let deck = []

// for (let i = 0; i < ranks.length; i++) {
//   console.log(ranks)
// }

let suits = ['S', 'C', 'H', 'D']
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
let deck = []

for (let i = 0; i < suits.length; i++) {
     for (let r = 0; r < ranks.length; r++) {
        // console.log(ranks[r] + suits[i])
    deck.push(ranks[r] + suits[i])
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
  shuffleDeck(deck)
  console.log(deck)

  let cutDeck = Math.ceil(deck.length / 2)
//   console.log(cutDeck)
let topDeck = deck.splice(0, cutDeck)
console.log(topDeck)
let bottomDeck = deck.splice(-cutDeck)
console.log(bottomDeck)