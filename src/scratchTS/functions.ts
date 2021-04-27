type Adress = [
    streetNumber: number,
    city: string,
    state: string,
    postal: number
]
function func(...adress: Adress) { /* adress is a rest parameter */ }

/* ------------------------------------------------- */

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30 