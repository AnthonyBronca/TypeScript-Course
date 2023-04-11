# Introduction: TypeScript

> Video Link: https://youtu.be/2ZoiFS5kgss

## What is it?

TypeScript is a super set of JavaScript. This means it encapsulates JavaScript so it can do everything JavaScript can do, but it also has TypeScript specific things it can do on top of the JS syntax. The biggest thing being type checking.

## Why is it useful?

TypeScript mainly benefits developers, as it helps them create better code that is strictly used the way it is intended. While this may increase the time needed to develop, it can decrease the amount of time debugging and thus create better quality projects for end-users.

## Example of why?

Say you had a function that will add Five to a single number that is passed in.

We can create a function that looks something like this in JS:

```javascript
function addFive(num) {
  return num + 5;
}

addFive(3); // 8
```

This is all fine and dandy, however, what would happen a developer were to try and pass in a string?

```javascript
addFive("a"); // 'a5'
```

You can see our function will still not crash, but it is outputting something that we do not intend. It is outputting a string, and definitely not doing a mathematical equation to add 5.

In JS we could probably fix this up by changing the function to look something like this:

```javascript
function addFive(num) {
  if (typeof num !== "number") {
    throw new Error("num must be a number");
  } else {
    return num + 5;
  }
}

addFive(3); // 8
addFive("a"); // Error: num must be a number
```

This is much better code. We have a function with a good naming, it has some type checking, and it works as intended. Cool! But the issue with this in JS is there is no way, as a developer, to know I will get that error when passing in a string until I either:

1. Look at the function and follow it through.
2. Run Node and see the output in the terminal

In this example, it is really easy to visualize and follow code, especially with the good naming. But if this project gets any bigger, more devs may start joining, and it can clearly become a mess. You may have already seen this when working on a group project and some members use naming conventions that don't make sense to you (but it does to them) and then you have to try and follow their code to see what is doing. Then you litter the codespace with console.logs until you know what you can and can't do and what the expected output is from their function. This is where TypeScript comes in handy!

> ### Before moving on, please checkout the RunningTS.md file to lean how to run TSC and convert TypeScript -> JavaScript. If you know how to do this, jump to chapter 1

## **Please go to Chapter 1 To Continue**
