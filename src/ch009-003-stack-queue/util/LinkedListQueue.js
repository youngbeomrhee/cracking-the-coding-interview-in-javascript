import { LinkedListNode } from './LinkedListNode'

export class LinkedListQueue {
    constructor() {
        this.clear()
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
    }
    remove() {
        if (this.isEmpty()) {
            return null
        }
        const data = this.head.data
        this.head = this.head.next
        return data
    }
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.head.data
    }
    isEmpty() {
        return this.head === null
    }
    clear() {
        this.head = null
        this.tail = null
    }
}
