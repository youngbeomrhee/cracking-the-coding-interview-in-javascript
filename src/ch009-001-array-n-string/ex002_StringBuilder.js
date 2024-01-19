import { StringBuilder } from './util/StringBuilder.js'
/**
 * String
 */
const strings = new Array(1000000).fill('abcdefghij') // 길이가 10인 문자열 10,000개

console.time('StringBuilder')

let sb = new StringBuilder()

for (let i = 0; i < strings.length; i++) {
    sb.append(strings[i])
}

sb.toString()

console.timeEnd('StringBuilder')
