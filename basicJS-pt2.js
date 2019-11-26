// 21) Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see: 

// Answer

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
console.log(myStr);


// ################################

// 22) Change the provided string to a string with single quotes at the beginning and end and no escape characters.

// Answer

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);

// ################################

// 23) Assign the following three lines of text into the single variable myStr using escape sequences.

// Answer

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
console.log(myStr);

// ################################
// 24) Build myStr from the strings "This is the start. " and "This is the end." using the + operator.

// Answer

var myStr = "This is the start. "  +  "This is the end.";

// ################################

// 25) Build myStr over several lines by concatenating these two strings: "This is the first sentence. " and "This is the second sentence." using the += operator. Use the += operator similar to how it is shown in the editor. Start by assigning the first string to myStr, then add on the second string.

// Answer

var myStr = "This is the first sentence. "
myStr += "This is the second sentence.";
console.log(myStr);

// ################################

// 26) Set myName to a string equal to your name and build myStr with myName between the strings "My name is " and " and I am well!"

// Answer
var myName = "Bob";
var myStr = "My name is" + myName + "and I am well!";
console.log(myStr);

// ################################

// 27) Set someAdjective and append it to myStr using the += operator.

// Answer

var someAdjective = "fun";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

// ################################

// 28) Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.

var lastNameLength = 0;
var lastName = "Lovelace";

// Answer

lastNameLength = lastName.length;
console.log(lastNameLength);

// ################################

// 29) Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.


var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Answer
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

// ################################

// 30) Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.

var myStr = "Jello World";

// Answer

myStr = "Hello World"; 
console.log(myStr);


// ################################

// 31) Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

var lastName = "Lovelace";

// Answer
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

// ################################

// 32) Use bracket notation to find the last character in the lastName variable.

var lastName = "Lovelace";

// Answer
var lastLetterOfLastName = lastName[lastName.length-1];
console.log(lastLetterOfLastName);

// ################################


// ################################
// ################################
