// Selectors
const xAxis = document.querySelector('#anim-x');
const yAxis = document.querySelector('#anim-y');
const scaling = document.querySelector("#anim-scale");
const rotation = document.querySelector("#anim-rotation");
const duration = document.querySelector("#anim-duration");


function changeHandler(element) {
    const elem = document.querySelector('.animation-div');
    
    //elem.style.transform = "rotate(" + rotation.value + "deg)";
    // elem.style.transform = `rotate( ${rotation.value} deg)`; // Template Literal way


    // // elem.style.transform = "translate(" + xAxis.value + "px," + + yAxis.value + "px)";
    // elem.style.transform = `translate(${xAxis.value}px, ${yAxis.value}px)`;

    // elem.style.transform = `scale(${scaling.value})`;

    elem.style.transform = `translate(${xAxis.value}px,${yAxis.value}px) scale(${scaling.value}) rotate(${rotation.value}deg)`;
    elem.style.transition = `transform ${duration}s`;
}


// Shorthand for transform property 

// transform: "translate(x,y) scale(<VARIABLE>) rotate(<VARIABLE>deg)"