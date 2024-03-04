import { twosComplementForNegative, updateBit } from './util/bitUtil'

/**
 * 삽입: 두 개의 32비트 수 N과 M이 주어지고, 비트 위치 i와 j가 주어졌을 때, M을 N에 삽입하는 메서드를 구현하라.
 * M은 N의 j번째 비트에서 시작하여 i번째 비트에서 끝난다. j번째 비트에서 i번째 비트까지는 M을 담기 충분한 공간이 있다고 가정한다.
 * 다시 말해, M = 10011이라면, j와 i사이에 적어도 다섯 비트가 있다고 가정해도 된다는 뜻이다.
 * j = 3이고 i = 2인 경우처럼 M을 삽입할 수 없는 상황은 생기지 않는다고 봐도 된다.
 *
 * 예제)
 * 입력: N = 100 00000000, M = 10011, i = 2, j = 6
 * 출력: N = 100 01001100
 */
// 문자열로 변환해서 처리
export function insertBits(baseNumber, insertNumber, startBit, endBit) {
    const baseNumberBinaryString = baseNumber.toString(2)
    const insertNumberBinaryString = insertNumber.toString(2)

    const baseNumberBinaryStrings = baseNumberBinaryString.split('')
    const replaceStartIndex =
        baseNumberBinaryString.length -
        startBit -
        insertNumberBinaryString.length

    baseNumberBinaryStrings.splice(
        replaceStartIndex,
        insertNumberBinaryString.length,
        insertNumberBinaryString
    )

    return parseInt(baseNumberBinaryStrings.join(''), 2)
}

// startBit, endBit을 0으로 그 외에 나머지 비트가 1인 마스크를 만들고
// insertNumber의 bit를 startBit로 시프트 시킨 값과
export function insertBits2(baseNumber, insertNumber, startBit, endBit) {
    const allOne = ~0 // 모든 bit가 1인 수
    console.log(twosComplementForNegative(allOne))
    const leftMask = allOne << (endBit + 1) // (0 bit부터 시작하므로) endBit + 1만큼 shift 시켜서 우측을 0으로 채운 mask
    console.log(twosComplementForNegative(leftMask))
    const rightMask = (1 << startBit) - 1 // startBit 미만은 1로 채워진 mask
    console.log(twosComplementForNegative(rightMask))
    const mask = leftMask | rightMask // bit or로 합쳐서 startBit 부터 endBit까지를 0, 그 외는 1인 mask 생성
    console.log(twosComplementForNegative(mask))

    baseNumber &= mask // baseNumber의 startBit ~ endBit 0으로
    insertNumber <<= startBit // insertNumber를 startBit만큼 shift
    return baseNumber | insertNumber // insertNumber를 baseNumber에 삽입
}
