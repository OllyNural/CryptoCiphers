// import ciphers from './src'
// import { transposition } from './src'

let ciphers = require('./src/index.js')
let { transposition } = require('./src/index.js')

console.log(ciphers)
console.log(transposition)

const input = 'hellohello'

// [[ 'h', 'e', 'l', 'l', 'o'],
//  [ 'h', 'e', 'l', 'l', 'o'], ]
//
//


const keyLength = 5

let cipher = transposition.symetric(input, keyLength)
console.log(cipher)