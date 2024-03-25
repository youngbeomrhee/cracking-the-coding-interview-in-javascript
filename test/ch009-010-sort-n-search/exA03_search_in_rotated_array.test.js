import { searchInRotatedArray } from '../../src/ch009-010-sort-n-search/exA03_search_in_rotated_array'

describe('searchInRotatedArray', () => {
    const data = [
        [[[4, 5, 1, 2, 3], 3], 4],
        [[[6, 7, 8, 1, 2, 3, 4, 5], 3], 5],
        [[[9, 1, 2, 3, 4, 5, 6, 7, 8], 9], 0],
        [[[2, 3, 4, 5, 6, 7, 8, 9, 1], 1], 8],
        [[[3, 4, 5, 1, 2], 5], 2],
        [[[7, 8, 9, 1, 2, 3, 4, 5, 6], 4], 6],
        [[[1, 2, 3, 4, 5], 6], -1],
        [[[8, 9, 1, 2, 3, 4, 5, 6, 7], 8], 0],
        [[[5, 6, 7, 8, 1, 2, 3, 4], 2], 5],
        [[[9, 1, 2, 3, 4, 5, 6, 7, 8], 7], 7],
        [[[2, 3, 4, 5, 6, 7, 8, 9, 1], 9], 7],
        [[[4, 5, 6, 7, 8, 9, 1, 2, 3], 1], 6],
        [[[6, 7, 8, 9, 1, 2, 3, 4, 5], 5], 8],
        [[[7, 8, 9, 1, 2, 3, 4, 5, 6], 6], 8],
        [[[3, 4, 5, 6, 7, 8, 9, 1, 2], 1], 7],
        [[[5, 1, 2, 3, 4], 4], 4],
        [[[1, 2, 3, 4, 5, 6, 7, 8, 9], 3], 2],
        [[[9, 1, 2, 3, 4, 5, 6, 7, 8], 4], 4],
        [[[8, 9, 1, 2, 3, 4, 5, 6, 7], 6], 7],
        [[[2, 3, 4, 5, 6, 7, 8, 9, 1], 8], 6],
        [[[4, 4, 5, 5, 1, 1, 2, 2, 3, 3], 2], 6],
        [[[6, 7, 7, 8, 8, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 3], 9],
        [[[9, 9, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8], 7], 14],
        [[[2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 1, 1], 9], 14],
        [[[3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 1, 1, 2, 2], 1], 14],
    ]

    describe('초기구현', () => {
        test.each(data)('%s -> %s', ([arr, target], expected) => {
            expect(searchInRotatedArray(arr, target)).toBe(expected)
        })
    })
})
