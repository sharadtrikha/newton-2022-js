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

function sumOfTwoNumbers(a,b) {
    var sum = a + b;
   
    return function dummy() {
        console.log("Hey! I am dummy");
    }
}

var result = sumOfTwoNumbers(20,30);
console.log(result);

// function userclicked() {
//     console.log()
// }

// userclicked();



var newton = function dummy() {
    console.log("dummy")
}

dummy()