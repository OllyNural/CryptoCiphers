import { genArray, mapWordToArray, readCipherFromArray, transposition } from './'

describe('genArray', () => {
    test('Should generate an array of height 4, and with 5', () => {
        const array = genArray(4, 5)
        expect(array).toHaveLength(4)
        expect(array[0]).toHaveLength(5)
    })

    test('Should generate an array of height 0, and with 0', () => {
        const array = genArray(0, 0)
        expect(array).toHaveLength(0)
        expect(array[0]).toBe(undefined)
    })
})

describe('mapWordToArray', () => {
    test('Should return a correct array of chars given valid even number of inputs', () => {
        let word = 'hellohello'
        let keyLength = 5
        let array = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
        let expectedArray = [
            ['h', 'e', 'l', 'l', 'o'],
            ['h', 'e', 'l', 'l', 'o'],
        ]
        expect(mapWordToArray(word, array, keyLength)).toEqual(expectedArray)
    })

    test('Should return a correct array of chars given valid uneven number of inputs', () => {
        let word = 'hellohellohel'
        let keyLength = 5
        let array = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
        let expectedArray = [
            ['h', 'e', 'l', 'l', 'o'],
            ['h', 'e', 'l', 'l', 'o'],
            ['h', 'e', 'l', 0, 0],
        ]
        expect(mapWordToArray(word, array, keyLength)).toEqual(expectedArray)
    })
})

// describe('readCipherFromArray', () => {
//     test('Should not hang', () => {
//         let expectedArray = [
//             ['h', 'e', 'l', 'l', 'o'],
//             ['h', 'e', 'l', 'l', 'o'],
//             ['h', 'e', 'l', 'l', 'o']
//         ]
//         expect(readCipherFromArray(expectedArray)).toBe('cipher')
//     })
// })

describe('Testing transposition', () => {
    test('Initial test', () => {
        expect(transposition.symetric('hellohellohe', 5)).toEqual('ooehhhelllle')
    })
})