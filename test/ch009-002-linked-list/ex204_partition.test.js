import {
    partition,
    partition2,
} from '../../src/ch009-002-linked-list/ex204_partition'
import { LinkedList } from '../../src/ch009-002-linked-list/util/LinkedList'

describe('분할', () => {
    const data = [
        [
            [[5, 3, 8], 5],
            [3, 5, 8],
        ],
        [
            [[5, 3, 8, 5, 10, 2, 1], 5],
            [1, 2, 3, 5, 8, 5, 10],
        ],
    ]

    describe('partition', () => {
        test.each(data)('%s -> %s', ([arr, x], expected) => {
            const ll = new LinkedList(arr)
            const ll2 = new LinkedList(expected)
            const first = partition(ll.first, x)
            expect(
                LinkedList.areLinkedListsIdentical(first, ll2.first, true)
            ).toBe(true)
        })
    })

    describe('partition2', () => {
        test.each(data)('%s -> %s', ([arr, x], expected) => {
            const ll = new LinkedList(arr)
            const ll2 = new LinkedList(expected)
            const first = partition2(ll.first, x)
            expect(
                LinkedList.areLinkedListsIdentical(first, ll2.first, true)
            ).toBe(true)
        })
    })
})
