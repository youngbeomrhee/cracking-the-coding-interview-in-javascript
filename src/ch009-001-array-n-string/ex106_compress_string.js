/**
 * 문자열 합축 : 반복되는 문자의 개수를 세는 방식의 기본적은 문자열 압축 메서드를 작성하라.
 * 예를 들어 문자열 aabcccccaaa를 압축하면 a2b1c5a3이 된다.
 * 만약 '압축된' 문자열의 길이가 기존 문자열의 길이보다 길다면 기존 문자열을 반환해야 한다.
 * 문자열은 대소문자 알파벳(a~z)으로만 이루어져 있다.
 */
export function compressString(str) {
    const compressedList = []
    let count = 1
    for (let index = 0; index < str.length; index++) {
        if (str[index] === str[index + 1]) {
            count++
        } else {
            compressedList.push(str[index] + count)
            // 초기화
            count = 1
        }
    }

    const compressedString = compressedList.join('')
    return compressedString.length < str.length ? compressedString : str
}
