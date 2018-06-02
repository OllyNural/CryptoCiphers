import { transformChar } from '../../shared/utils'

const caesar = {
    symetric: function(cipher, rot) {
        if (rot != 0 && (!rot || typeof rot !== 'number')) return cipher
        if (!cipher || typeof cipher !== 'string') return ''
        return [...cipher].map(c => transformChar(c.toLowerCase(), rot)).join('')
    },
    decrypt: function(cipher, rot) {
        return this.symetric(cipher, -rot)
    },
    encrypt: function(plain, rot) {
        return this.symetric(plain, rot)
    }
}

export default caesar