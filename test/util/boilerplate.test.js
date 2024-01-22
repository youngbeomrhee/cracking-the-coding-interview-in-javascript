describe('설명', () => {
    const data = [
        ['input1', true],
        ['input2', true],
    ]

    describe('test1', () => {
        test.each(data)('%s -> %s', (str, expected) => {
            // 실제 실행할 함수로 변경
            expect(true).toBe(expected)
        })
    })
})
