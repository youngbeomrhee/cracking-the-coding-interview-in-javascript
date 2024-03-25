/**
 * 정렬된 행렬 탐색: 각 행과 열이 오름차순으로 정렬된 MxN 행렬이 주어졌을 때，특정한 원소를 찾는 메서드를 구현하라.
 */
export function findElementInMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [-1, -1] // 행렬이 비어있는 경우
    }

    let row = 0
    let col = matrix[0].length - 1 // 오른쪽 상단 모서리에서 시작

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return [row, col] // 원소를 찾은 경우, 해당 위치 반환
        } else if (matrix[row][col] > target) {
            col-- // 현재 원소가 타겟보다 큰 경우, 왼쪽으로 이동
        } else {
            row++ // 현재 원소가 타겟보다 작은 경우, 아래로 이동
        }
    }

    return [-1, -1] // 원소를 찾지 못한 경우
}
