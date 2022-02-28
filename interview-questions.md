# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: 
               A parameter is a placeholder for the value to passed in when defining a function. An argument would be the actual
               value/s used when the function is executed. 

  Researched answer:
               There are two types of parameters. Input and output parameters. They both represent values that are to
               be passed in and expressed/returned. 
**References:** https://en.wikipedia.org/wiki/Parameter_%28computer_programming%29#Parameters_and_arguments
                https://developer.mozilla.org/en-US/docs/Glossary/Parameter          


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: 
               I believe the .map() utilizes a callback function to iterate over an array utilizing the predefined parameters
               of value, index and a third. The predefined parameter of value will always be used when using the .map() method

  Researched answer:
               The third parameter is the array .map() was called on. So we have the value of the elements in the array , the indices 
               or placement of those elements, and the array which was called on. When we use the .map() the output will be an array
               of the same length with the modified values.
  **References:** https://github.com/learn-academy-2022-alpha/Syllabus/blob/main/javascript/higher-order-functions.md


3. What is the difference between map and filter?

  Your answer:
              Both will iterate through an array but Map will return an array of the same length, while filter will only
              return values that meet the given criteria.  

  Researched answer:
              Map will modify the value of each element in an array while filter simply looks for elements that are 
              truthy. We are able to utilize both, chaining both of these higher functions in shortened code, as 
              opposed to using many lines of loops and conditionals.
**References:** https://github.com/learn-academy-2022-alpha/Syllabus/blob/main/javascript/higher-order-functions.md


4. What is the difference between a function and a method?

  Your answer: 
              A function, is a code block that the user defines. It will execute a given action on parameters and 
              outputs desire. A method is a built-in function in the language that are the developers of the language
              determined would be used the most often. 

  Researched answer:
              We can call functions by their assigned name. Methods must be called using the object it is 
              acting on as well as the methods name. Methods are properties of objects and must be used with ().
              Using the method without the () will return the function definition instead of executing 
              the function itself.
**References:** https://www.w3schools.com/js/js_object_methods.asp


5. What is object destructuring?

  Your answer: 
             Object destructuring is where we access specific key value pairs and assign them to a variable.
             This allows us easier access to the values we need instead of having to . notation and write 
             redundant code.

  Researched answer:
             Objects facilitate quicker manipulation and extraction of object properties.
**References:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

6. STRETCH: What is hoisting in JavaScript?

  Your answer:
            Hoisting in JavaScript is when either a variable or function definition is able to be utilized outside 
            its defined scope.  

  Researched answer:
               Instead of my answer of outside its defined scope, the variable is "hoisted" or brought to the top of the code block.
               When defined with var this is an acceptable use case. However, defining a variable using let or const will return an error or fail to run 
               if it is used before it is declared. 
**Reference** https://www.w3schools.com/js/js_hoisting.asp


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance:
                    Class inheritance is essentially like cloning down a repository from Github. Extending a class will
                    inherit all the methods from the one it extends.
**Reference** https://www.w3schools.com/js/js_class_inheritance.asp

2.React:            Just like methods are built in functions commonly used, React is a JavaScript library that facilitates
                    quicker development of single page and mobile apps. Its is primarily used for building small componetns
                    of UI and is an open-sourced library created by Facebook (Meta).

**Reference** https://reactjs.org/

3.React state:      It is the present or current state of a component. Meaning that the currently stored properties can be 
                    viewed. When the object properties are redefined, it must be rendered again to display the updated
                    component.

**Reference** https://www.w3schools.com/react/react_state.asp

4.React lifecycle methods: The React Lifecycle is composed of the 1. Mounting, 2. Updating and 3. Unmounting phase
                           In other words, when the component is added to the DOM, updated(state changed or manipulated)
                           and removed from the DOM. 

**Reference** https://www.w3schools.com/react/react_lifecycle.asp

5.DOM:  Stands for Document Object Model is what allows the interaction between the web page and JavaScript allowing 
        for the manipulation of all elements/styling/ and actions to take place.

**Reference** https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction