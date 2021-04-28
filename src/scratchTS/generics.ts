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

/* ------------------------Generic Interface as function types------------------------- */

interface KeyValueValueProcessor<T, U> {
    (key: T, val: U): void;
}
function processNumKeyPairs<T, U>(key: T, value: U): void {
    console.log(key, value);
}

let numKVProcessor: KeyValueValueProcessor<number, number> = processNumKeyPairs;
numKVProcessor(1, 123);
/* ----------------------------------------------------------- */
interface IKeyValueProcessor<T, U> { process(key: T, val: U): void; };
class kvProcessor implements IKeyValueProcessor<number, string>
{
    process = (key: number, val: string): void => console.log(key, val);
}
let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'Bill'); //Output: processKeyPairs: key = 1, value = Bill 

/* ------------------------ Generic Class ------------------------- */

class KeyValuePair<T, U>{
    private key: T;
    private value: U;
    constructor(key: T, value: U) {
        this.value = value;
        this.key = key;
    }
    log = (): void => console.log(this.key, this.value);
}

let kvp1 = new KeyValuePair<number, string>(1, "");
kvp1.log();