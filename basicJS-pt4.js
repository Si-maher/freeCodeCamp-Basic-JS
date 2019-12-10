// 60)  Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99

// Answer

function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  testNotEqual(99);

// #################################

// 61) Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17

// Answer 

function testStrictNotEqual(val) {
    if (val !== 17) {
      return "Not Equal";
    }
    return "Equal";
  }
  testStrictNotEqual('17');

// #################################

// 62) Add the greater than operator to the indicated lines so that the return statements make sense.

// Answer

function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    }
    if (val > 10) { 
      return "Over 10";
    }
  return "10 or Under";
  }
  testGreaterThan(11);
  
// #################################

// 63) Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

// Answer 

function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
   if (val >= 10) { 
      return "10 or Over";
    }
   return "Less than 10";
  }
  testGreaterOrEqual(17);

// #################################

// 64) Add the less than operator to the indicated lines so that the return statements make sense.

// Answer

function testLessThan(val) {
    if (val < 25) { 
      return "Under 25";
    }
   if (val < 55) {
      return "Under 55";
    }
 return "55 or Over";
  }
  testLessThan(11);

// #################################

// 65) Add the less than or equal to operator to the indicated lines so that the return statements make sense.

// Answer

function testLessOrEqual(val) {
    if (val <= 12) {  
      return "Smaller Than or Equal to 12";
    }
  if (val <= 24) {  
      return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
  }
  testLessOrEqual(11);

// #################################

// 66) Replace the two if statements with one statement, using the && operator, which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".

// Answer

function testLogicalAnd(val) {
  
    if (val <= 50 && val >= 25) {
     return "Yes";
        }
    return "No";
  }
  testLogicalAnd(10);

// #################################

// 67) Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".

// Answer

function testLogicalOr(val) {
    
  if (val <10 || val > 20) {
      return "Outside";
    }
    return "Inside";
  }
  testLogicalOr(9);

// #################################

// 68) Combine the if statements into a single if/else statement.

// Answer

function testElse(val) {
    var result = "";
   if (val > 5) {
      result = "Bigger than 5";
    }
   else {
      result = "5 or Smaller";
    }
    return result;
  }
  testElse(3);

// #################################

// 69) Convert the logic to use else if statements.

// Answer

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
   else if (val < 5) {
      return "Smaller than 5";
    }
  else {
   return "Between 5 and 10";
  }
  }
  testElseIf(8);

// #################################

// 70) Change the order of logic in the function so that it will return the correct statements in all cases.

// Answer

function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  orderMyLogic(6);

// #################################

// 71) Write chained if/else if statements to fulfill the following conditions:

// num < 5 - return "Tiny"
// num < 10 - return "Small"
// num < 15 - return "Medium"
// num < 20 - return "Large"
// // num >= 20 - return "Huge"

// Answer

function testSize(num) {
  if (num < 5){
    return "Tiny"
  }else if(num < 10) {
    return "Small"
  }else if(num < 15) {
    return "Medium"
  }else if( num < 20) {
    return "Large"
  }else if(num >= 20) {
    return "Huge"
  }
  
    return "Change Me";
  }
  testSize(15);

// #################################

// 72) Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

// Answer

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  
if ( strokes == 1) {
  return "Hole-in-one!"
}else if(strokes <= par -2) {
  return "Eagle"
}else if(strokes <= par -1) {
  return "Birdie"
}else if(strokes == par) {
  return "Par"
}else if(strokes == par + 1) {
  return "Bogey"
}else if(strokes == par + 2) {
  return "Double Bogey"
}else if (strokes >= par + 3) {
  return "Go Home!"
}
return "Change Me";
}
golfScore(6, 2);

// #################################

// 73) Write a switch statement which tests val and sets answer for the following conditions:
// 1 - "alpha"
// 2 - "beta"
// 3 - "gamma"
// 4 - "delta"

// Answer 

function caseInSwitch(val) {
    var answer = "";
  switch (val){
    case 1:
    answer = "alpha"
    break;
    case 2:
    answer = "beta"
    break;
    case 3:
    answer = "gamma"
    break;
    case 4:
    answer = "delta"
    break;
  }
    return answer;
  }
  console.log(caseInSwitch(2));

// #################################

// 74) Write a switch statement to set answer for the following conditions:
// "a" - "apple"
// "b" - "bird"
// "c" - "cat"
// default - "stuff"

// Answer

function switchOfStuff(val) {
    var answer = ""; 
  switch (val) {
    case "a": 
    answer = "apple";
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff";
    break;
  }
    return answer;
  }
  console.log(switchOfStuff("a"));

// #################################

// 75) Write a switch statement to set answer for the following ranges:
// 1-3 - "Low"
// 4-6 - "Mid"
// 7-9 - "High"

// Answer 

function sequentialSizes(val) {
    var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
    answer = "Low";
    break;
    case 4:
    case 5:
    case 6:
    answer = "Mid";
    break;
    case 7:
    case 8:
    case 9:
    answer = "High";
    break;
  }
    return answer;
  }
  console.log(sequentialSizes(1));

// #################################

// 76) Change the chained if/else if statements into a switch statement.

// Answer 

function chainToSwitch(val) {
  var answer = "";
 switch (val) {
    case "bob":
    return "Marley";
    break;
  case 42: 
    return "The Answer";
  break;
   case 1: 
    return "There is no #1";
    break;
  case 99:
    return "Missed me by this much!";
  break;
  case 7:
    return "Ate Nine";
    break;
    case "John":
    return "";
    break;
    case 156:
    return "";
    default:
  return answer;
} }
chainToSwitch(8);

// #################################

// 77) Fix the function isLess to remove the if/else statements.

// Answer 

function isLess(a, b) {
  return a < b
 }
 
 isLess(11, 16);
 
// #################################

// 78) Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

// Answer 

function abTest(a, b) {
if (a < 0 || b < 0) {
  return;
}
 return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,-2);

// #################################

// 79) You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

// Answer 

var count = 0;

function cc(card) {
  

switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
}
if (count > 0 ) {
  return count + " Bet";
} else {
  return count + " Hold";
}
  
}
 
cc(2); cc(3); cc(7); cc('K'); cc('A');
// #################################