export function fibonacci(n, logger) {
    logger?.(n)
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    }
    return fibonacci(n - 1, logger) + fibonacci(n - 2, logger)
}

export const fibonacciCache = (() => {
    const cache = {
        0: 0,
        1: 1,
    }

    function fibonacci(n, logger) {
        logger?.(n)
        if (!cache.hasOwnProperty(n)) {
            // cache에 없으면 계산해서 cache에 저장
            cache[n] = fibonacci(n - 1, logger) + fibonacci(n - 2, logger)
        }
        return cache[n]
    }

    return (n, logger) => fibonacci(n, logger)
})()

// TODO: 상향식 동적 프로그래밍 메모이제이션
// TODO: cache의 공통화 가능할지 검토. 실제 수행되는 함수만 추상화 할 수 있으면 가능
export function fibonacciBottomUp(n, logger) {
    if (n === 0) return 0
    let a = 0
    let b = 1
    for (let i = 2; i < n; i++) {
        logger?.(i)
        const c = a + b
        a = b
        b = c
    }
    return a + b
}
