
// 1、Exclude<T, U> 从 T 可分配给的类型中排除 U
type E1 = Exclude<string | number, string>; // 排除string剩下number
// 原理： type Exclude<T, U> = T extends U ? never : T;

// 2、Extract<T,U> 从 T 可分配给的类型中提取 U
type E2 = Extract<string | number, string>; // 提取string
// 原理： type Extract<T, U> = T extends U ? T : never;

// 3、NonNullable 从 T 中排除 null 和 undefined
type E3 = NonNullable<string | number | null | undefined>;
// 原理： type NonNullable<T> = T extends null | undefined ? never : T;

// 4、ReturnType 表示在 extends 条件语句中待推断的类型变量
function getUserInfo() {
    return { name: "randy", age: 24 };
}

// 通过 ReturnType 将 getUserInfo 的返回值类型赋给了 E4
type E4 = ReturnType<typeof getUserInfo>;


// 5、Parameters 获取函数类型的参数类型
type T1 = Parameters<(s: string) => void>; // [string]


// 总结原理： 
// 基本语法： T extends U ? X : Y
// 分布式条件类型： （A | B）extends U  ? X :Y 