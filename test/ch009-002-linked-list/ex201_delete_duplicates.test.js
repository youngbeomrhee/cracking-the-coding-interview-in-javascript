import {
    deleteDuplicates,
    deleteDuplicates2,
} from '../../src/ch009-002-linked-list/ex201_delete_duplicates'
import { LinkedList } from '../../src/ch009-002-linked-list/util/LinkedList'

describe('설명', () => {
    const data = [
        [
            [1, 5, 3, 2, 3, 5],
            [1, 5, 3, 2],
        ],
        [[4, 4, 4, 4], [4]],
        [
            [2, 3, 5, 3, 2],
            [2, 3, 5],
        ],
        [
            [7, 8, 7, 6, 9],
            [7, 8, 6, 9],
        ],
        [
            [2, 2, 1, 1],
            [2, 1],
        ],
        [
            [5, 4, 3, 5, 3],
            [5, 4, 3],
        ],
        [
            [8, 7, 6, 7, 6, 8],
            [8, 7, 6],
        ],
        [
            [3, 3, 3, 2, 1],
            [3, 2, 1],
        ],
        [
            [9, 8, 7, 9, 8],
            [9, 8, 7],
        ],
        [
            [1, 2, 2, 3, 4],
            [1, 2, 3, 4],
        ],
        [
            [6, 5, 6, 4, 5],
            [6, 5, 4],
        ],
        [
            [2, 3, 4, 3, 2],
            [2, 3, 4],
        ],
        [
            [7, 6, 5, 6, 7],
            [7, 6, 5],
        ],
        [
            [9, 8, 9, 8, 7],
            [9, 8, 7],
        ],
        [
            [1, 1, 2, 2, 3],
            [1, 2, 3],
        ],
        [
            [4, 5, 5, 6, 6],
            [4, 5, 6],
        ],
        [
            [8, 9, 8, 7, 9],
            [8, 9, 7],
        ],
        [
            [3, 2, 1, 1, 2],
            [3, 2, 1],
        ],
        [
            [6, 6, 6, 5, 5],
            [6, 5],
        ],
        [
            [10, 9, 8, 7, 10],
            [10, 9, 8, 7],
        ],
    ]

    describe('deleteDuplicates', () => {
        test.each(data)('%s -> %s', (arr, expected) => {
            const ll = new LinkedList(arr)
            const ll2 = new LinkedList(expected)

            deleteDuplicates(ll.first)

            expect(
                LinkedList.areLinkedListsIdentical(ll.first, ll2.first)
            ).toBe(true)
        })
    })

    describe('deleteDuplicates2', () => {
        test.each(data)('%s -> %s', (arr, expected) => {
            const ll = new LinkedList(arr)
            const ll2 = new LinkedList(expected)

            deleteDuplicates2(ll.first)

            expect(
                LinkedList.areLinkedListsIdentical(ll.first, ll2.first)
            ).toBe(true)
        })
    })
})
