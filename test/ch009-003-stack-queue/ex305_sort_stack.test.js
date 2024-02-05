import { LinkedListStack } from '../../src/ch009-003-stack-queue/util/LinkedListStack'
import { sortStack } from '../../src/ch009-003-stack-queue/ex305_sort_stack'

describe('스택 정렬', () => {
    test('stack에 push -> 정렬 -> 정렬여부 확인', () => {
        const stack = new LinkedListStack()
        stack.push(3)
        stack.push(1)
        stack.push(4)
        stack.push(2)

        sortStack(stack)
        let prev = null
        while (!stack.isEmpty()) {
            if (prev === null) {
                prev = stack.pop()
            }
            expect(prev <= stack.peek()).toBe(true)
            prev = stack.pop()
        }
    })
})
