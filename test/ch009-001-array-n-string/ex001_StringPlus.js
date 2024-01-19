import { measureAveragePerformance } from '../src/chapter-009-001-array-n-string/util/measureAveragePerformance'

measureAveragePerformance('+ 연산자를 통한 문자열 합치기', 100, () => {
    let strings = new Array(1000000).fill('abcdefghij') // 길이가 10인 문자열 10,000개

    let combinedStringPlus = ''
    for (let i = 0; i < strings.length; i++) {
        combinedStringPlus += strings[i]
    }
    combinedStringPlus.toString()
})
