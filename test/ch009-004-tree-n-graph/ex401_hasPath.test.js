import { Graph } from '../../src/ch009-004-tree-n-graph/util/Graph'
import {
    hasPathBFS,
    hasPathDFS,
} from '../../src/ch009-004-tree-n-graph/ex401_hasPath'

describe('hasPath', () => {
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
    const data = [
        [[0, 0], true],
        [[0, 1], true],
        [[0, 2], true],
        [[0, 3], true],
        [[0, 4], true],
        [[0, 5], true],
        [[1, 0], false],
        [[1, 1], true],
        [[1, 2], true],
        [[1, 3], true],
        [[1, 4], true],
        [[1, 5], false],
        [[2, 0], false],
        [[2, 1], true],
        [[2, 2], true],
        [[2, 3], true],
        [[2, 4], true],
        [[2, 5], false],
        [[3, 0], false],
        [[3, 1], true],
        [[3, 2], true],
        [[3, 3], true],
        [[3, 4], true],
        [[3, 5], false],
        [[4, 0], false],
        [[4, 1], false],
        [[4, 2], false],
        [[4, 3], false],
        [[4, 4], true],
        [[4, 5], false],
        [[5, 0], false],
        [[5, 1], false],
        [[5, 2], false],
        [[5, 3], false],
        [[5, 4], false],
        [[5, 5], true],
    ]

    describe('hasPathDFS', () => {
        test.each(data)('%s -> %s', ([fromName, toName], expected) => {
            expect(hasPathDFS(graph, fromName, toName)).toBe(expected)
        })
    })

    describe('hasPathBFS', () => {
        test.each(data)('%s -> %s', ([fromName, toName], expected) => {
            expect(hasPathBFS(graph, fromName, toName)).toBe(expected)
        })
    })
})
