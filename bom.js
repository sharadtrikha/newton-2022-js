// console.log("Printing before alert ......");
// const result = alert("Kindly be sincere and complete your assignments.");
// console.log(result);
// console.log("Printing after alert .......");


// console.log("Printing before alert ......");
// const result = prompt("Are you happy with your efforts ?");
// console.log(typeof result);
// console.log("Printing after alert .......");

// console.log("Printing before confirm ......");
// const result = confirm("Are you practising daily ?");
// console.log(result);
// console.log("Printing after confirm .......");

//As newton student i feel i am not doing justice to my assignments

// console.log(location.href);
// console.log(location.protocol);
// console.log(location.port);
// console.log(location.origin);
// console.log(location.pathname);

// console.log(location.search);
// console.log(location.hash);

//const result = confirm("Do you want to navigate to dummy html page ? ");

//if(result) {
   // navigate to dummy.html
    //location.href = "http://localhost:5500/dummy.html";// 1st way -->
    // whenever we assign any value to location.href..internally location.asign
    // method is called...
    //location.assign("http://localhost:5500/dummy.html");

    // location.replace("http://localhost:5500/dummy.html");
//}

document.querySelector("#dummyDiv").addEventListener("click", function() {
    // location.assign("http://localhost:5500/dummy.html");
    location.assign("http://localhost:5500/dummy.html");
})