// Callbacks

// function getName(fn) {
//     return fn();
// }

function beautifyName(name) {
    return `Lord ${name}`;
}


const title = beautifyName("Sharad");
console.log(title);
// -------------------------------------------------------

// Now every time return type would be "LORD name"...
// Lets say i want user who is calling this function to tell what to prefix on the name


function beautifyName2(name, prefix) {
    return `${prefix} ${name}`;
}

const title2 = beautifyName2("sharad", "lord");
// -------------------------------------------------------



// Lets say user forgets to give prefix, please have default value of prefix as "LORD"

function beautifyName3(name, prefix = "LORD") { // here it means assign value 
    //"LORD" to prefix variable incase you do not receive any value when 
    // function is called
    return `${prefix} ${name}`;
}


const title3 = beautifyName2("sharad"); // here assume that prefix will be "LORD"


// Requirement change : I want to give user complete flexibility of how to 
// decorate the name. i.e. it can be decorated in any format.
// eg - LORD ${SHARAD}, LORD ${SHARAD} NEWTON, LORD SAINT ${SHARAD} NEWTON, LORD SAINT NEWTON ${SHARAD}, 
// basically pattern of decorate can be anything.
// we want to give user complete flexibility

// Solution ? I will ask user/consumer to give his own implementation of how to decorate his/her name


function beautifyName4(name, prefix = "LORD", decorateFunction) {
    if(decorateFunction) {
        return decorateFunction(name);
    }
    return `${prefix} ${name}`;
}


const decorFunc = function(name) {
    return `${name} is going to enjoy weekend and hope the same for you`;
}


const title4_v1 = beautifyName4("sharad");
const title4_v2 = beautifyName4("sharad", "Newton - ");
const title4_v3 = beautifyName4("Sharad", "", decorFunc);
// Here on line no. 65 we are passing FUNCTION and we are allowed to do so in 
// javascript since FUNCTIONS are treated as FIRST CLASS CITIZENS/members in JS.
// i.e. FUNCTIONS should be treated as normal values/variables like 
// boolean, object, array, number, etc.
// that means functions can be passed as INPUT to any other function.
// also, it can be RETURNED i.e. function can return function.
// Here, decorFunc can be called as "CALLBACK FUNCTION".
// WHY ? because decorFunc is not called directly rather it is being called by other function
// Note : In above usecase, actual power of CALLBACK FUNCTION is not visible!
// It is primarily used for Async......

console.log(title4_v1); // LORD Sharad
console.log(title4_v2); // Newton - Sharad
console.log(title4_v3); // Sharad  is going to enjoy weekend and hope the same for you