import { LinkedListQueue } from '../../ch009-003-stack-queue/util/LinkedListQueue'

export class GraphNode {
    constructor(name) {
        this.name = name
        this.adjacent = null
        this.visited = false
    }
}

export class Graph {
    constructor() {
        this.nodes = null
    }
}

export function depthFirstSearch(root, visit = console.log) {
    if (root === null) {
        return
    }
    visit(root)
    root.visited = true
    root.adjacent?.forEach((node) => {
        if (node.visited === false) {
            depthFirstSearch(node, visit)
        }
    })
}

export function breadthFirstSearch(root, visit = console.log) {
    const queue = new LinkedListQueue()
    root.visited = true
    queue.add(root)
    while (!queue.isEmpty()) {
        const r = queue.remove()
        visit(r)
        r.adjacent?.forEach((node) => {
            if (node.visited === false) {
                node.visited = true
                queue.add(node)
            }
        })
    }
}
