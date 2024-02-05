import { MyQueue } from '../../src/ch009-003-stack-queue/ex304_my_queue'

describe('스택 2개로 하나의 큐', () => {
    test('전체 프로세스 test', () => {
        const q = new MyQueue()
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
