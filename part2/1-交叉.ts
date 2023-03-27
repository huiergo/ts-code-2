
// 场景： 比如说我们经常把表格中的 接口数据合并
// 比如说： 学生， 老师
interface IBasic {
    name: string,
    age: number
}

type Student = IBasic & {
    study_direction: 'web' | 'Java',
}

type Teacher = IBasic & {
    teachingAge: number,
    course: string
}

let teacher: Teacher = {
    name: 'tom',
    age: 50,
    teachingAge: 10,
    course: 'js',
}

// 场景二： 也可以定义一些行为
interface IMp5 {
    music(): void
    watchMovie(): void
}

interface IAlarmClock {
    warmUp(): void
}

let iphone: IMp5 & IAlarmClock = {
    music() {

    },
    watchMovie() {

    },
    warmUp() {

    }
}


export { }