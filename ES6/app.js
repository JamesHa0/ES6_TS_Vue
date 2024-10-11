import { firstname, lastname as name, add, plus, Point } from "./test1.js";
import test from "./test1.js";

console.log("名称：" + firstname + "\t" + name);

console.log("add调用：" + add(100, 200));

console.log("plus调用：" + plus(23, 78));

let p = new Point(50, 100);
console.log(p.toString());

test(123);