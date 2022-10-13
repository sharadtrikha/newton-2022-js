/// I want to talk to 3 stackholders -> input type for name and age and submit btn.
// i.e. I should write 3 querySelectors or any DOM method via which i can talk to them
// in order to talk -> I need to SELECT them 
// in order to SELECT -> i need to write queries (querySelector, getElementByID, etc)

// Selectors
const nameElement = document.querySelector("#name"); // returns JS Object to play with...lets store that object in a variable
const ageElement =  document.querySelector("#age");
const submitElement = document.querySelector("#submit");
const dummyPlaceholder = document.querySelector("#dummy-placeholder");

// Now on click of submit button, I need to make HTML Table
// since onclick here is of submit button..lets go ahead and apply onClick event attribute
// to submit button


// Now, onclick attribute of submit button will be tied up with some JAVASCRIPT FUNCTION
// Prints only 1 row
// function createTable() {

//     // reset HTML of dummyPlaceholder 
//     // All the html content inside this div of id dummy-placeholder will be inside 
//     // this property innerHTML 
//     dummyPlaceholder.innerHTML = "";

//     // Note : if value undefined given, then, it will be treated as string "undefined"
//     // if value null given, then, it will be treated as empty value
//     // if value "" given, then, it will be treated as "" value

//     // Extract values of name and age from their respective input fields
//     const enteredName = nameElement.value;
//     const enteredAge = ageElement.value;

//     // now put this information into HTML TABLE via DOM methods like createElement

//     // <table> <tr> <td>name</td> <td>age</td>  </tr> </table>
//     const tableElement = document.createElement('table');
//     const tableRow = document.createElement("tr");
//     const tableColumn = document.createElement("td");

//     tableColumn.innerText = enteredName;

//     // Now I want tr tag to embed or have td tag as its children
//     // In order to achieve this, follow this syntax :
//     // <VARIABLE_CONTAINING_PARENT_TAG>.appendChild(<VARIABLE_CONTAINING_CHILD_TAG>)
//     // i.e. tableRow.appendChild(tableColumn)

//     tableRow.appendChild(tableColumn);

//     // Now i want to append tr tag to table
//     // <table> <tr> <td> newton </td> </tr> </table>
//     // out of which -> <tr> <td> newton </td> </tr> -> is already done on line 37
//     // <VARIABLE_CONTAINING_PARENT_TAG>.appendChild(<VARIABLE_CONTAINING_CHILD_TAG>)
//     tableElement.appendChild(tableRow);


//     // Now i want to display this newly created table in my html page 
//     // I want to display table inside div with id called dummy-placeholder
//     // <VARIABLE_CONTAINING_PARENT_TAG>.appendChild(<VARIABLE_CONTAINING_CHILD_TAG>)
//     dummyPlaceholder.appendChild(tableElement);


//     // console.log(tableElement); // <table></table>
//     // console.log(tableRow); // <tr></tr>
//     // console.log(tableColumn); // <td></td>


//     // <tr> <td>Newton</td> </tr>


// }


const tableElement = document.createElement('table');
dummyPlaceholder.appendChild(tableElement);

// Appends multiple rows to Table
// function createTable() {

//     // reset HTML of dummyPlaceholder 
//     // All the html content inside this div of id dummy-placeholder will be inside 
//     // this property innerHTML 
//     //dummyPlaceholder.innerHTML = "";

//     // Note : if value undefined given, then, it will be treated as string "undefined"
//     // if value null given, then, it will be treated as empty value
//     // if value "" given, then, it will be treated as "" value

//     // Extract values of name and age from their respective input fields
//     const enteredName = nameElement.value;
//     const enteredAge = ageElement.value;

//     // now put this information into HTML TABLE via DOM methods like createElement

//     // <table> <tr> <td>name</td> <td>age</td>  </tr> </table>
//    // const tableElement = document.createElement('table');
//     const tableRow = document.createElement("tr");
//     const tableColumn = document.createElement("td");

//     tableColumn.innerText = enteredName;

//     // Now I want tr tag to embed or have td tag as its children
//     // In order to achieve this, follow this syntax :
//     // <VARIABLE_CONTAINING_PARENT_TAG>.appendChild(<VARIABLE_CONTAINING_CHILD_TAG>)
//     // i.e. tableRow.appendChild(tableColumn)

//     tableRow.appendChild(tableColumn);

//     // Now i want to append tr tag to table
//     // <table> <tr> <td> newton </td> </tr> </table>
//     // out of which -> <tr> <td> newton </td> </tr> -> is already done on line 37
//     // <VARIABLE_CONTAINING_PARENT_TAG>.appendChild(<VARIABLE_CONTAINING_CHILD_TAG>)
//     tableElement.appendChild(tableRow);


//     // Now i want to display this newly created table in my html page 
//     // I want to display table inside div with id called dummy-placeholder
//     // <VARIABLE_CONTAINING_PARENT_TAG>.appendChild(<VARIABLE_CONTAINING_CHILD_TAG>)
//     // dummyPlaceholder.appendChild(tableElement);


//     // console.log(tableElement); // <table></table>
//     // console.log(tableRow); // <tr></tr>
//     // console.log(tableColumn); // <td></td>


//     // <tr> <td>Newton</td> </tr>


// }

// function createTable() {
//     const enteredName = nameElement.value;
//     tableElement.innerHTML = `<tr><td>${enteredName}</td></tr>`;
// }


// to append HTML ELements/NODES. following syntax is used : 
// <VARIABLE_CONTAINING_PARENT_TAG>.appendChild(<VARIABLE_CONTAINING_CHILD_TAG>)
// but there is one more -> 
// <VARIABLE_CONTAINING_PARENT_TAG>.append(<VARIABLE_CONTAINING_CHILD_TAG>)


function createTable() {
    const enteredName = nameElement.value;
    const tableRow = document.createElement("tr");
    const tableColumn = document.createElement("td");
    tableColumn.innerText = enteredName;
    tableRow.appendChild(tableColumn);
    tableElement.appendChild(tableRow);
}