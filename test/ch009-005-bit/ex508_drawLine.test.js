import { drawLine } from '../../src/ch009-005-bit/ex508_drawLine'

describe('drawLine', () => {
    test('drawLine test', () => {
        const width = 32 // 화면 폭(비트 단위)
        const height = 1 // 화면 높이(임의로 설정)
        const screen = new Uint8Array((width / 8) * height) // 화면 데이터 배열
        drawLine(screen, width, 8, 23, 0) // (8, 0)에서 (23, 0)까지 수평선 그리기
        console.log(screen)
    })
})
