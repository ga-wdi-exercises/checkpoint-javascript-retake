// NOTE: Make sure to use the `var` keyword for ALL variable declarations

var people = [
  {
    name: "Layla",
    age: 27,
    course: 'WDI'
  }, {
    name: "Keanu",
    age: 54,
    course: 'WDI'
  }, {
    name: "Jasmine",
    age: 35,
    course: 'DSI'
  }
]

// #1: Use the `map` array method to create a new array containing the ages of each
// person in the `people` array. Assign the returned array to a variable
// called `peopleAges`.
// Type your solution immediately below this line:

 for (let i=0;i<people.length;i++){

var peopleAges = people.map(x => people[i].age)
console.log(peopleAges)
 }


// #2: Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who are WDI students. Assign the returned array
// to a variable called `wdiStudents`.
// Type your solution immediately below this line:

var targetCourse='WDI'
var wdiStudents = people.filter( function(x) {
  return x.course === targetCourse
});
console.log(wdiStudents)
