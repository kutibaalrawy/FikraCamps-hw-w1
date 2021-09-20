/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */

 function BestProfit(arr) {
  let map = {
    0 : " satuerday",
    1 : " sunday",
    2 : " monday",
    3 : " tuesday",
    4 : " wednesday",
    5 : " thursday",
  };

  let min;
  let minIndx;
  let max;
  let maxIndx;
  for (i in arr) {
    if(min==null) {
      min=arr[i];
      minIndx=i;
    }
    if(min>arr[i]) {
      min=arr[i];
      minIndx=i;
    }
  }
  for( j=minIndx; j<arr.length; j++) {
    if(max==null) {
      max=arr[j];
      maxIndx=j;
    }
    if(max<arr[j]) {
      max=arr[j];
      maxIndx=j;
    }
  }
  return "you should buy at "+map[minIndx]+" you should sell at "+map[maxIndx]
}
console.log(BestProfit([150, 146, 142, 143, 145, 144]));

/** Q2
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */

function CheckOverlap(t1Start, t1End, t2Start, t2End) {
  if(t1Start==t2Start|| t1Start==t2End || t2Start==t1End||t2Start==t2End) return "overlap"
  return"no overlap"
}
console.log(
CheckOverlap(
"13/5/2021 13:00",
"14/5/2021 13:00",
"14/5/2021 13:00",
"16/5/2021 13:00"
)
);

/** Q3
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 4
 * example HowManyPairs("RRLLRRRLLR") => 2
 */

function HowManyPairs(shoes) {
  let l = 0;
  let r = 0;
  let total = 0;
  for (i of shose) {
    if (i == "L") {
      l++;
    } else if (i == "R") {
      r++;
    }
    if (l > 0 && r > 0) {
      l--;
      r--;
      total++;
    }
  }
  return total;
}
console.log(HowManyPairs("RLRLRRLL"));

/** Q4
 *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
 *    letterCount('abcac') => {a: 2, b: 1, c: 2}
 */

function HowManyLetters(word) {
  let map = {};
  for (i of word) {
    if (map[i] != null) {
      map[i]++;
    } else {
      map[i] = 1;
    }
  }
  return map;
}
console.log(HowManyLetters('abcac'));


/** Q5
 * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.

    Examples
    sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]

    sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]

    sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
    Notes
    The arrays can contain either positive or negative elements.
    The arrays will only contain integers.
    The arrays won't contain duplicate numbers.
    This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
 */

function sortArray(arr){

  for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length-1;j++){

      if(arr[j]>arr[j+1]){
        let a=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=a;
      }
    }
  }
  return arr;
}



/** Q6
 * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

    Examples
    minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

    minMax([2334454, 5]) ➞ [5, 2334454]

    minMax([1]) ➞ [1, 1]
 */

function mini_max(arr){
  let max=0;
  let mini=0;
  let list=[];
  for(i of arr){
    i
    if(max<i){
      max=i
    }
    if(mini>i){
      mini=i
    }
  }
  list.push(mini);
  list.push(max);

  return list;
}



/** Q7
 * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

    Examples
    missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

    missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

    missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
    Notes
    The array of numbers will be unsorted (not in order).
    Only one number will be missing.
 */

function missingNum(arr){
  let list=[1,2,3,4,5,6,7,8,9,10];
  for(i of list){
    let x=arr.indexOf(i);
    if(x==-1) return "the numer is "+i;
  }
  return "no missing number";
}


/** Q8
 * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.

    Examples
    numToEng(0) ➞ "zero"

    numToEng(18) ➞ "eighteen"

    numToEng(126) ➞ "one hundred twenty six"

    numToEng(909) ➞ "nine hundred nine"
    Notes
    There are no hyphens used (e.g. "thirty five" not "thirty-five").
    The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
 */
function numToEng (num) {
  let ones = {
    "0": "Zero",
    " 1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
  };
  let tens = {
    "0":"",
    "2": "twenty",
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
    "6": "sixty",
    "7": "seventy",
    "8": "eighty",
    "9": "ninety",
  };
  let hundreds = {
    "1": "one hundreds",
    "2": "two hundreds",
    "3": "three hundreds",
    "4": "four hundred",
    "5": "five hundreds",
    "6": "six hundred",
    "7": "seven hundred",
    "8": "eight hundred",
    "9": "nine hundred",
  };
  let residual = {
    "0": "ten",
    "1": "eleven",
    "2": "twelve",
    "3": "thirteen",
    "4": "fourteen",
    "5": "fifteen",
    "6": "sixteen",
    "7": "seventeen",
    "8": "eighteen",
    "9": "nineteen",
  };

  let str = num.toString();

  if (num < 0 || num > 999) {
    return "error";
  }else if(num<10){
    return ones[str[0]];
  }else if(num<100){
    if (num<20){
      return residual[str[1]];
    }else if(num>=20 && str[1]=="0"){
      return tens[str[0]];
    }else{
      return tens[str[0]] +"  "+ ones[str[1]];
    }
  }else if(num>=100){
    if(str[1]=="0"&&str[2]=="0"){
      return hundreds[str[0]];
    }
    return hundreds[str[0]]+"  " + tens[str[1]] +"  "+ ones[str[2]];
  }
}