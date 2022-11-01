// const sum = (a,b) => {
//     try {
//         console.log("Begin....");
//         console.log("no error here.."); // this code will result in ERROR
//         console.log("End....");
//     } 
//     // catch(err) {
//     //     console.log("Some Error happended...");
//     //     console.log(err.name);
//     //     console.log(err.message);
//     //     console.log(err.stack);
//     // }
//     finally {
//         console.log("Finally block executed....")
//     }
    

//     return a+b;
// }

// const a  = sum(20,30)
// console.log(a)

const sum = (a,b) => {

    try {
        let result = a + b;
        if(result > 10) {
            throw new SyntaxError("Result is more than 10..something wrong")
        }
    } catch(err) {
        if(err instanceof ReferenceError) {
            console.log(err.name);
            console.log(err.message);
        } else {
            throw err; // rethrow it...delegate it 
        }
    }
    return result;


}

try {
    const c = sum(1,2);
} catch(err) {
    console.log("Global catch handler");
}