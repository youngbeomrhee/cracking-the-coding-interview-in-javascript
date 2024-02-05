import { LinkedListNode } from './LinkedListNode'

export class LinkedListStack {
    constructor() {
        this.top = null
    }
    push(data) {
        const newNode = new LinkedListNode(data)
        if (this.top !== null) {
            newNode.next = this.top
        }
        this.top = newNode
    }
    pop() {
        if (this.isEmpty()) {
            return null
        }
        const data = this.top.data
        this.top = this.top.next
        return data
    }
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.top.data
    }
    isEmpty() {
        return this.top === null
    }
}
