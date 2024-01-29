import { findIntersection } from '../../src/ch009-002-linked-list/ex207_find_intersection'
import { LinkedListNode } from '../../src/ch009-002-linked-list/util/LinkedList'

describe('교집합 찾기', () => {
    test('str', () => {
        const common = new LinkedListNode(
            null,
            8,
            new LinkedListNode(null, 4, new LinkedListNode(null, 5, null))
        )
        const headA = new LinkedListNode(
            null,
            4,
            new LinkedListNode(null, 1, common)
        )
        const headB = new LinkedListNode(
            null,
            5,
            new LinkedListNode(null, 6, new LinkedListNode(null, 1, common))
        )
        expect(findIntersection(headA, headB)).toBe(common)
    })
})
