// Selectors section
const pic1 = document.querySelector('#pic1');
const pic2 = document.querySelector('#pic2');
const pic3 = document.querySelector('#pic3');
const pic4 = document.querySelector('#pic4');




// logic section
function onElementClick(event) {
    console.log(event.target);

    // fetch id of clicked LI element
    const elementId = event.target.id;
    console.log(elementId);

    // figure out corresponding image for that LI element
    const elementArr = elementId.split("_");
    const imageSelected = elementArr[1];
    console.log(imageSelected);


    // hide all the images
    hideAllImages();

    // show only image whose LI was clicked
    
    const elem = document.querySelector("#"+imageSelected);


    elem.classList.remove("hidden");
    elem.classList.add("content");

}

function hideAllImages() {
    const listOfAllImages =  document.querySelectorAll(".phone img");

    console.log(listOfAllImages);


    // listOfAllImages.forEach(imageElement => {
    //     imageElement.classList.add('hidden');
    // });

    for(let i=0; i < listOfAllImages.length; i++) {
        listOfAllImages[i].classList.add('hidden') // add hidden class on current html element i.e. listOfAllImages[i]
    }
}


// logic building

// element_pic1 -> pic1
// element_pic2 -> pic2
// element_pic3 -> pic3






















// Steps :

// On loading :

// 1. Hide all the pictures (apply css to hide these pictures)
// 2. Show 1st picture as default (apply class content to this)
// 3. Set active class to LI element 


// On Click of any button :

// 1. Hide all the pictures (apply css to hide these pictures)
// 2. Show clicked picture (apply class content to this)
// 3. Set active class to clicked LI element 

