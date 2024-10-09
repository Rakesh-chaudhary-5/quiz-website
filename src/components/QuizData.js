export const QuizData = [
  // 1-10
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { ans: 'js', is: false },
      { ans: 'scripting', is: false },
      { ans: 'javascript', is: false },
      { ans: 'script', is: true }
    ]
  },
  {
    question: 'Where is the correct place to insert a JavaScript?',
    answers: [
      { ans: 'The head section', is: false },
      { ans: 'The body section', is: false },
      { ans: 'Both the head and the body section', is: true },
      { ans: 'None of the above', is: false }
    ]
  },
  {
    question: 'What is the correct syntax for referring to an external script?',
    answers: [
      { ans: '<script src="xxx.js">', is: true },
      { ans: '<script href="xxx.js">', is: false },
      { ans: '<script ref="xxx.js">', is: false },
      { ans: '<script link="xxx.js">', is: false }
    ]
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      { ans: 'msg("Hello World");', is: false },
      { ans: 'alert("Hello World");', is: true },
      { ans: 'msgBox("Hello World");', is: false },
      { ans: 'alertBox("Hello World");', is: false }
    ]
  },
  {
    question: 'How do you create a function in JavaScript?',
    answers: [
      { ans: 'function myFunction()', is: true },
      { ans: 'function:myFunction()', is: false },
      { ans: 'function = myFunction()', is: false },
      { ans: 'myFunction function()', is: false }
    ]
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answers: [
      { ans: 'call myFunction()', is: false },
      { ans: 'call function myFunction()', is: false },
      { ans: 'myFunction()', is: true },
      { ans: 'Call.myFunction()', is: false }
    ]
  },
  {
    question: 'How to write an IF statement in JavaScript?',
    answers: [
      { ans: 'if i = 5 then', is: false },
      { ans: 'if i == 5 then', is: false },
      { ans: 'if (i == 5)', is: true },
      { ans: 'if i = 5', is: false }
    ]
  },
  {
    question: 'How does a WHILE loop start?',
    answers: [
      { ans: 'while (i <= 10; i++)', is: false },
      { ans: 'while (i <= 10)', is: true },
      { ans: 'while i = 1 to 10', is: false },
      { ans: 'while i <= 10', is: false }
    ]
  },
  {
    question: 'How can you add a comment in JavaScript?',
    answers: [
      { ans: '<!-- This is a comment -->', is: false },
      { ans: '// This is a comment', is: true },
      { ans: '* This is a comment *', is: false },
      { ans: '** This is a comment **', is: false }
    ]
  },
  {
    question: 'What is the correct way to write a JavaScript array?',
    answers: [
      { ans: 'var colors = (1:"red", 2:"green", 3:"blue")', is: false },
      { ans: 'var colors = ["red", "green", "blue"]', is: true },
      { ans: 'var colors = "red", "green", "blue"', is: false },
      { ans: 'var colors = { "red", "green", "blue" }', is: false }
    ]
  },

  // 11-20
  {
    question: 'How do you round the number 7.25 to the nearest integer?',
    answers: [
      { ans: 'Math.round(7.25)', is: true },
      { ans: 'round(7.25)', is: false },
      { ans: 'Math.rnd(7.25)', is: false },
      { ans: 'rnd(7.25)', is: false }
    ]
  },
  {
    question: 'How do you find the number with the highest value of x and y?',
    answers: [
      { ans: 'Math.ceil(x, y)', is: false },
      { ans: 'Math.max(x, y)', is: true },
      { ans: 'Math.floor(x, y)', is: false },
      { ans: 'top(x, y)', is: false }
    ]
  },
  {
    question: 'What is the correct JavaScript syntax for opening a new window called "newWindow"?',
    answers: [
      { ans: 'newWindow = window.new("http://www.w3schools.com");', is: false },
      { ans: 'newWindow = window.open("http://www.w3schools.com");', is: true },
      { ans: 'newWindow = window.make("http://www.w3schools.com");', is: false },
      { ans: 'newWindow = window.create("http://www.w3schools.com");', is: false }
    ]
  },
  {
    question: 'Which event occurs when the user clicks on an HTML element?',
    answers: [
      { ans: 'onmouseclick', is: false },
      { ans: 'onchange', is: false },
      { ans: 'onclick', is: true },
      { ans: 'onmouseover', is: false }
    ]
  },
  {
    question: 'How do you declare a JavaScript variable?',
    answers: [
      { ans: 'v carName;', is: false },
      { ans: 'var carName;', is: true },
      { ans: 'variable carName;', is: false },
      { ans: 'val carName;', is: false }
    ]
  },
  {
    question: 'Which operator is used to assign a value to a variable?',
    answers: [
      { ans: '=', is: true },
      { ans: '-', is: false },
      { ans: '*', is: false },
      { ans: '==', is: false }
    ]
  },
  {
    question: 'What will the following code return: Boolean(10 > 9)?',
    answers: [
      { ans: 'false', is: false },
      { ans: 'true', is: true },
      { ans: 'NaN', is: false },
      { ans: 'undefined', is: false }
    ]
  },
  {
    question: 'Is JavaScript case-sensitive?',
    answers: [
      { ans: 'No', is: false },
      { ans: 'Yes', is: true }
    ]
  },
  {
    question: 'How can you detect the client’s browser name?',
    answers: [
      { ans: 'navigator.appName', is: true },
      { ans: 'browser.name', is: false },
      { ans: 'client.navName', is: false },
      { ans: 'client.browserName', is: false }
    ]
  },
  {
    question: 'Which method converts a JSON string into a JavaScript object?',
    answers: [
      { ans: 'JSON.parse()', is: true },
      { ans: 'JSON.stringify()', is: false },
      { ans: 'JSON.object()', is: false },
      { ans: 'JSON.toObject()', is: false }
    ]
  },

  // 21-30
  {
    question: 'How do you check if a value is NaN in JavaScript?',
    answers: [
      { ans: 'isNaN()', is: true },
      { ans: 'NaN()', is: false },
      { ans: 'checkNaN()', is: false },
      { ans: 'Number.isNaN()', is: false }
    ]
  },
  {
    question: 'What does the "typeof" operator do in JavaScript?',
    answers: [
      { ans: 'Returns the variable data type', is: true },
      { ans: 'Returns the object type', is: false },
      { ans: 'Checks if a variable exists', is: false },
      { ans: 'Converts a variable to a string', is: false }
    ]
  },
  {
    question: 'What is a closure in JavaScript?',
    answers: [
      { ans: 'A function inside another function that can access the parent function’s variables', is: true },
      { ans: 'A loop inside a function', is: false },
      { ans: 'A variable defined outside a function', is: false },
      { ans: 'A conditional statement', is: false }
    ]
  },
  {
    question: 'How do you create an object in JavaScript?',
    answers: [
      { ans: 'var obj = [];', is: false },
      { ans: 'var obj = newObject();', is: false },
      { ans: 'var obj = Object[];', is: false },
      { ans: 'var obj = {};', is: true },
    ]
  },
  // ---------
    // 31-40
    {
      question: 'Which method removes the last element from an array?',
      answers: [
        { ans: 'shift()', is: false },
        { ans: 'splice()', is: false },
        { ans: 'push()', is: false },
        { ans: 'pop()', is: true },
      ]
    },
    {
      question: 'Which array method adds a new element to the end of an array?',
      answers: [
        { ans: 'pop()', is: false },
        { ans: 'push()', is: true },
        { ans: 'splice()', is: false },
        { ans: 'concat()', is: false }
      ]
    },
    {
      question: 'How do you remove the first element from an array?',
      answers: [
        { ans: 'pop()', is: false },
        { ans: 'shift()', is: true },
        { ans: 'splice()', is: false },
        { ans: 'slice()', is: false }
      ]
    },
    {
      question: 'Which method converts an array to a string?',
      answers: [
        { ans: 'toString()', is: false },
        { ans: 'slice()', is: false },
        { ans: 'concat()', is: false },
        { ans: 'join()', is: true },
      ]
    },
    {
      question: 'What is the result of 1 == "1"?',
      answers: [
        { ans: 'false', is: false },
        { ans: 'true', is: true },
        { ans: 'undefined', is: false },
        { ans: 'NaN', is: false }
      ]
    },
    {
      question: 'What is the result of 1 === "1"?',
      answers: [
        { ans: 'undefined', is: false },
        { ans: 'true', is: false },
        { ans: 'false', is: true },
        { ans: 'NaN', is: false }
      ]
    },
    {
      question: 'What does the "===" operator do in JavaScript?',
      answers: [
        { ans: 'Compares only values', is: false },
        { ans: 'Checks for strict inequality', is: false },
        { ans: 'None of the above', is: false },
        { ans: 'Compares both value and type', is: true },
      ]
    },
    {
      question: 'What does "use strict" do in JavaScript?',
      answers: [
        { ans: 'Turns off JavaScript warnings', is: false },
        { ans: 'Allows deprecated syntax', is: false },
        { ans: 'Enforces stricter parsing and error handling', is: true },
        { ans: 'Enables backward compatibility', is: false }
      ]
    },
    {
      question: 'What does "NaN" stand for in JavaScript?',
      answers: [
        { ans: 'Not a Number', is: true },
        { ans: 'Not an Integer', is: false },
        { ans: 'Null and None', is: false },
        { ans: 'Number and Null', is: false }
      ]
    },
    {
      question: 'What will "2" + 2 evaluate to in JavaScript?',
      answers: [
        { ans: '4', is: false },
        { ans: 'NaN', is: false },
        { ans: '22', is: true },
        { ans: 'undefined', is: false }
      ]
    },
  
    // 41-50
    {
      question: 'How do you add a key-value pair to an object in JavaScript?',
      answers: [
        { ans: 'obj.addKey(value);', is: false },
        { ans: 'obj.key = value;', is: true },
        { ans: 'obj.key(value);', is: false },
        { ans: 'obj.add(value);', is: false }
      ]
    },
    {
      question: 'What will "5" - 2 evaluate to in JavaScript?',
      answers: [
        { ans: '52', is: false },
        { ans: 'NaN', is: false },
        { ans: 'undefined', is: false },
        { ans: '3', is: true },
      ]
    },
    {
      question: 'What is the output of "console.log(typeof null);" in JavaScript?',
      answers: [
        { ans: 'null', is: false },
        { ans: 'undefined', is: false },
        { ans: 'object', is: true },
        { ans: 'boolean', is: false }
      ]
    },
    {
      question: 'How do you stop an interval timer in JavaScript?',
      answers: [
        { ans: 'clearTimer()', is: false },
        { ans: 'clearInterval()', is: true },
        { ans: 'stopInterval()', is: false },
        { ans: 'pauseInterval()', is: false }
      ]
    },
    {
      question: 'How do you access the length of an array?',
      answers: [
        { ans: 'array.length', is: true },
        { ans: 'array.size()', is: false },
        { ans: 'array.count()', is: false },
        { ans: 'array.length()', is: false }
      ]
    },
    {
      question: 'What does the "push()" method do in JavaScript?',
      answers: [
        { ans: 'Removes an element from the end of an array', is: false },
        { ans: 'Adds an element to the beginning of an array', is: false },
        { ans: 'Removes an element from the beginning of an array', is: false },
        { ans: 'Adds an element to the end of an array', is: true },
      ]
    },
    {
      question: 'How do you convert a string to a number in JavaScript?',
      answers: [
        { ans: 'Number()', is: false },
        { ans: 'String()', is: false },
        { ans: 'parseInt()', is: true },
        { ans: 'float()', is: false }
      ]
    },
    {
      question: 'What is the correct way to return the current date and time in JavaScript?',
      answers: [
        { ans: 'getDate()', is: false },
        { ans: 'new Date()', is: true },
        { ans: 'currentDate()', is: false },
        { ans: 'now()', is: false }
      ]
    },
    {
      question: 'How do you declare an asynchronous function in JavaScript?',
      answers: [
        { ans: 'async function()', is: true },
        { ans: 'function async()', is: false },
        { ans: 'async() function', is: false },
        { ans: 'function() async', is: false }
      ]
    },
    {
      question: 'How do you fetch data from an API in JavaScript?',
      answers: [
        { ans: 'axios()', is: false },
        { ans: 'httpRequest()', is: false },
        { ans: 'fetch()', is: true },
        { ans: 'apiCall()', is: false }
      ]
    },
  
    // 51-60
    {
      question: 'What is the output of "typeof []"?',
      answers: [
        { ans: 'array', is: false },
        { ans: 'undefined', is: false },
        { ans: 'null', is: false },
        { ans: 'object', is: true },
      ]
    },
    {
      question: 'Which JavaScript method is used to iterate over an array?',
      answers: [
        { ans: 'map()', is: false },
        { ans: 'filter()', is: false },
        { ans: 'reduce()', is: false },
        { ans: 'forEach()', is: true },
      ]
    },
    {
      question: 'What is the use of "setTimeout()" in JavaScript?',
      answers: [
        { ans: 'Clears a timeout', is: false },
        { ans: 'Delays the execution of a function', is: true },
        { ans: 'Creates an interval', is: false },
        { ans: 'Executes a function immediately', is: false }
      ]
    },
    {
      question: 'How do you find the index of an element in an array?',
      answers: [
        { ans: 'findIndex()', is: false },
        { ans: 'indexOf()', is: true },
        { ans: 'getIndex()', is: false },
        { ans: 'locate()', is: false }
      ]
    },
    {
      question: 'What is the output of "console.log(0 == false);"?',
      answers: [
        { ans: 'false', is: false },
        { ans: 'true', is: true },
      ]
    },
    {
      question: 'What is the output of "console.log(0 === false);"?',
      answers: [
        { ans: 'false', is: true },
        { ans: 'true', is: false }
      ]
    },
    {
      question: 'How do you create a promise in JavaScript?',
      answers: [
        { ans: 'Promise.create()', is: false },
        { ans: 'new Promise()', is: true },
        { ans: 'createPromise()', is: false },
        { ans: 'new.promise()', is: false }
      ]
    },
    {
      question: 'What is the purpose of "Promise.resolve()"?',
      answers: [
        { ans: 'To reject a promise', is: false },
        { ans: 'To create a pending promise', is: false },
        { ans: 'To return a resolved promise', is: true },
        { ans: 'To add a callback to a promise', is: false }
      ]
    },
    {
      question: 'Which method is used to handle errors in promises?',
      answers: [
        { ans: 'error()', is: false },
        { ans: 'then()', is: false },
        { ans: 'catch()', is: true },
        { ans: 'handle()', is: false }
      ]
    },
    {
      question: 'What is the difference between "let" and "var" in JavaScript?',
      answers: [
        { ans: 'Var has block scope, let does not', is: false },
        { ans: 'Let can be redeclared, var cannot', is: false },
        { ans: 'Var can only be used in strict mode', is: false },
        { ans: 'Let has block scope, var does not', is: true },
      ]
    },    
    // --------
      // 61-70
      {
        question: 'What will the output of "typeof NaN" be in JavaScript?',
        answers: [
          { ans: 'NaN', is: false },
          { ans: 'undefined', is: false },
          { ans: 'number', is: true },
          { ans: 'null', is: false }
        ]
      },
      {
        question: 'What is the difference between "==" and "===" in JavaScript?',
        answers: [
          { ans: '=== compares values, == compares values and types', is: false },
          { ans: '== compares types, === compares values', is: false },
          { ans: '== is strict, === is loose', is: false },
          { ans: '== compares values, === compares values and types', is: true },
        ]
      },
      {
        question: 'What does "Array.prototype.map()" do in JavaScript?',
        answers: [
          { ans: 'Modifies the original array', is: false },
          { ans: 'Removes elements from the array', is: false },
          { ans: 'Creates a new array by applying a function to each element', is: true },
          { ans: 'Joins arrays together', is: false }
        ]
      },
      {
        question: 'Which JavaScript method is used to filter elements in an array?',
        answers: [
          { ans: 'filter()', is: true },
          { ans: 'map()', is: false },
          { ans: 'reduce()', is: false },
          { ans: 'forEach()', is: false }
        ]
      },
      {
        question: 'What does "Array.prototype.reduce()" do?',
        answers: [
          { ans: 'Executes a reducer function on each element of the array, resulting in a single output', is: true },
          { ans: 'Filters the array based on a condition', is: false },
          { ans: 'Maps each array element', is: false },
          { ans: 'Joins arrays together', is: false }
        ]
      },
      {
        question: 'How do you copy an object in JavaScript?',
        answers: [
          { ans: 'obj.copy()', is: false },
          { ans: 'Object.assign({}, obj)', is: true },
          { ans: 'clone(obj)', is: false },
          { ans: 'obj.clone()', is: false }
        ]
      },
      {
        question: 'What will the output of "console.log(2 + 2 + "2")" be in JavaScript?',
        answers: [
          { ans: '6', is: false },
          { ans: '222', is: false },
          { ans: '42', is: true },
          { ans: 'NaN', is: false }
        ]
      },
      {
        question: 'What is the result of "typeof undefined"?',
        answers: [
          { ans: 'object', is: false },
          { ans: 'undefined', is: true },
          { ans: 'null', is: false },
          { ans: 'string', is: false }
        ]
      },
      {
        question: 'Which method adds one or more elements to the beginning of an array?',
        answers: [
          { ans: 'shift()', is: false },
          { ans: 'push()', is: false },
          { ans: 'pop()', is: false },
          { ans: 'unshift()', is: true },
        ]
      },
      {
        question: 'What is the difference between "null" and "undefined" in JavaScript?',
        answers: [
          { ans: 'undefined is an assignment value, null means a variable has been declared but not assigned', is: false },
          { ans: 'Both are the same', is: false },
          { ans: 'null is an assignment value, undefined means a variable has been declared but not assigned', is: true },
          { ans: 'null means a variable does not exist, undefined means it exists but has no value', is: false }
        ]
      },
    
      // 71-80
      {
        question: 'How do you check if a number is an integer in JavaScript?',
        answers: [
          { ans: 'isInteger()', is: false },
          { ans: 'Math.isInteger()', is: false },
          { ans: 'checkInteger()', is: false },
          { ans: 'Number.isInteger()', is: true },
        ]
      },
      {
        question: 'Which method is used to merge two or more arrays?',
        answers: [
          { ans: 'merge()', is: false },
          { ans: 'combine()', is: false },
          { ans: 'join()', is: false },
          { ans: 'concat()', is: true },
        ]
      },
      {
        question: 'How do you round a number to the nearest integer in JavaScript?',
        answers: [
          { ans: 'Math.ceil()', is: false },
          { ans: 'Math.floor()', is: false },
          { ans: 'Math.round()', is: true },
          { ans: 'Math.trunc()', is: false }
        ]
      },
      {
        question: 'Which method removes whitespace from both ends of a string?',
        answers: [
          { ans: 'strip()', is: false },
          { ans: 'removeWhitespace()', is: false },
          { ans: 'trim()', is: true },
          { ans: 'clean()', is: false }
        ]
      },
      {
        question: 'How do you check if an array contains a specific element?',
        answers: [
          { ans: 'contains()', is: false },
          { ans: 'includes()', is: true },
          { ans: 'has()', is: false },
          { ans: 'exists()', is: false }
        ]
      },
      {
        question: 'What will "console.log(0.1 + 0.2 === 0.3)" return in JavaScript?',
        answers: [
          { ans: 'true', is: false },
          { ans: 'NaN', is: false },
          { ans: 'false', is: true },
          { ans: 'undefined', is: false }
        ]
      },
      {
        question: 'What is the purpose of the "isNaN()" function in JavaScript?',
        answers: [
          { ans: 'Checks if a value is a number', is: false },
          { ans: 'Checks if a value is NaN', is: true },
          { ans: 'Converts a string to a number', is: false },
          { ans: 'Returns a boolean for numeric values', is: false }
        ]
      },
      {
        question: 'What is the output of "console.log(1 + "2" + 3)" in JavaScript?',
        answers: [
          { ans: '123', is: true },
          { ans: '6', is: false },
          { ans: '5', is: false },
          { ans: 'NaN', is: false }
        ]
      },
      {
        question: 'What does the "split()" method do in JavaScript?',
        answers: [
          { ans: 'Splits a string into an array of substrings', is: true },
          { ans: 'Removes characters from a string', is: false },
          { ans: 'Combines two strings', is: false },
          { ans: 'Replaces a substring with another', is: false }
        ]
      },
      {
        question: 'Which method is used to return the length of a string?',
        answers: [
          { ans: 'size()', is: false },
          { ans: 'count()', is: false },
          { ans: 'length', is: true },
          { ans: 'getLength()', is: false }
        ]
      },
    
      // 81-90
      {
        question: 'How do you stop a loop in JavaScript?',
        answers: [
          { ans: 'continue', is: false },
          { ans: 'break', is: true },
          { ans: 'stop', is: false },
          { ans: 'exit', is: false }
        ]
      },
      {
        question: 'How do you add elements to the beginning of an array?',
        answers: [
          { ans: 'push()', is: false },
          { ans: 'unshift()', is: true },
          { ans: 'shift()', is: false },
          { ans: 'splice()', is: false }
        ]
      },
      {
        question: 'What is the use of "Math.floor()" in JavaScript?',
        answers: [
          { ans: 'Rounds a number up to the nearest integer', is: false },
          { ans: 'Returns the absolute value of a number', is: false },
          { ans: 'Rounds a number down to the nearest integer', is: true },
          { ans: 'Returns the maximum value of two numbers', is: false }
        ]
      },
      {
        question: 'How do you declare a default parameter value in a function?',
        answers: [
          { ans: 'function(param: value)', is: false },
          { ans: 'function(param = value)', is: true },
          { ans: 'param default value', is: false },
          { ans: 'function[param = value]', is: false }
        ]
      },
      //----------------
      {
        question: 'What does the "setTimeout()" function do in JavaScript?',
        answers: [
          { ans: 'Executes a function after a specified number of milliseconds', is: true },
          { ans: 'Executes a function immediately', is: false },
          { ans: 'Creates a new promise', is: false },
          { ans: 'Delays the execution of a function', is: false }
        ]
      },
      {
        question: 'What is the output of "console.log(1 + 2 + "3")"?',
        answers: [
          { ans: '33', is: true },
          { ans: '6', is: false },
          { ans: 'undefined', is: false },
          { ans: 'NaN', is: false }
        ]
      },
      {
        question: 'How do you check if a variable is a number in JavaScript?',
        answers: [
          { ans: 'typeof variable === "number"', is: true },
          { ans: 'isNaN(variable)', is: false },
          { ans: 'isNumber(variable)', is: false },
          { ans: 'checkNumber(variable)', is: false }
        ]
      },
      {
        question: 'What does the "toString()" method do in JavaScript?',
        answers: [
          { ans: 'Converts a value to a string', is: true },
          { ans: 'Converts a string to a number', is: false },
          { ans: 'Converts an object to a JSON string', is: false },
          { ans: 'Converts an array to a string', is: false }
        ]
      },
      {
        question: 'What is the output of "console.log(typeof NaN)"?',
        answers: [
          { ans: 'number', is: true },
          { ans: 'undefined', is: false },
          { ans: 'NaN', is: false },
          { ans: 'string', is: false }
        ]
      },
      {
        question: 'What does the "some()" method do in JavaScript?',
        answers: [
          { ans: 'Tests whether at least one element in an array passes a test', is: true },
          { ans: 'Tests whether all elements in an array pass a test', is: false },
          { ans: 'Creates a new array', is: false },
          { ans: 'Filters an array', is: false }
        ]
      },
      {
        question: 'How do you create a new object in JavaScript?',
        answers: [
          { ans: 'var obj = new Object()', is: true },
          { ans: 'var obj = {}', is: false },
          { ans: 'var obj = Object.create()', is: false },
          { ans: 'var obj = Object()', is: false }
        ]
      },
      {
        question: 'What does the "push()" method do in JavaScript?',
        answers: [
          { ans: 'Adds one or more elements to the end of an array', is: true },
          { ans: 'Removes the last element from an array', is: false },
          { ans: 'Adds an element to the beginning of an array', is: false },
          { ans: 'Sorts an array', is: false }
        ]
      },
    
      // 161-170
      {
        question: 'What is the output of "console.log([1, 2, 3].join("-"))"?',
        answers: [
          { ans: '1-2-3', is: true },
          { ans: '123', is: false },
          { ans: '[1, 2, 3]', is: false },
          { ans: 'undefined', is: false }
        ]
      },
      {
        question: 'What is the purpose of the "slice()" method in JavaScript?',
        answers: [
          { ans: 'Extracts a section of an array', is: true },
          { ans: 'Sorts the elements of an array', is: false },
          { ans: 'Filters elements in an array', is: false },
          { ans: 'Removes elements from an array', is: false }
        ]
      },
      {
        question: 'What does the "Math.random()" function do?',
        answers: [
          { ans: 'Returns a random number between 0 and 1', is: true },
          { ans: 'Returns a random integer', is: false },
          { ans: 'Returns a random boolean', is: false },
          { ans: 'Returns a random string', is: false }
        ]
      },
      {
        question: 'What is the output of "console.log("hello".length)"?',
        answers: [
          { ans: '5', is: true },
          { ans: '4', is: false },
          { ans: 'undefined', is: false },
          { ans: 'NaN', is: false }
        ]
      },
      {
        question: 'How do you add an event listener in JavaScript?',
        answers: [
          { ans: 'element.addEventListener()', is: true },
          { ans: 'element.on()', is: false },
          { ans: 'element.attachEvent()', is: false },
          { ans: 'element.listen()', is: false }
        ]
      },
      {
        question: 'What does the "JSON.stringify()" method do?',
        answers: [
          { ans: 'Converts a JavaScript object to a JSON string', is: true },
          { ans: 'Converts a JSON string to a JavaScript object', is: false },
          { ans: 'Parses a JSON string', is: false },
          { ans: 'Creates a new object', is: false }
        ]
      },
      {
        question: 'What is the output of "console.log(null == undefined)"?',
        answers: [
          { ans: 'true', is: true },
          { ans: 'false', is: false },
          { ans: 'undefined', is: false },
          { ans: 'NaN', is: false }
        ]
      },
      {
        question: 'What does the "filter()" method do in JavaScript?',
        answers: [
          { ans: 'Creates a new array with all elements that pass the test', is: true },
          { ans: 'Creates a new array with all elements', is: false },
          { ans: 'Removes elements from an array', is: false },
          { ans: 'Sorts an array', is: false }
        ]
      },
      {
        question: 'How do you create a new set in JavaScript?',
        answers: [
          { ans: 'new Set()', is: true },
          { ans: 'Set.create()', is: false },
          { ans: 'new Set([])', is: false },
          { ans: 'create Set()', is: false }
        ]
      },
      {
        question: 'What is the purpose of the "reduceRight()" method?',
        answers: [
          { ans: 'Executes a reducer function on each element from right to left', is: true },
          { ans: 'Executes a reducer function on each element from left to right', is: false },
          { ans: 'Creates a new array', is: false },
          { ans: 'Filters elements of an array', is: false }
        ]
      },
    
      // 171-180
      {
        question: 'What does the "splice()" method do when used without arguments?',
        answers: [
          { ans: 'Returns an empty array', is: true },
          { ans: 'Removes all elements from the array', is: false },
          { ans: 'Creates a new array', is: false },
          { ans: 'Sorts elements in an array', is: false }
        ]
      },
      {
        question: 'What is the output of "console.log(typeof { a: 1 })"?',
        answers: [
          { ans: 'object', is: true },
          { ans: 'undefined', is: false },
          { ans: 'NaN', is: false },
          { ans: 'string', is: false }
        ]
      },
      {
        question: 'How do you access an array element in JavaScript?',
        answers: [
          { ans: 'array[index]', is: true },
          { ans: 'array.index', is: false },
          { ans: 'array.get(index)', is: false },
          { ans: 'array[index()]', is: false }
        ]
      },
      {
        question: 'What does the "Object.keys()" method do?',
        answers: [
          { ans: 'Returns an array of a given object’s property names', is: true },
          { ans: 'Returns the values of a given object’s properties', is: false },
          { ans: 'Creates a new object', is: false },
          { ans: 'Merges two objects', is: false }
        ]
      },
      {
        question: 'What is the output of "console.log([1, 2, 3].length)"?',
        answers: [
          { ans: '3', is: true },
          { ans: 'undefined', is: false },
          { ans: 'NaN', is: false },
          { ans: '2', is: false }
        ]
      },
      {
        question: 'What does the "Array.from()" method do?',
        answers: [
          { ans: 'Creates a new array from an array-like or iterable object', is: true },
          { ans: 'Creates a new array', is: false },
          { ans: 'Filters elements from an array', is: false },
          { ans: 'Joins two arrays', is: false }
        ]
      },
      {
        question: 'How do you convert a string to a number in JavaScript?',
        answers: [
          { ans: 'Number()', is: true },
          { ans: 'toNumber()', is: false },
          { ans: 'parseInt()', is: false },
          { ans: 'convertToNumber()', is: false }
        ]
      },
      {
        question: 'What does the "Array.isArray()" method do?',
        answers: [
          { ans: 'Checks if a value is an array', is: true },
          { ans: 'Checks if a value is an object', is: false },
          { ans: 'Creates a new array', is: false },
          { ans: 'Returns the length of an array', is: false }
        ]
      },
      {
        question: 'What is the output of "console.log(2 + 2 + "2")"?',
        answers: [
          { ans: '222', is: true },
          { ans: '4', is: false },
          { ans: 'NaN', is: false },
          { ans: 'undefined', is: false }
        ]
      },
      {
        question: 'What does the "forEach()" method do in JavaScript?',
        answers: [
          { ans: 'Executes a provided function once for each array element', is: true },
          { ans: 'Creates a new array', is: false },
          { ans: 'Removes elements from an array', is: false },
          { ans: 'Sorts elements of an array', is: false }
        ]
      },
      {
        question: 'What is the output of "console.log(typeof Symbol())"?',
        answers: [
          { ans: 'symbol', is: true },
          { ans: 'undefined', is: false },
          { ans: 'NaN', is: false },
          { ans: 'string', is: false }
        ]
      },
  {
    question: 'What is the correct syntax for referring to an external script called "script.js"?',
    answers: [{ ans: '<script href="script.js">', is: false }, { ans: '<script name="script.js">', is: false }, { ans: '<script src="script.js">', is: true }, { ans: '<script file="script.js">', is: false }]
  },
  {
    question: 'How do you create a function in JavaScript?',
    answers: [{ ans: 'function:myFunction()', is: false }, { ans: 'function myFunction()', is: true }, { ans: 'function = myFunction()', is: false }, { ans: 'create myFunction()', is: false }]
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answers: [{ ans: 'call myFunction()', is: false }, { ans: 'myFunction()', is: true }, { ans: 'call function myFunction()', is: false }, { ans: 'execute myFunction()', is: false }]
  },
  {
    question: 'What is the correct way to write a JavaScript array?',
    answers: [{ ans: 'var colors = "red", "green", "blue"', is: false }, { ans: 'var colors = (1:"red", 2:"green", 3:"blue")', is: false }, { ans: 'var colors = ["red", "green", "blue"]', is: true }, { ans: 'var colors = [1:"red", 2:"green", 3:"blue"]', is: false }]
  },
  {
    question: 'How do you round the number 7.25 to the nearest integer?',
    answers: [{ ans: 'Math.round(7.25)', is: true }, { ans: 'Math.rnd(7.25)', is: false }, { ans: 'round(7.25)', is: false }, { ans: 'Math.roundNumber(7.25)', is: false }]
  },
  {
    question: 'How can you add a comment in JavaScript?',
    answers: [{ ans: '// This is a comment', is: true }, { ans: '<!-- This is a comment -->', is: false }, { ans: '* This is a comment *', is: false }, { ans: '//: This is a comment', is: false }]
  },
  {
    question: 'Which method is used to access an HTML element by its ID?',
    answers: [{ ans: 'getElementById()', is: true }, { ans: 'getElement()', is: false }, { ans: 'getElementByClass()', is: false }, { ans: 'querySelector()', is: false }]
  },
  {
    question: 'Which event occurs when the user clicks on an HTML element?',
    answers: [{ ans: 'onclick', is: true }, { ans: 'onchange', is: false }, { ans: 'onmouseover', is: false }, { ans: 'onmouseclick', is: false }]
  },
  {
    question: 'How do you declare a JavaScript variable?',
    answers: [{ ans: 'var myVar', is: true }, { ans: 'variable myVar', is: false }, { ans: 'dim myVar', is: false }, { ans: 'let myVar', is: true }]
  },
  {
    question: 'What is the correct way to write an if statement in JavaScript?',
    answers: [{ ans: 'if (x > y)', is: true }, { ans: 'if x > y then', is: false }, { ans: 'if (x > y) {}', is: true }, { ans: 'if x > y', is: false }]
  },
  {
    question: 'What does JSON stand for?',
    answers: [{ ans: 'JavaScript Object Notation', is: true }, { ans: 'JavaScript Online Notation', is: false }, { ans: 'JavaScript Object Name', is: false }, { ans: 'JavaScript Object Number', is: false }]
  },
  {
    question: 'What is the output of the following code: console.log(typeof null)?',
    answers: [{ ans: 'null', is: false }, { ans: 'object', is: true }, { ans: 'undefined', is: false }, { ans: 'number', is: false }]
  },
  {
    question: 'Which of the following is a way to create an object in JavaScript?',
    answers: [{ ans: 'var obj = {}', is: true }, { ans: 'var obj = []', is: false }, { ans: 'var obj = new Object()', is: true }, { ans: 'var obj = Object.create()', is: true }]
  },
  {
    question: 'What is the purpose of the "this" keyword in JavaScript?',
    answers: [{ ans: 'To refer to the global object', is: false }, { ans: 'To refer to the calling object', is: true }, { ans: 'To create a new object', is: false }, { ans: 'To refer to the document object', is: false }]
  },
  {
    question: 'What is a closure in JavaScript?',
    answers: [{ ans: 'A function that is enclosed within another function', is: true }, { ans: 'A way to create a private variable', is: true }, { ans: 'A method for error handling', is: false }, { ans: 'A type of loop', is: false }]
  },
  {
    question: 'Which built-in method returns the length of the string?',
    answers: [{ ans: 'length()', is: false }, { ans: 'size()', is: false }, { ans: 'getLength()', is: false }, { ans: 'string.length', is: true }]
  },
  {
    question: 'Which keyword is used to prevent further modification of an object in JavaScript?',
    answers: [{ ans: 'freeze', is: true }, { ans: 'lock', is: false }, { ans: 'seal', is: false }, { ans: 'protect', is: false }]
  },
  {
    question: 'What will be the output of the following code: console.log(0.1 + 0.2 === 0.3)?',
    answers: [{ ans: 'true', is: false }, { ans: 'false', is: true }, { ans: 'undefined', is: false }, { ans: 'NaN', is: false }]
  },
  {
    question: 'What is the difference between "==" and "===" in JavaScript?',
    answers: [{ ans: "'==' checks value, '===' checks value and type", is: true }, { ans: "'==' checks type, '===' checks value", is: false }, { ans: "'==' is strict, '===' is loose", is: false }, { ans: "'==' is only for numbers", is: false }]
  },
  {
    question: 'Which of the following is a valid JavaScript string?',
    answers: [{ ans: '"Hello"', is: true }, { ans: "'Hello'", is: true }, { ans: '"Hello\'"', is: true }, { ans: '"Hello', is: false }]
  },
  {
    question: 'Which method removes the last element from an array?',
    answers: [{ ans: 'pop()', is: true }, { ans: 'push()', is: false }, { ans: 'shift()', is: false }, { ans: 'unshift()', is: false }]
  },
  {
    question: 'How can you convert a string to a number in JavaScript?',
    answers: [{ ans: 'Number("123")', is: true }, { ans: 'parseInt("123")', is: true }, { ans: 'parseFloat("123.45")', is: true }, { ans: 'All of the above', is: true }]
  },
  {
    question: 'What is the purpose of the "return" statement in a function?',
    answers: [{ ans: 'To terminate the function', is: false }, { ans: 'To send a value back to the caller', is: true }, { ans: 'To log a message', is: false }, { ans: 'To create a new function', is: false }]
  },
  {
    question: 'Which symbol is used for comments in JavaScript?',
    answers: [{ ans: '// comment', is: true }, { ans: '# comment', is: false }, { ans: '/* comment */', is: true }, { ans: '<!-- comment -->', is: false }]
  }
];


