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