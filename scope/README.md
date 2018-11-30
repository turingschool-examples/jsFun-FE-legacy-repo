# Understanding Scope

Scope is one of the most fundamental concepts of JavaScript, and is often used as a measure for how well a developer understands the inner workings of the language. Fully understanding how scope works will help you avoid introducing unexpected bugs into your codebase, and help you more easily track down the bugs that do pop up.

In order to be successful with scope, you'll need to have a solid understanding of the following concepts:

* the order in which JavaScript is read and executed
* variable assignment vs. reassignment vs. declaration
* the three scoping levels: global, functional and block
* the scoping levels that var/let/const each adhere to
* hoisting


# Instructions

In the [scope/index.js](https://github.com/turingschool-examples/jsFun/scope/index.js) file, you'll see an object called `scope` that has a number of methods on it. Each method represents a scope exercise you should solve. The exercises will look something like the following:

```js
let text = 'Hello World!';

function changeText() {
  text = 'Goodbye World!';
}

// Log A: text

changeText();

// Log B: text

const result = 'REPLACE WITH YOUR RESULT HERE';
return result;


// Annotation:
// Write your annotation here as a comment

```

In order to return the result, you should replace the value of the `result` variable with an array of objects that denotes which order the `// Log` comments run, and what values they log. For example, the above exercise would be solved like so:

```js
let text = 'Hello World!';

function changeText() {
  text = 'Goodbye World!';
}

// Log A: text

changeText();

// Log B: text

const result = [
  { 'A': 'Hello World!' },
  { 'B': 'Goodbye World!' }
];

return result;

// Annotation:
// First we declare a global variable called `text` and assign it to the string of 'Hello World!'
// Next, we declare a function called `changeText`, but because we haven't invoked it yet, we skip down to the first `console.log()` of 'A' which will log 'Hello World!'
// Next we invoke our `changeText` function which brings us back up to line 3. Within this function we re-assign the value of `text` to 'Goodbye World!'
// Because there is no variable declaration for `text` inside our current functional scope, the reassignment will look up the scope chain, into the global scope, and reassign the value of the `text` variable we declared on line 1.
// Now that `changeText` is finished executing, we hop back down to our last `console.log()` of 'B' which now logs 'Goodbye World!'
``` 

In the event that the value of a variable would be undefined or the code would throw an error, write your answer like so:

```
[
 { ‘A’: ‘reference error’ },
 { ‘B’: undefined },
 { ‘C’: ‘bar’ }
 …etc
]
```




# Resources

* [Turing Scope Lesson Plan](http://frontend.turing.io/lessons/module-2/scope-and-closures.html)
* [Understanding Scope](https://scotch.io/tutorials/understanding-scope-in-javascript)
* [Scope & Hoisting](https://hackernoon.com/understanding-javascript-scope-1d4a74adcdf5)
* [Scope Video](https://www.youtube.com/watch?v=SBjf9-WpLac)