/*

Write a function calculateArea that calculates the area of a rectangle.
The function takes two parameters: length and width.
The function should return the area of the rectangle,
which is the product of length and width.




calculateArea(3,9) //18
calculateArea(10,3) // 30

//Comment these out before running tsc
calculateArea('10',3) // should show an error tsc
calculateArea()//should show an error before running tsc

*/


// function calculateArea(length:number, width:number): number {
//     return length * width
// }


// calculateArea(3,9) //18
// calculateArea(10,3) // 30

//Comment these out before running tsc
// calculateArea('10',3) // should show an error around '10' before tsc
// calculateArea()//should show an error under calculateArea before tsc



/*

Write a function reverseArray that takes an array of strings
 as input and returns a new array with the same elements
 in reverse order.

Declare the type of the function parameter and return value.


reverseArray(['f','o','o']) // ['o','o','f']
reverseArray(['f','i','z','z']) // ['z','z','i', 'f]

//Comment these out before running tsc
reverseArray([1,2,3,4]) // should show error for each element since they are numbers




*/


// function reverseArray(arr: string[]): string[]{

//     const reverseArr: string[] = arr.reverse();
//     return reverseArr;
// }

// reverseArray(['f','o','o']) // ['o','o','f']
// reverseArray(['f','i','z','z']) // ['z','z','i', 'f]

//reverseArray([1,2,3,4]) // should show error for each element since they are numbers


/*

Write a function printId that takes an argument that can be
 either a string or a number and prints it to the console.
 The function should return the string.

const strId: string = 'abc123';
const numId: number = 456;
printId(strId); // prints "ID: abc123"
printId(numId); // prints "ID: 456"

//Comment these out before running tsc
printId(); // shows error under printId
*/

// function printId(id: string | number): string{
//     let strId: string = `ID: ${id}`
//     console.log(strId);
//     return strId;

// }

// const strId: string = 'abc123';
// const numId: number = 456;
// printId(strId); // prints "ID: abc123"
// printId(numId); // prints "ID: 456"

//Comment these out before running tsc
// printId(); // shows error under printId
