export class ArrayQueue {
    constructor() {
        this.clear()
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
    clear() {
        this.items = []
    }
}
