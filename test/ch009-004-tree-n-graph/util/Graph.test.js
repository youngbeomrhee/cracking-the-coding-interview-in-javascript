import {
    Graph,
    GraphNode,
    breadthFirstSearch,
    depthFirstSearch,
} from '../../../src/ch009-004-tree-n-graph/util/Graph'
import { Logger } from '../../../src/ch009-004-tree-n-graph/util/Logger'

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
    test('depthFirstSearch', () => {
        const logger = new Logger()
        const root = Object.values(graph.nodes)[0]
        graph.depthFirstSearch(root, (node) => logger.push(node.name))
        expect(logger.log).toStrictEqual([0, 1, 3, 2, 4, 5])
    })
    test('breadthFirstSearch', () => {
        const logger = new Logger()
        const root = Object.values(graph.nodes)[0]
        graph.breadthFirstSearch(root, (node) => logger.push(node.name))
        expect(logger.log).toStrictEqual([0, 1, 4, 5, 3, 2])
    })
})
