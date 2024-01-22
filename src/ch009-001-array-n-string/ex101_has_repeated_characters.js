/**
 * 중복이 없는가: 문자열이 주어졌을 때， 이 문자열에 같은 문자가 중복되어 등장하는지 확인하는 알고리즘을 작성하라.
 * 자료구조를 추가로 사용하지 않고 풀 수 있는 알고리즘 또한 고민하라.
 *
 * # 해법
 * - Set처럼 데이터의 중복을 허락하지 않는 형태로 변환한 후에 길이를 비교한다 -> 길이가 다르면 중복된 문자가 존재
 * - Hash 함수로 문자별로 분류하여 Hash table에 넣는다. 분류할 때 이미 table에 있으면 중복된 문자가 존재
 * - 문자열을 정렬한 후 순차적으로 같은 문자가 이어지는지 확인한다
 * - Hash table 대신에 bit vector를 사용한다
 *
 * # Early return
 * - ASCII 코드를 사용한다면 문자열의 길이가 128글자 이상이면 false
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

// bit vector를 사용한 예시 (디버깅 가능한 형태로 변형)
export function hasRepeatedCharactersUsingBitVector(str) {
    const debuggerTable = []
    let checker = 0
    for (let i = 0; i < str.length; i++) {
        // let val = str.charCodeAt(i) - 'a'.charCodeAt(0)
        // 이 부분을 아래와 같이 바꾸면 책에서 나온 입력값이 영어로 한정되는 제약이 사라진다.
        let val = str.charCodeAt(i)
        if ((checker & (1 << val)) > 0) {
            console.log(checker.toString(2))
            console.log((1 << val).toString(2))
            debugger
            return true // Found a repeated character
        }
        debuggerTable.push({
            val,
            'checker.toString(2)': checker.toString(2),
            '(1 << val).toString(2)': (1 << val).toString(2),
            'bitwise or 된 checker.toString(2)': (
                checker |
                (1 << val)
            ).toString(2),
        })
        checker |= 1 << val
    }
    console.table(debuggerTable)
    return false // No repeated characters found
}
