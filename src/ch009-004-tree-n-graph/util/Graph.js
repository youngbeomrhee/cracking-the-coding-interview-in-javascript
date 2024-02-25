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
}
