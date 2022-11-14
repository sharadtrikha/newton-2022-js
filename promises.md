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
Itp
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


--------------------------------------------------

API 
(Application Programming Interface)

eg :
Weather app.

Here, Who is a client and who is a server ?
Client -> entity that ASKS for RESOURCE. i.e. mobile owner/consumer of the mobile
in which this application is installed.

Server -> entity that SERVERS REQUESTED RESOURCE.

Now, these 2 Entities need to connect with each over for Data Acccess.
This connection between them is made possible with the help of an API.
(with inclusion of some Protocols)

In JS landscape, If we can some function that can Talk to the server and return 
the result to the client.

someFunction() -> talks to server n returns back the result.

API can be different types and they are based on some programming paradigms.
eg : SOAP, REST, RPC, etc.......

REST API :
REST -> Rerepresentational State Transfer

Rest API :
is an architectural paradigm with a set of constraints for defining API.
Mostly, used for creating web servies.

Defines some functions like GET, POST, PUT, PATCH, DELETE.

GET API -> whenever we want to perform Read operations.
POST API -> Whenever we want to perform some WRITE operations i.e. we want to save some data/info to Database.

PUT/PATCH -> Whenever we want to UPDATE/MODIFY RESOURCE

DELETe -> whenever we want to DELETE RESOURCE.


Any API we work with, there are 2 sections to it :

1. headers
2. body

Headers :
Any metadata about this API can be given here.

Request header -> is a header object that is set by BROWSER and forwarded to SERVER
Response Header -> is a headero object that is set by SERVER and forwarded to
BROWSER

Also, data that server needs can be shared from here also. 

Body:
Any data that needs to be transferred to server can be shared here.
------------------------------------

how to call/work these REST API's in JS ?

For this, we need some dummy API's. We can use some of them.
Lets use  ------->
https://jsonplaceholder.typicode.com/

Now, 
as a frontend engineer our job is to call these API's and display the result on UI.

To CALL these api's, we have a method called -> fetch

fetch ------> 

Syntax :
fetch(<URL_of_API>) returns Promise<Response>

Response Object contains multiple properties, but some important 1s are :

1. status - it represents state codes for every operation which happend
(200 - ok/success, 
201 - created RESOURCE successfully, 
500 - Generic Error code, 
400 series - Auth related errors )

2. body - Here, we get Actual data returned from the server...

eg :
lets call 1 api given by https://jsonplaceholder.typicode.com/. 
lets make a GET call.


-------------------------------

how to make POST API call with fetch method ?

fetch() method accepts 2nd argument which is a object..
Here we need to mention :

1. method (bydefault - GET)
2. body
3. headers

now, to make POST API call it bascially means we need to share some data from BROWSER to SERVER.
This data will be set as value under key called "body"
Also, data needs to be stringified.


Conclusion :

To read the data, use GET api (default mode).
To create data, use POST api ->

fetch(URL, {
    method: "POST",
    body: JSON.stringify(<DATA_TO_BE_SEND_TO_THE_SERVER>),
    headers: {
        // REQUEST-HEADER
    }
})


----------------------------------------------

Number of ways in which data can be send from Client to Server :

1. Query Param
2. Path Param
3. body (POST call)


https://www.amazon.com/ah/ajax/counter?ctr=desktop_ajax_atf&exp=1667924635702&rId=1VP2PHZRP76EFP35S1MX&mkId=ATVPDKIKX0DER&h=cacfb920a9f918d619e37a3963d72be159907c854128b8eccdd5053c23f2fc2d

Break above url - 

https://www.amazon.com ----> Server URL 

/ah/ajax/counter -> RESOURCE Locator (path params)

?
ctr=desktop_ajax_atf&
exp=1667924635702&
rId=1VP2PHZRP76EFP35S1MX&
mkId=ATVPDKIKX0DER&h=cacfb920a9f918d619e37a3963d72be159907c854128b8eccdd5053c23f2fc2d


---> Query Params

-----------------------

https://jsonplaceholder.typicode.com/todos/1

https://jsonplaceholder.typicode.com -> server url

/todos/1 -> From a LIST of todos give me a todo whose id is 1. 
Here, 1 is a required value to identify RESOURCE

https://jsonplaceholder.typicode.com/todos/1 can be written as
https://jsonplaceholder.typicode.com/todos?id=1...but this is wrong logically/semantically but still this can also be implemented...

API 2:

https://jsonplaceholder.typicode.com/comments

Server url -https://jsonplaceholder.typicode.com
Path - /comments

Conclusion -

Above api might return list/array of all the comments..
But if given some query param like :
https://jsonplaceholder.typicode.com/comments?postId=1

It means return list/array of all the coments of postId = 1..
Here postId is not required value...if it is not given, then, api will return
list/array of all comments



-------------

Need api that returns info of all the people working at newton.
but same api should take some input like 
role=instructor and if this input is given to the api..then it should only
info of instructors at newton..

Solution :

Since we need to GET details....that means api will be of GET type.
Since we need to fetch information of persons...then path should ideally look like
/persons....

GET CALL -> <PROTOCOL_HTTP_OR_HTTPS>://<SERVER_URL>/persons

Now, to cater requirement of role=instructor in the same api..
We see that this is an optional parameter..also, it looks like a QUERY
i.e. give me details of all PERSONS WHERE ROLE = INSTRUCTOR

GET CALL -> <PROTOCOL_HTTP_OR_HTTPS>://<SERVER_URL>/persons?role=instructor

Write a api to get details of person at newton whose id is 20.

API Signature :
GET Call -> <PROTOCOL_HTTP_OR_HTTPS>://<SERVER_URL>/persons/<PERSON_ID>


--------------------------------


When to use body property while sending data from client to server ?

body property will only be used when you are doing POST call.

what is the main diff. using POST vs GET ?

In POST call, we send data from client to server with the goal of SAVING/PERSISTING that data in database.
In GET call, we sometimes send data (in the url) from client to server with the goal of FETCHING/READING data from the database.

In POST call, we send data in a combination also...i.e. 
URL + BODY 


--------------------------------