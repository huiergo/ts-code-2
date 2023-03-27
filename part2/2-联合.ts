
// 1、基本联合类型
let a: number | string = 1
let b: 'a' | 'b' // 字面量联合类型


//  2、对象联合类型(只能访问公共属性)
class Cock {
    eat() {

    }
    crow() {

    }
}

class Duck {
    eat() {

    }
    swim() {

    }
}

const getPet = (pet: Cock | Duck) => {
    // 只能访问公共方法
    pet.eat()
    return pet
}

//  想要访问： 1 断言
let pet = getPet(new Cock()) as Cock
pet.crow()

//  想要访问： 2 in  建立区块保护
if ('crow' in pet) {
    pet.crow()
}


// 3、可辨识的联合类型
type ShapeExample =
    { kind: "square"; size: number }
    | { kind: "rectangle"; width: number, height: number }
    | { kind: "circle"; radius: number };


interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
// interface Triangle {
//     kind: 'triangle',
//     bottom: number
//     height: number
// }

type Shape = Square | Rectangle | Circle

function getArea(s: Shape) {
    // 根据公共的kind属性，创建不同的类型保护区块： switch 和 case 运算符来实现类型守卫，从而保证 getArea 这个方法能够正确的计算出需要的图形面积。

    switch (s.kind) {
        case 'square':
            return s.size * s.size
        case 'rectangle':
            return s.width * s.height
        case 'circle':
            return Math.PI * s.radius * s.radius
        // 小提示： 联合类型，支持扩展， 五边形， 排查不方便， 小技巧，定义neveer
        default:
            //  todo ? never  // https://blog.csdn.net/zxl1990_ok/article/details/125297827


            // 如果你把所有可能的类型都穷尽了，TypeScript 会使用一个 never 类型来表示一个不可能存在的状态。
            // never 类型可以赋值给任何类型，然而，没有类型可以赋值给 never （除了 never 自身）。这就意味着你可以在 switch 语句中使用 never 来做一个穷尽检查 .

            // 检查s 是不是 never类型， 如果s是never类型， 那么证明前面的分支都被覆盖了
            // 如果s 不是never类型， 那证明前面分支是有遗漏的，需要补充完善。 case 'circle'

            const shape: never = s
            throw new Error('shape error')

        // 因为 TypeScript 的收窄特性，执行到 default 的时候，类型被收窄为 Triangle，但因为任何类型都不能赋值给 never 类型，这就会产生一个编译错误。通过这种方式，你就可以确保 getArea 函数总是穷尽了所有 shape 的可能性。
    }
}



let triangle: Triangle = {
    kind: 'triangle',
    bottom: 10,
    height: 5
}

let result = getArea(triangle)
console.log(result)
export { }

