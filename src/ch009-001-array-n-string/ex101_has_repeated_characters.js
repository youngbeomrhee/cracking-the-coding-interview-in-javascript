/**
 * 중복이 없는가: 문자열이 주어졌을 때， 이 문자열에 같은 문자가 중복되어 등장하는지 확인하는 알고리즘을 작성하라.
 * 자료구조를 추가로 사용하지 않고 풀 수 있는 알고리즘 또한 고민하라.
 */
// 추가적인 자료구조를 사용한 경우
export function hasRepeatedCharacters(str) {
    const set = new Set()

    for (const char of str) {
        if (set.has(char)) {
            return true
        }
        set.add(char)
    }
    return false
}

// hash 함수를 사용하는 경우. 편의상 간단하게 구현
function hash(char) {
    return char.charCodeAt(0)
}

export function hasRepeatedCharactersUsingHash(str) {
    const hashTable = {}

    for (const char of str) {
        const charHash = hash(char)
        if (hashTable[charHash]) {
            return true
        }
        hashTable[charHash] = char
    }
    return false
}

// 추가적인 자료구조를 사용하지 않는 경우
export function hasRepeatedCharactersWithoutAdditionalDataStructure(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return true
            }
        }
    }
    return false
}

// 추가적인 자료구조를 사용하지 않는 경우2
export function hasRepeatedCharactersUsingSimple(str) {
    return Array.from(str).some((char, i, arr) => {
        return arr.slice(i + 1).includes(char)
    })
}

// 추가적인 자료구조를 사용하지 않는 경우2
// 정렬해서 계산하는 방식으로 시간복잡도를 줄인다
export function hasRepeatedCharactersUsingSort(str) {
    const sorted = str.split('').sort()
    for (let index = 0; index < sorted.length; index++) {
        if (sorted[index] === sorted[index + 1]) return true
    }
    return false
}
