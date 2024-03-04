/**
 *
 * 2진수를 문자열로: 0.72와 같이 0과 1 사이의 실수가 double 타입으로 주어 졌을 때, 그 값을 2진수 형태로 출력하는 코드를 작성하라.
 * 길이가 32 이하인 문자열로 2진수로 정확하게 표현할 수 없다면 ERROR를 출력하라.
 */
export function convertFractionToBinary(num) {
    if (num >= 1 || num <= 0) {
        return 'ERROR'
    }

    let binary = '.'
    while (num > 0) {
        // 이진수 표현의 길이가 32를 넘어가면 ERROR 반환
        if (binary.length > 32) {
            return 'ERROR'
        }

        let r = num * 2
        if (r >= 1) {
            binary += '1'
            num = r - 1
        } else {
            binary += '0'
            num = r
        }
    }
    return binary
}
