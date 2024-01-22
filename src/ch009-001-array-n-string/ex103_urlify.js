/**
 * 문자열에 들어 있는 모든 공백을 '%20'으로 바꿔주는 메서드를 작성하라.
 * 최종적으로 모든 문자를 다 담을 수 있을 만큼 충분한 공간이 이미 확보되어있으며
 * 문자열의 최종 길이가 함께 주어진다고 가정해도 된다
 *
 * # 해법
 * - 정규식으로 해결
 * - 입력 문자열의 모든 문자를 순회하면서 새로운 (문자열에 담아도 되지만 성능을 위해) 배열에 담는다. 공백문자를 만나면 '%20'으로 대체한다
 *
 * # Early return
 * - 판별하는 함수가 아니기 때문에 없음.
 */
export function urlify(str) {
    return str.replace(/ /g, '%20')
}

export function urlify2(str) {
    const urlified = []
    const chars = Array.from(str)
    for (let index = 0; index < chars.length; index++) {
        const char = chars[index]
        if (char === ' ') {
            urlified.push('%20')
        } else {
            urlified.push(char)
        }
    }
    return urlified.join('')
}
