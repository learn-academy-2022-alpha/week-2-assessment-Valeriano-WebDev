// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
console.log(cohort.split(''))

// a) Your answer: The answer will be ["A","l","p","h","a","","2","0","2","2"]
// b) Verify and explain: By adding the .split() method at the end of a string it will separate each individual character by
//    the inputted separator and return them in an array.
/**Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split **/


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: The output is undefined due to the lack of the keyword 'return' which ends the function. Without this
//    the function is incomplete and the return expression `Hello, ${name}!` fails to execute.
/**Reference: https://sebhastian.com/what-does-return-do-javascript/#:~:text=The%20return%20keyword%20in%20JavaScript%20is%20a%20keyword%20to%20build,Hello%22)%3B%20return%3B%20console. **/

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: The output will be [8,10,12,14,16]
// b) Verify and explain: Calling on the var multBy2 the .map() method is executed. It iterates through each element
// of the array and multiplies the value by 2.
/**Reference: https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/ **/

// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: It will log [11,13,15]
// b) Verify and explain: Similar to the .map() method, using .filter() will iterate through each element of the array
//and return a new array with elements which pass the criteria used. In this case we are evaluating to see which elements
//are not divisible by 2. Elements meeting the criteria are passed into the new array when called.
/**Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter **/


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages)

// a) Your answer: "JavaScript"
// b) Verify and explain: In order to access properties within the object myCodingSkills, the dot . notation must used. Appending
//   .language to the end of the variable allows us to do this. We encapsulate and attach a number to .languages to access value we
//    want at a given index. Leaving out the [] and number would return all elements in the selected array.
/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects **/


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George, Alpha, 2022
// b) Verify and explain: When logging an instance , the output will return , the class Name, followed
//       by the object of the class called. In this case, it would be learn, followed by all the key value pairs.
//       Learn { student: 'George', cohort: 'Alpha', year: 2022 } which make up the object.
/**Reference: https://github.com/learn-academy-2022-alpha/Syllabus/blob/main/javascript/objects.md **/

