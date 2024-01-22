import { compressString } from '../../src/ch009-001-array-n-string/ex106_compress_string'

describe('설명', () => {
    const data = [
        ['aabcccccaaa', 'a2b1c5a3'],
        ['abc', 'abc'],
        ['aaabbbccc', 'a3b3c3'],
        ['aabbcc', 'aabbcc'],
        ['aaaaabbbbcccdde', 'a5b4c3d2e1'],
        ['abcd', 'abcd'],
        ['a', 'a'],
        ['', ''],
        ['aaaaaaaaaa', 'a10'],
        ['aabbaabb', 'aabbaabb'],
        ['ccccccccc', 'c9'],
        ['aabcccccccc', 'a2b1c8'],
        ['xyz', 'xyz'],
        ['xxyyzz', 'xxyyzz'],
        ['ppppppqqqqqq', 'p6q6'],
        ['abcdeeffgg', 'abcdeeffgg'],
        ['aabbccddeeffgg', 'aabbccddeeffgg'],
        ['zzzzyyyyxxxx', 'z4y4x4'],
        ['qqqqqqqqqrrrrrrrrr', 'q9r9'],
        ['ssssssssssssssssssss', 's20'],
    ]

    describe('test1', () => {
        test.each(data)('%s -> %s', (input, expected) => {
            // 실제 실행할 함수로 변경
            expect(compressString(input)).toBe(expected)
        })
    })
})
