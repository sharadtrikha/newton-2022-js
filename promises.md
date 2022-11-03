Promises :

can land up in 3 States :

1. Pending
2. Fulfilled
3. Rejected

Promise in JS is a object that holds these properties :

[[PromiseState]]: "pending"
[[PromiseResult]]: undefined

Here, PromiseState is already discussed and can fall into 3 states :
1. Pending
2. Fulfilled
3. Rejected

PromiseResult can be :

When state of promise is "Pending", at that time..PromiseResult will be undefined
When state of promise is "fulfilled" Or "rejected",at that time..PromiseResult will hold some DATA.

Syntax: 

let promiseObj = new Promise(<CALLBACK_FN>);

<CALLBACK_FN> is also known as Executor.
Now this <CALLBACK_FN> takes 2 CALLBACKS as input.
General name convention of these CALLBACKS is - resolve and reject 

Here, resolve is called whenever we want promise state to change to "FULFILLED".
reject is called whenever we want promise state to change to "REJECTED".

Here, promiseObj is an object that has 3 built in methods :

1. then : 

promiseObj.then(<CALLBACK_FN>)..
here then() method takes callback as Input and this callback function will be triggered whenever promise state is changed to FULFILLED.
This <CALLBACK_FN> will get some data as input...Basically whatever Data is 
supplied to RESOLVE method...same data will be given as input to this <CALLBACK_FN>

then() calls are chainable

Note:
then() method returns Promise.

2. catch

promiseObj.catch(<CALLBACK_FN>)..
here catch() method takes callback as Input and this callback function will be triggered whenever promise state is changed to REJECTED.
This <CALLBACK_FN> will get some data as input...Basically whatever Data is 
supplied to REJECT method...same data will be given as input to this <CALLBACK_FN>


3. finally

promiseObj.finally(<Callback_FN>)
Whenever promise is settled (resolved/rejected), this method will be invoked.
It takes a callback_fn but this callback_fn does not get any input 


Question :
Create a promise with resolves immediately giving output value as 200.

-> Promise.resolve(<VALUE>)
-> Or Promise.reject(<VALUE>)

Question :
Create array of Promises and once ALL the promises inside the array are
resolved/fulfilled ..print on console..."All Promises are resolved".

Lets talk about easy scenario where Promises are getting resolved immediately.
const arr = [Promise.resolve(300), Promise.resolve(500), Promise.resolve(600)];

Here, all the promises will be resolved immediately..
Hence easy to write code for this ...

But if Array of promises looks like :

const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(100);
    }, 10000);
});

const arr = [promise1, Promise.resolve(300), Promise.resolve(500)];

Here, promise1 will be resolved after 10 seconds (due to setTimeout)..
Therefore, we need to wait for it to complete n then only print
"All Promises are resolved"

To solve it, there is a method ----->
Promise.all(<ARRAY_OF_PROMISES>)

This method returns Promise ...which gets resolved ONCE ALL THE PROMISES
INSIDE ARRAY get Resolved/fulfilled...

If any promise inside this Array gets REJECTED ... catch method of Promise.all will be fired


What is a promise ?
It is an object holding 2 important properties -
State & Data.
where State is of 3 types - pending,fulfilled, rejected

Primary usecase :
To perform any async. operation.
eg :
getting data from backend server..

Why/what purpose it is solving ?

Lets say we want to get some data from Backend...
But it will take 5 seconds...
now, as a frontend application...I don't want to block/restrict my users from 
using my application till the time i get data...


----------------------------------------------------

async....await :

There is a alternative syntax for :
promise.then().catch()

function sum(a,b) {
    setTimeout(() => {
        console.log("settimeout running...");
        
    }, 5000);
    return a + b;
    
}

const result = sum(20,30);
console.log(result);
const arr = [1,2,3,4,5];
for(let i = 0; i < arr.length; i++) {
    console.log(i);
}

// now here i want to first finish executing sum() function before proceeding

async function sum(a,b) {
    setTimeout(() => {
        console.log("settimeout running...");
        return a + b;
    }, 5000);
    
    
}

const result = await sum(20,30);
console.log(result);
const arr = [1,2,3,4,5];
for(let i = 0; i < arr.length; i++) {
    console.log(i);
}
---------------------------------------------
async function sum() {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(200), 5000);
    });
}

try {
    const result = await sum();
    for(let i = 0; i < result; i++) {
        console.log(i);
    }
    console.log(result);
}
catch(err) {
    console.log("Catch fired");
    console.log(err);
}

// Since we are dependent on result variable in next line of code..
Hence, we would want to finish execution of sum() method so that we can value of
result variable...Only then we want to proceed...
Here, await keyword does the job well...since it looks neat also...

Now, assume same thing is to be done with .then kindof syntax, then, it might look like -

function sum() {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(200), 5000);
    });
}

const result = sum();
result.then(data => {
    for(let i = 0; i < data; i++) {
    console.log(i);
}
console.log(data);
})

how to handle Failing sceanrio's in async await :

We can use normal try/catch to catch the rejection scenario

----------------------------------------------------

JSON (Javascript Object notation) :

JSON and Javascript objects look very similar.
Sometime, it gets really confusing to differentiate between them.

Some differences:
1. only datatypes supported in json are : string, number, boolean, null, object..
But undefined, functions are not supported.

Helper method in JS :

JSON.parse -> to convert json to js object
JSON.stringify -> to convert js object to json

eg :
const jsObj = {
    name: "Sharad",
    age: 28
}
equivalent json ->

{
    "name": "Sharad,
    "age": 28
}