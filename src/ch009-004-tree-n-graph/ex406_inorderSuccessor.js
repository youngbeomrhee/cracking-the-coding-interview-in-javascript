import { BinaryNode } from './util/Tree'

/**
 * 후속자: 이진 탐색 트리에서 주어진 노드의 '다음' 노드(중위 후속자(in-order successor))를 찾는 알고리즘을 작성하라.
 * 각 노드에는 부모 노드를 가리키는 링크가 존재한다고 가정하자.
 */
export class LinkedBinaryNode extends BinaryNode {
    constructor(name, parent = null) {
        super(name)
        this.parent = parent
    }
}

export function inorderSuccessor(binaryNode) {
    function _findMin(binaryNode) {
        while (binaryNode.left) {
            binaryNode = binaryNode.left
        }
        return binaryNode
    }

    // 예외케이스 처리
    if (!binaryNode) return null

    // right node가 있는 경우, right 서브트리에서 가장 작은 값
    if (binaryNode.right) {
        return _findMin(binaryNode.right)
    } else {
        // right node가 없는 경우, 해당 node의 parent를 탐색하며 해당 node보다 큰 값을 찾는다
        let parent = binaryNode.parent
        // -> 현재 노드가 부모 노드의 left 서브트리가 될 때까지 부모 노드를 탐색
        while (parent && binaryNode === parent.right) {
            binaryNode = parent
            parent = parent.parent
        }
        return parent
    }
}
