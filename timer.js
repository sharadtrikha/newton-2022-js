// Selectors
const displayElement = document.querySelector(".displayValue");
const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");

let i = 0;
let timerID;

btnStart.addEventListener("click", () => {
    // Here on click we need to make use of in built method called setInterval
    // setInterval(<CALLBACK_FN>, X) -> After Every duration of X millisecond, 
    // please run this <CALLBACK_FN>
    timerID = setInterval(() => {
        i++;
        displayElement.innerText = i;
    }, 1000);
})

btnStop.addEventListener("click", () => {
    // clearInterval(<ID>) Here, <ID> refers to id we got as return value from 
    // setInterval API 
    clearInterval(timerID);
})