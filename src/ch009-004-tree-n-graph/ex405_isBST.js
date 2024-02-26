/**
 * BST 검증: 주어진 이진 트리가 이진 탐색 트리인지 확인하는 함수를 작성하라
 */
export function isBST(binaryNode, min = -Infinity, max = Infinity) {
    // base case. BST의 조건을 위반하지 않는 경우 BST로 간주
    if (binaryNode === null) {
        return true
    }
    if (binaryNode.name <= min || binaryNode.name >= max) {
        return false
    }
    return (
        isBST(binaryNode.left, min, binaryNode.name) &&
        isBST(binaryNode.right, binaryNode.name, max)
    )
}
