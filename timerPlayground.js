
// Snipet 1
// const id = setTimeout(() => {
//     console.log("Hello everyone...");
// }, 1000)

// clearTimeout(id);

// Snipet 2
// const id = setTimeout(() => {
//     console.log("Hello everyone...");
// }, 0)

// console.log("Newton Instructor here...");

// Snipet 3
// What will be final value of i ?
// let flag = true;
// let i = 0;

// setTimeout(() => {
//     flag = false;
// }, 1000)


// while(flag) {
//     i++;
//     console.log(i);
// }

while(true) {
    console.log("hello");
}

const btn = document.querySelector("#trail-btn");
btn.addEventListener("click", (event) => {
    console.log("I got clicked....");
})



function sum(a,b) {
    return a + b;
}

function main(cb) {
    // does some heavylifting and after that invokes callback
    cb();
}

main()