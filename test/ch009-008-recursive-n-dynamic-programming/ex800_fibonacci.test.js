import { Logger } from '../../src/ch009-004-tree-n-graph/util/Logger'
import {
    fibonacci,
    fibonacciBottomUp,
    fibonacciCache,
} from '../../src/ch009-008-recursive-n-dynamic-programming/ex800_fibonacci'

describe('fibonacci', () => {
    const data = [
        // [0, 0],
        // [1, 1],
        // [2, 1],
        // [3, 2],
        // [4, 3],
        // [5, 5],
        // [6, 8],
        // [7, 13],
        // [8, 21],
        // [9, 34],
        // [10, 55],
        // [11, 89],
        // [12, 144],
        // [13, 233],
        // [14, 377],
        // [15, 610],
        // [16, 987],
        // [17, 1597],
        // [18, 2584],
        // [19, 4181],
        [20, 6765],
        // [21, 10946],
        // [22, 17711],
        // [23, 28657],
        // [24, 46368],
        // [25, 75025],
        // [26, 121393],
        // [27, 196418],
        // [28, 317811],
        // [29, 514229],
        // [30, 832040],
        // [31, 1346269],
        // [32, 2178309],
        // [33, 3524578],
        // [34, 5702887],
        // [35, 9227465],
        // [36, 14930352],
        // [37, 24157817],
        // [38, 39088169],
        // [39, 63245986],
        // [40, 102334155],
        // [41, 165580141],
        // [42, 267914296],
        // [43, 433494437],
        // [44, 701408733],
        // [45, 1134903170],
        // [46, 1836311903],
        // [47, 2971215073],
        // [48, 4807526976],
        // [49, 7778742049],
        // [50, 12586269025],
    ]

    describe('첫 번째 구현', () => {
        test.each(data)('%s -> %s', (n, expected) => {
            console.time('# 기본구현')
            const logger = new Logger()
            // array 최대 length를 넘어감
            // expect(fibonacci(n, (n) => logger.push(n))).toBe(expected)
            expect(fibonacci(n, (n) => logger.countUp())).toBe(expected)
            // console.log(
            //     `fibonacci(${n})의 수행횟수: ${logger.log.length}, 전체수행결과: ${logger.log}`
            // )
            console.log(`fibonacci(${n})의 수행횟수: ${logger.count}`)
            console.timeEnd('# 기본구현')
        })
    })

    describe('하향식 동적 프로그래밍(메모이제이션)', () => {
        test.each(data)('%s -> %s', (n, expected) => {
            console.time('# 하향식 동적 프로그래밍')
            const logger = new Logger()
            expect(fibonacciCache(n, (n) => logger.push(n))).toBe(expected)
            console.log(
                `fibonacciCache(${n})의 수행횟수: ${logger.log.length}, 전체수행결과: ${logger.log}`
            )
            console.timeEnd('# 하향식 동적 프로그래밍')
        })
    })

    describe('상향식 동적 프로그래밍', () => {
        test.each(data)('%s -> %s', (n, expected) => {
            console.time('# 상향식 동적 프로그래밍')
            const logger = new Logger()
            // expect(fibonacci(50)).toBe(12586269025)
            expect(fibonacciBottomUp(n, (n) => logger.push(n))).toBe(expected)
            console.log(
                `fibonacci(${n})의 수행횟수: ${logger.log.length}, 전체수행결과: ${logger.log}`
            )
            console.timeEnd('# 상향식 동적 프로그래밍')
        })
    })
})
