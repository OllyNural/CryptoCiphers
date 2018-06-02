function spiralChainIterator(array) {
    return {
        next: function() {
            let dirMap = [
                { id: 0, dir:'down',  coords: [1,  0]   },
                { id: 1, dir:'left',  coords: [0,  -1]  },
                { id: 2, dir:'up',    coords: [-1, 0]  },
                { id: 3, dir:'right', coords: [0,  1]   }
            ]
            let dir = dirMap.find(dir => dir.dir === this.currDir)
            let coords = dir.coords

            // Try to move down, left, up, right
            // If any of them fail, then set direction to the direction after the failure
            console.log('letter', array[this._currentXCoords][this._currentYCoords])

            let currentLetter = array[this._currentXCoords][this._currentYCoords]

            // stay on the current one
            // If good, return ------------- ?????????????
            // Check the next letter exists
            // If it does then set the new coords to be correct and return
            // If not, try the next direction - if it works set the next coords and return
            // If new direction does not work then we've reached the end

            if (currentLetter) {
                this._currentXCoords = this._currentXCoords + coords[0]
                this._currentYCoords = this._currentYCoords + coords[1]
                return {value: currentLetter, done: false}
            } else {
                // Get the next direction and coords
                this.currDir = dirMap[(dir.id + 1) % 4].dir
                coords = dirMap[dir.id + 1].coords
                // Move that direction from where we are
                this._currentXCoords = this._currentXCoords + coords[0]
                this._currentYCoords = this._currentYCoords + coords[1]
                // If the next direction fails, we know we've hit the center of the array
                let newLetter =  array[this._currentXCoords][this._currentYCoords]
                if (newLetter) {
                    return {value: newLetter + '', done: false}
                } else {
                    return {done: true}
                }
            }
        },
        currDir: 'down',
        _currentXCoords: 0,
        _currentYCoords: array[0].length - 1,
    }
}