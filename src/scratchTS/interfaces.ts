interface IEmployee {
    readonly empCode: number; // defined then never changed
    empName?: string;
    getSalary: (number: number) => number; // arrow function
    getManagerName(number: number): string;
}
const emp1: IEmployee = {
    empCode: 1,
    getSalary: (n) => n,
    getManagerName: (n) => ""
}

/* -------------------------Function Type------------------------ */

interface KeyValueProcessor {
    (key: number, value: string): void;
};
const addKeyValue = (key: number, value: string): void => console.log(key, value);
let kvp: KeyValueProcessor = addKeyValue;

/* -------------------------Type of Array------------------------ */

interface INumberList {
    [index: number]: number
}
let strArr: INumberList = [1, 2, 3]

/* ------------------------------------------------- */



