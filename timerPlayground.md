Observations :

In Snipet 1, we are calling clearTimeout, therefore, Callback function inside 
setTimeout will never get a chance to run.

// Snipet 2
const id = setTimeout(() => {
    console.log("Hello everyone...");
}, 0)

console.log("Newton Instructor here...");

In Snipet 2, there is a weird thing happening, i.e. Even when we give Time duration of setTimeout as 0 still its callback is executed after line no. 11.

Ideally, it feels like code execution of callback function should be first and then,
line no. 11 should be executed ----- BUT ITS NOT THE CASE.

WHY ? WHY IT IS SO WEIRD ?
JOIN Class on 2nd Nov. 9pm