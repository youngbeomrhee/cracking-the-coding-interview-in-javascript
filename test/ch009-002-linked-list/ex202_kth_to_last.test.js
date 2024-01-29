import {
    kthToLast,
    kthToLast2,
    kthToLast3,
} from '../../src/ch009-002-linked-list/ex202_kth_to_last'
import { LinkedList } from '../../src/ch009-002-linked-list/util/LinkedList'

describe('뒤에서 k번째 원소 구하기', () => {
    const data = [
        // [[[1, 2, 3, 4, 5], 0], 5],
        [[[10, 20, 30, 40, 50], 1], 40],
        [[[5, 4, 3, 2, 1], 4], 5],
        [[[100, 200, 300], 2], 100],
        [[[7, 14, 21, 28], 1], 21],
        [[[9, 8, 7, 6, 5, 4], 5], 9],
        [[[15, 30, 45, 60, 75, 90], 0], 90],
        [[[3, 6, 9, 12, 15, 18, 21], 2], 15],
        [[[11, 22, 33, 44, 55, 66], 5], 11],
        [[[2, 4, 6, 8, 10, 12, 14, 16], 3], 10],
        [[[20, 40, 60, 80, 100], 4], 20],
        [[[8, 16, 24, 32, 40, 48, 56], 6], 8],
        [[[25, 50, 75, 100, 125, 150], 1], 125],
        [[[10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 9], 10],
        [[[30, 60, 90, 120, 150, 180], 2], 120],
        [[[12, 24, 36, 48, 60, 72, 84, 96], 7], 12],
        [[[5, 10, 15, 20, 25, 30, 35, 40, 45], 0], 45],
        [[[21, 42, 63, 84, 105, 126], 3], 63],
        [[[14, 28, 42, 56, 70, 84, 98], 5], 28],
        [[[17, 34, 51, 68, 85, 102, 119], 4], 51],
    ]

    describe('kthToLast', () => {
        let ll
        test.each(data)('%s -> %s', ([arr, k], expected) => {
            const ll = new LinkedList(arr)
            expect(kthToLast(ll.first, k)).toBe(expected)
        })
    })

    describe('kthToLast2', () => {
        let ll
        test.each(data)('%s -> %s', ([arr, k], expected) => {
            const ll = new LinkedList(arr)
            expect(kthToLast2(ll.first, k)).toBe(expected)
        })
    })

    describe('kthToLast3', () => {
        let ll
        test.each(data)('%s -> %s', ([arr, k], expected) => {
            const ll = new LinkedList(arr)
            expect(kthToLast3(ll.first, k)).toBe(expected)
        })
    })
})
