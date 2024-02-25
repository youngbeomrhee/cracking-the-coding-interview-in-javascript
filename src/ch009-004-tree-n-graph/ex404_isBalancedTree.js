/**
 * 균형 확인: 이진 트리가 균형 잡혀있는지 확인하는 함수를 작성하라.
 * 이 문제에서 균형 잡힌 트리란 모든 노드에 대해서 왼쪽 부분 트리의 높이와 오른쪽 부분 트리의 높이의 차이가 최대 하나인 트리를 의미한다.
 * 
- 균형: root left 높이 3, right 높이 2 -> 높이차이 1 (1 이하)
|       
|   ┌── 3
|   |   
└── 1
    |   ┌── 5
    └── 2
        └── 4

- 균형 X: root left 높이 3, right 높이 1 -> 높이차이 2 (1 초과)
|   
|   
|    
└── 1
    |   ┌── 5
    └── 2
        └── 4
모든 노드를 순회하면서 해당 노드의 left와 right
 */

export function isBalancedTree(binaryNodeRoot) {
    // 모든 자식 노드의 깊이를 반환하는 함수
    function checkHeight(binaryNode) {
        if (!binaryNode) {
            return 0
        }

        // 재귀적으로 left, right의 subtree의 height를 구함
        let leftHeight = checkHeight(binaryNode.left)
        let rightHeight = checkHeight(binaryNode.right)

        // 불균형인 경우 탐색 종료
        if (leftHeight === -1 || rightHeight === -1) {
            return -1
        }

        // left와 right의 깊이 차이가 1 초과인 경우는 불균형
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1
        }

        return Math.max(leftHeight, rightHeight) + 1
    }

    return checkHeight(binaryNodeRoot) !== -1
}
