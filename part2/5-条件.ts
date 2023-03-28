// ● Exclude<T,U>  从T中剔除U
// type Exclude<T, U> = T extends U ? never : T;
type E1 = Exclude<string | number, string>


// ● Extract<T,U>   从T中提取U
type E2 = Extract<string | number, number>

// ● NonNullable<T> 剔除 null 和 undefined
type E3 = NonNullable<string | number | undefined | null | boolean>

// ● ReturnType<T> 获取函数返回值类型
function getUserInfo() {
    return { name: 'tom', age: 2 }
}

type E4 = ReturnType<typeof getUserInfo>

// ● Parameters<T> 获取函数参数的类型
type E5 = Parameters<(x: number, y: number) => void>

//  基本写法： T extends U ? X : Y

//  分布式： （A|B） extends U ? X : Y

//  A extends U ? X : Y  | B extends U ? X : Y
