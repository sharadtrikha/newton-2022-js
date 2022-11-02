// How to create promise by ourself ?

const callback = (resolve,reject) => {
    // here some heavylifting task might be going on
    // like getting DATA from Somewhere
    // like Heavy I/O
    // like doing a for loop over millions of elements... that will sometime
    // in order to mimic that time...lets implement setTimeout
    setTimeout(() => {
        resolve("I got resolved");
    }, 2000)
}
// Above callback function will be called immediately
// Note : provided Execution Stack is empty.
// Initially promise state is PENDING and promise data - undefined

// Here resolve and reject are functions that should be called inside this 
// callback function whenever we want to change state of promise from pending to 
// fullfilled or pending to rejected

// while changing state of promise to FULFILLED i.e. by calling resolve function
// whatever data we supply to resolve function will be set inside promise data

let res = new Promise(callback);

console.log(res)

// How do we know when state of promise changes ?
// Problem statement: After Promise is fullfilled/resolved...I want to 
// console.log("Its done")