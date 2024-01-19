/**
 * + 연산자로 문자열을 이어 붙이는 경우
 * @see ex000_StringBuilder.js
 */
const strings = new Array(1000000).fill('abcdefghij') // 길이가 10인 문자열 10,000개

console.time('+ 연산자')

let combinedStringPlus = ''
for (let i = 0; i < strings.length; i++) {
    combinedStringPlus += strings[i]
}

combinedStringPlus.toString()

console.timeEnd('+ 연산자')
