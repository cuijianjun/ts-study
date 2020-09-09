interface Bird {
    fly: boolean;
    sing: () => {};
}

interface Dog {
    fly: boolean;
    bark: () => {};
}

// 类型断言
function trainAnimal(animal: Bird| Dog) {
    if (animal.fly) {
        (animal as Bird).sing()
    } else {
        (animal as Dog).bark(); 
    }
}

// in 语法来做类型保护
function trainAnimalSecond(animal: Bird | Dog) {
    if ('sing' in animal) {
        animal.sing()
    } else {
        animal.bark();
    }
}

// typeof 语法；来做类型保护
function add (first: string | number, second: string | number) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`
    }
    return first + second
}

// 使用instanceof 语法来做类型保护
class NumberObj {
    count =  Number;
}

function addSecond (first: Object | NumberObj, second: object|NumberObj) {
    return first.count + second.count
}