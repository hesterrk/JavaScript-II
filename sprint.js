
   // ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a, b, cb) {
    return cb(a, b)
   }


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(a,b){
    return a + b
   }
   
function multiply(a,b){
    return a * b
    }

function greeting(a,b){
    return `Hello ${a} ${b}, nice to meet you! `
    }
   

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// My explanation: The 'nestedFunction' is nested within the 'myFunction' and although the former is a closure, with its own local scope, it can still access 'myFunction' variable. This is because inner functions always look outside for context to look for a variable passed in it. They thus have access to variables in the outer functions. 



// Explanation: 
const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();






// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/


// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceous

const tyrannosaurus = {
  name: 'tyrannosaurus',
  diet: 'carnivorous',
  weight: '7000kg',
  length: '12m',
  period: 'Late Cretaceous',
  speak: function (){
    return `RAWERSRARARWERSARARARRRR!`;
  }
}

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic


const stegosaurus = {
  name: 'stegosaurus',
  diet: 'herbivorous',
  weight: '2000kg',
  length: '9m',
  period: 'Late Jurassic'
}

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceous

const velociraptor = {
  name: 'velociraptor',
  diet: 'carnivorous',
  weight: '15kg',
  length: '1.8m',
  period: 'Late Cretaceous'
}

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(tyrannosaurus.weight);

// What was the diet of a velociraptor?
console.log(velociraptor.diet);

// How long was a stegosaurus?
console.log(stegosaurus.length);

// What time period did tyrannosaurus live in?
console.log(tyrannosaurus.period);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
console.log(tyrannosaurus.speak());


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests using any array method you like

const graduates = [
  { id: 1, first_name: "Cynde", university: "Missouri Southern State College", email: "ctorry0@macromedia.com" },
  { id: 2, first_name: "Saundra", university: "The School of the Art Institute of Chicago", email: "swhal1@state.gov" },
  { id: 3, first_name: "Lambert", university: "Marian College", email: "lparham2@techcrunch.com" },
  { id: 4, first_name: "Modestine", university: "International Medical & Technological University", email: "mdolder3@symantec.com" },
  { id: 5, first_name: "Chick", university: "Sultan Salahuddin Abdul Aziz Shah Polytechnic", email: "camorts4@google.com.au" },
  { id: 6, first_name: "Jakob", university: "Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft", email: "jharken5@spiegel.de" },
  { id: 7, first_name: "Robbi", university: "Salem University", email: "rbrister6@redcross.org" },
  { id: 8, first_name: "Colline", university: "Coastal Carolina University", email: "cbrosh7@alibaba.com" },
  { id: 9, first_name: "Michail", university: "Universidad Católica de Ávila", email: "mrome8@shinystat.com" },
  { id: 10, first_name: "Hube", university: "Universitat Rovira I Virgili Tarragona", email: "hlethbrig9@foxnews.com" },

];

/* Request 1: Create a new array called universities that contains all the universities in the graduates array. This will be an array of strings.
Once you have the new array created, sort the universities alphabetically and log the result. */
const universities = [];
for (let i = 0; i < graduates.length; i++)
universities.push(graduates[i].university);

universities.sort();
console.log(universities);

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. This will be an array of strings.
The resulting contact information strings should have a space between the first name and the email, like this: 
"Josh josh@example.com"
Log the result of your new array. */
const contactInfo = [];

for (let i = 0; i < graduates.length; i++)
contactInfo.push(`${graduates[i].first_name} ${graduates[i].email}`);


console.log(contactInfo);

/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called unisWithUni that contains them all. This will be an array of objects. Log the result. */
const unisWithUni = [];
for (let i = 0; i < graduates.length; i++) {
  if (graduates[i].university.search("Uni") != -1) {
    unisWithUni.push(graduates[i]);
  }
}

console.log(unisWithUni);


// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
  { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
  { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
  { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
  { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
  { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
  { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
  { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
  { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
  { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
];

/* Request 1: .forEach()
The zoos want to display both the scientific name and the animal name in front of the habitats. Populate the displayNames array with only the animal_name and scientific_name of each animal. displayNames will be an array of strings, and each string should follow this pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."
*/
const displayNames = [];
zooAnimals.forEach((obj) => displayNames.push(`Name: ${obj.animal_name}, Scientific: ${obj.scientific_name}`)

)
console.log(displayNames);

/* Request 2: .map()
The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.
*/
const lowCaseAnimalNames = [];

zooAnimals.map((name) => lowCaseAnimalNames.push(`${name.animal_name}`.toLowerCase()))


console.log(lowCaseAnimalNames);

/* Request 3: .filter() 
The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.
*/
const lowPopulationAnimals = zooAnimals.filter(count => count.population < 5);

console.log(lowPopulationAnimals);

/* Request 4: .reduce() 
The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.
*/
const populationTotal = zooAnimals.reduce((totalPop, animal) => totalPop + animal.population,0);

console.log(populationTotal);


/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

//function CuboidMaker(attributes) { 
  //this.length = attributes.length;
  //this.width = attributes.width;
//	this.height = attributes.height;

//}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that 
  //returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/

//CuboidMaker.prototype.volume = function() {
  //return (this.length) * (this.width) * (this.height);
  
  //}

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that 
  //returns the surface area of a given cuboid's length, width, and height. 
  Formula for cuboid surface area of a cube:
  // 2 * (length * width + length * height + width * height)
*/
//CuboidMaker.prototype.surfaceArea = function() {
 // return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  
 // }


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
//var cuboidOne = new CuboidMaker({
//  length: 4,
 //width: 5,
 // height: 5,

//});


// Test your volume and surfaceArea methods by uncommenting the logs below:
 //console.log(cuboidOne.volume()); // 100
 //console.log(cuboidOne.surfaceArea()); // 130





// 1. Copy and paste your prototype in here 
// refactor into class syntax.


//function CuboidMaker(attributes) { 
 // this.length = attributes.length;
 // this.width = attributes.width;
//	this.height = attributes.height;
//}

class CuboidMaker {
  
  constructor(length, width, height)  {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  //add method below
  volume() {
      return (this.length) * (this.width) * (this.height);
    }

  surfaceArea() {
  
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }

}

class cuboidOne extends CuboidMaker { 
  constructor(length, width, height) {
    super(length, width, height);
  }
}

var cb = new cuboidOne(4,5,5);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cb.volume()); // 100
console.log(cb.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.