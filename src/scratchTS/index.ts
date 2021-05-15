// @ts-expect-error
const num: number = "ABC";

const somethingReskhy = () => console.log("Booooo !");
const assertIsError = (err: any): asserts err is Error => {
    if (!(err instanceof Error)) throw new Error("Not an error : " + err);
}

try {
    somethingReskhy();
} catch (err: unknown) {
    //assertIsError(err);
    console.log(err);
}