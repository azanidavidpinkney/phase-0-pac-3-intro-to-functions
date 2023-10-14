// Follow along with the examples here
// "Nothing" function:
function doNothing() {}

// "Hello!" function with call commented out:
function sayHello() {
    console.log("Hello!");
  }
//sayHello();

// Saying Hello to "x" function and calls commented out:
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
//sayHelloToGuadalupe();

function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }

function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  
/* 
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();
*/

//Function using argument:
function doSomething(thing) {
    console.log(thing);
  }
  
 // doSomething("anything"); 

 // Updated "Say Hello!" function with argument (commented out):
 function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
 }
 /*
 sayHelloTo("Guadalupe");
 sayHelloTo("Jane");
 sayHelloTo("R2-D2");
 sayHelloTo(1);
 */

//Reference Error example commented out:
//console.log(firstName)

// Greeting function and calls commented out:
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
//say("Goodbye", "Julio");
//say("Julio", "hello");

function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
//say("Julio", "hello");

// Addition function:
function add(x,y) {
    return x + y;
}
//console.log(add(1,2));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
//console.log(say("hello", "Liz"));

function add(x,y) {
    return x + y;
}

//console.log(add(1,2));

const sum = add(2,3);
const message = `The sum of your numbers is: ${sum}.`;

console.log(message);
