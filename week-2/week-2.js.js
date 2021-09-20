

// Q1
// Create a function that returns an array of strings sorted by length in ascending order.


// Examples
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

// sortByLength([]) ➞ []

function sortByLength(arr){
    for( i=0; i<arr.length-i;i++){
     for (j=0; i<arr.length;j){
         if(arr[j].length>arr[j+1].length){
             let x=arr[j];
             arr[j+1]=arr[j];
             arr[j]=x;
         }
     }
    }
    return arr;
    }




// Q2
// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// Examples

// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// The output of the sorted drinks object will be:



// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

function sortDrinkByPrice(arr=[]){
    for(i in arr){
        for(j in arr)
        if(arr[i]["price"]<arr[j]["price"]){
           let x=arr[i];
           arr[i] =arr[j];
           arr[j]=x;
        }
    
    }
   return arr
}



// Q3
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

function toArray(obj){
    let list=[];
    for(i in obj){ 
    list.push([i,obj[i]])
    }
    return list;
    }

// Q4
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
// Notes
// Remember to sort the keys.

function toArray(obj){
    let key=[];
    let value=[];
    let list=[];
    for(i in obj){ 
    key.push(i);
    value.push(obj[i])
    }
    list.push(key,value)
    return list;
    }


// Q5
// Create a function that takes in a year and returns the correct century.

// Examples
// century(1756) ➞ "18th century"

// century(1555) ➞ "16th century"

// century(1000) ➞ "11th century"

// century(1001) ➞ "11th century"

// century(2005) ➞ "21st century"
// Notes
// All years will be between 1000 and 2010.
// The 11th century is between 1001 and 1100.
// The 18th century is between 1701-1800.

function century(numbar){
    let cen=numbar-1000;
let map={
    "1":"12th century",
    "2":"13th century",
   "3":"14th century",
    "4":"15th century",
    "5":"16th century",
    "6":"17th century",
    "7":"18th century",
    "8":"19th century",
    "9":"20th century",
    
};
if(numbar>2010||numbar<1000){
    return "error"
}

if(cen<100){
    return "11th century"
}else if(cen>=1000){
  return "21th century";
}else{
    cen=cen/100
    let x=cen.toString()
    return map[x[0]];
}

}

// Q6
// Number of Arrays in an Array
// Return the total number of arrays inside a given array.

// Examples
// numOfSubbarrays([[1, 2, 3]]) ➞ 1

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

// numOfSubbarrays([1, 2, 3]) ➞ 0
function numOfSubbarrays(arr){
    let sum=0
    for (i of arr){
        if(typeof(i)=="object"){
            sum+=1;
        }
    }
    return sum;
}


// Q7
// Sum of Number Elements in an Array
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3

// numbersSum([true, false, "123", "75"]) ➞ 0

// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15


function numOfSubbarrays(arr){
    let sum=0
    for (i of arr){
        if(typeof(i)=="number"){
            sum+=i;
        }
    }
    return sum;
}



// Q8 Write a program to validate if the number is from multiples of 2 .
// ex: console.log(isMultiplesOfTwo(2))     output: true
// ex: console.log(isMultiplesOfTwo(512))     output: true
// ex: console.log(isMultiplesOfTwo(513))     output: false
// ex: console.log(isMultiplesOfTwo(255))     output: false

function isMultiplesOfTwo(num){
    if(number%2==0){
        return true;
    }else{
        return false;
    }
}



//Q9................................................................

function leftRotation(numOfLeft,arr){
    for(i=0; i<numOfLeft;i++){
      arr.push(arr[0]);
      arr.shift(arr[0]);
    }
   return arr;
   }