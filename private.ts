// // private protected public 访问类型
// // public 允许我在类的内外被调用
// // private 允许在类内使用
// // protected 允许在类内及继承的子类使用 
// // class Person { 
// //     public name: string = '';
// //     public sayHi() {
// //         console.log("hi");
// //     }
// // }

// // const person = new Person();
// // person.name = 'dell';
// // console.log(person.name);
// // person.sayHi();

// // class Person{
// //     // 传统写法
// //     // public name:string;
// //     // constructor(name: string) {
// //     //     this.name = name;
// //     // }
// //     // 简化写法
// //     constructor(public name: string) {
        
// //     }
// // }
// // const person = new Person('dell');
// // console.log("person", person.name);


// class Person {
//     constructor(public name: string) {

//     }
// }

// class Teacher extends Person {
//     constructor(public age: number) {
//         super('dell');
//     }
// }

// const teacher = new Teacher(28);
// teacher.age = 22