// function multiply(a,b) {
//     return a*b;
// }

// const result = multiply(2,3);
// console.log(result);




// function multiply(a,b) {
//     return a*b;
// }

// // Design a function that only mulitply by 2 using multiply function

// const multiply2 = multiply.bind(this,2);


// // Design a function that only mulitply by 10 using multiply function
// // const multiply10 = multiply.bind(this,10);

// const result = multiply2(4);
// console.log(result);

// Now, above problem statement is solved using bind method but 
// we can also use combination of HOC which essentially works with the help 
// of closures...

// function multiply(a) {
//     return function(b) {
//         return a*b;
//     }
// }

// // const multiplyBy2 = multiply(2);

// // const result = multiplyBy2(4);

// const result = multiply(2)(5);
// console.log(result);


// Write a function :

// multiply(2)(3) -> 2 * 3
// mulitply(2)(3)(4) -> 2 * 3 * 4 
// multiply(2)(3)(4)(5)(6) -> 2 * 3 * 4 * 5 * 6

// sum(2)(3) -> 2 + 3
// sum(2)(3)(4) -> 2 + 3 + 4 
// sum(2)(3)(4)(5)(6) -> 2 + 3 + 4 + 5 + 6
// sum(1)(2)(3).....(n) -> 

// sum(1)(2)

// function sum(a) {
//     return function(b) {
//         return a+b;
//     }
// }

// sum(1)(2)(3)

// function sum(a) {
//     return function(b) {
//         return function(c) {
//             return a+b+c;
//         }
//     }
// }

// sum(1)(2)(3)....(n)

// function sum(a) {
//     return function(b) {
//         if(typeof b === "number") { // condition 
            
//             return sum(a+b); // recursive call
//         } else {
//             return a; // base case i.e. when to come out of recursion
//         }
//     }
// }

// const result = sum(1)(2)(0)();
// console.log(result);


