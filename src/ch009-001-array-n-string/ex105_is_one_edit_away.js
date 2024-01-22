/**
 * 하나 빼기: 문자열을 편집하는 방법에는 세 가지 종류가 있다. 문자 삽입, 문자 삭제, 문자 교체.
 * 문자열 두 개가 주어졌을 때, 문자열을 같게 만들기 위한 편집 횟수가 1회 이내인지 확인하는 함수를 작성하라.
 *
 * # 해법
 * - 첫 번째 문자열의 모든 문자와 두 번째 문자열의 모든 문자의 차이가 1개인 경우를 찾는다
 *  - 포인터 2개를 설정하여 하나씩 이동하면서
 *
 * # EarlyReturn
 * - 글자수의 차이가 2 이상이면 false
 */
export function isOneEditAway(str1, str2) {
    if (Math.abs(str1.legnth - str2.legnth) > 1) {
        return false
    }

    // 길이가 긴 문자열과 짧은 문자열 찾기
    const shortString = str1.length < str2.length ? str1 : str2
    const longString = str1.length < str2.length ? str2 : str1

    let shortIndex = 0
    let longIndex = 0
    let foundDifference = false
    // 책의 설명과 달리 입력값에 대한 제약이 없었기 때문에 아래처럼 || 조건으로 바꿔야 한다.
    while (shortIndex < shortString.length || longIndex < longString.length) {
        if (shortString[shortIndex] !== longString[longIndex]) {
            // 이미 다른 문자가 한 번 발견된 상태에서 또 발견됐으면 종료
            if (foundDifference) {
                return false
            }
            foundDifference = true

            // 문자열의 길이가 같으면 둘 다 index 증가
            if (shortString.length === longString.length) {
                shortIndex++
            }
        } else {
            // 두개의 문자가 같다면 짧은 문자열의 index도 증가
            shortIndex++
        }
        // 긴 문자열의 index는 항상 증가
        longIndex++
    }

    return true
}
