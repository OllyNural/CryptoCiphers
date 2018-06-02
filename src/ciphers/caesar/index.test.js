import caesar from './'
import caesarMockData from './caesarMockData'

describe('Testing Caesar', () => {
    describe('Symetric', () => {
        it('should return empty string if input plain text is not a string', () => {
            expect(caesar.symetric(3, 1)).toBe('')
        })

        it('should return input if input rot is not a number', () => {
            expect(caesar.symetric('a', 'a')).toBe('a')
        })

        it('should return given plain text string if no rotation given', () => {
            expect(caesar.symetric('plaintext')).toBe('plaintext')
        })

        it('should return a string given valid inputs', () => {
            expect(typeof caesar.symetric('a', 1)).toBe('string')
        })

        for (let test of caesarMockData) {
            // Encryption
            it('ENCRYPTION: ' + test.desc, () => {
                expect(caesar.symetric(test.plain, test.rot)).toBe(test.encryptedPlain)
            })

            // Decryption
            it("DECRYPTION: " + test.desc, () => {
                expect(caesar.symetric(test.cipher, -test.rot)).toBe(test.decryptedPlain)
            })
        }
    })
})