// 1、typeof
function handle(idCard: string | number) {
    if (typeof idCard === 'string') {
        return idCard.length
    } else {
        return idCard.toFixed(2)
    }
}

handle('233454')

handle(1234)

// 2、instanceof
class Cat {
    helloCat() {
        console.log('cat...')
    }

}

class Dog {
    helloDog() {
        console.log('dog...')
    }
}

function helloAnimal(pet: any) {
    if (pet instanceof Cat) {
        pet.helloCat()
    } else if (pet instanceof Dog) {
        pet.helloDog()
    } else {

    }
}

// 3、in 
type Animal = Cat | Dog

function getPet(pet: Animal) {
    if ("helloCat" in pet) {
        pet.helloCat()
    } else {
        pet.helloDog()
    }
}

getPet(new Dog())

// 4、自定义类型保护
function isCat(pet: Animal): pet is Cat {
    return (pet as Cat).helloCat! == undefined
}

function getPet1(pet: Animal) {
    //  如果走到这里的话，就是cat
    if (isCat(pet)) {
        pet.helloCat()
    } else {
        pet.helloDog()
    }
}
getPet1(new Dog())

