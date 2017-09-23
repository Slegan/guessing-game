class GuessingGame {
    constructor() {
      this.minValue;
      this.maxValue;
      this.possibleResult;
    }

    setRange(min, max) {
      this.minValue = min;
      this.maxValue = max;
    }

    guess() {
      this.possibleResult = Math.round((this.maxValue - this.minValue)/2);
      return this.possibleResult;
    }

    lower() {
      this.maxValue = this.possibleResult;
    }

    greater() {
      this.minValue = -this.possibleResult;
    }
}

module.exports = GuessingGame;
