// 41) Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.

var myArray = [["John", 23], ["cat", 2]];

// Answer
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);

// ###########################

// 42) Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.

var myArray = [["John", 23], ["dog", 3]];

// Answer
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);

// ###########################

// 43) Add ["Paul",35] to the beginning of the myArray variable using unshift().

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Answer
myArray.unshift(["Paul", 35])
console.log(myArray);

// ###########################

// 45) Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

// Answer

var myList = [["Apples", 4] , ["Pears", 2], ["Biscuits", 2], ["Pepsi", 1], ["Bread", 3]];
console.log(myList);

// ###########################

// 46) Create a function called reusableFunction which prints "Hi World" to the dev console. Call the function.

// Answer

function reusableFunction() {
    console.log("Hi World")
  }
  reusableFunction()

// ###########################

// 47) Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console. Call the function with two numbers as arguments.

// Answer

function functionWithArgs(a, b) {
    console.log(a + b)
    }
    functionWithArgs(1,2)
    functionWithArgs(7,9)

// ###########################

// 48) Using var, declare a global variable myGlobal outside of any function. Initialize it with a value of 10.Inside function fun1, assign 5 to oopsGlobal without using the var keyword.

// Answer

var myGlobal= 10;
function fun1() {
oopsGlobal = 5;
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// ###########################

// 49 ) Declare a local variable myVar inside myLocalScope. Run the tests and then follow the instructions commented out in the editor.

// Answer

function myLocalScope() {
    'use strict'; 
  var myVar;
    console.log(myVar);
  }
  myLocalScope();

// ###########################

// 50) Add a local variable to myOutfit function to override the value of outerWear with "sweater".

// Answer

var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater"
  return outerWear;
}
myOutfit();

// ###########################

// 51) Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value. 

// Answer

function timesFive(num) {
    return num * 5
  }
  console.log(timesFive(2))

// ###########################

// 52) Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

// Answer

function addFive(){
    sum = sum + 5
  }
  addFive();

// ###########################

// 53) Call the processArg function with an argument of 7 and assign its return value to the variable processed.

// Answer

var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7)

// ###########################

// 54) Write a function nextInLine which takes an array (arr) and a number (item) as arguments.Add the number to the end of the array, then remove the first element of the array.The nextInLine function should then return the element that was removed.

// Answer

function nextInLine(arr, item) {
    
  arr.push(item)
  var removedElement = arr.shift()
    return removedElement;  
  }
  var testArr = [1,2,3,4,5];
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 2)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));

// ###########################

// 55) Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

function welcomeToBooleans() {

    return true; 
  }
  
// ###########################

// 56) Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No, that was false" otherwise.

function trueOrFalse(wasThatTrue) {

    // Answer
    
  if(wasThatTrue){
    return "Yes, that was true"
  }
  return "No, that was false"
  
  }
  trueOrFalse(true);
// ###########################
// ###########################
// ###########################
// ###########################
// ###########################
// ###########################