// 101) We have an array of objects representing different people in our contacts lists.

// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return "No such contact".

// If prop does not correspond to any valid properties of a contact found to match name then return "No such property".

 var contacts = [
     {
         "firstname" : "Akira",
         "lastname" : "Laine",
         "number" : "0543236543",
         "likes" : ["Pizaa", "coding", "Brownie points"]
     },
     {
         "firstname" : "Harry",
         "lastname" : "Potter",
         "number" : "099437268",
         "likes" : ["Pizaa", "Magic", "Brownie points"]
     },
     {
         "firstname" : "Sherlock",
         "lastname" : "Holmes",
         "number" : "0787345643",
         "likes" : ["Crimes", "Mysteries", "Brownie points"]
     },
     {
         "firstname" : "Kristian",
         "lastname" : "Vos",
         "number" : "unknown",
         "likes" : ["JavaScript", "coding", "Brownie points"]
     },
 ]

//  Answer

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i ++) {
        if (contacts[i].firstname === name){
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact"
}
lookUpProfile("Akira", "address")

// ######################################

// 102) Change randomFraction to return a random number instead of returning 0.

// Answer

function randomFraction() {
    let number = Math.random()
    return number
}
randomFraction()

// ######################################

// 103) Use this technique to generate and return a random whole number between 0 and 9.

// Answer 

function randomWholeNumber() {
    var number = Math.floor(Math.random() * 10)
    return number
}
randomWholeNumber()

// ######################################

// 104) Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive. 

// Answer 

function randomRange(myMin, myMax) {
    var number = Math.floor(Math.random() * (myMax - myMin)) + myMin
    return number
}
randomRange(10,15)


// ######################################

// 105) Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

// Answer 

function convertToInteger(str) {
    var a = parseInt(str)
    return a
}
convertToInteger('56')
// ######################################
// ######################################
// ######################################
// ######################################
// ######################################
// ######################################