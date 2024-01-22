/**
 * 0 행렬 : M*N 행렬의 한 원소가 0일 경우, 해당 원소가 속한 행과 열의 모든 원소를 0으로 설정하는 알고리즘을 작성하라
 *
 *
 */
export function setZeros(matrix) {
    // 동일한 행 또는 열에 0이 있는 경우는 중복해서 저장할 필요가 없으므로 Set을 활용
    const zeroRows = new Set()
    const zeroColumns = new Set()
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i)
                zeroColumns.add(j)
            }
        }
    }

    for (let row of zeroRows) {
        for (
            let columnIndex = 0;
            columnIndex < matrix[row].length;
            columnIndex++
        ) {
            matrix[row][columnIndex] = 0
        }
    }

    for (let columnIndex of zeroColumns) {
        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            matrix[rowIndex][columnIndex] = 0
        }
    }
    return matrix
}
