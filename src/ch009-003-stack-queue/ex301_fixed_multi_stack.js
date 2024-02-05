/**
 * 한 개로 세 개: 배열 한 개로 스택 세 개를 어떻게 구현할지 설명하라
 */
class Stack {
    constructor(startIndex, distance, items) {
        this.topIndex = -1
        this.startIndex = startIndex
        this.distance = distance
        this.items = items
    }
    push(data) {
        if (this.isEmpty()) {
            this.topIndex = this.startIndex
        } else {
            this.topIndex += this.distance
        }
        this.items[this.topIndex] = data
        return data
    }
    pop() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.topIndex]
        this.items[this.topIndex] = null
        this.topIndex -= this.distance
        return item
    }
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.topIndex]
    }
    isEmpty() {
        return this.topIndex < 0
    }
}

export function fixedMultiStack(num) {
    const items = []
    const stacks = []
    for (let index = 0; index < num; index++) {
        stacks.push(new Stack(index, num, items))
    }
    return stacks
}
