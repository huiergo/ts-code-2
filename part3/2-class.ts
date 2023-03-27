function Greeter(value: any, context: ClassDecoratorContext) {
    // return class extends value {
    //     constructor(...args: any[]) {
    //         super(args)
    //     }
    //     greet(): void {
    //         console.log('hello boy ')
    //     }
    // }

    value.prototype.greet = function () {
        console.log('girl..')
    }
}


@Greeter
class User {
}

let ding = new User() as any
ding.greet()

// 2、支持传参
function Greeter2(msg: string) {
    return function (value: any, context: ClassDecoratorContext) {
        return class extends value {
            constructor(...args: any[]) {
                super(args)
            }
            greet(): void {
                console.log(msg)
            }
        }
    }
}

@Greeter2('hello factory decorator')
class User2 {

}

(new User2() as any).greet();

export { }