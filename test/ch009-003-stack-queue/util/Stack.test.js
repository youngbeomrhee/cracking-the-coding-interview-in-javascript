import { ArrayStack } from '../../../src/ch009-003-stack-queue/util/ArrayStack'
import { LinkedListStack } from '../../../src/ch009-003-stack-queue/util/LinkedListStack'

describe('ArrayStack', () => {
    test('전체 플로우 테스트', () => {
        const st = new ArrayStack()
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
    })
})

describe('LinkedListStack', () => {
    test('전체 플로우 테스트', () => {
        const st = new LinkedListStack()
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
    })
})
