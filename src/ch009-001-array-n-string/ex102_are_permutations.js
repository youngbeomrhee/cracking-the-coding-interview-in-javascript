/**
 * 순열 확인: 문자열 두 개가 주어졌을 때 이 둘이 서로 순열 관계에 있는지 확인하는 메서드를 작성하라
 *
 * # 해법
 * - 문자열을 정렬하고 같은지 비교
 * - 첫 번째 문자를 키로, 빈도수를 값으로 갖는 해시테이블에 담고 두 번째 문자열의 모든 문자의 빈도수로 뺀다. 한 문자라도 빈도수가 0 || undefined 라면 순열이 아니다.
 *  - 예) aba -> {a: 2, b: 1},
 *   aaa ->
 *    a => {a: 2 - 1}
 *    a => {a: 1 - 1}
 *    a => {a: 0 - 1}
 *    -> false
 *
 * # Early return
 * - 두 문자열의 길이가 다르면 순열이 될 수 없다
 */
export function isPermutation(s1, s2) {
    // 예외케이스를 찾아서 early return하면 불필요한 수행시간을 줄일 수 있다.
    if (s1.length !== s2.length) {
        return false
    }
    return Array.from(s1).sort().join('') === Array.from(s2).sort().join('')
}

export function isPermutationUsingHash(s1, s2) {
    // 예외케이스를 찾아서 early return하면 불필요한 수행시간을 줄일 수 있다.
    if (s1.length !== s2.length) {
        return false
    }

    const ht = {}

    for (const char of s1) {
        ht[char] = (ht[char] ?? 0) + 1
    }

    for (const char of s2) {
        if (!ht[char]) {
            return false
        }
        ht[char] -= -1
    }

    return true
}
