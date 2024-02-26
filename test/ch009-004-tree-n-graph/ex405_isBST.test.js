import { isBST } from '../../src/ch009-004-tree-n-graph/ex405_isBst'
import {
    BinaryNode,
    printTree,
} from '../../src/ch009-004-tree-n-graph/util/Tree'

describe('isBst true', () => {
    test('실행결과 확인', () => {
        const root = new BinaryNode(4)
        root.left = new BinaryNode(2)
        root.left.left = new BinaryNode(1)
        root.left.right = new BinaryNode(3)
        root.right = new BinaryNode(6)
        root.right.left = new BinaryNode(5)
        root.right.right = new BinaryNode(7)
        printTree(root)
        /**
            |       ┌── 7
            |   ┌── 6
            |   |   └── 5
            └── 4
                |   ┌── 3
                └── 2
                    └── 1
        */
        expect(isBST(root)).toBe(true)
    })
    test('실행결과 확인', () => {
        const root = new BinaryNode(5)
        root.left = new BinaryNode(2)
        root.left.left = new BinaryNode(1)
        root.left.right = new BinaryNode(3)
        root.right = new BinaryNode(6)
        root.right.left = new BinaryNode(4)
        root.right.right = new BinaryNode(7)
        printTree(root)
        /**
            |       ┌── 7
            |   ┌── 6
            |   |   └── 4
            └── 5
                |   ┌── 3
                └── 2
                    └── 1
        */
        expect(isBST(root)).toBe(false)
    })
})
