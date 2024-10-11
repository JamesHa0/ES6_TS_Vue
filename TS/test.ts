// let a: string = '123';

// let b1: number = 123;
// let b2: number = 1.23;

// let c: Boolean = true;

// let demo = (x: number, y: number) => {
//     return x + y;
// }

// console.log(demo(b1, b2));


// let a: unknown = "hello";

// let b: unknown = (a as string).toUpperCase();
// console.log(b);

// 设置a的类型为unknown
// let a: unknown
// a = 'hello'

// let x: string
// x = a;
// console.log(x);


// //第⼀种⽅式：加类型判断
// if (typeof a === 'string') {
//     x = a
//     console.log(x)
// }

// //第⼆种⽅式：加断⾔
// x = a as string

// //第三种⽅式：加断⾔
// x = <string>a


// // 定义⼀个描述【上下左右】⽅向的枚举Direction
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction) // 打印Direction会看到如下内容
// /*
// {
//     0:'Up',
//     1:'Down',
//     2:'Left',
//     3:'Right',
//     Up:0,
//     Down:1,
//     Left:2,
//     Right:3
// }
// */
// // 反向映射
// console.log(Direction.Up)
// console.log(Direction[0])

// // 此⾏代码报错，枚举中的属性是只读的
// Direction.Up = 'shang'



// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         console.log(`name:${this.name},age:${this.age}`);
//     }
// }

// const p1 = new Person(`JamesHao`, 22);
// p1.speak();

// class Student extends Person {
//     grade: string;

//     constructor(name: string, age: number, grade: string) {
//         super(name, age);
//         this.grade = grade;
//     }

//     override speak() {
//         console.log(`name:${this.name},age:${this.age},grade:${this.grade}`);

//     }


//     study() {
//         console.log(`${this.name} is studying hardly...`);

//     }
// }

// const s1 = new Student("Hames", 18, "freshman");
// s1.speak();
// s1.study();


// abstract class Package {
//     constructor(public weight: number) {

//     }

//     abstract calculate(): number;

//     out() {
//         console.log(`weight:${this.weight}kg,price:${this.calculate()}yuan.`);

//     }
// }


// class SF extends Package {
//     constructor(
//         weight: number,
//         public unitPrice: number
//     ) {
//         super(weight);
//     }

//     calculate(): number {
//         return this.weight * this.unitPrice;
//     }

// }
// const t1 = new SF(8, 5);
// t1.out();

// class EMS extends Package {
//     constructor(
//         weight: number,
//         private unitPrice: number,
//         private additional: number,
//         private addr: string
//     ) {
//         super(weight);
//     }

//     calculate(): number {
//         if (this.weight > 10) {
//             return 10 * this.unitPrice + (this.weight - 10) * this.additional;
//         } else {
//             return this.weight * this.unitPrice;
//         }
//     }

//     override out() {
//         console.log(`EMS:weight:${this.weight},price:${this.calculate()}yuan,addr:${this.addr}.`);

//     }
// }

// const t2 = new EMS(12, 4, 6, 'harbin');
// t2.out();



// interface PersonInterface {
//     name: string;
//     age: number;
//     speak(n: number): void;
// }

// class Person implements PersonInterface {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     speak(n: number): void {
//         for (let i = 0; i < n; i++) {
//             console.log(`${i + 1}:my name is ${this.name},and I'm ${this.age}.`);
//         }
//     }
// }

// const p1 = new Person("JamesHao", 22);
// // p1.speak(5);

// interface UserInterface {
//     name: string;
//     readonly gender: string;
//     age?: number;
//     run: (n: number) => void;
// }

// const u1: UserInterface = {
//     name: "james",
//     gender: "male",
//     age: 22,
//     run(n) {
//         console.log(`I have run ${n}m.`);
//     }
// }

// // u1.run(5);

// interface CountInterface {
//     (a: number, b: number): number;
// }
// const count: CountInterface = (x, y) => {
//     return x + y;
// }

// // console.log(count(1, 2));

// interface PersonInterface {
//     name: string;
//     age: number;
// }

// interface StudentInterface extends PersonInterface {
//     grade: string;
// }

// const s1: StudentInterface = {
//     name: "Jame",
//     age: 22,
//     grade: "freshman",
//     speak(n: number) {
//         for (let i = 0; i < n; i++) {
//             console.log(`${i + 1}:My name is ${this.name},${this.age} years old and I'm ${this.grade}.`);
//         }

//     }
// }

// // s1.speak(5);


// function logData<T>(data: T) {
//     console.log(data);
//     return data;
// }

// logData<number>(100);
// logData<string>('hello');

// function logData<T, U>(data1: T, data2: U): T | U {
//     console.log(data1, data2);
//     return Date.now() % 2 ? data1 : data2;
// }

// logData<number, string>(100, 'hello');
// logData<string, boolean>('ok', true);

// interface PersonInterface<T> {
//     name: string,
//     age: number,
//     extraInfo: T
// }

// let p1: PersonInterface<string>;
// let p2: PersonInterface<number>;

// p1 = { name: '33', age: 18, extraInfo: "goodman" };
// p2 = { name: "66", age: 22, extraInfo: 111 };

// interface LengthInterface {
//     length: number;
// }

// function logPerson<T extends LengthInterface>(data: T): void {
//     console.log(data.length);

// }

// logPerson<string>("hello");


// class Person<T> {
//     constructor(
//         public name: string,
//         public age: number,
//         public extraInfo: T
//     ) {

//     }
//     speak() {
//         console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
//         console.log(this.extraInfo);
//     }
// }

// const p1 = new Person<number>("James", 22, 114514);

// type JobInfo = {
//     title: string;
//     company: string;
// }

// const p2 = new Person<JobInfo>("tom", 30, { title: '研发总监', company: '发发发科技公司' });



// example.ts
import { add, mul } from "./demo.js";
const x = add(2, 3); // x 类型为 number
const y = mul(4, 5); // y 类型为 number
console.log(x, y)