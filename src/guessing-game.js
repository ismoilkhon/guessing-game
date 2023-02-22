class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        return this.#calculateAvarage()
    }

    lower() {
        this.max = this.#calculateAvarage()
        return this.max
    }

    greater() {
        this.min = this.#calculateAvarage()
        return this.min
    }

    #calculateAvarage() {
        return Math.round((this.min + this.max) / 2)
    }
}

module.exports = GuessingGame;
