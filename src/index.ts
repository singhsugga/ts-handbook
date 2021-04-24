

type Combinable = number | string;
type ConversionType = "as-number" | "as-string";
/**
 * 
 * @param {number} var1 first value to combine 
 * @param {number} var2 first value to combine 
 * @param {number} ConvTarget a type to convert result to 
 * @returns {number | string}
 */
const add = (var1: Combinable, var2: Combinable, ConvTarget: ConversionType) => {
    let result: any;
    if (typeof var1 === "number" && typeof var2 === "number" || ConvTarget === "as-number") {
        result = +var1 + +var2;
        if (result === "NaN") throw new Error("variables you passed are not valid numbers")
    } else {
        result = var1.toString() + var2.toString();
    }
    return result
}
(async () => {
    console.log(add(1, 2, "as-number"));
})();

/**
 * @type {{task:string , done:boolean}}
 */
const todo = {
    task: "do stuff",
    done: true
}
