var title = "sharad";

// function printDetails() {
//     var age = 28;
    
//     print();
//     function print() {
//         debugger
//         var title = "Akash"
//         console.log(`Hello. My name is ${title} and age is ${age}`)
//     }
// }

// printDetails();

// Question :
// here, title and age both the variables are not defined under print function
// then, also we are able to access it. How ?
// It is because of SCOPE CHAIN 
// It appear similar to PROTOTYPE CHAIN studied earlier
// though prototype chain was applicable to OBJECTS and its properties
// similarly SCOPE CHAIN is applicable to VARIABLES

var title = "sharad";

function printDetails() {
    var age = 28;
    
    function print() {
        console.log(`Hello. My name is ${title} and age is ${age}`);
    }

    return print;
}

const func = printDetails();

func();

// now, it looks like output would be ->Hello. My name is Sharad and age is undefined
// since execution context of printDetails got destroyed after executing line 33.
// if execution context got destroyed, then, all the variables that got memory allocated
// will also be destoryed....according to our theory
// BUT HERE COMES MOST POWERFUL FEATURE OF JAVASCRIPT which separates it from 
// other languages..it is known as CLOSURES
// This magic is happening because return we return FUNCTION 
// We not only return function but internally we are returning 2 things 
// One is Function definition (basically source code ) + its LEXICAL ENVIRONMENT
// LEXICAL ENV. = VARIABLES (LOCAL) + VARIABLES of its LEXICAL PARENT
// i.e. RETURNED Function is able to access these variables even after it is 
// removed from the execution stack.

// CLOSURE = Function + ITS LEXICAL ENV.

// var title = "sharad";

// function printDetails() {
//     var age = 28;
    
//     print();
//     function print() {
//         debugger
//         var title = "Akash"
//         console.log(`Hello. My name is ${title} and age is ${age}`)
//     }
// }

// In above code, clousre is formed on print() method ie. even if printDetails 
// gets removed from execution stack... while print() method will be able to infer
// age property...how ? Because it can recall/memorise it by REFERENCING it
// That means age variable is still present in the memory at the same memory location
// One more conclusion can be dervied -> if any closure is formed, then,
// those variables cannot be garbage collected i.e. these variables cannot be 
// remoed from the memory

