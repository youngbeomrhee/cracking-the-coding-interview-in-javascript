export class BinaryNode {
    constructor(name) {
        this.name = name
        this.left = null
        this.right = null
    }
}

export class LinkedBinaryNode extends BinaryNode {
    constructor(name, parent = null) {
        super(name)
        this.parent = parent
    }
}

export function printTree(node, prefix = '', isLeft = true) {
    if (node.right) {
        printTree(node.right, `${prefix}${isLeft ? '|   ' : '    '}`, false)
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.name}`)
    if (node.left) {
        printTree(node.left, `${prefix}${isLeft ? '    ' : '|   '}`, true)
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
export function postOrderTraversal(
    binaryNode,
    visit = console.log,
    level = 1,
    isDebugging = false
) {
    isDebugging &&
        console.log(
            `${'>'.repeat(level)} postOrderTraversal(${binaryNode?.name}) called`
        )
    if (binaryNode != null) {
        isDebugging &&
            console.log(
                `${'>'.repeat(level)} postOrderTraversal(${binaryNode?.name}.left) call`
            )
        postOrderTraversal(binaryNode.left, visit, level + 1, isDebugging)
        isDebugging &&
            console.log(
                `${'>'.repeat(level)} postOrderTraversal(${binaryNode?.name}.right) call`
            )
        postOrderTraversal(binaryNode.right, visit, level + 1, isDebugging)
        isDebugging &&
            console.log(`${'>'.repeat(level)} visit(${binaryNode.name})`)
        visit(binaryNode)
    }
    isDebugging &&
        console.log(
            `${'<'.repeat(level)} postOrderTraversal(${binaryNode?.name}) callstack pop`
        )
}
