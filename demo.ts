// // interface Point {
// //   x: number;
// //   y: number;
// // }

// // function tsDemo(data: Point) {
// //   console.log("222");
// //   return Math.sqrt(data.x ** 2 + data.y ** 2);
// // }

// // tsDemo({ x: 1, y: 123 });

// // let count: number;
// // count = 123;

// // const func = (str: string): number => {
// //   return parseInt(str, 10);
// // };

// // const func1: (str: string) => number = (str) => {
// //   return parseInt(str, 10);
// // };

// // const date = new Date();
// // interface Person {
// //   name: "string";
// // }

// // const rawData = '{"name": "dell"}';
// // const newData: Person = JSON.parse(rawData);

// // let temp: number | string = 123;
// // temp = "123";

// // const numberArray: (number | string)[] = [1, 2, 3];
// // const stringArr: string[] = ["1", "2"];

// // type User = { name: string; age: number };

// // class Teacher {
// //   name: string;
// //   age: number;
// // }

// // const objectArr: Teacher[] = [
// //   {
// //     name: "dell",
// //     age: 28,
// //   },
// // ];

// // // 元祖 tuple
// // const teacherInfo:[string, string, number] = ["Dell", "male", 18]

// // 接口
// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: any;
//   say(): string;
// }

// interface Teacher extends Person {
//     teach():string;
// }

// interface SayHi {
//     (word: string): string
// }

// const say:SayHi= (word: string) => {
//     return word;
// }

// const getPersonName = (person: Person): void => {
//   console.log(person.name);
// };

// const setPersonName = (person: Person, name: string): void => {
//   person.name = name;
// };

// const person = {
//   name: "dell",
//   sex: "male",
//   say() {
//     return "say hello";
//   },
// };

// class User implements Person{
//     name = 'dell';
//     say() {
//         return ""
//     }
// }


