import { LinkedListQueue } from '../ch009-003-stack-queue/util/LinkedListQueue'

/**
 * 노드 사이의 경로: 방향 그래프가 주어졌을 때 두 노드 사이에 경로가 존재하는지 확인하는 알고리즘을 작성하라
 */
export function hasPathDFS(graph, fromName, toName) {
    // 이어져야 할 지점이 같은 경우 early return
    if (fromName === toName) {
        return true
    }
    const fromNode = graph.nodes[fromName]
    const toNode = graph.nodes[toName]
    // 이어져야 할 지점이 하나라도 없는 경우 early return
    if (!fromNode || !toNode) {
        return false
    }
    fromNode.visited = true
    for (const neighbor of fromNode.adjacent) {
        if (!neighbor.visited) {
            if (hasPathDFS(graph, neighbor.name, toName)) {
                return true
            }
        }
    }
    return false
}

export function hasPathBFS(graph, fromName, toName) {
    // 이어져야 할 지점이 같은 경우 early return
    if (fromName === toName) {
        return true
    }
    const q = new LinkedListQueue()
    const fromNode = graph.nodes[fromName]
    // 시작 node가 없는 경우 early return
    if (!fromNode) {
        return false
    }
    // 시작 노드를 큐에 추가
    q.add(fromNode)
    fromNode.visited = true

    while (!q.isEmpty()) {
        const currentNode = q.remove()
        // 목표 node를 찾은 경우
        if (currentNode.name === toName) {
            return true
        }
        for (let neighbor of currentNode.adjacent) {
            if (!neighbor.visited) {
                neighbor.visited = true
                // 인접 노드를 큐에 추가
                q.add(neighbor)
            }
        }
    }
    return false
}
