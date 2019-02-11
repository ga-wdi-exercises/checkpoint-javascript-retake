// NOTE: Make sure to use the `var` keyword for ALL variable declarations

var people = [
  {
    name: "Layla",
    age: 27,
    course: "WDI"
  },
  {
    name: "Keanu",
    age: 54,
    course: "WDI"
  },
  {
    name: "Jasmine",
    age: 35,
    course: "DSI"
  }
];

// #1: Use the `map` array method to create a new array containing the ages of each
// person in the `people` array. Assign the returned array to a variable
// called `peopleAges`.
// Type your solution immediately below this line:

var peopleAges = people.map("age");

let ages = [27, 54, 35]; //that should be the result

// #2: Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who are WDI students. Assign the returned array
// to a variable called `wdiStudents`.
// Type your solution immediately below this line:

var wdiStudents = people.filter("course", "WDI");

//should result in array with only ["Layla", "Keanu"]
//array length 2
