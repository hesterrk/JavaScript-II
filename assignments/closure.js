// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

var firstVar = 'first one';
  function outerFunction() {
    var secondVar = 'second';
    function innerFunction() {
      var thirdVar = 'third';

    function anothernestedFunction() {
      var fourthVar = 'fourth';
    }
    }

  }


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====

//showing how functions return other functions 

  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!


  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!



  const counterCreator = () => {  
    let count = 0;
    function counter() { 
      if (count === 10) {
        count = 0
      }
  
      
    
      count = count + 1
      return count
    };
    return counter


  }
  
  var mycounter = counterCreator();
  console.log(mycounter());
  console.log(mycounter());
  console.log(mycounter());
  console.log(mycounter());
  console.log(mycounter());
  console.log(mycounter());
  console.log(mycounter());
  console.log(mycounter());
  console.log(mycounter());
  console.log(mycounter());
  console.log(mycounter());


// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
// limit = 10;

//if statement or ternary operator 




// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

let count = 7
console.log(count);

let increment = () => {
  let increaseNumber = ++count
    return increaseNumber
  }

let decrement = () => {
  let decreaseNumber = --counter
    return decreaseNumber
  
}

let myObject = {increment, decrement}

return myObject;

};

var countercounter = counterFactory();

console.log(countercounter.increment());
console.log(countercounter.decrement());




// function increment() {
  //   let increaseNumber = ++count
  //   return increaseNumber
  // }
  // return increment
  
  
  // function decrement() {
  // let decreaseNumber = --count
  // if(count > 5) {
  //   return decreaseNumber
  // }
  

  




