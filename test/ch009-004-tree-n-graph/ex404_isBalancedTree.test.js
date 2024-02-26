import { isBalancedTree } from '../../src/ch009-004-tree-n-graph/ex404_isBalancedTree'
import {
    BinaryNode,
    printTree,
} from '../../src/ch009-004-tree-n-graph/util/Tree'

describe('isBalancedTree true', () => {
    test('실행결과 확인', () => {
        const root = new BinaryNode(1)
        root.left = new BinaryNode(2)
        root.right = new BinaryNode(3)
        root.left.left = new BinaryNode(4)
        root.left.right = new BinaryNode(5)
        root.right.left = new BinaryNode(6)
        root.right.right = new BinaryNode(7)
        printTree(root)
        /**
            |       ┌── 7
            |   ┌── 3
            |   |   └── 6
            └── 1
                |   ┌── 5
                └── 2
                    └── 4
        */
        expect(isBalancedTree(root)).toBe(true)
    })
})

describe('isBalancedTree false', () => {
    test('실행결과 확인', () => {
        const root = new BinaryNode(1)
        root.left = new BinaryNode(2)
        root.left.left = new BinaryNode(4)
        root.left.right = new BinaryNode(5)
        printTree(root)
        /**
            |   
            |   
            |   
            └── 1
                |   ┌── 5
                └── 2
                    └── 4
        */
        expect(isBalancedTree(root)).toBe(false)
    })
})
