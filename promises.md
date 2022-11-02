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

let promise = new Promise(<CALLBACK_FN>);

<CALLBACK_FN> is also known as Executor.
Now this <CALLBACK_FN> takes 2 CALLBACKS as input.
General name convention of these CALLBACKS is - resolve and reject 

Here, resolve is called whenever we want promise state to change to "FULFILLED".
reject is called whenever we want promise state to change to "REJECTED".
