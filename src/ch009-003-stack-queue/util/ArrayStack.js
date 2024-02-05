export class ArrayStack {
    constructor() {
        this.clear()
    }
    push(data) {
        return this.items.push(data)
    }
    pop() {
        if (this.isEmpty()) {
            return null
        }
        return this.items.pop()
    }
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length < 1
    }
    clear() {
        this.items = []
    }
}
