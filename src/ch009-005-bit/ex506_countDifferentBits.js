/**
 * 변환: 정수 A와 B를 2진수로 표현했을 때, A를 B로 바꾸기 위해 뒤집어야 하는 비트의 개수를 구하는 함수를 작성하라.

예제)
입력: 29 (혹은 11101), 15(혹은 01111) 
출력: 2
*/
export function countDifferentBits(a, b) {
    let xor = a ^ b
    let diffrentCount = 0

    while (xor !== 0) {
        diffrentCount += xor & 1
        xor >>= 1
    }
    return diffrentCount
}
