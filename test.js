// Selectors
const inputBox = document.querySelector("#evaluatedText");
const h3Element = document.querySelector("#wordCount");

const getWordsCount = function(str) {

    let result = 0;

    // First do input cleanup 
    // identify corner cases 

    // what if str is undefined 
    // first check whether str exists or not
    if(!str) {
        return result;
    }


    // like input can have whitespace in the begin and end
    // so TRIM it
    const trimmedString = str.trim();

    // logic is words in a string are separated with SPACE
    // we can use split method based on SPACE separator and convert it to array
    // then we can do .length on this aray..this will be final answer
    const arr = trimmedString.split(/\S+/);
    result = arr.length;

    return result;
}

inputBox.addEventListener("input", function() {
    // fetch value from INPUT BOX
    const str = inputBox.value;

    // logic to calculate number of words in input string 
    const result = getWordsCount(str);
    

    // display count of str in h3
    h3Element.innerHTML = result;
})

// There is a diff. between change event and input event
// change event fires when focus is lost from input element
// whereas input event fires whenever input value changes