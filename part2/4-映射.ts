// 背景：一个常见的操作是将一个已知的类型每个属性都变为可选的：
interface Person {
    name: string,
    age: number
}

interface Person_Partial {
    name?: string,
    age?: number
}

interface Person_Only {
    readonly name: string,
    readonly age: number
}


type Person_ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
    //  readonly name:string
}

// type P = Person_ReadOnly<Person>

// 1、ReadOnly
type P = Readonly<Person>

// 2、可选 Partial
type P2 = Partial<Person>

// 3、提取 Pick
type P3 = Pick<Person, 'name'>

// 4、Record 
type P4 = Record<'x' | 'y', string>

// 地名的结构
// {
//     'shanghai':{
//         x:
//         y:

//     }
//     'bj':{
//         x:
//         y:

//     }

// }