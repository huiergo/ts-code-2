
// 1、基本联合类型
let a: number | string = 1
let b: 'a' | 'b' // 字面量联合类型


//  2、对象联合类型
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



// 3、可辨识联合类型：
type ShapeExample =
    { kind: "circle"; radius: number }
    | { kind: "square"; x: number }
    | { kind: "triangle"; x: number; y: number };


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

type Shape = Square | Rectangle | Circle

function getArea(s: Shape) {
    // 根据公共的kind属性，创建不同的类型保护区块： switch 和 case 运算符来实现类型守卫，从而保证 getArea 这个方法能够正确的计算出需要的图形面积。
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.width * s.height;
        case "circle":
            return Math.PI * s.radius * s.radius;
        //  小提示： 联合类型，支持扩展， 五边形， 排查不方便， 小技巧，定义neveer
        default:
            //  todo ? never  // https://blog.csdn.net/zxl1990_ok/article/details/125297827

            // 检查s 是不是 never类型， 如果s是never类型， 那么证明前面的分支都被覆盖了
            // 如果s 不是never类型， 那证明前面分支是有遗漏的，需要补充完善。 case 'circle'
            const shape: never = s
            throw new Error(`Unkonw Shape ${shape}`)
    }
}

export { }

