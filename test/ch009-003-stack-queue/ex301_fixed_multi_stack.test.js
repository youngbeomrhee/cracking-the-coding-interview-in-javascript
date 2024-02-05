import { fixedMultiStack } from '../../src/ch009-003-stack-queue/ex301_fixed_multi_stack'

describe('배열 한 개로 스택 세 개를 구현', () => {
    function stackTest(st) {
        expect(st.peek()).toBe(null)
        st.push(1)
        st.push(2)
        st.push(3)
        expect(st.peek()).toBe(3)
        st.pop()
        expect(st.peek()).toBe(2)
        st.pop()
        expect(st.peek()).toBe(1)
        st.pop()
        expect(st.peek()).toBe(null)
        st.pop()
        expect(st.peek()).toBe(null)
    }

    test('3개', () => {
        const stacks = fixedMultiStack(3)

        stacks.forEach((st) => stackTest(st))
    })

    test('5개', () => {
        const stacks = fixedMultiStack(5)

        stacks.forEach((st) => stackTest(st))
    })
})
