// Takes two numbers and adds them
// function addition(a, b) {
//   return a + b;
// }

 addition = (a, b) =>   a + b;
 console.log(`You have  ${addition(65,34)} dollars .`);


// Functions can call other functions
function doubleAddition(c, d) {
  var total = addition(c, d) * 2;
  return total;
}

console.log(`You have  ${doubleAddition(10,10)} dollars .`);


//  doubleAddition = (c, d)  =>    addition(c, d) * 2;


console.log(`You have  ${doubleAddition(65,34)} dollars .`);

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];


function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
}

friends
listLoop(friends)


let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
  console.log("I love " + vegetables[i]);
}


for (var i = 0; i < 5; i++) {
  console.log("I am " + i);
}


// console.log(data);


// data = [{
//   datetime: "1/1/2010",
//   city: "benton",
//   state: "ar",
//   country: "us",
//   shape: "circle",
//   durationMinutes: "5 mins.",
//   comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
// },
// {
//   datetime: "1/1/2010",
//   city: "benton",
//   state: "ar",
//   country: "IN",
//   shape: "circle",
//   durationMinutes: "5 mins.",
//   comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
// }];




// function buildTable(data) {
//   // First, clear out any existing data
//   tbody.html("");

//   // Next, loop through each object in the data
//   // and append a row and cells for each value in the row
//   data.forEach((dataRow) => {
//     // Append a row to the table body
//     let row = tbody.append("tr");

//     // Loop through each field in the dataRow and add
//     // each value as a table cell (td)
//     Object.values(dataRow).forEach((val) => {
//       let cell = row.append("td");
//       cell.text(val);
//       }
//     );
//   });
// };

let tbody = d3.select("tbody");

// data.forEach((dataRow) => {
//   let row = tbody.append("tr");
//   Object.entries(dataRow).forEach(([key, value]) => {
//     let cell = row.append("td");
//     cell.text(value);
//   });
// });

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}


// tabledata = buildTable(data)

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = buildTable(data);


   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    console.log("date : " + date)
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
// buildTable(tableData);
