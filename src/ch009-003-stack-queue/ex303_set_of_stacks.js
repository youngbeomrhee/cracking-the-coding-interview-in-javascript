/**
 * 접시 무더기: 접시 무더기를 생각해 보자. 접시를 너무 높이 쌓으면 무너져 내릴 것이다.
 * 따라서 현실에서는 접시를 쌓다가 무더기가 어느 정도 높아지면 새로운 무더기를 만든다.
 * 이것을 흉내 내는 자료구조 SetOfStacks를 구현해 보라.
 * SetOfStacks는 여러 개의 스택을 구성되어 있으며, 이전 스택이 지정된 용량을 초과하는 경우 새로운 스택을 생성해야 한다.
 * SetOfStacks.push()와 SetOfStacks.pop()은 스택이 하나인 경우와 동일하게 동작해야 한다
 * (다시 말해, pop()은 정확히 하나의 스택이 있을 때와 동일한 값을 반환해야 한다).
 */
export class SetOfStacks {
    constructor(capacity) {
        this.capacity = capacity
        this.stacks = [[]]
    }

    // 새 값을 마지막 스택에 푸시하거나 필요한 경우 새 스택을 생성
    push(value) {
        let lastStack = this.stacks[this.stacks.length - 1]
        if (lastStack.length < this.capacity) {
            lastStack.push(value)
        } else {
            // 마지막 스택의 용량이 다 차면 새 스택 생성
            this.stacks.push([value])
        }
    }

    // 마지막 스택에서 마지막 값을 꺼내고 스택이 비어 있으면 스택을 제거
    pop() {
        if (this.stacks.length === 0) {
            return null
        }

        let lastStack = this.stacks[this.stacks.length - 1]
        let value = lastStack.pop()

        // 마지막 스택이 비어 있으면 스택 배열에서 제거
        if (lastStack.length === 0) {
            this.stacks.pop()
        }

        return value
    }
    peek() {
        if (this.stacks.length === 0) {
            return null
        }

        let lastStack = this.stacks[this.stacks.length - 1]

        if (lastStack.length === 0) {
            return null
        }
        return lastStack[lastStack.length - 1]
    }

    // 선택 사항: 특정 스택에서 팝하는 메서드 구현.
    popAt(stackIndex) {
        if (stackIndex < 0 || stackIndex >= this.stacks.length) {
            return null
        }

        let value = this.stacks[stackIndex].pop()

        return value
    }
}
