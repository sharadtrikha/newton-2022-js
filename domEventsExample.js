// Selectors
const dsa = document.querySelector("#dsa");
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const js = document.querySelector("#js");
const nodejs = document.querySelector("#nodejs");
const mongodb = document.querySelector("#mongodb");
const parentElement = document.querySelector("#subjects");

// dsa.addEventListener("click", function(event) {
//     console.log(event.target);
// })


// html.addEventListener("click", function(event) {
//     console.log(event.target);
// })

// css.addEventListener("click", function(event) {
//     console.log(event.target);
// })

// js.addEventListener("click", function(event) {
//     console.log(event.target);
// })
// nodejs.addEventListener("click", function(event) {
//     console.log(event.target);
// })
// mongodb.addEventListener("click", function(event) {
//     console.log(event.target);
// })



// If there are 1000 li elements in html, then, writing code like we just wrote 
// above is not possible because we will have to write 1000 times
// This can be solved by looping through all the li items
// that way atleast our code will look neat 
// But in this approach also there is a problem of OPTIMISATION
// Note : Iterating 1000 times is not a problem for browser BUT
// PRoblem here is .... We are adding 1000 callback functions (under every addEventListener)
// This will make our web application slow.


// solution 1
// const allLiElements = document.querySelectorAll("li");
// for(let i=0; i< allLiElements.length; i++) {
//     allLiElements[i].addEventListener("click", function(event) {
//         console.log(event.target);
//     });
// }


// Thumb Rule is 
// If possible try to keep Event Listener callbacks to a MINIMUM 


// solution 2 ?
// Event Delegation 

// Rather than applying addEventlisteners to each LI element 
// we can take help of Event bubbling and apply one addEventListener to parent

// parentElement.addEventListener('click', function(event) {
//     console.log(event.target);
// })



// Requirement :
// There is an empty UL tag added in html
// We need to use one Javascript array and loop over it
// in each iteration of loop, we need to add one LI element to this UL Tag/element

const subjects = ["HTML", "CSS", "JAVASCRIPT", "NODEJS"];

// for(let i = 0; i < subjects.length; i++) {
//     const liElement = document.createElement("li");
//     liElement.innerText = subjects[i];
//     parentElement.appendChild(liElement);
// }

// Now above implementation looks fine but it is not optimized
// why ? because lets say if this array was having 1000 elements
// then it will be a performance bottleneck!
// because we are interacting with DOM on line 80 
// Interacting with dom with the help of appendChild for 1000 times.
// will make web application SLOW!
// Solution ?
// Rather than talking/rendering one LI at a time
// We will go with a approach of painting/rendering ALL the LI's in a SINGLE GO
// how to implement ?

const documentFragment = document.createDocumentFragment();
for(let i = 0; i < subjects.length; i++) {
    const liElement = document.createElement("li");
    liElement.innerText = subjects[i];
    documentFragment.appendChild(liElement);
    //parentElement.appendChild(liElement);
}

parentElement.appendChild(documentFragment);
