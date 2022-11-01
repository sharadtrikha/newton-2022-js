// Selectors
const paragraphElement = document.querySelector("#paragraph-input");
const highlightedWordElement = document.querySelector("#word-input");
const matchCounter = document.querySelector("#words-counter");
const ignoreCaseElement = document.querySelector("#ignore-case");


function highlighter(event) {
    let result = "";
    let noOfTimesMatchHappen = 0;
    const inputValue = event.target.value;

    // check whether ignoreCaseElement is true or false
    console.log(ignoreCaseElement.checked);

    if(inputValue.length > 0) {
        
    }

    // if ignoreCaseElement is True then replaceAll needs to work with either toLowerCase or with Regex
    if(ignoreCaseElement.checked) {

        let regX = new RegExp(highlightedWordElement.value, "gi");

        result = paragraphElement.innerText.replaceAll(regX, (e) => {
            noOfTimesMatchHappen++;
            return `<span class="highlighted-txt">${e}</span>`
        }) // This callback of Replace will be fired as many times whenever search_match is found
    


    } else {
        result = paragraphElement.innerText.replaceAll(highlightedWordElement.value, (e) => {
            noOfTimesMatchHappen++
            return `<span class="highlighted-txt">${e}</span>`
        }) // This callback of Replace will be fired as many times whenever search_match is found
    
    }



    matchCounter.innerText = noOfTimesMatchHappen;
    paragraphElement.innerHTML = result;
    
}


highlightedWordElement.addEventListener("input", highlighter);

ignoreCaseElement.addEventListener("change", highlighter);