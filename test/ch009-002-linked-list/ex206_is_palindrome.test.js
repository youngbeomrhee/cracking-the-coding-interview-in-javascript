import { isPalindrome } from '../../src/ch009-002-linked-list/ex206_is_palindrome'
import { LinkedList } from '../../src/ch009-002-linked-list/util/LinkedList'

describe('회문', () => {
    const data = [
        [[0, 1, 2, 1, 0], true],
        [[0, 1, 1, 0], true],
        [[0, 1, 2, 0], false],
        [[1, 2, 3, 2, 1], true],
        [[1, 2, 2, 1], true],
        [[1, 2, 3, 4, 5], false],
        [[7, 7, 7, 7, 7], true],
        [[1, 2, 3, 4, 3, 2, 1], true],
        [[1, 2, 3, 4, 4, 3, 2], false],
        [[9, 8, 7, 8, 9], true],
        [[1], true],
        [[1, 2], false],
        [[2, 2], true],
        [[1, 0, 0, 1], true],
        [[1, 2, 3, 4, 5, 6], false],
        [[6, 5, 4, 5, 6], true],
        [[1, 2, 1, 2, 1], true],
        [[1, 2, 3, 4, 2, 1], false],
        [[1, 1, 1, 1, 1, 1, 1], true],
        [[1, 2, 3, 2, 3, 1], false],
    ]

    describe('isPalindrome', () => {
        test.each(data)('%s -> %s', (arr, expected) => {
            const ll = new LinkedList(arr)
            expect(isPalindrome(ll.first)).toBe(expected)
        })
    })
})
