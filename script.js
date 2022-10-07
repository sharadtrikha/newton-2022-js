// var person = {
//     name: "Sharad",
//     age: 28,
//     isIITian: false,
//     education: {}
// }

// var person = new Object();

// person.name = "Sharad";
// person.age = 28;
// person.isIITian = false;
// person.education = {};

// Ways of creating Object :

// 1. Object literal 

// var obj = {
//     "name": "Sharad"
// }

// // 2. Using new Keyword

// var obj1 = new Object();
// obj1.name = "Sharad"

// var arr = [1, "Sharad", false, 234];

// var numberList = new Array(1,2,3,4,5);

// for(var number=0; number < numberList.length; number++) {
//     console.log(numberList[number]);
// }

// var arr = [1];



// function sumOfTwoNumbers(a,b) {
//     var sum = a + b;

//     var dummy = function sharad() {
//         console.log("Hi. I am dummy!");
//     }

//     return dummy;
// }

// var result = sumOfTwoNumbers(20,30);
// console.log(result());

// var result = function dummy() {
//     console.log("Hey! I am dummy");
// }
// console.log(typeof result);
// var displayMsg = result();
// console.log(displayMsg)

// function userclicked() {
//     console.log()
// }

// userclicked();


// function myFunction() {
//     var sum = 2 + 3;
//     console.log(sum);
//     return sum;
// }

// myFunction();


// (
//     function() {
//         var sum = 2 + 30;
//         console.log(sum);
//         return sum;
//     }
// )();

// var newton = "January";
// function sum() {
//     var result = 10 + 20;
//     return result;
// }


// var name1 = "sharad";
// sum();


// var myName = "sharad";
// var isNew = false;
// var obj = {
//     subject: "English"
// }


// function changeAttributes(myName, isNew, obj) {
//     myName = "abcd";
//     isNew = true;
//     obj.subject =  "Hindi";
// }

// changeAttributes(myName, isNew, obj);

// console.log(myName);
// console.log(isNew);
// console.log(obj);


// printClassName();

// function printClassName() {
//     console.log(className);
// }

// var className = "newton";


// function dummyFn() {

//     if(true){
//         var dummy = 20;
//     }
   

//     console.log(dummy);
//     // -> dummy variable will be accessible here. Why ? -> its in Function scope
//     // at this point...dummy variable is still accessible because it is FUNCTION SCOPED
// }

// function dummyFn2() {

//     if(true) {
//         let dummy2 = 30;
//     }


//     console.log(dummy2);
//     // -> dummy variable will be accessible here. Why ? 
// }

// dummyFn();
// dummyFn2();



// Create objects via Constructor Function
// console.log("Global section in js file ...");
// console.log(this);
// console.log("Global section in js file ...");
// function Person(name,age) {
//     console.log("Inside function constructor ....");
//     console.log(this);
//     this.name = name;
//     this.age = age;
// }


// let person1 = new Person("Sharad", 28);
// let person2 = new Person("Ankit", 22);
// console.log(person1);
// console.log(person2);

const title = Symbol("sharad");
const title2 = Symbol("sharad");
console.log(title);
console.log(title2);

console.log(title === title2);


let rollno = Symbol();