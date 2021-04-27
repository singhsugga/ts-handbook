interface IEmp { // can extend a class
    empCode: number;
    getName: () => string;
}
class Employer implements IEmp { // can implement multiple interfaces 
    #name: string; // if you set a break point and try to access at runtime, still private
    private famName: string;
    empCode: number;
    constructor(familyName: string, code: number, rawName?: string) {
        this.#name = rawName ?? "(no name)"; // undefined or ...
        this.famName = familyName || "(no family name)"; // falsy or ...
        this.empCode = code;
    }
    log = (): void => console.log(this.#name + this.famName);
    getName = (): string => this.#name;
}

/* -------------------------Inheritance------------------------ */

class Person {
    name: string;
    constructor(name: string) { this.name = name; }
}
class Employee extends Person {
    empCode: number;
    constructor(empcode: number, name: string) {
        super(name);
        this.empCode = empcode;
    }
    displayName = (): void => console.log(this.name + " " + this.empCode);
}
