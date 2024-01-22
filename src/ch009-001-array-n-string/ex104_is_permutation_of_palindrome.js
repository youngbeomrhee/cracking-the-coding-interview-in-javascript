/**
 * 회문 순열: 주어진 문자열이 회문의 순열인지 아닌지 확인하는 함수를 작성하라.
 * # 분석
 * - 회문의 특징은 앞으로, 뒤로 읽어도 같은 문자
 * - 회문의 순열인지를 확인하는 확인하기 때문에 문자의 순서는 중요하지 않다.
 *
 * # 해법
 * -> 글자의 개수를 카운팅 했을 때 홀수인 글자가 한 글자(가운데 글자가 되는 경우) 초과인 경우는 회문이 될 수 없다
 * ex) aba -> {a: 2, b: 1} (o), abca -> {a: 2, b: 1, c: 1} (x)
 *
 * ## Early return
 * - 없음
 *
 * ## 주의
 * - 입력에 공백도 포함하므로 공백은 평가에서 제외한다 (제거하고 시작한다)
 * - 입력의 예처럼 대소문자를 구분하지 않는다 -> 대소문자 중 하나로 변환해서 평가한다
 * - 책에는 나와있지 않지만 보통 회문을 이야기할때는 영문 대소문자 등의 언어에 대한 제약과 그 외의 나머지 문자(, " ' . 등등)은 제거한다는 등의 제약이 필요하다
 */
export function isPermutationOfPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z]/g, '').toLowerCase()
    const ht = Array.from(cleanedStr).reduce((reduced, ele) => {
        reduced[ele] = (reduced[ele] ?? 0) + 1
        return reduced
    }, {})
    let oddCount = 0

    for (const char in ht) {
        if (ht[char] % 2 === 1) {
            oddCount++
        }
        if (oddCount > 1) {
            return false
        }
    }
    return true
}

// 홀수개인 문자가 2개 이상 나오면 바로 종료하는 방식
export function isPermutationOfPalindrome2(str) {
    const cleanedStr = str.replace(/[^A-Za-z]/g, '').toLowerCase()
    const chars = Array.from(cleanedStr)
    let oddCount = 0
    const ht = {}

    for (let index = 0; index < chars.length; index++) {
        const char = chars[index]
        ht[char] = (ht[char] ?? 0) + 1
        if (ht[char] % 2 === 1) {
            oddCount++
        } else {
            oddCount--
        }
    }

    return oddCount <= 1
}

// bit vector를 사용하는 방법 (입력값을 영문 대소문자로 한정)
export function isPermutationOfPalindrome3(str) {
    let bitVector = 0
    const cleanedStr = str.replace(/[^A-Za-z]/g, '').toLowerCase()
    const debuggingTable = []
    for (const char of cleanedStr) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
        debuggingTable.push({
            char,
            index,
            '2진수 1 << index': (1 << index).toString(2),
            '2진수 bitVector': bitVector.toString(2),
            'bitVector ^ 1 << index': (bitVector ^ (1 << index)).toString(2),
        })
        // XOR (두 값이 다를 경우 1, 같을 경우 0)을 활용해서 char에 해당하는 bit를 토글한다
        bitVector ^= 1 << index
    }
    console.table(debuggingTable)
    console.log(bitVector.toString(2))
    console.log((bitVector - 1).toString(2))
    // 최소 1개의 비트만 1인지 확인
    return (bitVector & (bitVector - 1)) === 0
}
