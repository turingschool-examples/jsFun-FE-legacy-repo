# Understanding Context with the keyword `this`

Understanding how the value of `this` changes throughout your code is an important part of recognizing where you are within your execution, and what object is currently being acted upon. You can think of `this` as the current owner, or subject, of whatever code is executing at the time. It is a concept often mixed up with scope, and though they are related, they actually describe somewhat different things.

There are several rules you must keep in mind in order to successfully keep track of your context:

* what object global functions are declared on
* how the invocation of a method changes the value of `this`
* when `this` is set for traditional functions vs. arrow functions


# Instructions

For each context exercise, we want to know what the value of `this` is when a certain piece of code is executed. This might be a standalone function or a method on an object. Your result should be a string in one of the following formats:

* 'global window object'
* 'nameOfObject'
* 'instance of nameOfClassInstance'

Though you are technically working inside of a big `context` object with methods for each exercise, treat the code within each method as standalone code. (Imagine the code within the method is in it's own separate JavaScript file.)

For example, given the following exercise:

```js
function logThis() {
  console.log(this);
}

var voyager1 = {
  classification: 'Space Probe',
  title: 'Voyager 1',
  logThis: logThis  // adding logThis function to voyager1
}


// What is the value of `this` when we call voyager1.logThis();?
const result = 'REPLACE WITH YOUR RESULT HERE';
return result;

// Annotation: 
// Write your annotation here as a comment
```


Your solution should look something like this:

```js
function logThis() {
  console.log(this);
}

var voyager1 = {
  classification: 'Space Probe',
  title: 'Voyager 1',
  logThis: logThis  // adding logThis function to voyager1
}


// What is the value of `this` when we call voyager1.logThis();?
const result = 'voyager1';
return result;

// Annotation: 
// `this` will reference the voyager1 object because we are calling `logThis()` as a method
// on that particular object. The voyager1 object has a property called `logThis` that references
// a traditional ES5 global function. With traditional ES5 functions, the value of `this` is set 
// upon invocation rather than upon declaration. If this had been written as an arrow function,
// `this` would instead point to the global window object.
```

# Resources

* [MDN `this` keyword](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
* [Turing `this` lesson plan](http://frontend.turing.io/lessons/module-2/this-is-confusing.html)
* [Scope vs. Context 1](https://blog.kevinchisholm.com/javascript/difference-between-scope-and-context/)
* [Scope vs. Context 2](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)