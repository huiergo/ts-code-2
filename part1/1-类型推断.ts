
let x: number = 0
x = '12'


let y = 1
y = '12'

let e = (x = 1) => x + 1


interface AddFunction {
    (x: number, y: number): number;
}

let add: AddFunction = (x, y) => {
    return x + y;
}



export { }