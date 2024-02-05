import { LinkedListNode } from './LinkedListNode'

export class LinkedListQueue {
    constructor() {
        this.head = null
        this.tail = null
    }
    add(data) {
        const newNode = new LinkedListNode(data)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }
    remove() {
        if (this.head === null) {
            return null
        }
        const data = this.head.data
        this.head = this.head.next
        return data
    }
    peek() {
        if (this.head === null) {
            return null
        }
        return this.head.data
    }
}
