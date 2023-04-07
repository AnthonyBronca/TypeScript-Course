/*

You are given a TypeScript interface representing a
user's profile information as follows:

You want to create a type alias UserSummary that represents a
simplified version of this interface, containing only
the user's name and email. Write a TypeScript function
getUserSummary that takes a UserProfile as its argument
and returns a UserSummary object.

interface UserProfile {
  name: string;
  age: number;
  email: string;
  phoneNumber: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
}

const userProfile: UserProfile = {
  name: 'John Doe',
  age: 35,
  email: 'johndoe@gmail.com',
  phoneNumber: '+1-202-555-0175',
  address: {
    street: '123 Main Street',
    city: 'Anytown',
    state: 'CA',
    country: 'USA',
    zipCode: '12345'
  }
};

type UserSummary = {
  name: string;
  email: string;
}

function getUserSummary(userProfile: UserProfile): UserSummary {
  const { name, email } = userProfile;
  return { name, email };
}


const userSummary: UserSummary = getUserSummary(userProfile);
console.log(userSummary); // { name: 'John Doe', email: 'johndoe@gmail.com'}


*/




/*

Write a function called printName that, when invoked,
will print out the passed in name. The function should not return anything




*/

// const printName = (name: string): void {
//     console.log(name)
// }

//Test with this:
// printName('John') // should print

//comment these out before running tsc
// printName(1) // should throw an error

// You should also be able to throw a return in your function
// and see an error if you set this up correctly


/*

Write a function called addNumOrString

Function will take in 2 values which can be either a number or
a string of a number. The return will be either a string or a number

if both values are a number, return the sum
if both values are a string, return a string with both numbers combined
if both values are not of the same type, convert the non-number value into
a number and add return the sum


Try to solve this using a type alias


*/

// type NumOrString = number | string

// const addNumOrString = (val1: NumOrString, val2: NumOrString): NumOrString => {
//     if(typeof val1 === 'string' && typeof val2 === 'string'){
//         const strRes: string = val1 + val2
//         return strRes;
//     } else if (typeof val1 === 'number' && typeof val2 === 'number'){
//         const numRes:number = val1 + val2;
//         return numRes;
//     }

//    let newVal1:number = Number(val1);
//    let newVal2:number = Number(val2);
//    return newVal1 + newVal2

// }


// console.log(addNumOrString(1,3)) // 4
// console.log(addNumOrString(1,'3')) // 4
// console.log(addNumOrString('5','3')) // '53'


/*
You are working on a TypeScript project that includes a function sumNumbers
 that takes an array of numbers and returns their sum.
 However, you recently made some changes to the function, and
 now you are not sure if it still works correctly.

Your task is to write some test cases using TypeScript assertions to
verify that sumNumbers works as expected.

to test this function run:

mocha testPhase1/spec1.js

*/

function sumNumbers(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}


module.exports = sumNumbers
