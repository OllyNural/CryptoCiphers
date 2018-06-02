import { getOffset, absoluteValue, mapKeyToNum, mapCodeToRot, checkTypes } from './utils'

describe('getOffset', () => {

    // Empty String
    test('Should return false if passed nothing', () => {
        expect(getOffset()).toBe(null)
    })

    // Invalid input type - string
    test('Should return false if passed type number', () => {
        expect(getOffset('')).toBe(null)
    })

    // Invalid number - too small
    test('Should return true if passed too large invalid numnber', () => {
        expect(getOffset(61)).toBe(null)
    })

    // Invalid number - too lareg
    test('Should return true if passed too large invalid numnber', () => {
        expect(getOffset(152)).toBe(null)
    })

    // Invalid number - between lowercase and uppercase
    test('Should return true if passed valid number', () => {
        expect(getOffset(93)).toBe(null)        
    })

    // Valid number - uppercase
    test('Should return true if passed valid uppercase number', () => {
        expect(getOffset(73)).toBe(65)        
    })

    // Valid number - lowercase
    test('Should return true if passed valid lowercase number', () => {
        expect(getOffset(112)).toBe(97)        
    })
})

describe('absoluteValue', () => {

    // Empty String
    test('Should return 0 if passed nothing', () => {
        expect(absoluteValue()).toBe(0)
    })

    // Invalid input type - string
    test('Should return 0 if passed type number', () => {
        expect(absoluteValue('')).toBe(0)
    })

    // Negative small number
    test('Should return 11 if passed -15', () => {
        expect(absoluteValue(-15)).toBe(11)
    })

    // Negative large number
    test('Should return 23 if passed -4232407897', () => {
        expect(absoluteValue(-4232407897)).toBe(23)
    })

    // Positive small number
    test('Should return 14 if passed 534', () => {
        expect(absoluteValue(534)).toBe(14)
    })

    // Positive large number
    test('Should return 10 if passed 83572349234', () => {
        expect(absoluteValue(83572349234)).toBe(10)
    })
    
})

describe('mapKeyToNum', () => {

    // empty string
    test('should return array of empty string if passed in empty string', () => {
        expect(mapKeyToNum('')).toEqual([])
    })
    // array of empty strings
    test('should return array of empty string if passed in array of empty string', () => {
        expect(mapKeyToNum([''])).toEqual([0])
    })

    // numbers
    test('should return null when passed in array of numbers', () => {
        expect(mapKeyToNum([5, 20, 13])).toEqual([0,0,0])
    })

    // small valid string
    test('should return array of valid charCodes when passed in a small valid string', () => {
        expect(mapKeyToNum('hello world, this is a small string')).toEqual([104,101,108,108,111,32,119,111,114,108,100,44,32,116,104,105,115,32,105,115,32,97,32,115,109,97,108,108,32,115,116,114,105,110,103])
    })


    // large valid string
    test('Should return array of valid charCodes when passed in a large valid string', () => {
        expect(mapKeyToNum('This is a much longer sentence, with some extra punctuation! It is fantastic - although slightly monotonous.')).toEqual([84,104,105,115,32,105,115,32,97,32,109,117,99,104,32,108,111,110,103,101,114,32,115,101,110,116,101,110,99,101,44,32,119,105,116,104,32,115,111,109,101,32,101,120,116,114,97,32,112,117,110,99,116,117,97,116,105,111,110,33,32,73,116,32,105,115,32,102,97,110,116,97,115,116,105,99,32,45,32,97,108,116,104,111,117,103,104,32,115,108,105,103,104,116,108,121,32,109,111,110,111,116,111,110,111,117,115,46])
    })
}) 

describe('mapCodeToRot', () => {

    // array of empty strings
    test('should return array of empty string if passed in array of empty string', () => {
        expect(mapCodeToRot([''])).toEqual([0])
    })

    // numbers
    test('should return null when passed in array of numbers', () => {
        expect(mapCodeToRot([5, 20, 13])).toEqual([0, 0, 0])
    })

    // small valid string
    test('should return array of valid charCodes when passed in a small valid string', () => {
        expect(mapCodeToRot([52, 65, 97])).toEqual([0, 0, 0])        
    })

    // large valid string
    test('Should return array of valid charCodes when passed in a large valid string', () => {
        expect(mapCodeToRot([90, 122, 11])).toEqual([25, 25, 0])        
    })
})

describe('checkTypes', () => {
    const checkInvalidCipherType = () => checkTypes(5, '5')
    const checkInvalidKeyType = () => checkTypes('5', 5)
    
    test('Should throw error if cipher is not of type string', () => {
        expect(checkInvalidCipherType).toThrow()
    })

    test('Should throw error if key is not of type string', () => {
        expect(checkInvalidKeyType).toThrow()
    })

    test('Should not throw an error if cipher is of type string', () => {
        expect(checkTypes('5', '5')).toBe(null)
    })
})