// Selectors
const grandParent = document.querySelector("#grand_parent");
const parent = document.querySelector("#parent");
const child1 = document.querySelector("#child1");

grandParent.addEventListener("click", function() {
    console.log("Grand parent clicked");
})

parent.addEventListener("click", function() {
    console.log("parent clicked");
}, true)

child1.addEventListener("click", function() {
    console.log("child1 clicked");
});