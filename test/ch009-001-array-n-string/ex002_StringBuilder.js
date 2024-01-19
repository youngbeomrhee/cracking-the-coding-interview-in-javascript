import { StringBuilder } from '../src/chapter-009-001-array-n-string/util/StringBuilder.js'
import { measureAveragePerformance } from '../src/chapter-009-001-array-n-string/util/measureAveragePerformance.js'

measureAveragePerformance('StringBuilder를 사용한 문자열 합치기', 100, () => {
    let strings = new Array(1000000).fill('abcdefghij') // 길이가 10인 문자열 10,000개

    let sb = new StringBuilder()

    for (let i = 0; i < strings.length; i++) {
        sb.append(strings[i])
    }
    sb.toString()
})
