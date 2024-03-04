import {
    insertBits,
    insertBits2,
} from '../../src/ch009-005-bit/ex501_insertBits'

describe('insertBits', () => {
    test('test1', () => {
        const M = '10000000000'
        const N = '10011'
        const result = insertBits(parseInt(M, 2), parseInt(N, 2), 2, 6)
        expect(result.toString(2)).toBe('10001001100')
    })
    test('test2', () => {
        const M = '10000000000'
        const N = '10011'
        const result = insertBits2(parseInt(M, 2), parseInt(N, 2), 2, 6)
        expect(result.toString(2)).toBe('10001001100')
    })
})
