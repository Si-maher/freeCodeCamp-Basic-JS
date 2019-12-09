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
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################