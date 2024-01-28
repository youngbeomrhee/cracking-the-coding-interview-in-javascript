import { LinkedList } from '../../../src/ch009-002-linked-list/util/LinkedList'

describe('LinkedList', () => {
    test('array로 주입한 각각의 원소가 적절한 값을 가진 LinkedListNode로 구성된 LinkedList인지 확인한다', () => {
        const ll = new LinkedList([1, 2, 3])
        const first = ll.first
        expect(first.item).toBe(1)
        expect(first.next.item).toBe(2)
        expect(first.next.next.item).toBe(3)
        expect(first.next.next.next).toBe(null)
        expect(first.next.next.prev.item).toBe(2)
        expect(first.next.next.prev.prev.item).toBe(1)
        expect(first.next.next.prev.prev.prev).toBe(null)
    })

    test('array로 주입한 2개의 LinkedList의 첫 번째 node부터 순회할 때 모든 node의 값은 같다', () => {
        const ll = new LinkedList([1, 2, 3])
        const ll2 = new LinkedList([1, 2, 3])
        const first = ll.first
        const first2 = ll2.first

        expect(first).toStrictEqual(first2)
        expect(first.next).toStrictEqual(first2.next)
        expect(first.next.next).toStrictEqual(first2.next.next)
        expect(first.next.next.next).toStrictEqual(first2.next.next.next)
    })

    test('areLinkedListsIdentical을 통해서 2개의 LinkedList의 첫 번째 node만 있으면 같은지 비교해 볼 수 있다', () => {
        const ll = new LinkedList([1, 2, 3])
        const ll2 = new LinkedList([1, 2, 3])
        const first = ll.first
        const first2 = ll2.first

        expect(LinkedList.areLinkedListsIdentical(first, first2)).toBe(true)

        // prev값이 다른 경우는 false
        first.next.prev = null
        expect(LinkedList.areLinkedListsIdentical(first, first2)).toBe(false)
    })

    test('특정 index의 node를 가져온다', () => {
        const ll = new LinkedList([1, 2, 3, 4, 5])

        expect(ll.node(0).item).toBe(1)
        expect(ll.node(1).item).toBe(2)
        expect(ll.node(2).item).toBe(3)
        expect(ll.node(3).item).toBe(4)
        expect(ll.node(4).item).toBe(5)
    })
})
