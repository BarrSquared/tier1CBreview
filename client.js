//variables
//variables and functions should start with lowercase letters
let firstName = 'Chris'
let age = 35;
const pi = 3.14;
age++; //increment by one (age = age +1;)

console.log(`age: ${age}`);
let a = 2 + 5 + '1' + 4; // Plus is used to combine a string (concatination)
console.log(`a: ${a}`);

let b = '2' - 1 //minus, divide, and multiply try to convert to numbers
console.log(`b: ${b}`);//prints blue "1"

let c = (2 + 3)  * 3;
console.log(`Test of c, should be 15. Actual c: ${c}`);//js followers OOOperations

// NaN - Not a numbers
// null - an empty value
// undefined - variable has not yet been defined
// not defined - variable doesn't exist in scope

let garbageDay; // set to undefined to test switch before we changed the switch
// Conditionals
// Without a comparison operation (e.g. ==, !=, ===, <), it checks for
// defined and for boolean. // == will try to do type conversion, === strictly true
if (garbageDay === true) {
  console.log('set out garbage bins');
} else {
    // Do nothing
} //or leave the 'else {}' off and it moves onto the next step

// else {} // else if () {}
garbageDayOfWeek = 'Sunday';
switch(garbageDayOfWeek){
  case 'Monday':
    console.log('Monday');
  break;
  case 'Tuesday':
    console.log('Tuesday');
  break;
  case 'Wednesday':
    console.log('Wednesday');
  break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend!');
  break;
  default:
    console.log('Not a valid day');
}   ////Switch statements commonly used for string comparison

// Loops

// 'for' and 'for-of' are the most common loops
for(let index = 0; index < 20; index += 2) {
  console.log(index);
}

const plants = ['bell pepper', 'tomatoe', 'kale'];
for(let plant of plants) {
  //similiar to let plant = plants[index];
  console.log(plant);
} // for-of is great if you have to do something with EACH item in the array

let counter = 0; // MUST declare index above while loop
while(counter < 20) {
  counter +=5;
  console.log(`In while loop ${counter}`);
}// while loops are best if you don't know how long something will take
//clea array plants.length = 0 OR plants = [];
let plantCount = plants.length;
for(let index = 0; index < plantCount; index += 1){
  //plants.pop();//Do not modify the array IF using .length in the condition
  plants.push(plants[index]);
  console.log(`Plants: ${plants}`);
}
//String template literal `${...}`, allows you to console.log things quickly
console.log(`Plants: ${plants}, plant count: ${plants.length}`);

// Functions
// Have inputs (arguments)
// Optionally, outputs (return)

/**
* Write a function that takes in a number, doubles it and returns
* the value.
*
* @param {number} numberToDouble Input into the function that we will double
* @return {number} The number that was doubled.
*/
function doubleIt(numberToDouble) { // when passing in 10, numberToDouble = 10
    const doubledNumber = numberToDouble * 2;
    console.log(`doubleIt: ${doubledNumber}`);
    return doubledNumber;
}
let aNumber = 10;
// If we want to capture the 'return', assign it to something
let aDoubledNumber = doubleIt(aNumber); // aNumber is now 20
console.log(`aNumber: ${aDoubledNumber}`);
let bNumber = doubleIt(40);
console.log(bNumber);
// Built in functions
//Function expression
// Can only be used AFTER they are declared
let addTen = function(input){
  return input + 10;
}
let result = addTen (5);
console.log(result);






// Javascript has many built-in functions
// look at mdn functions built in etc.
let emptyString;
console.log(`null? ${emptyString == null}`);


/**
* Turn an array of strings into an unordered list to be displayed in HTML.
*@param {array} listOfItems Array of strings to display on the DOM
*@return {string} unordered list HTML string
*
*  <ul>
*    <li>Parsley</li>
*    <li>Basil</li>
*    ...
*  </ul>
*/
function createUnorderedList(listOfItems) {
  if(listOfItems.length === 0){
    console.warn('No items provided.');
  }
  //console.log(typeof listOfItems);
  //console.log(`listOfItems: ${listOfItems}`);
  let unorderedList = '<ul>'; // start string as UL
  for(let item of listOfItems){
    //console.log(`<li>${item}</li>`); or the alternative below to separate with a line
    unorderedList +=`<li>
                      ${item}
                    </li>` // same as // '<li> + item + '<li>';
  }
  unorderedList += '</ul>';  // APPEND ul after loop to get HTML usavle script
  return unorderedList; //???
}

const gardenPlants =['Parsley', 'Basil', 'Thyme'];

const htmlOutput = createUnorderedList(gardenPlants);
console.table(gardenPlants);
console.log( `HTML: ${htmlOutput}`);




// //   #####      notes from 8-23, tier2 day 1     #####     //  //
