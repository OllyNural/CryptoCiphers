const vigenereMockData = [
    {
        desc: 'Should encrypt and decrypt "aaaaa" with key "aaaaa" correctly',
        key: 'aaaaa',
        plain: 'aaaaa',
        encryptedPlain: 'aaaaa',
        cipher: 'aaaaa',
        decryptedPlain: 'aaaaa'
    },
    {
        desc: 'Should encrypt and decrypt "aaaaaaa" with key "aba" correctly',
        key: 'abz',
        plain: 'aaaaaaa',
        encryptedPlain: 'abzabza',
        cipher: 'abzabza',
        decryptedPlain: 'aaaaaaa'
    },
    {
        desc: 'Should encrypt and decrypt "abcdefg" with key "azbx" correctly',
        key: 'azbx',
        plain: 'abcdefgh',
        encryptedPlain: 'aadaeehe',
        cipher: 'aadaeehe',
        decryptedPlain: 'abcdefgh'
    },
    {
        desc: 'Should encrypt and decrypt The quick brown fox sentence with rot 23 correctly',
        key: 'Thisisakey',
        plain: 'This is a sentence. It will be encrypted using the vigenere cipher!',
        encryptedPlain: 'moqkqkacilmlvumatgmjeimwvuritrxkckqfgdlcopowvwroggiomj',
        cipher: 'moqkqkacilmlvum.atgmjeimwvuritrxkckqfgdlcopowvwroggiomj!',
        decryptedPlain: 'thisisasentenceitwillbeencryptedusingthevigenerecipher'
    },
]

module.exports = vigenereMockData