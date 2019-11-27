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
// ###########################
// ###########################
// ###########################
// ###########################
// ###########################
// ###########################
// ###########################
// ###########################
// ###########################
// ###########################
// ###########################