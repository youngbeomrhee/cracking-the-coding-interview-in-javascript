import {
    BinaryNode,
    PushElement,
    inOrderTraversal,
    postOrderTraversal,
    preOrderTraversal,
} from '../../../src/ch009-004-tree-n-graph/util/TreeNode'
import { withCallStackTracking } from '../../util/print'

describe('Tree test', () => {
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

    test('inOrderTraversal', () => {
        const pushElement = new PushElement()
        inOrderTraversal(root, (node) => pushElement.push(node.name))
        expect(pushElement.elements).toStrictEqual([4, 2, 5, 1, 6, 3, 7])
    })

    test('preOrderTraversal', () => {
        const pushElement = new PushElement()
        preOrderTraversal(root, (node) => pushElement.push(node.name))
        expect(pushElement.elements).toStrictEqual([1, 2, 4, 5, 3, 6, 7])
    })

    test('postOrderTraversal', () => {
        const pushElement = new PushElement()
        postOrderTraversal(root, (node) => pushElement.push(node.name))
        expect(pushElement.elements).toStrictEqual([4, 5, 2, 6, 7, 3, 1])
    })
})
