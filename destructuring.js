/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
/* let john = ages[0];
let mary = ages[1];
let joe = ages[2]; */
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant", 
}
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnPrimary, johnSecondary] = languages;
console.log(johnPrimary, johnSecondary);

let [, , maryPrimary, marySecondary] = languages;
console.log(maryPrimary, marySecondary);

let languages2 = {
    firstLanguage : "english",
    secondLanguage : "french",
    thirdLanguage : "spanish",
    fourthLanguage : "german",
    fifthLanguage : "japanese",

}

let {secondLanguage, thirdLanguage} = languages2;
console.log(secondLanguage, thirdLanguage); 


// Using rest parameter syntax
let fruits = ["apple", "orange", "peach", "banana"];
let [fav1, fav2, ...others] = fruits;
console.log(fav1, fav2, others);

let favFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
}

let {brian, andrea, ...rest} = favFoods;
console.log(brian);
console.log(andrea);
console.log(rest);
