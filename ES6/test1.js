export var firstname = "James";
export var lastname = "Hao";
export var year = 2001;
export function add(x, y) {
    return x + y;
}

export function plus(x, y) {
    return x - y;
}

export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x},${this.y})`;
    }
}

export default function (x) {
    console.log("默认导出函数，参数是：" + x);
}

