// X=Y  , X 兼容 Y， 

let x = { name: 'Jane' };
let y = { name: 'John', age: 30 };

x = y
// y=x


interface Animal1 {
    name: string;
    age: number;
}

interface Dog1 extends Animal1 {
    breed: string;
}

let myDog: Dog1 = {
    name: 'Max',
    age: 2,
    breed: 'Golden Retriever'
};

let myAnimal: Animal1 = myDog;


export { }