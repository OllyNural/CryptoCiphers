const iteratorList = [
    { 
        type: 'snakeChainRoute',
        it: spiralChainIterator
    }
]

const genArray = (height, width) => {
    let array = []
    for (let i = 0; i < height; i++) {
        array.push([0])
        for (let j = 0; j < width; j++) {
            array[i][j] = 0
        }
    }
    return array
}

const mapWordToArray = (text, array, keyLength) => {
    [...text].forEach((element, i) => {
        array[Math.floor(i / keyLength)][i % keyLength] = element
    });
    return array
}

function spiralChainIterator(array) {
    return {
        next: function() {
            if (this.isDone) return {done: true}
            let dirMap = [
                { id: 0, dir:'down',  coords: [1,  0]   },
                { id: 1, dir:'left',  coords: [0,  -1]  },
                { id: 2, dir:'up',    coords: [-1, 0]  },
                { id: 3, dir:'right', coords: [0,  1]   }
            ]
            let dir = dirMap.find(dir => dir.dir === this.currDir)
            let coords = dir.coords

            // get current letter
            let currentLetter = array[this._currentXCoords][this._currentYCoords]

            let isNextLetterValid = () => {
                return ((array[this._currentXCoords + coords[0]]) != undefined && (array[this._currentXCoords + coords[0]][this._currentYCoords + coords[1]] != undefined))
            }
            // If next letter exists, we can move onwards
            if (isNextLetterValid()) {
                array[this._currentXCoords][this._currentYCoords] = undefined
                this._currentXCoords = this._currentXCoords + coords[0]
                this._currentYCoords = this._currentYCoords + coords[1]
            } else {
                // Get the coords for the next direction in turn
                coords = dirMap[(dir.id + 1) % 4].coords

                // If the new next dir letter exists, we can switch 
                // let newDirNextLetter = array[this._currentXCoords + coords[0]][this._currentYCoords + coords[1]]
                
                let isNewDirNextLetterValid = () => {
                    return ((array[this._currentXCoords + coords[0]] != undefined) && (array[this._currentXCoords + coords[0]][this._currentYCoords + coords[1]] != undefined))
                }
                // If the new next dir exists, we can change the dir and move onwards in the new direction
                if (isNewDirNextLetterValid()) {
                    array[this._currentXCoords][this._currentYCoords] = undefined
                    this.currDir = dirMap[(dir.id + 1) % 4].dir
                    this._currentXCoords = this._currentXCoords + coords[0]
                    this._currentYCoords = this._currentYCoords + coords[1]
                } else {
                    // else we've hit the end of our array, set done to true
                    this.isDone = true
                }
            }
            return {value: currentLetter, done: false}
        },
        isDone: false,
        currDir: 'down',
        _currentXCoords: 0,
        _currentYCoords: array[0].length - 1,
    }
}

const readCipherFromArray = (inputArray, type) => {
    let cipher = ''
    let arrayIterator = iteratorList.find(it => it.type === type)
    if (!arrayIterator) throw new Error('Please provide a valid transposition route!')
    let arrayLooper = {
        array: inputArray,
        [Symbol.iterator]() {
            return arrayIterator.it(this.array);
        }
    }
    return [...arrayLooper].join('').replace(/0/g, '')
}

const transposition = {
    symetric: function(plain, keyLength, type = 'snakeChainRoute') {
        // Sanitize inputs

        // Create empty array for chars
        let height = Math.ceil(plain.length / keyLength)
        let array = genArray(height, keyLength)
        // Map input text to array
        array = mapWordToArray(plain, array, keyLength)

        // Read off cipher text
        let cipher = readCipherFromArray(array, type)



        return cipher
    }
}

export { genArray, mapWordToArray, spiralChainIterator, readCipherFromArray, transposition }