import { MyQueue } from '../../src/ch009-003-stack-queue/ex304_my_queue'
import { runQueueTest } from './util/Queue.test'

describe('스택 2개로 하나의 큐', () => {
    test('전체 프로세스 test', () => {
        const q = new MyQueue()
        runQueueTest(q)
    })
})
