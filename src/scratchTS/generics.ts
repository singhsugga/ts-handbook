const getArray = <T>(items: T[]): T[] => new Array<T>().concat(items);

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK
myNumArr.push("Hi"); // Compiler Error
myStrArr.push(500); // Compiler Error

/* ------------------------Multiple Type Variables------------------------- */

const displayType = <T, U>(id: T, name: U): void => {
    console.log(typeof (id) + ", " + typeof (name));
}

displayType<number, string>(1, "Steve"); // number, string

/* ------------------------Generic Interface------------------------- */

interface KeyPair<T, U> {
    key: T;
    process: (a: T, b: T) => U;
}
let kv1: KeyPair<number, string> = { key: 1, process: (a: number, b: number) => "text" }; // OK

