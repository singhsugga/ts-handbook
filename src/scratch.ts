const x: {
    user: {
        name: string;
        adress?: {
            street: string;
            city: string;
        };
    };
} = undefined as any;
const y = x.user.adress?.city;
/*
    logs undefined if adress doesn't exist or city
*/
console.log(y);

class Foo {
    #name: string; // if you set a break point and try to access at runtime, still private
    private famName: string;
    constructor(familyName: string, rawName?: string) {
        this.#name = rawName ?? "(no name)"; // undefined or ...
        this.famName = familyName || "(no family name)"; // falsy or ...
    }
    log() {
        console.log(this.#name + this.famName);
    }
}

type Adress = [
    streetNumber: number,
    city: string,
    state: string,
    postal: number
]

function func(...adress: Adress) { /* adress is a rest parameter */ }