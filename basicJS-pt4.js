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

72) 
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################