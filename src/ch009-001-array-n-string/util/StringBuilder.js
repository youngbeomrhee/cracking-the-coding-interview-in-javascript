class StringBuilder {
    constructor() {
        this.strings = []
    }

    append(string) {
        this.strings.push(string)
    }

    toString() {
        return this.strings.join('')
    }
}

export { StringBuilder }
