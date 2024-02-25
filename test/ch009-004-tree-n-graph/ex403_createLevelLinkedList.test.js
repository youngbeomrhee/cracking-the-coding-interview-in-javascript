import { createLevelLinkedList } from '../../src/ch009-004-tree-n-graph/ex403_createLevelLinkedList'
import {
    BinaryNode,
    printTree,
} from '../../src/ch009-004-tree-n-graph/util/Tree'

describe('createLevelLinkedList test', () => {
    let root
    beforeAll(() => {
        root = new BinaryNode(1)
        root.left = new BinaryNode(2)
        root.right = new BinaryNode(3)
        root.left.left = new BinaryNode(4)
        root.left.right = new BinaryNode(5)
        root.right.left = new BinaryNode(6)
        root.right.right = new BinaryNode(7)
    })
    test('printTree', () => {
        /**
            |       ┌── 7
            |   ┌── 3
            |   |   └── 6
            └── 1
                |   ┌── 5
                └── 2
                    └── 4
        */
        printTree(root)
    })

    test('실행결과 확인', () => {
        console.log(createLevelLinkedList(root))
    })
})
