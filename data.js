/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'cow';
animal['name'] = 'brad';
animal.noises = [];
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'moo';
noises.push('grunt');
noises['chewing'];
noises.push('bark');
noises.push('scream');
noises[noises.length];
console.log(noises.length);
console.log(noises.length - 1);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// assign the noises property to new noises array
animal['noises'] = noises;
animal.noises.push('sing');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  Use bracket and dot notation.
 * 2. What are the different ways of accessing elements on arrays?
 *  Use bracket notation to access indexes or various array methods to update arrays
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);
var wolf ={
  species: 'wolf',
  name: 'carl',
  noises: ['pant', 'howl']
};
var bird = {
  species: 'bird',
  name: 'robin',
  noises: ['tweek', 'squeak'] 
};
animals.push(wolf);
animals.push(bird);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// choosing an array because it is better to hold a list of strings
// create a variable named friends and assign to empty array
var friends = [];

// write a function called get random that takes animals array and returns random index input array
function getRandom(array){
  // return index of the input array using Math.random
return Math.floor(Math.random() * array.length);
}
// using random index from function, get a random animal and add its name to friends
var randomIndex = getRandom(animals);
//friends.push(animals[randomIndex].name);
console.log(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}