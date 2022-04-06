// suits array
let suits = ['S', 'C', 'H', 'D']
// console.log(suits)

let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
// console.log(ranks)
let deck = []

// for (let i = 0; i < ranks.length; i++) {
//   console.log(ranks)
// }

for (let i = 0; i < suits.length; i++) {
    for (let r = 0; r < ranks.length; r++) {
      // console.log(ranks[r] + suits[i])
      deck.push(ranks[r] + suits[i])
    }
  }
  console.log(deck)