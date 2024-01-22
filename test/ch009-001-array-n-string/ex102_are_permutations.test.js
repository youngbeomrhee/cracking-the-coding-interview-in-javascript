import {
    isPermutation,
    isPermutationUsingHash,
} from '../../src/ch009-001-array-n-string/ex102_are_permutations'

describe('문자열 두 개가 주어졌을 때 이 둘이 서로 순열 관계에 있는지 확인', () => {
    const data = [
        [['abac', 'acba'], true],
        [['abc', 'cba'], true],
        [['listen', 'silent'], true],
        [['triangle', 'integral'], true],
        [['night', 'thing'], true],
        [['brag', 'grab'], true],
        [['cinema', 'iceman'], true],
        [['earth', 'heart'], true],
        [['dusty', 'study'], true],
        [['evil', 'vile'], true],
        [['rail', 'liar'], true],
        [['abc', 'cbx'], false],
        [['hello', 'world'], false],
        [['test', 'ttew'], false],
        [['javascript', 'scriptjava'], true],
        [['algorithm', 'logarithm'], true],
        [['python', 'typhon'], true],
        [['permutation', 'reputation'], false],
        [['function', 'funaction'], false],
        [['developer', 'developre'], true],
        [['binary', 'brainy'], true],
    ]

    describe('isPermutation', () => {
        test.each(data)('%s -> %s', (inputs, expected) => {
            // 실제 실행할 함수로 변경
            expect(isPermutation(...inputs)).toBe(expected)
        })
    })

    describe('test2', () => {
        test.each(data)('%s -> %s', (inputs, expected) => {
            // 실제 실행할 함수로 변경
            expect(isPermutationUsingHash(...inputs)).toBe(expected)
        })
    })
})
