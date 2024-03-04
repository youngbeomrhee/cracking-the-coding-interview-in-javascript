import { findOrder } from '../../src/ch009-004-tree-n-graph/ex407_findOrder'

describe('findOrder', () => {
    test('', () => {
        // 예시 사용
        const projects = ['a', 'b', 'c', 'd', 'e', 'f']
        const dependencies = [
            ['a', 'd'],
            ['f', 'b'],
            ['b', 'd'],
            ['f', 'a'],
            ['d', 'c'],
        ]
        console.log(findOrder(projects, dependencies))
    })
})
