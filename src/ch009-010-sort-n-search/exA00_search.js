export function binarySearch(array, target) {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const midValue = array[mid]

        if (midValue === target) {
            return mid // 타겟을 찾은 경우, 인덱스 반환
        } else if (midValue < target) {
            left = mid + 1 // 타겟이 중간값보다 큰 경우, 왼쪽 범위를 조정
        } else {
            right = mid - 1 // 타겟이 중간값보다 작은 경우, 오른쪽 범위를 조정
        }
    }

    return -1 // 타겟이 배열에 없는 경우, -1 반환
}
