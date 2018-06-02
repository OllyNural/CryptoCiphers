import vigenere from './'
import vigenereMockData from './vigenereMockData'

describe('Testing Vigenere', () => {
    describe('Symetric', () => {
        it('should return given plain text string if no key given', () => {
            expect(vigenere.symetric('plaintext')).toBe('plaintext')
        })

        it('should return a string given valid inputs', () => {
            expect(typeof vigenere.symetric('a', 'a')).toBe('string')
        })

        for (let test of vigenereMockData) {
            // Encryption
            it('ENCRYPTION: ' + test.desc, () => {
                expect(vigenere.symetric(test.plain, test.key)).toBe(test.encryptedPlain)
            })
        }

        for (let test of vigenereMockData) {
            // Decryption
            it('DECRYPTION: ' + test.desc, () => {
                expect(vigenere.symetric(test.cipher, test.key, false)).toBe(test.decryptedPlain)
            })
        }
    })

})