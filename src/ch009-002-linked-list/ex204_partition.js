/**
 * 분할: 값 x가 주어졌을 때 x보다 작은 노드들을 x보다 크거나 같은 노드들보다 앞에 오도록 하는 코드를 작성하라.
 * 만약 x가 리스트에 있다면 x는 그보다 작은 원소들보다 뒤에 나오기만 하면 된다.
 * 즉, 원소 x는 '오른쪽 그룹' 어딘가에만 존재하면 된다. 왼쪽과 오른쪽 그룹 사이에 있을 필요는 없다.
 *
 * # 해법
 * 첫 번째 원소를 기준으로 잡고 x보다 작은 원소는 왼쪽으로, 큰 원소는 오른쪽으로 붙인다
 */
// 단방향 리스트라면 아래 방식으로 해소 가능
export function partition(current, x) {
    let head = current
    let tail = current
    while (current) {
        const next = current.next
        if (current.item < x) {
            // head에 node를 삽입한다
            current.next = head
            head = current
        } else {
            // tail에 node를 삽입한다
            tail.next = current
            tail = current
        }
        current = next
    }
    tail.next = null

    return head
}

// 양방향 리스트
export function partition2(current, x) {
    let head = current
    while (current) {
        const next = current.next
        if (current.prev !== null && current.item < x) {
            // 현재 node unlink
            const prev = current.prev
            const next = current.next
            prev.next = next
            if (next !== null) {
                next.prev = prev
            }

            // head 앞으로 현재 노드 이동
            head.prev = current
            current.next = head
            // head를 현재 노드로 변경
            head = current
        }
        current = next
    }
    head.prev = null

    return head
}
