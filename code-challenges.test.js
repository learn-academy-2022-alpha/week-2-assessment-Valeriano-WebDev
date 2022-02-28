// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.
// describe("hello", () => {
//
//
//     it("returns a string that says hi", () => {
//
//
//         expect(hello()).toEqual("hi")
//     })
// })
//
// a) Create a test with expect statements for each of the variables provided.
// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisible by three or not.
/**Pseudo Code
 - Our first step will be to define our function giving it a name.
 - It will take a number as an argument, so we can give a name to the parameter it will take in , in this case num
 - In order to decide whether the argument is divisible by three or not, we will use a conditional if/else statement
   to evaluate the condition.
 - We can use the modulo operator to accomplish this task.
 - Based on our two desired returns/outputs "divisible by three", or "not divisible by three" we will log out the return with one of these
   phrases.
 - Running Jest with the correctly defined Describe, It , and Expect statements satisfies our need to log at the end.
 - Instead , if our function is correct , we will receive all passing green for our Jest tests.
 **/

// a) Create a test with expect statements for each of the variables provided.

    describe("divisibleByThree", () => {

    it("returns a string whether the argument passed is divisible by 3", () => {

        const num1 = 15
//      Expected output: "15 is divisible by three"
        const num2 = 0
//      Expected output: "0 is divisible by three"
        const num3 = -7
//      Expected output: "-7 is not divisible by three"

        expect(divisibleByThree(num1)).toEqual(`${num1} is divisible by three`)
        expect(divisibleByThree(num2)).toEqual(`${num2} is divisible by three`)
        expect(divisibleByThree(num3)).toEqual(`${num3} is not divisible by three`)
    })
})

// b) Create the function that makes the test pass.

     const divisibleByThree = (num) => {
        if(num % 3 === 0 ) {
            return `${num} is divisible by three`
        } else {
            return `${num} is not divisible by three`
        }
     }

     /** I GOT GREEN!!! **/
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
/**Pseudo Code
 - Our first step will be to define our function giving it a name.
 - After clarification with the cohort, we stick to the given output of each word in the array return with the first letter of the word
   capitalized.
 - It will take an array as an argument, so we can give a name to the parameter it will take in , in this case arr
 - We know that we will be iterating through the array and returning an array of the same length, so we can use .map to accomplish this.
 - The array can be broken down into two parts. The first letter, or character at index[0] utilizing charAt[0] and the remaining letters or substring,
   utilizing substring[1].
 - The toUppercase method will be used on the first letter or element and toLowercase will be used on the substring that remains.
 - This ensures proper capitalization of each element that comprises the string.
 - Running Jest with the correctly defined Describe, It , and Expect statements satisfies our need to log at the end.
 - Instead , if our function is correct , we will receive all passing green for our Jest tests and receive the desired return.
 **/

// a) Create a test with expect statements for each of the variables provided.

    describe("capitalized", () => {

    it("returns an array with the first letter of each word of the passed in array capitalized.", () => {

        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//      Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
//      Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

        expect(capitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// b) Create the function that makes the test pass.
    const capitalized = (arr) => {
        return arr.map(element => {
            return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
        })
}

    /** I GOT GREEN!!! **/
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
/**Pseudo Code
 - Our first step will be to define our function giving it a name.
 - The desired output is the index of the first vowel that occurs  of a string that is passed in. We can use string as the placeholder for our parameter.
 - In order to easily iterate through the string and evaluate each letter against the vowels a,e,i,o,u, the .split("") method will be used.
 - Afterwards, the .filter will be called in conjunction with the .split method to iterate over the created array of letters.
 - Using the logical or || and comparison === operators. The function will evaluate each letter against all vowels during every iteration.
 - Any vowels will be added to our newly created array and we return the first vowel , or vowel at index[0]
 - Once again, passing green Jest Tests satisfies our need to console.log , as long as the data passed into both the function and initial
   describe,it,expect statements are correct.
 **/

// a) Create a test with expect statements for each of the variables provided.

    describe("vowelIndex", () => {

    it("returns the the first vowel that occurs in a passed in string", () => {

        const vowelTester1 = "learn"
//      Expected output: 1
        const vowelTester2 = "academy"
//      Expected output: 0
        const vowelTester3 = "challenges"
//      Expected output: 2

        expect(vowelIndex(vowelTester1)).toEqual(1)
        expect(vowelIndex(vowelTester2)).toEqual(0)
        expect(vowelIndex(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.

const vowelIndex = (str) => {
    let vowelArr = str.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o"|| vowel === "u"
    })
    return str.indexOf(vowelArr[0])
}


/** I GOT GREEN!!! **/