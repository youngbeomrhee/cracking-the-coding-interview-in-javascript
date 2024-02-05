import { LinkedListStack } from './util/LinkedListStack'

/**
 * 스택 Min 기본적인 push와 pop 기능이 구현된 스택에서 최솟값을 반환하는 min 함수를 추가하려고 한다.
 * 어떻게 설계할 수 있겠는가? push, pop, min 연산은 모두 O(1) 시간에 동작해야 한다.
 */
export class StackWithMin extends LinkedListStack {
    constructor() {
        super()
        this.minStack = new LinkedListStack()
    }
    push(data) {
        if (super.isEmpty() || data <= this.min()) {
            this.minStack.push(data)
        }
        super.push(data)
    }
    pop() {
        const value = super.pop()
        if (value === this.min()) {
            this.minStack.pop()
        }
        return value
    }
    min() {
        if (super.isEmpty()) {
            return null
        }
        if (this.minStack.isEmpty()) {
            return Number.MAX_VALUE
        } else {
            return this.minStack.peek()
        }
    }
}
