




// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // EXAMPLES:

  1)

  function firstItem(arr, cb) {
    // = firstItem passes the first item of the given array to the callback function.

    return cb(arr[0]);
  }
  

  // NOTES :

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


//My Own example- named function way where we define the function outside: shows uses 

let add = function(a,b) {
  return a + b
}

let multiply = function(a,b) {
  return a*b 
};

let calc = function(num1, num2, callback) {
  
   return callback(num1, num2);
}

console.log(calc(2,3, add))  //can change add for multiply and works the same way 



//My OWN example: not defining function outside 
//Showing an ANYOMOUS function getting passed in as a variable- the AF is: (firstItem)... bit 
//the cb function is only defined when we call (invoke) the 'showFirst' function
//best to use this way when you only want to use something once- rather than defining it in the above example 

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function showFirst(array, callback) {

    callback(array[0]);

}

showFirst(items, (firstItem) => { console.log(firstItem);});


//invoking showFirst function with a callback as its parameter/argument- usually when we invoke function we have an empty parameter, but if we want to pass arguments in this is where they go
//when we invoke with the cb as parameter we are passing it the cb function
//we invoke the cb function inside the function its passed in as a parameter 


//1. 
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.

  return cb(arr.length); 
}

getLength(items, (length) => console.log(length));


//2. 

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

last(items, (last) => console.log(last));

//3.

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
   return cb(x, y);
  
}



sumNums(6, 10, function(num1, num2) { console.log(num1 + num2) });



//4. 


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  // return cb(x*y);

  return cb(x, y);

}

multiplyNums(5, 10, function(num1, num2) { console.log(num1*num2)})



//5. 


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  // cb(list.includes(item));

  return cb(item, list);

}

contains('Pea', items, function(item, list) { 
  if(list.includes(item)) {
   return true;
}
else {
  console.log('not found')
}
}

)

/* STRETCH PROBLEM */

function removeDuplicates(array) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  //using 2 methods- indexOf(returns the first occurence of a specified value- if same value is repeated then it will return false) and filter
  //we have to equal the indexOf to index- if the condition is the same then it is true (unique item- no repeat), if it is different (e.g different numbers then it will return false- means there is a repeat)
  //https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c

  // items = items.filter((item, index) => { return items.indexOf(item) === index})

  return items.filter((item, index) =>  items.indexOf(item) === index)


// return cb(array); 



}

console.log(removeDuplicates(items))

// removeDuplicates(items)


