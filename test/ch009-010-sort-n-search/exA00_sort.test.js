import {
    bubbleSort,
    mergeSort,
    selectionSort,
    quickSort,
} from '../../src/ch009-010-sort-n-search/exA00_sort'
import { Logger } from '../../src/ch009-004-tree-n-graph/util/Logger'

describe('sort', () => {
    const data = [
        [
            [1, 3, 2, 4],
            [1, 2, 3, 4],
        ],
        [
            [10, 2, 8, 6, 7, 3],
            [2, 3, 6, 7, 8, 10],
        ],
        [
            [15, 11, 9, 12, 14, 13, 10],
            [9, 10, 11, 12, 13, 14, 15],
        ],
        [
            [20, 25, 22, 18, 24, 19, 21, 23],
            [18, 19, 20, 21, 22, 23, 24, 25],
        ],
        [
            [30, 27, 29, 28, 26, 31, 32, 33, 34],
            [26, 27, 28, 29, 30, 31, 32, 33, 34],
        ],
        [
            [40, 45, 41, 44, 42, 43, 39, 38, 37, 36],
            [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        ],
        [
            [50, 55, 51, 54, 52, 53, 49, 48, 47, 46, 56],
            [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
        ],
        [
            [60, 65, 61, 64, 62, 63, 59, 58, 57, 66, 67, 68],
            [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68],
        ],
        [
            [70, 75, 71, 74, 72, 73, 69, 76, 77, 78, 79, 80, 81],
            [69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81],
        ],
        [
            [82, 87, 83, 86, 84, 85, 81, 88, 89, 90, 91, 92, 93, 94],
            [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94],
        ],
        [
            [
                95, 100, 96, 99, 97, 98, 94, 101, 102, 103, 104, 105, 106, 107,
                108,
            ],
            [
                94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
                108,
            ],
        ],
        [
            [5, 4, 3, 2, 1],
            [1, 2, 3, 4, 5],
        ],
    ]

    describe('bubble sort', () => {
        test.each(data)('%s -> %s', (arr, expected) => {
            const logger = new Logger()
            console.log('원본배열 :', arr)
            expect(bubbleSort(arr, (n) => logger.push(n))).toStrictEqual(
                expected
            )
            console.log(
                `수행 횟수: ${logger.log.length}, n^2: ${Math.pow(arr.length, 2)}, 실제 최악의 수행시간 (n - 1)(n)/2: ${((arr.length - 1) * arr.length) / 2}`
            )
            // console.log('전체 수행 목록:', logger.log)
        })
    })

    describe('selection sort', () => {
        test.each(data)('%s -> %s', (arr, expected) => {
            const logger = new Logger()
            console.log('원본배열 :', arr)
            expect(selectionSort(arr, (n) => logger.push(n))).toStrictEqual(
                expected
            )
            console.log(
                `수행 횟수: ${logger.log.length}, n^2: ${Math.pow(arr.length, 2)}, 실제 최악의 수행시간 (n - 1)(n)/2: ${((arr.length - 1) * arr.length) / 2}`
            )
            // console.log('전체 수행 목록:', logger.log)
        })
    })

    describe('merge sort', () => {
        test.each(data)('%s -> %s', (arr, expected) => {
            const logger = new Logger()
            console.log('원본배열 :', arr)
            expect(mergeSort(arr, (n) => logger.push(n))).toStrictEqual(
                expected
            )
            const n = arr.length
            console.log(
                `수행 횟수: ${logger.log.length}, n log n: ${n * Math.log2(n)}`
            )
            // console.log('전체 수행 목록:', logger.log)
        })
    })

    describe('quick sort', () => {
        test.each(data)('%s -> %s', (arr, expected) => {
            const logger = new Logger()
            console.log('원본배열 :', arr)
            expect(quickSort(arr, (n) => logger.push(n))).toStrictEqual(
                expected
            )
            const n = arr.length
            console.log(
                `수행 횟수: ${logger.log.length}, n log n: ${n * Math.log2(n)}`
            )
            // console.log('전체 수행 목록:', logger.log)
        })
    })

    describe('radix sort', () => {
        test.each(data)('%s -> %s', (arr, expected) => {
            const logger = new Logger()
            console.log('원본배열 :', arr)
            expect(radixSort(arr, (n) => logger.push(n))).toStrictEqual(
                expected
            )
            const n = arr.length
            console.log(
                `수행 횟수: ${logger.log.length}, n log n: ${n * Math.log2(n)}`
            )
            // console.log('전체 수행 목록:', logger.log)
        })
    })
})
