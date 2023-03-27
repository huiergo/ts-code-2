function time(value: any, context: ClassMethodDecoratorContext) {
    return function (this: any, ...args: any[]) {
        let startTime = new Date().getTime()
        value.apply(this, args)
        let spendTime = new Date().getTime() - startTime
        console.log('耗时： ', spendTime)
    }

}

function log(value: any, context: ClassMethodDecoratorContext) {
    return function (this: any, ...args: any[]) {
        console.log('---> 执行开始')
        value.apply(this, args)
        console.log('---> 执行结束')
    }
}

interface ICalculate {
    calculate(): void
}

class Calculator implements ICalculate {
    @log
    @time
    calculate(): void {
        console.log('核心逻辑')
    }

}

new Calculator().calculate()
export { }