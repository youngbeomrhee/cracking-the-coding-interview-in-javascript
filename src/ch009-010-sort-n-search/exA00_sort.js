/**
 * 버블 정렬 - 평균 및 최악 실행 시간: O(n^2), 메모리: O(1)
 * 배열의 첫 원소부터 순차적으로 진행하며, 현재 원소가 그 다음 원소의 값보다 크면 두 원소를 바꾸는 작업을 반복한다.
 * 이런 식으로 배열을 계속 살펴보면서 완전히 정렬된 상태가 될 때까지 반복한다.
 */
export function bubbleSort(arr, logger) {
    let range = arr.length
    let hasSwapped = false

    do {
        hasSwapped = false
        // 이전 원소와 현재 원소를 탐색하므로 시작점을 1로 설정
        for (let i = 1; i < range; i++) {
            const prev = arr[i - 1],
                now = arr[i]

            logger?.({
                prev: arr[i - 1],
                now: arr[i],
                hasSwapped: prev > now,
                arr: [...arr],
            })
            // 이전 원소가 현재 원소보다 클 경우 swap
            if (prev > now) {
                ;[arr[i - 1], arr[i]] = [now, prev]
                hasSwapped = true
            }
        }
        // 한 번 순회할 때마다 가장 큰 값이 가장 오른쪽에 배치되므로 검색범위를 하나씩 감소
        range--
    } while (hasSwapped) // swap이 한 번이라도 일어났다면 정렬되지 않았으므로 반복

    return arr
}

/**
 * 선택 정렬 - 평균 및 최악 실행 시간: O(n^2), 메모리: O(1)
 * 배열을 선형 탐색(linear scan)하며 가장 작은 원소를 배열 맨 앞으로 보낸다(맨 앞에 있던 원소와 자리를 바꾼다).
 * 가장 왼쪽에 최솟값이 왔으므로 범위를 하나 좁혀서 같은 작업을 반복한다. 이 작업을 모든 원소가 정렬될 때까지 반복한다.
 */
export function selectionSort(arr, logger) {
    // arr.length - 1 까지 순회
    for (let i = 0; i < arr.length - 1; i++) {
        // 남은 목록 중 가장 왼쪽의 index를 임의로 가장 작은값의 index로 설정
        let minIndex = i
        // i + 1부터 arr.length까지 순회하면서 가장 작은 값의 index 찾기
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
            logger?.({
                탐색시작값: arr[i + 1],
                탐색값: arr[j],
                최소값: arr[minIndex],
                원본배열: [...arr],
            })
        }
        // 가장 작은 값과 가장 왼쪽의 값 swap
        if (i !== minIndex) {
            ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }

    return arr
}

/**
 * 병합 정렬 - 평균 및 최악 실행 시간: O(n log n), 메모리: 상황에 따라 다름
 * 배열을 절반씩 나누어 각각을 정렬한 다음 이 둘을 합하여 다시 정렬하는 방법.
 * 분할 정복 (divide and conquer) 방식으로 문제를 해결
 */
export function mergeSort(arr, logger) {
    if (arr.length <= 1) {
        return arr
    }
    logger?.({ type: 'mergeSort', arr })

    // 배열을 반으로 나눈다
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    // 반으로 나눈 각각에 대해서 병합 정렬을 수행한다
    const leftMergeSorted = mergeSort(left, logger)
    const rightMergeSorted = mergeSort(right, logger)
    // 정렬된 각각을 merge 한다
    return merge(leftMergeSorted, rightMergeSorted, logger)
}

function merge(left, right, logger) {
    const mergeSorted = []
    let leftIndex = 0
    let rightIndex = 0

    // left와 right중 하나의 배열이 소진될 때까지 검사
    while (leftIndex < left.length && rightIndex < right.length) {
        logger?.({ type: 'merge', mergeSorted, left, right })
        // left와 right에 남은 값 중 각각의 제일 왼쪽에 있는 값들을 비교하여 작은 값 순으로 mergeSorted에 넣는다
        if (left[leftIndex] < right[rightIndex]) {
            mergeSorted.push(left[leftIndex])
            leftIndex++ // left에서 사용된 값의 다음 값을 바라보도록 조정
        } else {
            mergeSorted.push(right[rightIndex])
            rightIndex++ // right에서 사용된 값의 다음 값을 바라보도록 조정
        }
    }

    // left와 right 중 하나라도 모두 mergeSorted에 추출되면 나머지 값은 뒤에 이어 붙인다
    return mergeSorted
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex))
}

/**
 * 퀵 정렬 - 실행시간: 평균 O(n log n), 최악: O(n^2), 메모리: O(log n)
 * 무작위로 선정된 한 원소를 사용하여 배열을 분할하는데, 선정된 원소보다 작은 원소들은 앞에, 큰 원소들은 뒤로 보낸다.
 * 배열 분할 작업은 연속된 swap 연산을 통해 효율적으로 수행된다.
 */
export function quickSort(array, logger) {
    return _quickSort(array, 0, array.length - 1, logger)
}

function _quickSort(array, leftIndex, rightIndex, logger) {
    if (leftIndex < rightIndex) {
        logger?.({
            type: 'quickSort',
            leftIndex,
            rightIndex,
            arr: [...array],
        })
        const pivotIndex = partition(array, leftIndex, rightIndex, logger)
        _quickSort(array, leftIndex, pivotIndex - 1, logger) // 왼쪽 부분 배열 정렬
        _quickSort(array, pivotIndex + 1, rightIndex, logger) // 오른쪽 부분 배열 정렬
    }
    return array
}

function partition(array, leftIndex, rightIndex, logger) {
    const pivotIndex = Math.floor((leftIndex + rightIndex) / 2)
    const pivotValue = array[pivotIndex] // 배열의 가운데 요소를 피벗으로 선택

    // 피벗을 배열의 우측 끝으로 이동
    ;[array[pivotIndex], array[rightIndex]] = [
        array[rightIndex],
        array[pivotIndex],
    ]

    let i = leftIndex - 1

    for (let j = leftIndex; j < rightIndex; j++) {
        logger({
            type: 'partition',
            pivotValue,
            arr: [...array],
        })
        if (array[j] < pivotValue) {
            i++
            ;[array[i], array[j]] = [array[j], array[i]] // 스왑
        }
    }

    // 피벗을 올바른 위치로 이동
    ;[array[i + 1], array[rightIndex]] = [array[rightIndex], array[i + 1]]
    return i + 1 // 피벗의 인덱스 반환
}

/**
 * 기수 정렬 - 실행 시간: O(kn)
 * 기수 정렬 알고리즘은 데이터가 정수(다른 형태의 데이터에 대해서도 마찬가지지만)처럼 유한한 비트로 구성되어 있는 경우에 사용
 * 각 자릿수를 순회해 나가면서 각 자리의 값에 따라 그룹을 나누고 각 자릿수를 기준으로 다시 정렬을 수행한다.
 * 이 작업을 배열 전체가 정렬될 때까지 모든 자릿수에 대해 반복한다.
 */
export function radixSort(arr) {
    const maxNum = Math.max(...arr) * 10
    let divisor = 10
    while (divisor < maxNum) {
        // 버킷 초기화: 10개의 버킷 (0-9)
        let buckets = [...Array(10)].map(() => [])

        // 각 숫자를 적절한 버킷에 배치
        for (let num of arr) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num)
        }

        // 버킷에서 숫자를 꺼내어 배열을 재구성
        arr = [].concat(...buckets)
        divisor *= 10
    }
    return arr
}
