const getOffset = charCode => {
	if (charCode >= 65 && charCode <= 90) return 65
	else if (charCode >= 97 && charCode <= 122) return 97
	else return null
}

const absoluteValue = num => {
    if (typeof(num) !== 'number') return 0
	return (((num % 26) + 26) % 26)
}

const mapKeyToNum = key => [...key].map(keyLetter => {
	if (!keyLetter || typeof keyLetter !== 'string') return 0
	return keyLetter.charCodeAt()
})

const transformChar = (c, rot) => {
	let charCode = c.charCodeAt()
	let offset = getOffset(charCode)
	if (!offset) return ''
	return String.fromCharCode(absoluteValue(charCode + rot - offset) + offset)
}

const mapCodeToRot = keyMap => keyMap.map(keyCode => {
	if (!getOffset(keyCode)) return 0
	return (keyCode - getOffset(keyCode))
})

const invertModKeyMap = keyMap => keyMap.map(keyCode => 26 - keyCode)

const checkTypes = (cipher, key) => {
	if (typeof cipher !== 'string') throw new Error('Cipher is not of type string')
    if (typeof key !== 'string') throw new Error('Key is not of type string.')
	return null
}

module.exports = {
	getOffset,
    absoluteValue,
    mapKeyToNum,
	transformChar,
	mapCodeToRot,
	invertModKeyMap,
	checkTypes,
}