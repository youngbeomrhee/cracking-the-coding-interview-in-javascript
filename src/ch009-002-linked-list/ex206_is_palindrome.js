/**
 * 회문: 주어진 연결리스트가 회문(palindrome)인지 검사하는 함수를 작성하라
 */
export function isPalindrome(current) {
    if (!current || !current.next) {
        return true
    }

    let slow = current
    let fast = current

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let left = fast ? slow : slow.prev
    let right = slow
    while (left && right) {
        if (left.item !== right.item) {
            return false
        }
        left = left.prev
        right = right.next
    }
    return true
}
