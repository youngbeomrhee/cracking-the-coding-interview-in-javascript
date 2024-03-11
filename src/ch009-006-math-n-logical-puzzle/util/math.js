export function isPrimeNumberBad(n) {
    if (!Number.isInteger(n) || n <= 1) {
        return false
    }
    for (let index = 2; index < n; index++) {
        if (n % index === 0) {
            return false
        }
    }
    return true
}

export function isPrimeNumber(n) {
    if (!Number.isInteger(n) || n <= 1) {
        return false
    }
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false
        }
    }
    return true
}

// 에라토스테네스의 체를 사용한 소수 목록 구하기
// TODO: 저장공간을 최소화하려면 모든 짝수는 소수가 아니므로 홀수만 체크하도록 변경하면 저장공간을 반으로 줄일 수 있다
export function sieveOfEratosthenes(n) {
    // 모든 숫자를 소수로 체크하고 시작
    const sieve = Array(n + 1).fill(true)
    // 0과 1은 소수가 아님
    sieve[0] = false
    sieve[1] = false

    for (let primeNumber = 2; primeNumber <= Math.sqrt(n); primeNumber++) {
        // 해당 값이 체에 남아있다면
        if (sieve[primeNumber]) {
            // 해당 값의 모든 배수는 소수가 아님
            // 현재의 primeNumber 보다 작은 숫자는 이미 이전에 다른 primeNumber에 의해 검사되었을 것이기 때문에 primeNumber * primeNumber에서 시작
            for (let j = primeNumber * primeNumber; j <= n; j += primeNumber) {
                sieve[j] = false
            }
        }
    }

    const primeNumberList = sieve.reduce(
        (primeNumberList, isPrimeNumber, i) => {
            if (isPrimeNumber) {
                primeNumberList.push(i)
            }
            return primeNumberList
        },
        []
    )

    return primeNumberList
}

export const isPrimeNumberBetter = (() => {
    const cache = { range: 2, primeNumberList: [2] }

    return (n) => {
        if (!Number.isInteger(n) || n <= 1) {
            return false
        }
        const { range } = cache
        if (n > range) {
            const nPrimeNumberList = sieveOfEratosthenes(n)
            cache.range = n
            cache.primeNumberList = nPrimeNumberList
        }
        const { primeNumberList } = cache
        return primeNumberList.indexOf(n) > -1
    }
})()
