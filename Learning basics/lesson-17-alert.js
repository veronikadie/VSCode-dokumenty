"use strict";
// because of this statement at the top the code works the modern way

alert( "I'm external alert!");

alert('Hello');
alert('World');

alert(3 + 
    1
    + 2);

alert("Hello");

[1, 2].forEach(alert);

//Ak píšeme komentár v rámci jedného riadku stačia dve lomítka na začiatku.

/* Ak píšeme komentár, ktorý má viac riadkov.
Tak píšeme na začiatku aj na konci komentáru lomítko a hviezdičku.
*/

//Avšak komentár v komente nie je podporovaný!

let message;
message = "Hello, I'm a message."; // store the string 'Hello' in the variable named message

alert(message); // shows the variable content

//we can combine the variable declaration and assignment into a single line.

let message2 = "Another message in one line with defined variable"; // define the variable and assign the value

alert(message2);

let user = 'John';
let age = '25';
message = "Hi!"

alert(user); 
alert(age);
alert(message);

message = "Ahoj";

message = "Volám sa Veronika";

message = "A ty si kto?"; //obsah správy sa zmení iba na poslednú správu, prvé dve idú do koša a nezobrazia sa.

alert(message);

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

//constants:
const myBirthday = '18.04.1982';

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

let admin;
let name = "John";
admin = name;
alert(admin);

let ourPlanetName = "Earth";
let currentVisitorName = "Veronika";

alert(ourPlanetName);
alert(currentVisitorName);

//Data types

//1. Numbers

let n = 123;
n = 12.345;

alert(n);

alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "not a number" / 2 ); //NaN reprsents a cmpitational error, this division is erroneous
alert( NaN + 1); //NaN
alert( 3 * NaN); //NaN

//2. BigInt
// the "n" at the end means it's a BigInt

const bigInt = 1234567890123456789012345678901234567890n;

//3. String
// A string in JS must be sorrounded by quotes.

let str = "Hello"; //double quotes
let str2 = 'Single quotes are ok too'; //single quotes
let phrase = `can embed another ${str}`; //backticks - extended functionality quotes

name = "John";
// embed a varieble
alert( `Hello, ${name}!` ); // Hello, John!

alert( `the result is ${1 + 2}` ); // the result is 3

//4. Boolean (logical type)
//It has 2 values: true or false

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

alert(nameFieldChecked);
alert(ageFieldChecked);

let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")

//5. The "null" value
age = null;
alert(age);
//6. The "undefined" value (value is not assigned)

let age3
alert(age3); // shows "undefined"

//6. Objects and Symbols

//7. The typeof operator
/* It returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.
typeof x returns a string with the type name: typeof 0, typeof 10n, typeof true, typeof "foo", typeeof undefined ect. */


//Prompt - ukazuje správu a pýta od užívateľa vložiť text 
//result = prompt(title, [default]);

let age4 = prompt('How old are you?', 100);

alert(`You are ${age4} years old!`); // You are 100 years old!

let test = prompt("Test", '');
alert(test);

//Confirm - ukazuje správu s otázkou a čaká na užívateľa či dá Ok alebo Cancel
//sysntax: result = confirm(question);

let isBoss = confirm("Máte nad 18 rokov?");
alert(isBoss);

