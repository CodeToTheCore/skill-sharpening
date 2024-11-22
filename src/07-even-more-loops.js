/**
 * shoutForLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutForLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutForLoop(array) {
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    array[i] += "!";// on lookup i seen typeof    if(typeof arr[i] === "str")
    newArray.push(array[i])  // + "i" should be after arr[i]  not +=  plus cause we are adding not incrementing
  }
  return newArray;
}

/**
 * shoutWhileLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `while` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutWhileLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutWhileLoop(array) {
  let i = 0;
  while(typeof array[i] === "string"){
   array[i] + "i";
  
  }
  i++
}

/**
 * shoutForOfLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for...of` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutForOfLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutForOfLoop(array) {
  let newAr = [];
  for(const arrays of array){
    array.arrays + "!";
    newAr.push(array)
  }
  return newAr
}

/**
 * sumArray()
 * ---------------------
 * Returns the sum of all values in the array.
 * @param {number[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  sumArray([ 10, 0, 10, 11 ]);
 *  //> 31
 */
function sumArray(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum
}

/**
 * oddArray()
 * ---------------------
 * Returns a new array of only the odd numbers from the original array.
 * @param {number[]} array
 * @returns {array}
 *
 * EXAMPLE:
 *  oddArray([ 11, 15, 20, 22, 37 ]);
 *  //> [ 11, 15, 37 ]
 */
function oddArray(array) {
  const oddIns = array.filter((values)=>{
    return values % 2 !== 0
  })
  return oddIns
}

/**
 * evenArray()
 * ---------------------
 * Returns a new array of only the even numbers from the original array.
 * @param {number[]} array
 * @returns {array}
 *
 * EXAMPLE:
 *  evenArray([ 11, 15, 20, 22, 37 ]);
 *  //> [ 20, 22 ]
 */
function evenArray(array) {
  const evenIns = array.filter((values)=>{
    return values % 2 === 0
  })
  return evenIns
}

/**
 * findSmallest()
 * ---------------------
 * Returns the smallest number from the array.
 * @param {number[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  findSmallest([ 0, 11, -2, 5 ]);
 *  //> -2
 */
function findSmallest(array) {
  let smallestNum = [0];
  for(let i = 0; i < array.length; i++){
    if(array[i] < smallestNum){
     smallest =  array[i] 
    }
  }
}

/**
 * findLargest()
 * ---------------------
 * Returns the largest number from the array.
 * @param {number[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  findLargest([ 0, 11, -2, 5 ]);
 *  //> 11
 */
// function findLargest(array) {
//    let largest = array[i][0];
//    for(let i = 0; i < array.length; i++){
//       //  largest > array[i]
//     // thought about if statement at first but was confused 
//       return largest
//     }

//    }
//}

function findLargest(array) {
      let largest = array[i][0];
     for(let i = 0; i < array.length; i++){
     if(largest > array[i]){
        largest = array[i]
     }
    }
    return largest
  
   }
  



// function findLargest(array) {
//   let largestNum = [0];
//   for(let i = 0; i < array.length; i++){
//     if(array[i] > largestNum){
//       largestNum =  array[i] 
//     }
//   }
// }

/**
 * findEqual()
 * ---------------------
 * Returns whether or not the `selected` value can be found in the array.
 * @param {number[]} array
 * @param {number} selected
 * @returns {boolean}
 *
 * EXAMPLE:
 *  findEqual([ 0, 11, -2, 5 ], 11);
 *  //> true
 *
 *  findEqual([ 0, 11, -2, 5 ], 9);
 *  //> false
 */
function findEqual(array, selected) {
  for(let element of array){
    if(array[element].includes(selected)){
      return true
    }else{
      return false
    }
  }
}

/**
 * removeDuplicates()
 * ---------------------
 * Returns a new array like the original array except there are no duplicates. The numbers in the array should be ordered similarly.
 *
 * HINT: The `.includes()` method could help here.
 *
 * @param {number[]} array
 * @returns {number[]}
 *
 * EXAMPLE:
 *  removeDuplicates([ 1, 11, 2, 3, 4, 4, 2, 11, 9 ]);
 *  //> [ 1, 11, 2, 3, 4, 9 ]
 */

function removeDuplicates(array) {
  let dupArr2 = []
  for(let i = 0; i < array.length; i++){
   if(array[i] !== array[i]){
    dupArr2.push(array[i]) 
    return dupArr2
   }else{
    return -1
   }
   
  }
    
  }
   
   
  // const result = array.filter((nums)=>{// should filter use another param?
  //   !nums * 2 
  // })


// Do not change any code below this line.
module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findLargest,
  findEqual,
  removeDuplicates,
};
