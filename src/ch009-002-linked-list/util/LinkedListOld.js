export class LinkedListNode {
    constructor(prev, item, next) {
        this.prev = prev
        this.item = item
        this.next = next
    }
}

export function arrayToLinkedList(arr) {
    if (arr.length < 1) {
        return new LinkedListNode(null, null, null)
    }

    arr.forEach((ele) => {
        const current = new LinkedListNode(null, ele, null)
        
    })
    return 
}

export class LinkedList {
    constructor() {
        this.size = 0
        this.first = null
        this.last = null
    }

    linkFirst(e) {
        const f = this.first // 첫 번째 node를 임시변수에 할당
        const newNode = new Node(null, e, f) // 첫 번째 node로 사용될 새로운 node
        this.first = newNode // 첫 번째 node를 새로운 node로 할당
        // 첫 번째 노드가 없었다면 마지막 노드도 새로운 노드가 됨
        if (f === null) {
            this.last = newNode
        } else {
            f.prev = newNode
        }
        this.size++
    }

    linkLast(e) {
        const l = this.last // 마지막 node를 임시변수에 할당
        const newNode = new Node(l, e, null) // 마지막 node로 사용될 새로운 node
        this.last = newNode // 마지막 node를 새로운 node로 할당
        if (l === null) {
            // 마지막 노드가 없었다면 첫 번째 노드도 새로운 노드가 됨
            this.first = newNode
        } else {
            l.next = newNode
        }
        this.size++
    }

    addAll(arr) {
        arr.forEach((item) => {
            this.linkLast(item)
        })
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw RangeError('index가 데이터의 범위를 초과했습니다.')
        }
        return this.node(index)
    }

    node(index) {
        if (index < this.size >> 1) {
            // index가 size의 절반보다 작으면 앞에서부터 조회
            let x = this.first
            for (let i = 0; i < index; i++) {
                x = x.next
            }
            return x
        } else {
            let x = this.last
            for (let i = this.size - 1; i > index; i--) {
                x = x.prev
            }
            return x
        }
    }
}

export 
