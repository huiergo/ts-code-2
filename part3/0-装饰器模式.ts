interface ICalculate {
    calculate(): void
}

class Calculator implements ICalculate {
    calculate(): void {

    }
}

class TimeDecorator implements ICalculate {
    cal: ICalculate
    constructor(cal: ICalculate) {
        this.cal = cal
    }
    calculate(): void {
        let startTime = new Date().getTime()
        this.cal.calculate()
        let spendTime = new Date().getTime() - startTime
        console.log('耗时： ', spendTime)
    }
}


class LogDecorator implements ICalculate {
    cal: ICalculate
    constructor(cal: ICalculate) {
        this.cal = cal
    }
    calculate(): void {
        console.log("--->>>", "方法开始执行");
        this.cal.calculate()
        console.log("--->>>", "方法开始执行");

    }
}


let cal = new Calculator()
let decorator = new LogDecorator(new TimeDecorator(cal))
decorator.calculate()

export { }