// MAKE A FUNCTION THAT CHECKS IS THE NUMBER MORE THAN 100

// 1. my function
function hundredMore(number) {
  if (number > 100) {
    console.log(true);
  } else {
    console.log(false);
    debugger;
  }
}
hundredMore(888);

//2. also my function(turenary operator)
function hundredMore(number) {
    return number > 100 ? true : false;
  }
  hundredMore(67);

// testing all possible variants of this function 

//3. George's function(arrow function)

const checkHundred = number => number > 100

//4. YEVHENII'S function(alert)
function number (){
  let num = parseInt(prompt('type in your number'));
  if(num>100){
  alert('it is more')}
  else if(num<100){

    debugger;

  }alert('it is less then 100');

  else {
  alert('100!');
  }
  }
  number(566);

  //5. ALISAS'S FUNCTION(arrow and {})
  const checkNumber = (number) =>{return number > 100;}


//6. more variants of this function(Math.max)(compare given number and 100)
function isGreaterThan100(num) {
  return Math.max(num, 100) === num ? true : false;
}
//7. another variant of this function(${} includes num to check the value)
const isGreaterThan100 = num => `${num} is ${num > 100 ? '' : 'not '}greater than 100`


//8. switch statement
function isGreaterThan100(num) {
  switch (true) {
    case num > 100:
      return true;
    default:
      return false;
  }
}

// Write a function that takes a string and returns true if the string contains at least one exclamation point, and false otherwise.
//1. if statement
function containsExclamation(str) {
  if (str.includes('!') === true) return true;
  else return false;}


//2. turenary operator
  function containsExclamation(str) {
    return str.includes('!')? true : false;
  }
//3. switch statement
  function containsExclamation(str){
    switch(true){
     case str.includes('!'):
      return true;
default:
  return false;
  }
}

//4. another way
function containsExclamationPoint(str) {
  return str.includes("!");
}

//5. arrow function
const exclamation = str => str.includes("!");

//6. another arrow function
const hasExcalamtion = str => `${str} has ${str.includes('!') ? 'exclamation' : 'no exclamatiom'};`

//7. indexOf
function containsExclamation(str) {
  return str.indexOf('!') //!== -1; by adding this parameter result will be returned in boolean athervise it will return -1
}