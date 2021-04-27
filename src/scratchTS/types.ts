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

/* ------------------------------------------------- */

