const box = document.getElementById('img') as HTMLImageElement
box.src = ''


const person = {};

person.name = 'ding'; // Error: 'name' 属性不存在于 ‘{}’
person.age = 20; // Error: 'age' 属性不存在于 ‘{}’



// // 改造： 
// interface Person {
//     name: string;
//     age: number;
//   }
// const person = {} as Person
// person.name = 'ding'
// person.age = 18

// 1、不能滥用  as  // 丧失代码提示功能
// 2、<> 
const person2 = <Person>{} 