import { LinkedListNode } from './util/LinkedList'

/**
 * 리스트의 합: 연결리스트로 숫자를 표현할 때 각 노드가 자릿수 하나를 가리키는 방식으로 표현할 수 있다.
 * 각 숫자는 역순으로 배열되어 있는데, 첫 번째 자릿수가 리스트의 맨 앞에 위치하도록 배열된다는 뜻이다.
 * 이와 같은 방식으로 표현된 숫자 두 개가 있을 때, 이 두 수를 더하여 그 합을 연결리스트로 반환하는 함수를 작성하라.
 */
export function addLists(current1, current2) {
    let dummyHead = new LinkedListNode(null, 0, null)
    let current = dummyHead
    let carry = 0

    while (current1 || current2) {
        let sum = carry
        if (current1) {
            sum += current1.item
            current1 = current1.next
        }
        if (current2) {
            sum += current2.item
            current2 = current2.next
        }

        carry = Math.floor(sum / 10)
        const value = sum % 10
        current.next = new LinkedListNode(null, value, null)
        current = current.next
    }

    // 마지막에
    if (carry > 0) {
        current.next = new LinkedListNode(null, carry)
    }

    return dummyHead.next
}
