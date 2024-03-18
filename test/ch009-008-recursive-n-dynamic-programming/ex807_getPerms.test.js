import {
    getPerms,
    getPerms2,
} from '../../src/ch009-008-recursive-n-dynamic-programming/ex807_getPerms'

describe('getPerms', () => {
    test('getPerms1', () => {
        const result = getPerms('abc')
        console.log(result)
    })
    test('getPerms2', () => {
        const result = getPerms2('abc')
        console.log(result)
    })
})
