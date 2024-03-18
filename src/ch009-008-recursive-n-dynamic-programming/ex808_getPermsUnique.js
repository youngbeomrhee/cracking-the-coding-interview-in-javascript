/*
중복 있는 순열: 문자열이 주어졌을 때 모든 경우의 순열을 계산하는 메서드를 작성하라. 문자는 중복되어 나타날 수 있지만, 나열된 순열은 서로 중복되면 안된다.
*/
export function getPermsUnique(s) {
    const result = []
    const chars = s.split('').sort() // 문자열을 배열로 변환하고 정렬
    const used = Array(chars.length).fill(false) // 각 문자의 사용 여부를 추적

    function backtrack(path = []) {
        if (path.length === chars.length) {
            // 모든 문자가 사용된 경우
            result.push(path.join('')) // 현재 경로를 결과에 추가
            return
        }

        for (let i = 0; i < chars.length; i++) {
            if (
                used[i] ||
                (i > 0 && chars[i] === chars[i - 1] && !used[i - 1])
            ) {
                continue // 이전 문자와 동일하고, 이전 문자가 사용되지 않았다면 건너뜀
            }
            used[i] = true
            backtrack(path.concat(chars[i])) // 현재 문자를 경로에 추가하고 재귀 호출
            used[i] = false // 재귀 호출이 완료되면, 사용 상태를 되돌림
        }
    }

    backtrack() // 백트래킹 시작
    return result
}

export function printPerms(s) {
    let result = []
    let map = buildFreqTable(s)
    printPermsHelper(map, '', s.length, result)
    return result
}

function buildFreqTable(s) {
    let map = {}
    for (let c of s) {
        if (!map.hasOwnProperty(c)) {
            map[c] = 0
        }
        map[c] += 1
    }
    return map
}

function printPermsHelper(map, prefix, remaining, result) {
    if (remaining === 0) {
        result.push(prefix)
        return
    }

    for (let c in map) {
        if (map[c] > 0) {
            map[c] -= 1
            printPermsHelper(map, prefix + c, remaining - 1, result)
            map[c] += 1 // 백트래킹, 원래 상태로 복구
        }
    }
}
