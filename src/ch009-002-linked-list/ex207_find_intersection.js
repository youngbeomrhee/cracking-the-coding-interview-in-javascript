/**
 * 교집합: 단방향 연결리스트 두 개가 주어졌을 때 이 두 리스트의 교집합 노드를 찾은 뒤 반환하는 코드를 작성하라.
 * 여기서 교집합이란 노드의 값이 아니라 노드의 주소가 완전히 같은 경우를 말한다.
 * 즉, 첫 번째 리스트에 있는 k번째 노드와 두 번째 리스트에 있는 j번째 노드가 주소까지 완전히 같다면 이 노드는 교집합의 원소가 된다.
 */
export function findIntersection(headA, headB) {
    if (headA === null || headB === null) {
        return null
    }

    let a = headA
    let b = headB

    // 두 포인터가 만나거나 둘 다 널이 될 때까지 계속 진행
    while (a !== b) {
        a = a === null ? headB : a.next
        b = b === null ? headA : b.next
    }

    // 둘 다 null이거나(교차점 없음) 둘 다 교차점 노드를 가리킴
    return a
}
