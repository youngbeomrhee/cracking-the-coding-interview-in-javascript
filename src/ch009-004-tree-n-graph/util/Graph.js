import { LinkedListQueue } from '../../ch009-003-stack-queue/util/LinkedListQueue'

export class GraphNode {
    constructor(name) {
        this.name = name
        this.adjacent = []
        this.visited = false
    }
}

export class Graph {
    constructor() {
        this.nodes = {}
    }
    addNode(name) {
        this.nodes[name] = new GraphNode(name)
    }
    addEdge(from, to) {
        if (this.nodes[from] && this.nodes[to]) {
            this.nodes[from].adjacent.push(this.nodes[to])
        }
    }
    clearVisitHistory() {
        // 기존 방문 히스토리 초기화
        Object.values(this.nodes).forEach((node) => (node.visited = false))
    }
    depthFirstSearch(node, visit = console.log) {
        this.clearVisitHistory()
        const dfs = (node, visit) => {
            if (!node) {
                return
            }
            visit(node)
            node.visited = true

            node.adjacent.forEach((node) => {
                if (node.visited === false) {
                    dfs(node, visit)
                }
            })
        }
        dfs(node, visit)
    }
    breadthFirstSearch(node, visit = console.log) {
        this.clearVisitHistory()
        const queue = new LinkedListQueue()
        node.visited = true
        queue.add(node)
        while (!queue.isEmpty()) {
            const r = queue.remove()
            visit(r)
            r.adjacent.forEach((node) => {
                if (node.visited === false) {
                    node.visited = true
                    queue.add(node)
                }
            })
        }
    }
}

export function depthFirstSearch(root, visit = console.log) {
    if (root === null) {
        return
    }
    visit(root)
    root.visited = true
    root.adjacent.forEach((node) => {
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
        r.adjacent.forEach((node) => {
            if (node.visited === false) {
                node.visited = true
                queue.add(node)
            }
        })
    }
}
