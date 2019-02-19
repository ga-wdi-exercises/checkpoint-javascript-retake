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

// var peopleAges = people.map(getAges);
// function getAges(ages) {
//   return ages.age;
// }

// console.log(peopleAges);

// var peopleAges = [];
// var getAges = function(ages) {
//   return ages.age;
// };
// peopleAges = people.map(getAges);
// console.log(peopleAges);

var peopleAges = people.map(ages => ages.age);
console.log(peopleAges);

// #2: Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who are WDI students. Assign the returned array
// to a variable called `wdiStudents`.
// Type your solution immediately below this line:

var wdiStudents = people.filter(persons => persons.course == "WDI");

console.log(wdiStudents);
console.log(wdiStudents.length);

var wdiStudents = function(person) {
  return person.course == "WDI";
};

var searchPeople = people.filter(wdiStudents);

console.log(searchPeople);
console.log(searchPeople.length);
