import { isRotation } from '../../src/ch009-001-array-n-string/ex109_is_rotation'

describe('s2가 s1을 회전시킨 결과인지 판단', () => {
    const data = [
        [['watermelon', 'ermelonwat'], true],
        [['watermelon', 'ermelonwats'], false],
        [['apple', 'pleap'], true],
        [['apple', 'ppale'], false],
        [['banana', 'nanaba'], true],
        [['banana', 'anaban'], true],
        [['orange', 'georan'], true],
        [['orange', 'rangeo'], true],
        [['kiwi', 'iwik'], true],
        [['kiwi', 'kiww'], false],
        [['strawberry', 'berrystraw'], true],
        [['strawberry', 'strawberyr'], false],
        [['grape', 'apegr'], true],
        [['grape', 'eparg'], false],
        [['cherry', 'rycher'], true],
        [['cherry', 'cherryy'], false],
        [['mango', 'ngoma'], true],
        [['mango', 'mangoo'], false],
        [['pineapple', 'applepine'], true],
        [['pineapple', 'pineappl'], false],
    ]

    describe('isRotation', () => {
        test.each(data)('%s -> %s', ([s1, s2], expected) => {
            // 실제 실행할 함수로 변경
            expect(isRotation(s1, s2)).toBe(expected)
        })
    })
})
