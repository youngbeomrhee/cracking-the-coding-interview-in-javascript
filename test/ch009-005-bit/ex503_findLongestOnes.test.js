import {
    findLongestOnes,
    findLongestOnes2,
} from '../../src/ch009-005-bit/ex503_findLongestOnes'

describe('findLongestOnes', () => {
    const data = [
        ['11011101111', 8],
        ['0', 1],
        ['110111001111', 6],
        ['10001', 2],
        ['1110111001111', 7],
        ['1010101010101', 3],
        ['1111111', 7],
        ['0000000', 1],
        ['10000000001', 2],
        ['111100111011111', 9],
        ['1011110111011111', 9],
        ['110110110110111', 6],
        ['101010111010101', 5],
        ['111011101110111', 7],
        ['100000000000', 2],
        ['111111011111110111111', 14],
        ['101010101010101010101', 3],
        ['110101110111011101111', 8],
        ['111110111110111111011', 12],
        ['100000000000000000001', 2],
    ]

    describe('test1', () => {
        test.each(data)('%s -> %s', (binaryString, expected) => {
            expect(findLongestOnes(parseInt(binaryString, 2))).toBe(expected)
        })
    })

    describe('test2', () => {
        test.each(data)('%s -> %s', (binaryString, expected) => {
            expect(findLongestOnes2(parseInt(binaryString, 2))).toBe(expected)
        })
    })
})
