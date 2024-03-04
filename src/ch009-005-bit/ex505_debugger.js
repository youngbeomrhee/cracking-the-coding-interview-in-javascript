/**
 * 디버거: 다음 코드가 하는 일을 설명하라.
 * (n & (n - 1)) === 0
 */
function codeDebugger(
    code = '(n & (n - 1)) === 0',
    logging = 'console.table(`# n = ${n}: \n${n.toString(2)}(2) -> ${n}(10)\n ${(n - 1).toString(2)}(2) -> ${n - 1}(10)\n`)',
    minValue = -100000,
    maxValue = 100000
) {
    for (let n = minValue; n < maxValue; n++) {
        if (eval(code)) {
            eval(logging)
        }
    }
}

codeDebugger()
