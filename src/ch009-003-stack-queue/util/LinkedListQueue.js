import { LinkedListNode } from './LinkedListNode'

export class LinkedListQueue {
    constructor() {
        this.clear()
        this.length = 0
    }
    add(data) {
        const newNode = new LinkedListNode(data)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    remove() {
        if (this.isEmpty()) {
            return null
        }
        const data = this.head.data
        this.head = this.head.next
        if (this.length > 0) {
            this.length--
        }
        return data
    }
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.head.data
    }
    isEmpty() {
        return this.length === 0
    }
    clear() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    size() {
        return this.length
    }
}
