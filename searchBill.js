const billItems = [{
    id: 1,
    itemName: "Bread",
    price: 20
  }, {
    id: 2,
    itemName: "Butter",
    price: 50
  }, {
    id: 3,
    itemName: "Tomatoes",
    price: 30
  }, {
    id: 4,
    itemName: "Onion",
    price: 40
  }, {
    id: 5,
    itemName: "Pomegranate",
    price: 60
  }, {
    id: 6,
    itemName: "Apple",
    price: 40
  }, {
    id: 7,
    itemName: "Grapes",
    price: 30
  }, {
    id: 8,
    itemName: "Mango",
    price: 100
  }];


  // Selectors
  const table = document.querySelector("table");
  const searchInput = document.querySelector("#search-bar");

  const createTableHeader = function() {

    // create Row for Table Header
    const headerRow = document.createElement("tr");

    // create ID Header
    const idElement = document.createElement("th");
    idElement.innerText = "S no.";


    // create Item Name Header
    const itemNameElement = document.createElement("th");
    itemNameElement.innerText = "Item Name";

    // create price header
    const priceElement = document.createElement("th");
    priceElement.innerText = "Price";


    // append above headers to table row
    headerRow.appendChild(idElement);
    headerRow.appendChild(itemNameElement);
    headerRow.appendChild(priceElement);

    // append header row to table
    table.appendChild(headerRow);
   
  }

  const createTableBody = function(items) {
    let tableRowsFragment = document.createDocumentFragment();

    items.forEach(function(billItem) {
        // create new row for each bill item 
        const tableRow = document.createElement("tr");

        // create id column
        const idElement = document.createElement("td");
        idElement.innerText = billItem.id;

        // create item name column
        const nameElement = document.createElement("td");
        nameElement.innerText = billItem.itemName;

        // create price column
        const priceElement = document.createElement("td");
        priceElement.innerText = billItem.price;

        // append above columns to row
        tableRow.appendChild(idElement);
        tableRow.appendChild(nameElement);
        tableRow.appendChild(priceElement);

        // append table row to Table
        tableRowsFragment.appendChild(tableRow);
    });

    table.appendChild(tableRowsFragment);

  }

  const createTable = function(billItems) {

    // delete existing table
    table.innerHTML = "";

    // check if billItems is empty 
    if(!(billItems && billItems.length)) {
        // render text inside table stating "No records found" and return from here.
        table.innerText = "No items found!";
        return;
    }


    createTableHeader();
    createTableBody(billItems);
  }

  const update = function(event) {
    console.log(event.target.value);
    const userInput = event.target.value;

    // Now based on input from search box we need to FILTER only those records 
    // which match the given condition
    const matchedBillItems = billItems.filter(function(billItem) {
        return billItem.itemName.toLowerCase().includes(userInput.toLowerCase());
    })
    console.log(matchedBillItems);

    // call createTable method with updated billItems array
    createTable(matchedBillItems);

  }

  createTable(billItems);