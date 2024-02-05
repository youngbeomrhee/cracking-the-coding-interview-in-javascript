import { LinkedListStack } from './util/LinkedListStack'

/**
 * 스택으로 큐: 스택 두 개로 큐 하나를 구현한 MyQueue 클래스를 구현하라
 */
export class MyQueue {
    constructor() {
        this.inputStack = new LinkedListStack()
        this.outputStack = new LinkedListStack()
    }
    add(data) {
        return this.inputStack.push(data)
    }
    remove() {
        this.inAndOut()
        return this.outputStack.pop()
    }
    peek() {
        this.inAndOut()
        return this.outputStack.peek()
    }
    inAndOut() {
        if (this.outputStack.isEmpty()) {
            while (!this.inputStack.isEmpty()) {
                this.outputStack.push(this.inputStack.pop())
            }
        }
    }
    isEmpty() {
        return this.inputStack.isEmpty() && this.outputStack.isEmpty()
    }
}
