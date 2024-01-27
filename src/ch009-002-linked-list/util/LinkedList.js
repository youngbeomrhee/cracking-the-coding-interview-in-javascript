export class LinkedListNode {
    constructor(prev, item, next) {
        this.prev = prev
        this.item = item
        this.next = next
    }
}

export class LinkedList {
    constructor(arr) {
        this.first = null
        this.last = null
        this.fromArray(arr)
    }

    fromArray(arr) {
        arr.forEach((item, index) => {
            const newNode = new LinkedListNode(null, item, null)
            if (index === 0) {
                this.first = newNode
            } else {
                newNode.prev = this.last
                this.last.next = newNode
            }
            this.last = newNode
        })
    }

    static areLinkedListsIdentical(firstNode1, firstNode2) {
        // 둘 중 하나라도 첫 번째 node가 아니라면 false
        if (firstNode1.prev !== null || firstNode2.prev !== null) {
            return false
        }
        let current1 = firstNode1
        let current2 = firstNode2

        while (current1 !== null && current2 !== null) {
            if (
                current1.prev?.item !== current2.prev?.item ||
                current1.item !== current2.item
            ) {
                return false
            }
            current1 = current1.next
            current2 = current2.next
        }

        // 마지막 값이 같은지 확인
        return current1 === null && current2 === null
    }
}
