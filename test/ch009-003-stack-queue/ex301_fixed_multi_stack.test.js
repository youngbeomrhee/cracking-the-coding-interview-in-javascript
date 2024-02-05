import { fixedMultiStack } from '../../src/ch009-003-stack-queue/ex301_fixed_multi_stack'
import { runStackTest } from './util/Stack.test'

describe('배열 한 개로 스택 세 개를 구현', () => {
    test('3개', () => {
        const stacks = fixedMultiStack(3)

        stacks.forEach((st) => runStackTest(st))
    })

    test('5개', () => {
        const stacks = fixedMultiStack(5)

        stacks.forEach((st) => runStackTest(st))
    })
})
