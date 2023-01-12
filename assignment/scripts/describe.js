// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We define a variable 'Dane'.
// We'll look for the variable Dane.
// If the Variable is Mary we'll print Hi, Mary! in console
// If it is not Mary, we'll print How do you do? in the absence of defined variable. 

//CODE
/*
let name = 'Dane'; //What happens if Dane is True?

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// define variable secret as a variable option. A precursor
// define variable 'code' as 123 int
// if code is 123 then define secret as 'super' then change the variable 'code' to 2 times it's value. 123*2= 246
// if code now is greater than 250 define the variable 'secret' as 'duper'; it is not greater than 250 (246<250)
// in this case we will only print 'super' in the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// defining three variables. isStudent, age, zip
// isStudent is defined as boolean 'true'
// age is defined as int 34
// zip is defined as int 55407
// look to see if isStudent is true AND zip is greater than 80000. if it is we'll log 'you're a student on the West Coast.' in the console. isStudent=true is true, zip is not. Move on.
// look now to see if isStudent is false OR the age is less than 30. if either of those statements are true then we print 'What are your hobbies?' in the console. isStudent=false is false but we have an OR statement so we can move to look to see if age is less than 30. it is not. move on.
// now we'll look to see if isStudent is true. isStudent=true so this is true. in this case we'll print 'Welcome to Prime!' in the log.
// if none of these were true, we would print 'How about the weather?' in the console. We have one true statement so we won't print this. 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'blue'; // changed red to blue line 138
let colorTwo = 'red'; // changed blue to red line 139
let mix = true; //correct

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple'; // added line 144 so colorTwo will change to purple
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
let time = 4; //changed 'time' to be a variable from a constant 'const--->let' line 154

if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
// changed from OR to AND line 156 '||--->&&
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
let minAge = 21; //change minAge from constant to variable 'const--->let' line 168

if(minAge >= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
// changed <= to >= line 170
// line 171 could be removed as it wasn't in the instruction but the code works as intended since console.log will print 'enter' give minAge is equal to age
*/

