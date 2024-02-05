export class ArrayQueue {
    constructor() {
        this.items = []
    }
    add(data) {
        return this.items.push(data)
    }
    remove() {
        if (this.isEmpty()) {
            return null
        }
        return this.items.shift()
    }
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[0]
    }
    isEmpty() {
        return this.items.length < 1
    }
}
