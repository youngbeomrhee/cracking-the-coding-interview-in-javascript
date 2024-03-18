/*
트리플 스텝: 어떤 아이가 n개의 계단을 오른다. 한번에 1계단 오르기도 하고, 2계단이나 3계단을 오르기도 한다. 
계단을 오르는 방법이 몇 가지가 있는지 계산하는 메서드를 구현하라.
 */
export function countWaysTo(n, callStack = {}) {
    const rearStack = {}
    if (n >= 0) {
        callStack[`${n} ${n > 0 ? 'from' : 'is base'}`] = rearStack
    }

    if (n < 0) {
        return 0
    } else if (n === 0) {
        // base case
        return 1
    }

    return (
        countWaysTo(n - 1, rearStack) +
        countWaysTo(n - 2, rearStack) +
        countWaysTo(n - 3, rearStack)
    )
}

export const countWaysToCache = () => {
    const cache = {}
    return (n) => {
        if (n < 0) {
            return 0
        } else if (n === 0) {
            // base case
            return 1
        } else if (!cache.hasOwnProperty(n)) {
            // cache에 없으면 계산해서 cache에 저장
            cache[n] =
                countWaysTo(n - 1) + countWaysTo(n - 2) + countWaysTo(n - 3)
        }
        return cache[n]
    }
}
