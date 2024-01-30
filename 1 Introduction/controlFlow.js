// JavaScript if

// Introduction to the JavaScript if statement

// The if statement executes block if a condition is true. The following shows the syntax of the if statement:

if( condition )
   statement;

// The condition can be a value or an expression. Typically, the condition evaluates to a Boolean value, which is true or false.

// If the condition evaluates to true, the if statement executes the statement. Otherwise, the if statement passes the control to the next statement after it.

// The following flowchart illustrates how the if statement works:
// JavaScript if

// If the condition evaluates to a non-Boolean value, JavaScript implicitly converts its result to a Boolean value by calling the Boolean() function.

// If you have more than one statement to execute, you need to wrap them in a block using a pair of curly braces as follows:

if (condition) {
  // statements to execute
}

// However, it’s a good practice to always use curly braces with the if statement. By doing this, you make your code easier to maintain and avoid possible mistakes.
// JavaScript if statement examples

// The following example uses the if statement to check if the age is equal to or greater than 18:

let age = 18;
if (age >= 18) {
  console.log('You can sign up');
}

// Output:

// You can sign up

// How it works.

// First, declare and initialize the variable age to 18:  

let age = 18;

// Second, check if the age is greater or equal to 18 using the if statement. Because the expression age >= 18 is true, the code inside the if statement executes that outputs a message to the console:

if (age >= 18) {
  console.log('You can sign up');
}

// The following example also uses the if statement. However, the age is 16 which causes the condition to be evaluated to false. Therefore, you won’t see any message in the output:

let age = 16;
if (age >= 18) {
  console.log('You can sign up');
}

// Nested if statement

// It’s possible to use an if statement inside another if statement. For example:

let age = 16;
let state = 'CA';

if (state == 'CA') {
  if (age >= 16) {
    console.log('You can drive.');
  }
}

// Output:

// You can drive.

// How it works.

// First, declare and initialize the age and state variables:

let age = 16;
let state = 'CA';

// Second, check if the state is 'CA' using an if statement. If yes, check if the age is greater than 16 using a nested if statement and output a message to the console:

if (state == 'CA') {
  if (age == 16) {
    console.log('You can drive.');
  }
}

// In practice, you should avoid using nested if statements as much as possible. For example, you can use the && operator to combine the conditions and use an if statements as follows:

let age = 16;
let state = 'CA';

if (state == 'CA' && age == 16) {
  console.log('You can drive.');
}

// Summary

//     Use the JavaScript if statement to execute a statement if a condition is true.
//     Avoid using nested if statement as much as possible.

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// JavaScript if else


// The if statement executes a block if a condition is true. When the condition is false, it does nothing. But if you want to execute a statement if the condition is false, you can use an if...else statement.

// The following shows the syntax of the if...else statement:

if( condition ) {
  // ...
} else { 
  // ...
}

// In this syntax, the condition is a value or an expression that evaluates to true or false. If the condition is true, the if...else statement executes the block that follows the if branch.

// If the condition is false, the if...else statement executes the block that follows the else branch.

// Typically, the condition evaluates to a boolean value, which is true or false. However, if it evaluates to a non-boolean value, the if...else statement will convert it to the boolean value.

// The following flowchart illustrates how the if...else statement works:
// JavaScript if else
// JavaScript if…else statement examples

// The following example uses the if...else statement to check if the age is greater than or equal to 18:

let age = 18;

if (age >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}

// In this example, the age is 18. Therefore, the expression age >= 18 is true. Hence, you’ll see the following message in the console:

// You can sign up.

// The following example is the same as above except that the age is 18 instead of 16:

let age = 16;

if (age >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}

// Output:

// You must be at least 18 to sign up.

// In this example, the age is 16. Therefore, the expression age >= 18 evaluates to false. Hence, the statement in the else branch executes that output the message to the console.

// The following example uses a logical operator AND (&&) as the condition in the if block:

let age = 16;
let country = 'USA';

if (age >= 16 && country === 'USA') {
  console.log('You can get a driving license.');
} else {
  console.log('You are not eligible to get a driving license.');
}

// Because the age is 16 and the country is the USA, the following expression returns true.

age >= 16 && country === 'USA'

// And you see the following output:

// You can get a driving license.

// Summary

//     Use the JavaScript if...else statement to execute a block if a condition is true and another block otherwise.

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Introduction to the JavaScript if else if statement

// The if an if…else statements accepts a single condition and executes the if or else block accordingly based on the condition.

// To check multiple conditions and execute the corresponding block if a condition is true, you use the if...else...if statement like this:

if (condition1) {
  // ...
} else if (condition2) {
  // ...
} else if (condition3) {
  //...
} else {
  //...
}

// In this syntax, the if...else...if statement has three conditions. In theory, you can have as many conditions as you want to, where each else...if branch has a condition.

// The if...else...if statement checks the conditions from top to bottom and executes the corresponding block if the condition is true.

// The if...else...if statement stops evaluating the remaining conditions as soon as a condition is true. For example, if the condition2 is true, the if...else...if statement won’t evaluate the condition3.

// If all the conditions are false, the if...else...if statement executes the block in the else branch.

// The following flowchart illustrates how the if...else...if statement works:
// JavaScript if else if
// JavaScript if else if examples

// Let’s take some examples of using the if...else...if statement.
// 1) A simple JavaScript if…else…if statement example

// The following example uses the if...else...if statement to get the month name from a month number:

let month = 6;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);

// Output:

// Jun

// In this example, we compare the month with 12 numbers from 1 to 12 and assign the corresponding month name to the monthName variable.

// Since the month is 6, the expression month==6 evaluates to true. Therefore, the if...else...if statement assigns the literal string 'Jun' to the monthName variable. Therefore, you see Jun in the console.

// If you change the month to a number that is not between 1 and 12, you’ll see the Invalid Month in the console because the else clause will execute.
// 2) Using JavaScript if…else…if statement to calculate the body mass index

// The following example calculates the body mass index (BMI) of a person. It uses the if...else...if statement to determine the weight status based on the BMI:

let weight = 70; // kg
let height = 1.72; // meter

// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else {
  weightStatus = 'Obesity';
}

console.log(weightStatus);

// Output:

// Healthy Weight

// How it works.

//     First, declare two variables that hold the weight in kilograms and height in meters. In a real-world application, you’ll get these values from a web form.
//     Second, calculate the body mass index by dividing the weight by the square of the height.
//     Third, determine the weight status based on the BMI using the if...else..if statement.
//     Finally, output the weight status to the console.

// Summary

//     Use the JavaScript if...else...if statement to check multiple conditions and execute the corresponding block if a condition is true.

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Introduction to the JavaScript while loop statement

// The JavaScript while statement creates a loop that executes a block as long as a condition evaluates to true.

// The following illustrates the syntax of the while statement:

while (expression) {
    // statement
}

// The while statement evaluates the expression before each iteration of the loop.

// If the expression evaluates to true, the while statement executes the statement. Otherwise, the while loop exits.

// Because the while loop evaluates the expression before each iteration, it is known as a pretest loop.

// If the expression evaluates to false before the loop enters, the while loop will never execute.

// The following flowchart illustrates the while loop statement:
// JavaScript while

// Note that if you want to execute the statement a least once and check the condition after each iteration, you should use the do…while statement.
// JavaScript while loop example

// The following example uses the while statement to output the odd numbers between 1 and 10 to the console:

let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}

// Output:

// 1
// 3
// 5
// 7
// 9

// How the script works

//     First, declare and initialize the count variable to 1.
//     Second, execute the statement inside the loop if the count variable is less than 10. In each iteration, output the count to the console and increase the count by 2.
//     Third, after 5 iterations, the count is 11. Therefore, the condition count < 10 is false, the loop exits.

// Summary

//     Use a while loop statement to create a loop that executes a block as long as a condition evaluates to true.

// ---------------------------------------------------------------------------------------------------------------------------------------------------


// Introduction to the JavaScript do…while statement

// The do...while loop statement creates a loop that executes a block until a condition evaluates to false. The following statement illustrates the syntax of the do...while loop:

do {
  statement;
} while(expression);

// Unlike the while loop, the do-while loop always executes the statement at least once before evaluating the expression.

// Because the do...while loop evaluates expression after each iteration, it’s often referred to as a post-test loop.

// Inside the loop body, you need to make changes to some variables to ensure that the expression is false after some iterations. Otherwise, you’ll have an indefinite loop.

// Note that starting with ES6+, the trailing semicolon (;) after the while(expression) is optional. So you can use the following syntax:

do {
  statement;
} while(expression)

// The following flowchart illustrates the do-while loop statement:
// JavaScript do while

// In practice, you often use the do...while statement when you want to execute the loop body at least once before checking the condition.
// JavaScript do while statement examples

// Let’s take some examples of using the do...while statement.
// 1) Simple JavaScript do while statement example

// The following example uses the do...while statement to output five numbers from 0 to 4 to the console:

let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5)

Output:

0
1
2
3
4

// In this example:

//     First, declare and initialize the count variable to zero.
//     Second, show the count and increase its value by one in each iteration until its value is greater or equal to 5.

// 2) Using the JavaScript do while statement to make a simple number-guessing game

// The following example uses the do...while statement to generate a number guessing game.

// The script generates a random integer between 1 and 10. And you have to make a number of guesses until your number matches the random number.

// generate a secret number between 1 and 10
const MIN = 1;
const MAX = 10;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0; // for storing the number of guesses
let hint = ''; // for storing hint
let number = 0;
do {
  // get input from user
  let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

  // get the integer
  number = parseInt(input);

  // increase the number of guesses
  guesses++;

  // check input number with the secret number provide hint if needed
  if (number > secretNumber) {
    hint = ', and less than ' + number;
  } else if (number < secretNumber) {
    hint = ', and greater than ' + number;
  } else if (number == secretNumber) {
    alert(`Bravo! you're correct after ${guesses} guess(es).`);
  }
} while (number != secretNumber);

// How it works.

// First, declare the MIN and MAX constants and initialize their values to 1 and 10:

const MIN = 1;
const MAX = 10;

// Second, use Math.random() function to generate a random floating-point number with the value in the range of 0 and 1 (inclusive of zero but not one).

// To generate a random number between MIN and MAX (exclusive), you use the following expression:

Math.random() * (MAX - MIN + 1)

// However, the result is a floating-point number. Therefore, you need to use the Math.floor() function to convert it to an integer:

Math.floor(Math.random() * (MAX - MIN + 1))

// To generate a random number between min and max, you use the following expression:

// let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

Third, define three variables for storing the number of guesses, hints, and user’s input number:

let guesses = 0; // for storing the number of guesses
let hint = ''; // for storing hint
let number = 0;

// Fourth, use the input() function to get the input from the user:

// let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

// Note that the input() function only works on web browsers. If you run the code in another environment such as node.js, please check the corresponding function.

// The input() function returns a string, therefore, you need to use the parseInt() function to convert it to an integer:

 number = parseInt(input);

// Fifth, increase the number of guesses in each iteration:

//  guesses++;

// Sixth, check the input number with the secret number (random) number and give a hint. If the numbers are matched, show the message using the alert() function:

if (number > secretNumber) {
  hint = ', and less than ' + number;
} else if (number < secretNumber) {
  hint = ', and greater than ' + number;
} else if (number == secretNumber) {
  alert(`Bravo! you're correct after ${guesses} guess(es).`);
}

// Seventh, perform the next iteration until the number matches the secret number.

// while (number != secretNumber);

// Summary

//     Use the do…while statement to create a loop that executes a code block until a condition is false.

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Introduction to the JavaScript for loop statement

// The for loop statement creates a loop with three optional expressions. The following illustrates the syntax of the for loop statement:

for (initializer; condition; iterator) {
    // statements
}

// 1) initializer

// The for statement executes the initializer only once the loop starts. Typically, you declare and initialize a local loop variable in the initializer.
// 2) condition

// The condition is a boolean expression that determines whether the for should execute the next iteration.

// The for statement evaluates the condition before each iteration. If the condition is true (or is not present), it executes the next iteration. Otherwise, it’ll end the loop.
// 3) iterator

// The for statement executes the iterator after each iteration.

// The following flowchart illustrates the for loop:
// JavaScript for loop

// In the for loop, the three expressions are optional. The following shows the for loop without any expressions:

for ( ; ; ) {
   // statements
}

// JavaScript for loop examples

// Let’s take some examples of using the for loop statement.
// 1) A simple JavaScript for loop example

// The following example uses the for loop statement to show numbers from 1 to 4 to the console:

for (let i = 1; i < 5; i++) {
  console.log(i);
}

Output:

1
2
3
4

// How it works.

//     First, declare a variable  counter and initialize it to 1.
//     Second, display the value of counter in the console if counter is less than 5.
//     Third, increase the value of counter by one in each iteration of the loop.

// 2) Using the JavaScript for loop without the initializer example

// The following example uses a for loop that has no initializer expression:

let j = 1;
for (; j < 10; j += 2) {
  console.log(j);
}

// Output:

// 1
// 3
// 5
// 7
// 9

// 3) Using the JavaScript for loop without the condition example

// Similar to the initializer expression, the condition expression is optional. If you omit the condition expression, you need to use a break statement to terminate the loop.

for (let j = 1; ; j += 2) {
  console.log(j);
  if (j > 10) {
    break;
  }
}

// Output:

// 1
// 3
// 5
// 7
// 9
// 11

// 3) Using the JavaScript for loop statement without any expression example

// All three expressions of the for loop statements are optional. Therefore, you can omit all of them. For example:

let j = 1;
for (;;) {
  if (j > 10) {
    break;
  }
  console.log(j);
  j += 2;
}

// Output:

// 1
// 3
// 5
// 7
// 9

// 4) Using the JavaScript for loop without the loop body example

// JavaScript allows the for statement to have an empty statement. In this case, you place a semicolon (;) immediately after the for statement.

// For example, the following uses a for loop to calculate the sum of 10 numbers from 1 to 10:

let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum);

// Output:

// 55

// Summary

//     Use the JavaScript for statement to create a loop that executes a block of code using various options.

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// JavaScript break

// The label statement

// In JavaScript, you can label a statement for later use. Here’s the syntax of the label statement:

// label: statement;
// Code language: HTTP (http)

// In this syntax, the label can be any valid identifier. For example, the following shows how to label a for loop using the outer label:

outer: for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Once you define a label, you can reference it in the break or continue statement.
// Introduction to JavaScript break statement

// The break statement prematurely terminates a loop such as for, do...while, and while loop, a switch, or a label statement. Here’s the syntax of the break statement:

// break [label];

// In this syntax, the label is optional if you use the break statement in a loop or switch. However, if you use the break statement with a label statement, you need to specify it.

// This tutorial focuses on how to use the break statement to terminate the loop prematurely.
// Using JavaScript break statement in a for loop

// The following for loop statement outputs five numbers from 0 to 4:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Output:

// 0
// 1
// 2
// 3
// 4

// To terminate the for loop prematurely, you can use a break statement. For example, the following illustrates how to use a break statement inside a for loop:

for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i == 2) {
    break;
  }
}

// Output:

// 0
// 1
// 2

// In this example, we use an if statement inside the loop. If the current value of i is 2, the if statement executes the break statement that terminates the loop.

// This flowchart illustrates how the break statement works in a for loop:
// Using the break statement to terminate a nested loop

// A nested loop has one loop inside another. For example, the following uses a nested for loop to output a pair of numbers from 1 to 3:

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}

// Output:

// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3

// If you use a break statement inside an inner loop, it only terminates the enclosing loop. For example:

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i + j == 4) {
      break;
    }
    console.log(i, j);
  }
}

// Output:

// 1 1
// 1 2
// 2 1

// In this example, if the sum of i and j is 4, the break statement terminates the inner loop. To terminate the nested loop, you use a label statement. For example:

outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i + j == 4) {
      break outer;
    }
    console.log(i, j);
  }
}

// Output:

// 1 1
// 1 2

// In this example, we label the outer loop with the label outer. Inside the inner loop, we specify the outer label in the break statement. The break statement to terminate the nested loop if the sum of i and j is 4.
// Using JavaScript break statement in a while loop

// The following output five numbers from 1 to 5 to the console using a while loop:

let i = 0;

while (i < 5) {
  i++;
  console.log(i);
}

// Output:

// 1
// 2
// 3
// 4
// 5

// Like a for loop, the break statement terminates a while loop prematurely. For example:

let i = 0;

while (i < 5) {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
}

// Output:

// 1
// 2
// 3

// In this example, when the current value of i is 3, the break statement terminates the loop. Therefore, you see only three numbers in the output.

// The following flowchart illustrates how the break statement works in a while loop:
// Using JavaScript break statement in a do…while loop

// The following example uses a do...while statement to output five numbers from 0 to 5 to the console:

let i = 0;

do {
  i++;
  console.log(i);
} while (i < 5);

// Output:

// 1
// 2
// 3
// 4
// 5

// Like a while loop, you can use a break statement to terminate a do...while loop. For example:

let i = 0;

do {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
} while (i < 5);

// Output:

// 1
// 2
// 3

// The following flowchart shows how the break statement works in a do while loop:
// Summary

//     Use the break statement to terminate a loop including for, while, and do...while prematurely.
//     When used in a nested loop, the break statement terminates the enclosing loop. To terminate the nested loop, you use a label statement.

// -------------------------------------------------------------------------------------------------------------------------------------------------

// Introduction to the JavaScript continue statement

// The continue statement terminates the execution of the statement in the current iteration of a loop such as a for, while, and do…while loop and immediately continues to the next iteration.

// Here’s the syntax of the continue statement:

// continue [label];

// In this syntax, the label is optional. It is a valid identifier associated with the label of a statement. Read the break statement tutorial for more information on the label statement.

// Typically, you use the continue with an if statement like this:

// inside a loop
if(condition){
  continue;
}

// In this syntax, the if statement specifies a condition to execute the continue statement inside a loop.
// Using the continue statement in a for loop

// When using the continue statement in a for loop, it doesn’t terminate the loop entirely. Instead, it jumps to the iterator expression.

// The following flowchart illustrates how the continue statement works in a for loop:
// JavaScript continue in a for loopJavaScript continue with for loop

// The following example uses a continue in a for loop to display the odd number in the console:

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// Output:

// 1
// 3
// 5
// 7
// 9

// In this example, the for loop iterates over the numbers from 0 to 9.

// The i%2 returns the remainder of the division of the current value of i by 2.

// If the remainder is zero, the if statement executes the continue statement that skips the current iteration of the loop and jumps to the iterator expression i++. Otherwise, it outputs the value of i to the console.
// Using the continue statement in a while loop

// When using the continue statement in a while loop, it doesn’t terminate the execution of the loop entirely. Instead, it jumps back to the condition.

// The following flowchart show hows the continue statement works in a while loop statement:

// The following example uses the continue statement in a while loop to display the odd numbers from 1 to 10:

let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// Output:

// 1
// 3
// 5
// 7
// 9

// Using the continue statement with a label example

// The continue statement can include an optional label like this:

// continue label;

// The following nested loop displays pairs of numbers from 1 to 2:

for (let i = 1; i < 3; i++) {
  for (let j = 1; j < 3; j++) {
    console.log(i, j);
  }
}

// Output:

// 1 1
// 1 2
// 2 1
// 2 2

// The following shows how to use the continue statement with a label:

outer: for (let i = 1; i < 4; i++) {
  for (let j = 1; j < 4; j++) {
    if (i + j == 3) continue outer;
    console.log(i, j);
  }
}

// Output:

// 1 1
// 3 1
// 3 2
// 3 3

// Summary

//     Use the JavaScript continue statement to skip the current iteration of a loop and continue the next one.

