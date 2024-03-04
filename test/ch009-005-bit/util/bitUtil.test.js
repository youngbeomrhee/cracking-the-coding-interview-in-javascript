import {
    clearBit,
    clearBitsIthrough0,
    clearBitsMSBthroughI,
    getBit,
    setBit,
    twosComplementForNegative,
    updateBit,
} from '../../../src/ch009-005-bit/util/bitUtil'

describe('bitUtil test', () => {
    test('getBit로 각 bit의 값 가져오기', () => {
        const bitNumberString = '100111'
        const num = parseInt(bitNumberString, 2)
        expect(getBit(num, 0)).toBe(1)
        expect(getBit(num, 1)).toBe(1)
        expect(getBit(num, 2)).toBe(1)
        expect(getBit(num, 3)).toBe(0)
        expect(getBit(num, 4)).toBe(0)
        expect(getBit(num, 5)).toBe(1)
    })

    test('setBit로 i자리 bit를 1로 set', () => {
        const bitNumberString = '100111'
        let num = parseInt(bitNumberString, 2)
        num = setBit(num, 3)
        expect(num.toString(2)).toBe('101111')

        num = setBit(num, 4)
        expect(num.toString(2)).toBe('111111')
    })

    test('clearBit로 i자리 bit를 0으로 clear', () => {
        const bitNumberString = '100111'
        let num = parseInt(bitNumberString, 2)

        num = clearBit(num, 0)
        expect(num.toString(2)).toBe('100110')

        num = clearBit(num, 1)
        expect(num.toString(2)).toBe('100100')

        num = clearBit(num, 2)
        expect(num.toString(2)).toBe('100000')

        num = clearBit(num, 5)
        expect(num.toString(2)).toBe('0')
    })

    test('clearBitsMSBthroughI로 특정 자리수 bit 이상을 모두 0으로 clear', () => {
        const bitNumberString = '100111'
        let num = parseInt(bitNumberString, 2)
        num = clearBitsMSBthroughI(num, 2)
        expect(num.toString(2)).toBe('11')
    })

    test('clearBitsIthrough0로 i자리 bit에서 0번째 비트까지 모두 0으로 clear', () => {
        const bitNumberString = '111111'
        let num = parseInt(bitNumberString, 2)
        num = clearBitsIthrough0(num, 2)
        expect(num.toString(2)).toBe('111000')
    })

    test('updateBit', () => {
        const bitNumberString = '100111'
        let num = parseInt(bitNumberString, 2)
        num = updateBit(num, 0, 0)
        expect(num.toString(2)).toBe('100110')
        num = updateBit(num, 1, 0)
        expect(num.toString(2)).toBe('100100')
        num = updateBit(num, 2, 0)
        expect(num.toString(2)).toBe('100000')
        num = updateBit(num, 3, 1)
        expect(num.toString(2)).toBe('101000')
        num = updateBit(num, 4, 1)
        expect(num.toString(2)).toBe('111000')
        num = updateBit(num, 5, 0)
        expect(num.toString(2)).toBe('11000')
    })

    test('twosComplementForNegative로 음수의 비트가 32 bit 2의 보수인지 확인', () => {
        expect(twosComplementForNegative(-1)).toBe(
            '11111111111111111111111111111111'
        )
    })
})
