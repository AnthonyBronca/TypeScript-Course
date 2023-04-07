# Chapter 2: Advanced Types and Features

## Type Aliases

TypeScript's type aliases allow developers to create custom names for any type, making it easier to use and more readable. Essentially, a type alias is a new name for a type that already exists in TypeScript.

To create a type alias, you can use the type keyword followed by the name of the alias and the type it represents. Here's an example of creating a type alias for a string:

```typescript
type MyString = string;
```

Now we can use that type in our code:

```typescript
type MyString = string;

function printName(name: MyString) {
  console.log(name);
}

const myName: MyString = "John";
printName(myName);
```

Awesome! Now lets take it to the next level. What if we we want a type to be a specific string? Example, what if I want to make sure the string that is coming in to a function is always of the same letters?

```typescript
type MyName = "Anthony";

let my_name: MyName = "John"; // throws error because 'John' is not of type 'Anthony'
```

pretty cool!!

**_It is convention in TypeScript to make Type Alias start with capital letters using PascalCase._**

## Interfaces

Let's get into working with JavaScript Objects in TypeScript.

an Object in JS will look like this:

```javascript
const obj = {
  name: "Spider-Man",
  superPowers: ["web-slinging", "wall-climbing", "super-strength"],
  loveInterst: "Mary Jane",
};
```

That's a lot of type checking that can go wrong! We can use TypeScript interfaces if we want to add types to the key:value pairs

To do this, we use the `interface` keyword. It is also convention to use PascalCase for the interface name

```typescript
interface Obj {
  name: string;
  superPowers: string[];
  loveInterst: string;
  age: number;
}
```

Now we can declare our superhero obj using this interface:

```typescript
const superHero: Obj = {
  name: "Spider-Man",
  superPowers: ["web-slinging", "wall-climbing", "super-strength"],
  loveInterst: "Mary Jane",
  age: 18,
};
```

This is awesome, because we can resuse this interface type throughout our code. For example, we may want to use dot notation to key into name of superHero. Say we had a function that will take in a superHero Obj and print out its name, we could do something like:

```typescript
function printHeroName(hero: superHero): string {
  console.log(hero.name);
  return hero.name;
}
```

I can better guarantee that the function won't break when a developer tries to pass in an incorrect obj. If they passed in an object that didn't have a "name" keyword in it, this could break so my code is protected!

## Void and Any Types

At this point, let's introduce two new types. TypeScript has the types `any` and `void`.

`void` type lets us declare something that should not exist. For example, in our functions we don't always want to return something. Sure I could leave the function return type as empty but this would inherit the `any` property. Depending on the settings of your TypeScript Compiler (We will learn about this soon), you may be forced to have return types for your functions, even if nothing is to be returned. Void can be used to tell our function that nothing will be returned, and an error is thrown if something is returned.

Let's refactor the printHeroName function from above to not need to return anything:

```typescript
interface Obj {
  name: string;
  superPowers: string[];
  loveInterst: string;
  age: number;
}

const superHero: Obj = {
  name: "Spider-Man",
  superPowers: ["web-slinging", "wall-climbing", "super-strength"],
  loveInterst: "Mary Jane",
  age: 18,
};

function printHeroName(hero: superHero): void {
  console.log(hero.name);
}
```

Void is pretty easy to use, but what is `any`?

`any`, in typescript opens the interpertation to be literally anything. It can be a number, string, undefined, who knows? This is exactly how JavaScript works. As a developer using TypeScript, you should avoid using the any type as much as possible. In this case, why would you even use TypeScript if you can just use JavaScript to do that for you. It is still important to know how to use it, and what it does. Let's take a look:

![Alt Text](../images/anyshowcase.png)

Notice how I can assign a variable to `any`, and then declare it to the `number` type of 5. Traditionally, TypeScript would rationalzie this any use type inferance to guess all versions of Variable reassignments will be locked at a `number` type. But we locked it to be any so that we can then reassign it to any other version of the type and not get any errors.

Again, this should be avoided so that we don't run into the typical type related bugs we see in JavaScript. Also TypeScript is FTW (For The Win)!

> **This is a good time to take a break! Before moving on, work on the phase1 problems located in phase1.ts**

## Type Guards and Assertions

In TypeScript, type guards are a way to narrow down the type of a variable based on certain conditions. Type guards can be especially useful when working with union types, which are types that can have multiple possible types.

There are several ways to implement type guards in TypeScript. One way is to use the `typeof` operator to check the type of a variable:


- Type guards and assertions
- Optional chaining and nullish coalescing
- Chapter 1 and 2 Coding Test
