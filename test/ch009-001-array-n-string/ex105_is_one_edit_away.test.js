import { isOneEditAway } from '../../src/ch009-001-array-n-string/ex105_is_one_edit_away'

describe('문자열을 같게 만들기 위한 편집 횟수가 1회 이내인지 확인', () => {
    const data = [
        [['pale', 'ple'], true],
        [['pales', 'pale'], true],
        [['pale', 'bale'], true],
        [['pale', 'bake'], false],
        [['cat', 'cats'], true],
        [['button', 'buton'], true],
        [['butter', 'bitter'], true],
        [['coat', 'oat'], true],
        [['flame', 'flames'], true],
        [['drive', 'dive'], true],
        [['plane', 'planes'], true],
        [['cat', 'dog'], false],
        [['button', 'baton'], false],
        [['butter', 'beater'], false],
        [['coat', 'boats'], false],
        [['flame', 'blames'], false],
        [['drive', 'alive'], false],
        [['plane', 'planets'], false],
        [['house', 'mouses'], false],
        [['glass', 'gross'], false],
    ]

    describe('isOneEditAway', () => {
        test.each(data)('%s -> %s', ([str1, str2], expected) => {
            // 실제 실행할 함수로 변경
            expect(isOneEditAway(str1, str2)).toBe(expected)
        })
    })
})
