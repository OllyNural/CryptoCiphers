const caesarMockData = [
    {
        desc: 'Should encrypt and decrypt Hello World! with rot 1 correctly',
        rot: 1,
        plain: 'Hello World!',
        encryptedPlain: 'ifmmpxpsme',
        cipher: 'Ifmmp Xpsme!',
        decryptedPlain: 'helloworld'
    },
    {
        desc: 'Should encrypt and decrypt The quick brown fox sentence with rot 23 correctly',
        rot: 23,
        plain: 'The quick brown fox jumps over the lazy dog.',
        encryptedPlain: 'qebnrfzhyoltkclugrjmplsboqebixwvald',
        cipher: 'Qeb nrfzh yoltk clu grjmp lsbo qeb ixwv ald.',
        decryptedPlain: 'thequickbrownfoxjumpsoverthelazydog'
    },
    {
        desc: 'Should encrypt and decrypt The quick brown fox sentence with rot 27 correctly',
        rot: 27,
        plain: 'The quick brown fox jumps over the lazy dog.',
        encryptedPlain: 'uifrvjdlcspxogpykvnqtpwfsuifmbazeph',
        cipher: 'Uif rvjdl cspxo gpy kvnqt pwfs uif mbaz eph.',
        decryptedPlain: 'thequickbrownfoxjumpsoverthelazydog'
    },
    {
        desc: 'Should encrypt and decrypt The quick brown fox sentence with punctuation with rot 23 correctly',
        rot: 23,
        plain: 'The !quick brown. fox jumps over the lazy dog.',
        encryptedPlain: 'qebnrfzhyoltkclugrjmplsboqebixwvald',
        cipher: 'Qeb !nrfzh yoltk. clu grjmp lsbo qeb ixwv ald.',
        decryptedPlain: 'thequickbrownfoxjumpsoverthelazydog'
    },
    {
        desc: 'Should encrypt and decrypt The quick onyx goblin sentence with rot 18 correctly',
        rot: 18,
        plain: 'The quick onyx goblin jumps over the lazy dwarf?',
        encryptedPlain: 'lzwimaucgfqpygtdafbmehkgnwjlzwdsrqvosjx',
        cipher: 'Lzw imauc gfqp ygtdaf bmehk gnwj lzw dsrq vosjx?',
        decryptedPlain: 'thequickonyxgoblinjumpsoverthelazydwarf',
    },
    {
        desc: 'Should encrypt and decrypt The quick onyx goblin sentence with rot 0 correctly',
        rot: 0,
        plain: 'The quick onyx goblin jumps over the lazy dwarf?',
        encryptedPlain: 'thequickonyxgoblinjumpsoverthelazydwarf',
        cipher: 'The quick onyx goblin jumps over the lazy dwarf?',
        decryptedPlain: 'thequickonyxgoblinjumpsoverthelazydwarf'
    },
    {
        desc: 'Should encrypt and decrypt the punctation only sentence with rot 16 correctly',
        rot: 16,
        plain: '!@&£&^@&£^%@&',
        encryptedPlain: '',
        cipher: '!@&£&^@&£^%@&',
        decryptedPlain: ''
    }
]

module.exports = caesarMockData