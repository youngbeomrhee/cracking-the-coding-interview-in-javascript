import { Graph } from '../../../src/ch009-004-tree-n-graph/util/Graph'

describe('Graph test', () => {
    let graph
    beforeEach(() => {
        graph = new Graph()
        graph.addNode(0)
        graph.addNode(1)
        graph.addNode(2)
        graph.addNode(3)
        graph.addNode(4)
        graph.addNode(5)
        graph.addEdge(0, 1)
        graph.addEdge(0, 4)
        graph.addEdge(0, 5)
        graph.addEdge(1, 3)
        graph.addEdge(1, 4)
        graph.addEdge(2, 1)
        graph.addEdge(3, 2)
        graph.addEdge(3, 4)
    })
    test('graph가 제대로 생성됐는지 확인', () => {
        console.log(graph)
    })
})
