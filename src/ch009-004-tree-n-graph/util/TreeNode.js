export class Node {
    constructor(name) {
        this.neme = name
        this.children = null
    }
}

export class BinaryNode {
    constructor(name) {
        this.name = name
        this.left = null
        this.right = null
    }
}

// export class Tree {
//     constructor(root) {
//         this.root = root
//     }
// }

// export class BinaryTree {
//     constructor() {
//         this.root = new BinaryNode()
//     }
// }

export function printTree(node, prefix = '', isLeft = true) {
    if (node.right) {
        printTree(node.right, `${prefix}${isLeft ? '|   ' : '    '}`, false)
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.name}`)
    if (node.left) {
        printTree(node.left, `${prefix}${isLeft ? '    ' : '|   '}`, true)
    }
}

export class PushElement {
    constructor() {
        this.elements = []
    }
    push(ele) {
        this.elements.push(ele)
    }
    getElements() {
        return this.elements
    }
}

// 중위 순회(in-order traversal): 왼쪽 가지, 현재 노드, 오른쪽 가지 순서로 노드를 방문하고 출력하는 방법
export function inOrderTraversal(binaryNode, visit = console.log) {
    if (binaryNode != null) {
        inOrderTraversal(binaryNode.left, visit)
        visit(binaryNode)
        inOrderTraversal(binaryNode.right, visit)
    }
}

// 전위 순회(pre-order traversal): 자식 노드보다 현재 노드를 먼저 방문하는 방법
export function preOrderTraversal(binaryNode, visit = console.log) {
    if (binaryNode != null) {
        visit(binaryNode)
        preOrderTraversal(binaryNode.left, visit)
        preOrderTraversal(binaryNode.right, visit)
    }
}

// 후위 순회(post-order traversal): 모든 자식 노드들을 먼저 방문한 뒤 마지막에 현재 노드를 방문하는 방법
export function postOrderTraversal(binaryNode, visit = console.log) {
    if (binaryNode != null) {
        postOrderTraversal(binaryNode.left, visit)
        postOrderTraversal(binaryNode.right, visit)
        visit(binaryNode)
    }
}
