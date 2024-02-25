import { LinkedListNode } from '../ch009-003-stack-queue/util/LinkedListNode'
import { LinkedListQueue } from '../ch009-003-stack-queue/util/LinkedListQueue'

/**
 * 깊이의 리스트: 이진 트리가 주어졌을 때 같은 깊이에 있는 노드를 연결리스트로 연결해 주는 알고리즘을 설계하라.
 * 즉, 트리의 깊이가 D라면 D개의 연결리스트를 만들어야 한다.
 */
// 주어진 이진 트리를 너비우선탐색하면서 너비(depth)별로 linked list에 저장
export function createLevelLinkedList(rootBinaryNode) {
    // 예외처리
    if (!rootBinaryNode) {
        return []
    }

    // level별 시작점이 담길 list
    const levelLinkedLists = []
    // 탐색할 노드를 담을 Queue
    const q = new LinkedListQueue()
    q.add(rootBinaryNode)

    while (!q.isEmpty()) {
        // level에 따라 담기게 될 node의 갯수
        let levelNodeSize = q.size()
        // 현재 level의 head
        let levelHead = null
        // 현재 level에서 직전 node를 담을 node
        let prevLinkedNode = null

        // levelNodeSize만큼 반복하면서 queue에 left, right add
        for (let i = 0; i < levelNodeSize; i++) {
            const currentBinaryNode = q.remove()

            if (levelHead === null) {
                levelHead = new LinkedListNode(currentBinaryNode.name)
            }
            if (prevLinkedNode === null) {
                prevLinkedNode = levelHead
            } else {
                prevLinkedNode.next = new LinkedListNode(currentBinaryNode.name)
                prevLinkedNode = prevLinkedNode.next
            }

            if (currentBinaryNode.left) {
                q.add(currentBinaryNode.left)
            }
            if (currentBinaryNode.right) {
                q.add(currentBinaryNode.right)
            }
        }

        levelLinkedLists.push(levelHead)
    }
    return levelLinkedLists
}
