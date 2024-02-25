import { createMinimalBST } from '../../src/ch009-004-tree-n-graph/ex402_createMinimalBST'
import { Logger } from '../../src/ch009-004-tree-n-graph/util/Logger'
import {
    preOrderTraversal,
    printTree,
} from '../../src/ch009-004-tree-n-graph/util/Tree'

describe('createMinimalBST', () => {
    test('[1, 2, 3, 4, 5, 6, 7]', () => {
        const sortedArr = [1, 2, 3, 4, 5, 6, 7]
        const root = createMinimalBST(sortedArr)
        printTree(root)
        /* 
        |       ┌── 7
        |   ┌── 6
        |   |   └── 5
        └── 4
            |   ┌── 3
            └── 2
                └── 1
        */
        const logger = new Logger()
        preOrderTraversal(root, (node) => logger.push(node.name))
        expect(logger.log).toStrictEqual([4, 2, 1, 3, 6, 5, 7])
    })
    test('[1, 2, 3, 4, 5, 6, 7, 8]', () => {
        const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8]
        const root = createMinimalBST(sortedArr)
        printTree(root)
        /*
        |       ┌── 8
        |   ┌── 7
        |   |   └── 6
        └── 5
            |   ┌── 4
            └── 3
                └── 2
                    └── 1
        */
        const logger = new Logger()
        preOrderTraversal(root, (node) => logger.push(node.name))
        expect(logger.log).toStrictEqual([5, 3, 2, 1, 4, 7, 6, 8])
    })
})
