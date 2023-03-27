function logMethod(value: any, context: ClassSetterDecoratorContext) {
    return function (this: any, ...args: any[]) {
        console.log(this, args)
        if (args[0] > 120) {
            value.apply(this, [120])
        } else {
            value.apply(this, args)
        }
    }

}

class User4 {
    private age: number = 0

    @logMethod
    set sValue(age: number) {
        this.age = age
    }

    get gValue() {
        return this.age
    }
}
const user4 = new User4()
user4.sValue = 123

console.log(user4.gValue)