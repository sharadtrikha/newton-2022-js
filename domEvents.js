// Selectors
const grandParent = document.querySelector("#grand_parent");
const parent = document.querySelector("#parent");
const child1 = document.querySelector("#child1");

// grandParent.addEventListener("click", function(event) {
//     console.log("Grand parent clicked");
// });

// parent.addEventListener("click", function(event) {
//     console.log("parent clicked");
//     event.stopPropagation();
    
// })

// child1.addEventListener("click", function(event) {
//     console.log("child1 clicked");
// }, true);


// if i click of child then ?
// -> Capture phase starts i.e. flow goes from gp -> p -> c
// i.e. callback of gp -> callback of p -> child1 clicked.
// Bubble -> 

// click event -> combination of mousedown + mouseup

// grandParent.addEventListener('mousemove', function(event) {
//     console.log(event.pageX + " " + event.pageY);
// })