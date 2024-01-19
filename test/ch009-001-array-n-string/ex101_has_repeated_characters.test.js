import {
    hasRepeatedCharacters,
    hasRepeatedCharactersUsingHash,
    hasRepeatedCharactersWithoutAdditionalDataStructure,
    hasRepeatedCharactersUsingSort,
    hasRepeatedCharactersUsingSimple,
    hasRepeatedCharactersUsingBitMask,
} from '../../src/ch009-001-array-n-string/ex101_has_repeated_characters.js'

describe('문자열이 주어졌을 때, 이 문자열에 같은 문자가 중복되어 등장하는지 확인', () => {
    const data = [
        ['abcde', false],
        ['abcda', true],
        ['가나다라', false],
        ['가나다가', true],
    ]

    describe('추가적인 자료구조를 사용한 경우', () => {
        test.each(data)('%s -> %s', (str, expected) => {
            expect(hasRepeatedCharacters(str)).toBe(expected)
        })
    })

    describe('hash를 사용한 경우', () => {
        test.each(data)('%s -> %s', (str, expected) => {
            expect(hasRepeatedCharactersUsingHash(str)).toBe(expected)
        })
    })

    describe('추가적인 자료구조를 사용하지 않는 경우', () => {
        test.each(data)('%s -> %s', (str, expected) => {
            expect(
                hasRepeatedCharactersWithoutAdditionalDataStructure(str)
            ).toBe(expected)
        })
    })

    describe('추가적인 자료구조를 사용하지 않는 경우, 간소화 된 코드', () => {
        test.each(data)('%s -> %s', (str, expected) => {
            expect(hasRepeatedCharactersUsingSimple(str)).toBe(expected)
        })
    })

    describe('추가적인 자료구조를 사용하지 않는 경우, 시간복잡도를 줄인 방식', () => {
        test.each(data)('%s -> %s', (str, expected) => {
            expect(hasRepeatedCharactersUsingSort(str)).toBe(expected)
        })
    })

    describe('bitMask를 활용한 방식', () => {
        test.each(data)('%s -> %s', (str, expected) => {
            expect(hasRepeatedCharactersUsingBitMask(str)).toBe(expected)
        })
    })
})
