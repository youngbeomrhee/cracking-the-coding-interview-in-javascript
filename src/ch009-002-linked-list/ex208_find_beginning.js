/**
 * 루프 발견: 순환 연결리스트(circular linked list)가 주어졌을 때, 순환되는 부분의 첫째 노드를 반환하는 알고리즘을 작성하라.
 * 순환 연결리스트란 노드의 next 포인트가 앞선 노드들 가운데 어느 하나를 가리키도록 설정되어 있는,
 * 엄밀히 말해서 변질된 방식의 연결리스트를 의미한다.
 */
function findCycleStart(head) {
    if (!head || !head.next) {
        return null
    }

    let slow = head,
        fast = head

    // cycle 감지
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            // cycle 발견
            break
        }
    }

    // 반복되는 cycle이 없는 경우
    if (!fast || !fast.next) {
        return null
    }

    // cycle의 시작점 찾기
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }

    return slow
}
