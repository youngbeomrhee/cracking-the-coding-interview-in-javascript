import { addLists } from '../../src/ch009-002-linked-list/ex205_add_lists'
import { LinkedList } from '../../src/ch009-002-linked-list/util/LinkedList'

describe('리스트의 합', () => {
    const data = [
        [
            [
                [7, 1, 6],
                [5, 9, 2],
            ],
            [2, 1, 9],
        ],
    ]

    describe('addLists', () => {
        test.each(data)('%s -> %s', ([arr1, arr2], expected) => {
            const ll = new LinkedList(arr1)
            const ll2 = new LinkedList(arr2)
            const el = new LinkedList(expected)
            const addedFirst = addLists(ll.first, ll2.first)
            expect(
                LinkedList.areLinkedListsIdentical(addedFirst, el.first, true)
            ).toBe(true)
        })
    })
})
