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
// logs undefined if adress doesn't exist or city
console.log(y);

/* -----------------------recursive type alias-------------------------- */
type JsonValue = string | number | boolean | null | JsonValue[] | {
    [k: string]: JsonValue;
};

const val: JsonValue = {
    name: "mike",
    adress: {
        street: "Spear St"
    }
}
/* -------------------------literal type------------------------ */

type Corner = `${"top" | "bottom"}${"left" | "right"}`

