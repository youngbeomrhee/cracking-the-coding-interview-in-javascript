// bit값 확인
export function getBit(num, i) {
    return (num & (1 << i)) !== 0 ? 1 : 0
}

// bit값 채워넣기: i자리 bit를 1로 set
export function setBit(num, i) {
    return num | (1 << i)
}

// bit값 삭제하기: i자리 bit를 0으로 clear
export function clearBit(num, i) {
    const mask = ~(1 << i)
    return num & mask
}

// 특정 자리수 bit 이상을 모두 0으로 clear
export function clearBitsMSBthroughI(num, i) {
    const mask = (1 << i) - 1
    return num & mask
}

// i자리 bit에서 0번째 비트까지 모두 0으로 clear
export function clearBitsIthrough0(num, i) {
    const mask = -1 << (i + 1)
    return num & mask
}

// i자리 bit 바꾸기
export function updateBit(num, i, bit) {
    const mask = ~(1 << i)
    return (num & mask) | (bit << i)
}

export function twosComplementForNegative(negativeNumber) {
    // if (negativeNumber >= 0) {
    //     return 'Only negative numbers are allowed.'
    // }

    // 자바스크립트에서 음수에 대한 비트 연산 결과는 이미 2의 보수 형태입니다.
    // toString(2)를 사용하여 이를 이진수 문자열로 변환합니다.
    return (negativeNumber >>> 0).toString(2)
}
