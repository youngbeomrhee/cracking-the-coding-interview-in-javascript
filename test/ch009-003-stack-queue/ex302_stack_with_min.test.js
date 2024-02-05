import { StackWithMin } from '../../src/ch009-003-stack-queue/ex302_stack_with_min'

describe('스택 min', () => {
    test('', () => {
        const st = new StackWithMin()
        expect(st.min()).toBe(null)
        st.push(3)
        expect(st.min()).toBe(3)
        st.push(2)
        expect(st.min()).toBe(2)
        st.push(4)
        expect(st.min()).toBe(2)
        st.pop()
        expect(st.min()).toBe(2)
        st.pop()
        expect(st.min()).toBe(3)
        st.pop()
        expect(st.min()).toBe(null)
    })
})
