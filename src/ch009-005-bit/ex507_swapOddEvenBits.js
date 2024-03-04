/**
 * 쌍끼리 맞바꾸기: 명령어를 가능한 한 적게 사용해서 주어진 정수의 짝수 번째 비트의 값과 홀수 번째 비트의 값을 바꾸는 프로그램을 작성하라
 * (예: 0번째 비트와 1번째 비트를 바꾸고, 2번째 비트와 3번째 비트를 바꾸는 식으로)
 *
 * 10110 -> 101001
 */
export function swapOddEvenBits(n) {
    // 32 bit mask
    let evenBits = n & 0xaaaaaaaa // 1010(2) -> a(16)
    let oddBits = n & 0x55555555 // 0101(2) -> 5(16)

    evenBits >>>= 1
    oddBits <<= 1

    return evenBits | oddBits
}
