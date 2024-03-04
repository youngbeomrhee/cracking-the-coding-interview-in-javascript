/**
 * 비트뒤집기: 어떤 정수가 주어졌을 때 여러분은 이 정수의 비트 하나를 0에서 1로 바꿀 수 있다.
 * 이때 1이 연속으로 나올 수 있는 가장 긴 길이를 구하는 코드를 작성하라.
 *
 * 입력: 1775 (혹은 11011101111)
 * 출력: 8
 */
// 2진법으로 변환 후 0으로 split
export function findLongestOnes(num) {
    // 모두 1인 비트로 이루어진 수라면 해당 값과 1을 더한 값과 &연산을 하면 0
    if ((num & (num + 1)) === 0) return num.toString(2).length

    const binaryString = num.toString(2)
    const ones = binaryString.split('0')
    const max = ones.reduce((max, ele, index, original) => {
        debugger
        const sum = ele.length + (original[index + 1]?.length ?? 0)
        return Math.max(sum, max)
    }, 0)
    return max + 1
}

// 제일 우측 bit부터 오른쪽으로 shift 시키면서 1이 연속되거나 0이 한 번만 나오는 경우를 counting
export function findLongestOnes2(num) {
    // 모두 1인 비트로 이루어진 수라면 해당 값과 1을 더한 값과 &연산을 하면 0
    if ((num & (num + 1)) === 0) return num.toString(2).length

    let currentLength = 0
    let previousLength = 0
    let maxLength = 1 // 최소 한 비트를 0에서 1로 변경할 수 있으므로 최소 길이는 1
    while (num !== 0) {
        if ((num & 1) === 1) {
            // 현재 비트가 1인 경우
            currentLength++
        } else if ((num & 1) === 0) {
            // 현재 비트가 0인 경우
            // 다음 비트도 0인지 확인하여 previousLength를 결정
            previousLength = (num & 2) === 0 ? 0 : currentLength
            currentLength = 0
        }
        maxLength = Math.max(maxLength, previousLength + currentLength + 1)
        num >>>= 1 // 오른쪽으로 비트 이동
    }
    return maxLength
}
