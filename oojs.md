let title = "Sharad";

let age = 28;

const printDetails = function(name,age) {
    console.log(`Hello. My name is ${name} and age is ${age}`);
}

printDetails(title,age);

Here, title and age are variables and printDetails is a method which is
printing these variables...
This style of writing code can be termed as procedural
With time, there was a new way of writing the same thing but with a
different point of view.....

Here object oriented paradigm, got introducted.. with the motive of 
making code look less complex, more meangingful 
To achieve these things, we have 4 pillars :
1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymor.

1. Encapsulation : 
combining data and methods/functions that act on the data in a single unit
Purpose ? reduce complexity and makes things more readable/comprehend.

eg :

let title = "Sharad";

let age = 28;

const printDetails = function(name,age) {
    console.log(`Hello. My name is ${name} and age is ${age}`);
}

printDetails(title,age);

In above example, it looks like we are talking about some properties related to 
an entity called PERSON and then, calling some method/function to print those 
details.
Better approach can be to keep these properties and method inside SINGLE UNIT
called object.

const person = {
    title: "Sharad",
    age: 28,
    printDetails:  function() {
        console.log(`Hello. My name is ${this.title} and age is ${this.age}`);
    }
}


person.printDetails()

2. Abstraction :

showing only essential part and hide actual implementation.
Purpose ? to make SIMPLE INTERFACEs.

function Laptop() {

    this.makeMemoryAvailable = function() {
        console.log("Memory is available now..please proceed ..");
    }

    this.makeOSAvailable = function() {
        console.log("OS is free now...listening to you...");
    }

    this.canWriteTextOnLaptop = function() {
        console.log("Hey. Thanks for enabling me to write text!");
    }
    
}

const l1 = new Laptop(); // switch on laptop
l1.makeMemoryAvailable();
l1.makeOSAvailable();
l1.canWriteTextOnLaptop();


Here, internal implementation of LAPTOP is exposed and it is left to the consumer
to do all the heavy lifting before performing the actual task...
ideally we would want to only expose canWriteTextOnLaptop() method to the consumer
and interally call the remaining methods...
i.e. 

Steps :

1. Stop exposing these methods like makeMemoryAvailable, makeOSAvailable to outside world. (Data hiding)
2. Reduce complexity by internally calling these methods...


function Laptop() {

    let makeMemoryAvailable = function() {
        console.log("Memory is available now..please proceed ..");
    }

    let makeOSAvailable = function() {
        console.log("OS is free now...listening to you...");
    }

    this.canWriteTextOnLaptop = function() {
        makeMemoryAvailable();
        makeOSAvailable();
        console.log("Hey. Thanks for enabling me to write text!");
    }
    
}

const l1 = new Laptop(); // switch on laptop
l1.canWriteTextOnLaptop;

// Module revealing Design pattern

const person = (function() {
    let name = "Sharad";
    let age = 28;

    const print = function() {
        console.log(`name is : ${name} and age is ${age}`);
    }

    return {
        print: print
    }
})()

// Req. :
Here i only want to expose age and method to print age...
I don't to expose age of person since it is highly confidential info.

// Req. :
I'm not allowed to access name and age variables directly..
But i'm allowed to print them via print() method

4. Polymorphism :

Poly -> multiple
morphism -> forms

one name -- many form...

How to implement in JS ?

function Fruit() {}

Fruit.prototype.displayName = function() {
    console.log("Hey I am fruit");
}

---Lets create subclass/child class----

function Apple() {}
Apple.prototype = Object.create(Fruit.prototype);

Requirement :
Now, any instance created via Apple constructor function and whenever we call
displayName() method..then...it should print "Hey.I am apple" instead of 
"Hey I am fruit"...
ie. Apple (subclass or entity which inherits parent entity called Fruit) should
override this method displayName().

Apple.prototype.displayName = function() {
    console.log("Hey. I am apple");
}

console.log(1+1) //2
console.log(1+"1") // 11


