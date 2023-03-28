// X=Y  , X 兼容 Y， 

let x = { name: 'Jane' };
let y = { name: 'John', age: 30 };

x = y
// y=x


interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

let myDog: Dog = {
    name: 'doggy',
    age: 2,
    breed: 'labuladuo'
};

let myAnimal: Animal = myDog;


export { }