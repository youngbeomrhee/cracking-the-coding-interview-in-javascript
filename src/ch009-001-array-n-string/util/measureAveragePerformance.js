function measureAveragePerformance(description, iterations = 1, func) {
    let totalDuration = 0

    for (let j = 0; j < iterations; j++) {
        const startTime = performance.now()

        func()

        const endTime = performance.now()
        totalDuration += endTime - startTime
    }

    const averageDuration = totalDuration / iterations
    console.log(
        `${description} ${iterations}회 수행시 평균 수행 시간 : ${averageDuration} 밀리초`
    )
}

export { measureAveragePerformance }
