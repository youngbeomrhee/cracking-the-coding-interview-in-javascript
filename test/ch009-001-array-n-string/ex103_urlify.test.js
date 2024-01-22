import {
    urlify,
    urlify2,
} from '../../src/ch009-001-array-n-string/ex103_urlify'

describe('문자열에 들어 있는 모든 공백을 %20으로 바꾸는 메서드', () => {
    const data = [
        ['Mr John Smith', 'Mr%20John%20Smith'],
        ['abc d', 'abc%20d'],
        ['hello world', 'hello%20world'],
        ['  space', '%20%20space'],
        ['end ', 'end%20'],
        ['a b c', 'a%20b%20c'],
        ['Java Script', 'Java%20Script'],
        ['Open AI', 'Open%20AI'],
        ['GPT 3', 'GPT%203'],
        ['x y z', 'x%20y%20z'],
    ]

    describe('urlify', () => {
        test.each(data)('%s -> %s', (input, expected) => {
            // 실제 실행할 함수로 변경
            expect(urlify(input)).toBe(expected)
        })
    })

    describe('urlify2', () => {
        test.each(data)('%s -> %s', (input, expected) => {
            // 실제 실행할 함수로 변경
            expect(urlify2(input)).toBe(expected)
        })
    })
})
