// 一、查询操作符 keyof T
interface Person {
    name: string,
    age: number
}

let k: keyof Person; // 'name' | 'age'
k = 'age'
k = 'name'

// 二、索引访问操作符 T[K]
let k2: Person['age']

// 三、实际应用（看下上面学习的2个操作符，他能解决什么问题）
let person: Person = {
    name: 'ding',
    age: 18
}
// function getValue(obj: any, keys: string[]) {
//     return keys.map(key => obj[key])
// }

getValue(person, ['name', 'age']) // ['ding',18]
getValue(person, ['career'])


// 我们这里的问题就是，给他一个不存在的属性名， ts编译器并没有报错提示，所以这里我们需要对 K 进行限定
// 那我们刚才学的哪一个可以做到遍历某个对象的所有属性

// 改造： 
function getValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}

// 所以这里我们就用 泛型约束 结合 keyof操作符 ， 对他进行一个整体约束

// PS： 
// 总结：这里细心的小伙伴还会发现，这里的泛型方法，为什么没有传递泛型，鼠标移上去看下提示，这里其实ts的类型推导帮助我们做了一些事情。
// 因为xx 和 xx 是关联的,所以他就自动推断了。知道一些概念还是原理之后，  不管自己写也好，看源码也好，就很清楚了

export { }