import product = require("./legacy");

console.log(product(3, 4));

/**
 * Calculate the difference between two numbers
 *
 * @param a - first number
 * @param b - second number
 *
 * @beta
 */
export const subtract = (a: number, b: number): number => a - b;
