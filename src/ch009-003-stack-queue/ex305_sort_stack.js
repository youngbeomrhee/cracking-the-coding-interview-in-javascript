import { LinkedListStack } from './util/LinkedListStack'

/**
 * 스택 정렬: 가장 작은 값이 위로 오도록 스택을 정렬하는 프로그램을 작성하라.
 * 추가적으로 하나 정도의 스택은 사용해도 괜찮지만, 스택에 보관된 요소를 배열 등의 다른 자료구조로 복사할 수는 없다.
 * 스택은 push, pop, peek, isEmpty의 네 가지 연산을 제공해야 한다
 */
export function sortStack(originalStack) {
    const sortedStack = new LinkedListStack()

    while (!originalStack.isEmpty()) {
        // originalStack의 top을 담을 임시변수
        const temp = originalStack.pop()

        // 정렬된 스택의 요소가 임시 값보다 큰 경우 원래 스택으로 다시 이동
        while (!sortedStack.isEmpty() && sortedStack.peek() > temp) {
            originalStack.push(sortedStack.pop())
        }

        // 정렬된 스택의 올바른 위치에 임시 값을 배치
        sortedStack.push(temp)
    }

    // 정렬된 요소를 원래 스택으로 다시 전송
    while (!sortedStack.isEmpty()) {
        originalStack.push(sortedStack.pop())
    }
}
