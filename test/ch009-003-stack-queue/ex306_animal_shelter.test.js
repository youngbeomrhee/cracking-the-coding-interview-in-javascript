import {
    AnimalShelter,
    Cat,
    Dog,
} from '../../src/ch009-003-stack-queue/ex306_animal_shelter'

describe('', () => {
    test('', () => {
        const shelter = new AnimalShelter()
        shelter.enqueue(new Dog('Dog1'))
        shelter.enqueue(new Cat('Cat1'))
        shelter.enqueue(new Dog('Dog2'))
        shelter.enqueue(new Cat('Cat2'))

        expect(shelter.dequeueAny().name).toBe('Dog1') // 가장 오래된 동물 Dog1 출력
        expect(shelter.dequeueDog().name).toBe('Dog2') // 다음으로 오래된 개 Dog2 출력
        expect(shelter.dequeueCat().name).toBe('Cat1') // 다음으로 오래된 고양이 Cat1 출력
        expect(shelter.dequeueDog()).toBe(null) // 더이상 개가 없으므로 null
        expect(shelter.dequeueCat().name).toBe('Cat2') // 다음으로 오래된 고양이 Cat2 출력
    })
})
