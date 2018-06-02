import { mapKeyToNum, mapCodeToRot, transformChar, invertModKeyMap, checkTypes } from '../../shared/utils'

String.prototype.removePunct = function() { 
    return this.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") 
}

const vigenere = {
    symetric: function(cipher, key, encrypt = true) {
        // Sanitize inputs
        if (!key) return cipher
        if (!cipher) return ''
        checkTypes(cipher, key)
        key = key.split(' ').join('').removePunct()
        cipher = cipher.toLowerCase().split(' ').join('').removePunct()
        let keyMap = mapCodeToRot(mapKeyToNum(key))
        if (!encrypt) keyMap = invertModKeyMap(keyMap)
        return [...cipher].map((c, i) => transformChar(c, keyMap[i % keyMap.length])).join('')
    },
    encrypt: function(plain, key) {
        return this.symetric(plain, key)
    },
    decrypt: function(plain, key) {
        return this.symetric(plain, key, false)
    }
}

export default vigenere