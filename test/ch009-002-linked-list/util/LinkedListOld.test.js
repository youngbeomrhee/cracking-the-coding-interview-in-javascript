import { LinkedList } from '../../../src/ch009-002-linked-list/util/LinkedList'

describe('단방향 연결리스트', () => {
    let ll
    beforeEach(() => {
        ll = new LinkedList()
    })
    test('linkFirst', () => {
        ll.linkFirst(1)
        ll.linkFirst(2)
        ll.linkFirst(3)

        expect(ll.first.item).toBe(3)
        expect(ll.last.item).toBe(1)
        expect(ll.size).toBe(3)
    })
    test('linkLast', () => {
        ll.linkLast(1)
        ll.linkLast(2)
        ll.linkLast(3)

        expect(ll.first.item).toBe(1)
        expect(ll.last.item).toBe(3)
        expect(ll.size).toBe(3)
    })
    test('addAll', () => {
        ll.addAll([1, 2, 3])

        expect(ll.first.item).toBe(1)
        expect(ll.last.item).toBe(3)
        expect(ll.size).toBe(3)
    })
    test('get', () => {
        ll.addAll([1, 2, 3])

        expect(() => {
            ll.get(-1).item
        }).toThrow()
        expect(() => {
            ll.get(4).item
        }).toThrow()
        expect(ll.get(0).item).toBe(1)
        expect(ll.get(1).item).toBe(2)
        expect(ll.get(2).item).toBe(3)
    })
})
