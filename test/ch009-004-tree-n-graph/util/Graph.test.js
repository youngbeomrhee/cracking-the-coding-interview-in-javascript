import {
    GraphNode,
    breadthFirstSearch,
    depthFirstSearch,
} from '../../../src/ch009-004-tree-n-graph/util/Graph'
import { Logger } from '../../../src/ch009-004-tree-n-graph/util/Logger'

describe('Graph test', () => {
    let root
    beforeEach(() => {
        const node0 = new GraphNode(0)
        const node1 = new GraphNode(1)
        const node2 = new GraphNode(2)
        const node3 = new GraphNode(3)
        const node4 = new GraphNode(4)
        const node5 = new GraphNode(5)
        node0.adjacent = [node1, node4, node5]
        node1.adjacent = [node3, node4]
        node2.adjacent = [node1]
        node3.adjacent = [node2, node4]
        root = node0
    })
    test('depthFirstSearch', () => {
        const logger = new Logger()
        depthFirstSearch(root, (node) => logger.push(node.name))
        expect(logger.log).toStrictEqual([0, 1, 3, 2, 4, 5])
    })
    test('breadthFirstSearch', () => {
        const logger = new Logger()
        breadthFirstSearch(root, (node) => logger.push(node.name))
        expect(logger.log).toStrictEqual([0, 1, 4, 5, 3, 2])
    })
})
