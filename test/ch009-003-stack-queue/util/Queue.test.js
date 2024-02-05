import { ArrayQueue } from '../../../src/ch009-003-stack-queue/util/ArrayQueue'
import { LinkedListQueue } from '../../../src/ch009-003-stack-queue/util/LinkedListQueue'

describe('ArrayQueue', () => {
    test('전체 플로우 테스트', () => {
        const q = new ArrayQueue()
        expect(q.peek()).toBe(null)
        q.add(1)
        q.add(2)
        q.add(3)
        expect(q.peek()).toBe(1)
        q.remove()
        expect(q.peek()).toBe(2)
        q.remove()
        expect(q.peek()).toBe(3)
        q.remove()
        expect(q.peek()).toBe(null)
        q.remove()
        expect(q.peek()).toBe(null)
    })
})

describe('LinkedListQueue', () => {
    test('전체 플로우 테스트', () => {
        const q = new LinkedListQueue()
        expect(q.peek()).toBe(null)
        q.add(1)
        q.add(2)
        q.add(3)
        expect(q.peek()).toBe(1)
        q.remove()
        expect(q.peek()).toBe(2)
        q.remove()
        expect(q.peek()).toBe(3)
        q.remove()
        expect(q.peek()).toBe(null)
        q.remove()
        expect(q.peek()).toBe(null)
    })
})
