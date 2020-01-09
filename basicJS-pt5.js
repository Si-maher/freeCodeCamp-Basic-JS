// 80) Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".

// Answer 

var myDog = {
    "name": "Boby",
    "legs": 3,
    "tails":1,
    "friends": ["Dave", "Si"]
    };
    console.log(myDog)

// ##################################

// 81) Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.

// Answer 

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  var hatValue = testObj.hat;
  var shirtValue = testObj.shirt; 
  
  console.log(hatValue)

// ##################################

// 82) Read the values of the properties "an entree" and "the drink" of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

// Answer

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  var entreeValue = testObj["an entree"];   
  var drinkValue = testObj["the drink"]; 

// ##################################

// 83) Use the playerNumber variable to look up player 16 in testObj using bracket notation. Then assign that name to the player variable.

// Answer 

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  var playerNumber = 16;
  var player = testObj[playerNumber];   
  
// ##################################

// 84) Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.

// Answer 

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.name = "Happy Coder"

// ##################################

// 85) Add a "bark" property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

// Answer 

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.bark = "woof"

// ##################################

// 86) Delete the "tails" property from myDog. You may use either dot or bracket notation.

// Answer 

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  delete myDog.tails

// ##################################

// 87) Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Answer 

function phoneticLookup(val) {
    var result = "";
    var lookup = {
       "alpha":"Adams",
      "bravo":"Boston",
      "charlie":"Chicago",
      "delta":"Denver",
      "echo":"Easy",
       "foxtrot":"Frank",
    }
         result = lookup[val]
    return result;
  }
  console.log(phoneticLookup("Easy"));

// ##################################

// 88) Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".

// Answer 

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
  function checkObj(checkProp) {
  if(myObj.hasOwnProperty(checkProp) == true){
    return myObj[checkProp];
  }else {
    return "Not Found";
  }
    }
  console.log(checkObj("gift"));

// ##################################

// 89) Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

// Answer 

var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "AC DC",
      "title": "ThunderStruck",
      "release_year": 1985,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Eminem",
      "title" : "Goldrush",
      "release_year" : "2018",
      "formats" : [
        "CD",
        "8T",
        "LP",
      ],
      "gold": true
        }
  ];

  console.log(myMusic)

// ##################################

// 90) Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
//  Answer 


var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; 

console.log(gloeBoxContents);

// ##################################


// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################