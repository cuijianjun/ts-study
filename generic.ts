// // 泛型 泛指的类型
// function join<ABC> (first: ABC,second: ABC) {
//     return `${first}${second}`
// }

// function map<ABC>(params: Array<ABC>) {
//     return params
// }

// join<number>(1,1);
// map<string>(["1", "2", "3"])

// // 泛型的使用
// interface Item {
//     name: string
// }
// class DataManager<T extends Item>{
//     constructor(private data: T[]) {
        
//     }

//     getItem(index: number):string {
//         return this.data[index].name
//     }
// }


// class DataManager<T extends number | string>{
//     constructor(private data: T[]) {
        
//     }

//     getItem(index: number):string {
//         return this.data[index].name
//     }
// }

// const data = new DataManager([{
//     name: "1"
// }]);
