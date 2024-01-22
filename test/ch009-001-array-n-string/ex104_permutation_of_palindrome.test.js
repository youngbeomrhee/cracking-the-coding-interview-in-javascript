import {
    isPermutationOfPalindrome,
    isPermutationOfPalindrome2,
    isPermutationOfPalindrome3,
} from '../../src/ch009-001-array-n-string/ex104_is_permutation_of_palindrome'

describe('주어진 문자열이 회문의 순열인지 아닌지 확인', () => {
    const data = [
        ['Tact Coa', true],
        ['Racecar', true],
        ['Hello World', false],
        ['A Santa at NASA', true],
        ['Was it a car or a cat I saw', true],
        ['No lemon, no melon', true],
        ['Red roses', false],
        ['Top spot', true],
        ['Step on no pets', true],
        ['Never odd or even', true],
        ['Java JavaScript', false],
        ["Madam In Eden, I'm Adam", true],
        ['Mr. Owl ate my metal worm', true],
        ['Never a foot too far, even', true],
        ['Sample text', false],
        ['Eva, can I see bees in a cave', true],
        ['Stressed desserts', true],
        ['Palindrome', false],
        ['Random Words', false],
        ["Go hang a salami, I'm a lasagna hog", true],
    ]

    describe('isPalindromePermutation', () => {
        test.each(data)('%s -> %s', (str, expected) => {
            // 실제 실행할 함수로 변경
            expect(isPermutationOfPalindrome(str)).toBe(expected)
        })
    })

    describe('isPalindromePermutation2', () => {
        test.each(data)('%s -> %s', (str, expected) => {
            // 실제 실행할 함수로 변경
            expect(isPermutationOfPalindrome2(str)).toBe(expected)
        })
    })

    describe('isPermutationOfPalindrome3', () => {
        test.each(data)('%s -> %s', (str, expected) => {
            // 실제 실행할 함수로 변경
            expect(isPermutationOfPalindrome3(str)).toBe(expected)
        })
    })
})
