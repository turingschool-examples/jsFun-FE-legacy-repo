# Understanding Scope


# Instructions

In the [scope/index.js](https://github.com/turingschool-examples/jsFun/scope/index.js) file, you'll see an object called `scope` that has a number of methods on it. Each method represents a scope exercise you should solve. The exercises will look something like the following:

```js
let text = 'Hello World!';

function changeText() {
  text = 'Goodbye World!';
}

console.log('A', text);

changeText();

console.log('B', text);

const result = 'REPLACE WITH YOUR RESULT HERE';
return result;


// Annotation:
// Write your annotation here as a comment

```

In order to return the result, you should replace the value of the `result` variable with an array of objects that denotes which order the `console.logs()` run, and what values they log. For example, the above exercise would be solved like so:

```js
let text = 'Hello World!';

function changeText() {
  text = 'Goodbye World!';
}

console.log('A', text);

changeText();

console.log('B', text);

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



# Resources