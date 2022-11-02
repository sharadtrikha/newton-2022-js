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
It is because of EVENT LOOP!

Web api's like setTimeout, setInterval, etc take callbacks and are executed whenever certain time is elapsed..
But Here, We need to be mindful of how JS internally works i.e. Event loop is in
action all the time...
All these callbacks (after given time is elapsed)...sit inside CALLBACK QUEUE and
WAIT for EXECUTION STACK to be empty...
Therefore, there is a conclusion that can be made ---> 
Any synchronous piece of code will always be executed first, since it directly goes into EXECUTION STACK...But Callbacks related to Timers will sit inside Callback Queue and wait for Execution stack to be empty.


