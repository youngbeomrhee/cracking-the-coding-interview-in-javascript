import { Logger } from '../../../src/ch009-004-tree-n-graph/util/Logger'
import {
    BinaryNode,
    inOrderTraversal,
    postOrderTraversal,
    preOrderTraversal,
} from '../../../src/ch009-004-tree-n-graph/util/TreeNode'

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
        const logger = new Logger()
        inOrderTraversal(root, (node) => logger.push(node.name))
        expect(logger.log).toStrictEqual([4, 2, 5, 1, 6, 3, 7])
    })

    test('preOrderTraversal', () => {
        const logger = new Logger()
        preOrderTraversal(root, (node) => logger.push(node.name))
        expect(logger.log).toStrictEqual([1, 2, 4, 5, 3, 6, 7])
    })

    test('postOrderTraversal', () => {
        const logger = new Logger()
        const level = 1
        const isDebugging = true
        postOrderTraversal(
            root,
            (node) => logger.push(node.name),
            level,
            isDebugging
        )
        expect(logger.log).toStrictEqual([4, 5, 2, 6, 7, 3, 1])
        /** 호출 디버깅

|       ┌── 7
|   ┌── 3
|   |   └── 6
└── 1
    |   ┌── 5
    └── 2
        └── 4

> postOrderTraversal(1) called
> postOrderTraversal(1.left) call
>> postOrderTraversal(2) called
>> postOrderTraversal(2.left) call
>>> postOrderTraversal(4) called
>>> postOrderTraversal(4.left) call
>>>> postOrderTraversal(undefined) called
<<<< postOrderTraversal(undefined) callstack pop
>>> postOrderTraversal(4.right) call
>>>> postOrderTraversal(undefined) called
<<<< postOrderTraversal(undefined) callstack pop
>>> visit(4)
<<< postOrderTraversal(4) callstack pop
>> postOrderTraversal(2.right) call
>>> postOrderTraversal(5) called
>>> postOrderTraversal(5.left) call
>>>> postOrderTraversal(undefined) called
<<<< postOrderTraversal(undefined) callstack pop
>>> postOrderTraversal(5.right) call
>>>> postOrderTraversal(undefined) called
<<<< postOrderTraversal(undefined) callstack pop
>>> visit(5)
<<< postOrderTraversal(5) callstack pop
>> visit(2)
<< postOrderTraversal(2) callstack pop
> postOrderTraversal(1.right) call
>> postOrderTraversal(3) called
>> postOrderTraversal(3.left) call
>>> postOrderTraversal(6) called
>>> postOrderTraversal(6.left) call
>>>> postOrderTraversal(undefined) called
<<<< postOrderTraversal(undefined) callstack pop
>>> postOrderTraversal(6.right) call
>>>> postOrderTraversal(undefined) called
<<<< postOrderTraversal(undefined) callstack pop
>>> visit(6)
<<< postOrderTraversal(6) callstack pop
>> postOrderTraversal(3.right) call
>>> postOrderTraversal(7) called
>>> postOrderTraversal(7.left) call
>>>> postOrderTraversal(undefined) called
<<<< postOrderTraversal(undefined) callstack pop
>>> postOrderTraversal(7.right) call
>>>> postOrderTraversal(undefined) called
<<<< postOrderTraversal(undefined) callstack pop
>>> visit(7)
<<< postOrderTraversal(7) callstack pop
>> visit(3)
<< postOrderTraversal(3) callstack pop
> visit(1)
< postOrderTraversal(1) callstack pop
*/
    })
})
