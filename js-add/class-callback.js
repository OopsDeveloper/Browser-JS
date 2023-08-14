class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}

function printSomething(num) {
    console.log(`Wow! ${num}`);
}

const printCounter = new Counter(printSomething);

printCounter.increase(printSomething);
printCounter.increase(printSomething);
printCounter.increase(printSomething);
printCounter.increase(printSomething);
printCounter.increase(printSomething);
printCounter.increase(printSomething);
printCounter.increase(printSomething);
printCounter.increase(printSomething);
printCounter.increase(printSomething);
printCounter.increase(printSomething);