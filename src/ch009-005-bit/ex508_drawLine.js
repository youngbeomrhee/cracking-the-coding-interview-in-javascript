/**
 * 선 그리기: 흑백 모니터 화면은 하나의 바이트 배열에 저장되는데, 인접한 픽셀 여덟 개를 한 바이트에 묶어서 저장한다.
 * 화면의 폭은 w이며，w는 8로 나누어 떨어진다(따라서 어떤 바이트도 두 행에 걸치지 않는다).
 * 물론, 화면 높이는 배열 길이와 화변 폭을 통해 유도해 낼 수 있다.
 * 이때 (x1, y)에서 (x2, y)까지 수평선을 그려주는 함수를 작성하라.
 * 메서드 용법 (method signature)은 다음과 같다.
 *
 * drawLine(byte[] screen , int width, int x1, int x2, int y)
 */
export function drawLine(screen, width, x1, x2, y) {
    const startOffset = x1 % 8
    let firstFullByte = x1 / 8
    if (startOffset !== 0) {
        firstFullByte++
    }

    const endOffset = x2 % 8
    let lastFullByte = x2 / 8
    if (endOffset !== 7) {
        lastFullByte--
    }

    // Set full bytes
    for (let b = firstFullByte; b <= lastFullByte; b++) {
        screen[(width / 8) * y + b] = 0xff
    }

    // Create masks for start and end of line
    const startMask = 0xff >> startOffset
    const endMask = ~(0xff >> (endOffset + 1))

    // Set start and end of line
    if (x1 / 8 === x2 / 8) {
        // x1 and x2 are in the same byte
        const mask = startMask & endMask
        screen[(width / 8) * y + x1 / 8] |= mask
    } else {
        if (startOffset !== 0) {
            const byteNumber = (width / 8) * y + firstFullByte - 1
            screen[byteNumber] |= startMask
        }
        if (endOffset !== 7) {
            const byteNumber = (width / 8) * y + lastFullByte + 1
            screen[byteNumber] |= endMask
        }
    }
}
