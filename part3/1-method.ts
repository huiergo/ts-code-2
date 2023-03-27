function time(value: any, context: ClassMethodDecoratorContext) {
    const { kind, name } = context
    const methodName = String(name)

    let startTime = new Date().getTime();
    value.apply(this, args)
    let spendTime = new Date().getTime() - startTime;
}

function log(value: any, context: ClassMethodDecoratorContext) {
    const { kind, name } = context
    const methodName = String(name)
    console.log("--->>>", "方法开始执行");
    value.apply(this, args)
    console.log("--->>>", "方法开始执行");
}


class Calculator {
    @time
    @log
    calculate(par: number) {
        //...
    }
}

export { }