import { LinkedListNode } from './util/LinkedList'

/**
 * 중복 없애기: 정렬되어 있지 않은 연결리스트가 주어졌을 때 이 리스트에서 중복되는 원소를 제거하는 코드를 작성하라
 *
 * # 해법 : 중복된 값을 허용하지 않는 Set에 LinkedList의 값을 담고 해당 값이 이미 존재하면 unlink 한다
 */
export function deleteDuplicates(current) {
    const set = new Set()
    let prev = new LinkedListNode(null, null, null)

    while (current !== null) {
        // 이미 존재하는 값이라면 해당 node를 제거
        if (set.has(current.item)) {
            prev.next = current.next
        } else {
            set.add(current.item)
            prev = current
        }
        current = current.next
    }
}

// 임시 버퍼를 사용하지 않는 경우
// 2개의 포인터를 두고 1개의 포인터는 현재 node, 2번째 포인터는 그 다음 node부터 끝까지 순회하면서 같은 값이 있는 경우 unlink 시킨다
export function deleteDuplicates2(current) {
    while (current !== null) {
        let runner = current
        while (runner.next !== null) {
            if (runner.next.item === current.item) {
                runner.next = runner.next.next
            } else {
                runner = runner.next
            }
        }
        current = current.next
    }
}
