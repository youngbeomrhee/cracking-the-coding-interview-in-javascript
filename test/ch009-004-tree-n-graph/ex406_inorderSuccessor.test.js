import { inorderSuccessor } from '../../src/ch009-004-tree-n-graph/ex406_inorderSuccessor'
import {
    LinkedBinaryNode,
    printTree,
} from '../../src/ch009-004-tree-n-graph/util/Tree'

describe('inorderSuccessor', () => {
    let root
    beforeEach(() => {
        root = new LinkedBinaryNode(20, null)
        root.left = new LinkedBinaryNode(10, root)
        root.right = new LinkedBinaryNode(30, root)
        root.left.left = new LinkedBinaryNode(5, root.left)
        root.left.right = new LinkedBinaryNode(15, root.left)
        root.left.right.left = new LinkedBinaryNode(12, root.right)
    })
    test('printTree', () => {
        printTree(root)
        /**
        |   ┌── 30
        └── 20
            |   ┌── 15
            |   |   └── 12
            └── 10
                └── 5
         */
    })
    test('10 -> 12', () => {
        expect(inorderSuccessor(root.left).name).toBe(12)
    })
    test('15 -> 20', () => {
        expect(inorderSuccessor(root.left.right).name).toBe(20)
    })
    test('5 -> 10', () => {
        expect(inorderSuccessor(root.left.left).name).toBe(10)
    })
})
