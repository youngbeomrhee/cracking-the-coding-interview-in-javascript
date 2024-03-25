/**
 * 회전된 배열에서 검색: n개의 정수로 구성된 정렬 상태의 배열을 임의의 횟수만큼 회전시켜 얻은 배열이 입력으로 주어진다고 하자.
 * 이 배열에서 특정 한 원소를 찾는 코드를 작성하라.
 * 회전시키기 전, 원래 배열은 오름차순으로 정렬되어 있었다고 가정한다.
 */
export function searchInRotatedArray(
    arr,
    target,
    left = 0,
    right = arr.length - 1
) {
    if (left > right) {
        return -1 // 범위가 유효하지 않으면 탐색 실패
    }

    const mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) {
        // 타겟을 찾았으나, 더 왼쪽에 동일한 값이 있는지 확인
        const leftMostIndex = searchInRotatedArray(arr, target, left, mid - 1)
        return leftMostIndex !== -1 ? leftMostIndex : mid
    }

    // 중복된 값 처리
    if (arr[left] === arr[mid] && arr[mid] === arr[right]) {
        // 왼쪽과 오른쪽 모두 탐색
        const resultLeft = searchInRotatedArray(arr, target, left, mid - 1)
        if (resultLeft !== -1) {
            return resultLeft
        }
        return searchInRotatedArray(arr, target, mid + 1, right)
    } else if (arr[left] <= arr[mid]) {
        // 왼쪽 절반 정렬 상태 확인
        if (arr[left] <= target && target < arr[mid]) {
            return searchInRotatedArray(arr, target, left, mid - 1) // 왼쪽 절반 탐색
        } else {
            return searchInRotatedArray(arr, target, mid + 1, right) // 오른쪽 절반 탐색
        }
    } else {
        // 오른쪽 절반 정렬 상태 확인
        if (arr[mid] < target && target <= arr[right]) {
            return searchInRotatedArray(arr, target, mid + 1, right) // 오른쪽 절반 탐색
        } else {
            return searchInRotatedArray(arr, target, left, mid - 1) // 왼쪽 절반 탐색
        }
    }
}
