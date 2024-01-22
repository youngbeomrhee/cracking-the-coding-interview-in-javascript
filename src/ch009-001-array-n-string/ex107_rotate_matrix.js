/**
 * 행렬 회전: 이미지를 표현하는 N*N 행렬이 있다. 이미지의 각 픽셀은 4바이트로 표현된다.
 * 이때, 이미지를 90도 회전시키는 메서드를 작성하라. 행렬을 추가로 사용하지 않고서도 할 수 있겠는가?
 *
 */
export function rotateMatrix(matrix) {
    let n = matrix.length
    const debuggingTable = []

    // layer: 회전시키려는 현재 행렬의 레이어. 4*4 행렬에는 외부 레이어와 내부 레이어의 2개 레이어 존재
    for (let layer = 0; layer < n / 2; layer++) {
        let first = layer // 현재 레이어에서 첫 번째 요소의 인덱스
        let last = n - 1 - layer // 현재 레이어에서 마지막 요소의 인덱스. 0부터 시작하므로 n - 1, layer 만큼 안으로 들어가니까 - layer
        for (let i = first; i < last; i++) {
            let offset = i - first // 레이어 내 요소의 상대적 위치. 가장 앞의 요소에서 얼마만큼 떨어져 있는지 확인
            let top = matrix[first][i] // save top

            // left -> top
            matrix[first][i] = matrix[last - offset][first]

            // bottom -> left
            matrix[last - offset][first] = matrix[last][last - offset]

            // right -> bottom
            matrix[last][last - offset] = matrix[i][last]

            // top -> right
            matrix[i][last] = top // right <- saved top

            // debuggingTable.push({
            //    'top': matrix[first][i],
            //    `matrix[${first}][${i}]`: matrix[first][i],
            // })
        }
    }
    return matrix
}
