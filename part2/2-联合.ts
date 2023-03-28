
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
        default:
            const shape: never = s
            throw new Error('shape error')
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

