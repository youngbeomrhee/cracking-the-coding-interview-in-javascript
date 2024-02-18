import { LinkedListQueue } from '../ch009-003-stack-queue/util/LinkedListQueue'
import { Graph } from './util/Graph'

export class SearchGraph extends Graph {
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
