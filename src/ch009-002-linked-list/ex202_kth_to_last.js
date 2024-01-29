/**
 * 뒤에서 k번째 원소 구하기: 단방향 연결리스트가 주어졌을 때 뒤에서 k번째 원소를 찾는 알고리즘을 구현하라
 */
export function kthToLast(current, k) {
    const items = []
    while (current) {
        items.push(current.item)
        current = current.next
    }
    return items[items.length - 1 - k]
}

// 재귀를 활용한 방법
//
/*
export function kthToLast2(current, k) {
    // 현재 구조에서는 LinkedList의 길이를 알 수 없으므로 전체를 순회하며 길이를 알아낸다
    let length = 0
    let runner = current
    while (runner) {
        length++
        runner = runner.next
    }

    function kthToLastRec(current, k, n = 0) {
        if (k === n) {
            return current.item
        }
        return kthToLastRec(current.next, k, n + 1)
    }

    return kthToLastRec(current, length - 1 - k, 0)
}
*/

// 재귀를 활용한 방법
export function kthToLast2(current, k, index = { value: 0 }) {
    if (current === null) {
        return null
    }

    let result = kthToLast2(current.next, k, index)

    index.value += 1
    if (index.value === k + 1) {
        return current.item
    }
    return result
}

// runner를 활용하는 방법
// runner1을 먼저 달리게하고 runner2를 k만큼 뒤에서 달리게 한다.
// -> runner1이 마지막 지점에 node에 도달했을 때 runner2는 뒤에서 k만큼 뒤에 있게 된다.
export function kthToLast3(current, k) {
    let runner1 = current
    let runner2 = current
    let distance = 0
    while (runner1) {
        runner1 = runner1.next
        if (runner1 === null) {
            return runner2.item
        }
        if (distance >= k) {
            runner2 = runner2.next
        }
        distance++
    }
}
