import {
    isPrimeNumber,
    isPrimeNumberBad,
    isPrimeNumberBetter,
    sieveOfEratosthenes,
} from '../../../src/ch009-006-math-n-logical-puzzle/util/math'

describe('소수인지 판별', () => {
    const data = [
        ['', false],
        [-100, false],
        [-1, false],
        [0, false],
        [1, false],
        [2, true],
        [3, true],
        [4, false],
        [5, true],
        [6, false],
        [7, true],
        [8, false],
        [9, false],
        [10, false],
        [11, true],
        [12, false],
        [13, true],
        [14, false],
        [15, false],
        [16, false],
        [17, true],
        [18, false],
        [19, true],
        [20, false],
        [21, false],
        [22, false],
        [23, true],
        [24, false],
        [25, false],
        [26, false],
        [27, false],
        [28, false],
        [29, true],
        [30, false],
        [31, true],
        [97, true],
        [113, true],
        [111, false],
        [109, true],
        [100, false],
        [107, true],
        [103, true],
        [101, true],
    ]

    describe('isPrimeNumberPoor', () => {
        test.each(data)('%s -> %s', (num, expected) => {
            expect(isPrimeNumberBad(num)).toBe(expected)
        })
    })

    describe('isPrimeNumber', () => {
        test.each(data)('%s -> %s', (num, expected) => {
            expect(isPrimeNumber(num)).toBe(expected)
        })
    })

    describe('sieveOfEratosthenes', () => {
        test('primeNumberList', () => {
            const primeNumberList = sieveOfEratosthenes(100)
        })
    })

    describe('isPrimeNumberBetter', () => {
        test.each(data)('%s -> %s', (num, expected) => {
            expect(isPrimeNumberBetter(num)).toBe(expected)
        })
    })
})
