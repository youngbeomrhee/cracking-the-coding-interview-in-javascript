export class Animal {
    constructor(name) {
        this.name = name
        this.order = 0 // 입양 대기 시간(순서)을 나타낼 변수
    }

    setOrder(order) {
        this.order = order
    }

    isOlderThan(animal) {
        return this.order < animal.order
    }
}

export class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}

export class Cat extends Animal {
    constructor(name) {
        super(name)
    }
}

export class AnimalShelter {
    constructor() {
        this.dogs = []
        this.cats = []
        this.order = 0 // 전체 동물에 대한 순서를 관리하기 위한 변수
    }

    enqueue(animal) {
        animal.setOrder(this.order)
        this.order++

        if (animal instanceof Dog) {
            this.dogs.push(animal)
        } else if (animal instanceof Cat) {
            this.cats.push(animal)
        }
    }

    dequeueAny() {
        if (this.dogs.length === 0) {
            return this.dequeueCat()
        }
        if (this.cats.length === 0) {
            return this.dequeueDog()
        }

        let dog = this.dogs[0]
        let cat = this.cats[0]

        if (dog.isOlderThan(cat)) {
            return this.dequeueDog()
        } else {
            return this.dequeueCat()
        }
    }

    dequeueDog() {
        return this.dogs.shift() ?? null
    }

    dequeueCat() {
        return this.cats.shift() ?? null
    }
}
