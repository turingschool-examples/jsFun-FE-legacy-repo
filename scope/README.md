# Understanding Scope


# Instructions

In the [scope/index.js]() file, you'll see an object called `scope` that has a number of methods on it. Each method represents a scope exercise you should solve. The exercises will look something like the following:

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
``` 





# Resources