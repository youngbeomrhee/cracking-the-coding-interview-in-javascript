/**
 * 최소 트리: 오름차순으로 정렬된 배열이 있다. 이 배열 안에 들어 있는 원소는 정수이며 중복된 값이 없다고 했을 때높이가 최소가 되는 이진 탐색 트리를 만드는 알고리즘을 작성하라.
 */

import { BinaryNode } from './util/Tree'

/**
[1, 2, 3, 4, 5, 6, 7]이 주어졌을 경우

|       ┌── 7
|   ┌── 6
|   |   └── 5
└── 4
    |   ┌── 3
    └── 2
        └── 1

[1, 2, 3, 4, 5, 6, 7, 8]이 주어졌을 경우

|       ┌── 8
|   ┌── 7
|   |   └── 6
└── 5
    |   ┌── 4
    └── 3
        └── 2
            └── 1
*/
export function createMinimalBST(sortedArr) {
    if (sortedArr.length === 0) {
        return null
    }

    const midIndex = Math.floor(sortedArr.length / 2)
    const root = new BinaryNode(sortedArr[midIndex])

    root.left = createMinimalBST(sortedArr.slice(0, midIndex))
    root.right = createMinimalBST(sortedArr.slice(midIndex + 1))

    return root
}
