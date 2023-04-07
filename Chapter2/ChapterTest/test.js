
const grader = require('../../TestAnswers/test1.js')


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const answers = [];
console.clear()
console.log('Instructions: To select an answer, type the letter of the choice you would like to select');



function prompt1() {
    console.clear();
    const q1 = 'What is a type declaration in TypeScript ?'
    const choices = 'a) A way to declare a variable that can be any type\nb) A way to declare a type for a variable or function\nc) A way to declare a type that is automatically inferred by the compiler\n'
    console.log(q1);

    readline.question(choices, answer => {
        answers.push(answer)
        console.clear();
        prompt2()
        // readline.close();
    });
}



function prompt2() {
    const q2 = 'What is a union type in TypeScript ?'
    const choices = 'a) A type that represents a value that can be either null or undefined\nb) A type that represents a function that can return different types depending on the input\nc) A type that represents a value that can be of multiple types\n'

    console.log(q2)
    readline.question(choices, answer => {
        answers.push(answer)
        console.clear();

        // console.log(answers)
        prompt3()
        // readline.close();
    });
}

function prompt3() {
    const q3 = 'What is a type alias in TypeScript ?'
    const choices = 'a) A way to create a new type that is based on an existing type\nb) A way to create a type that can be any type\nc) A way to create a type that is automatically inferred by the compiler\n'

    console.log(q3)
    readline.question(choices, answer => {
        answers.push(answer)
        console.clear();

        // console.log(answers)
        // readline.close();
        prompt4()
    });

}

function prompt4() {
    const q = 'What is an interface in TypeScript ?'
    const choices = 'a) A way to define the structure of an object\nb) A way to declare a variable that can be any type\nc) A way to declare a type that is automatically inferred by the compiler\n'


    console.log(q)
    readline.question(choices, answer => {
        answers.push(answer)
        console.clear();

        // console.log(answers)
        // readline.close();
        prompt5()
    });

}

function prompt5() {


    const q = 'What is the void type in TypeScript ?'
    const choices = 'a) A type that represents a value that can be null or undefined\nb) A type that represents a function that can return different types depending on the input\nc) A type that represents a function that doesn\'t return anything\n'


    console.log(q)
    readline.question(choices, answer => {
        answers.push(answer)
        console.clear();

        // console.log(answers)
        // readline.close();
        prompt6()
    });

}


function prompt6() {

    const q = 'What is a type guard in TypeScript ?'
    const choices = 'a) A way to declare a variable that can be any type\nb) A way to narrow down the type of a value in a conditional statement\nc) A way to create a new type that is based on an existing type\n'

    console.log(q)
    readline.question(choices, answer => {
        answers.push(answer)
        console.clear();

        // console.log(answers)
        // readline.close();
        prompt7()
    });

}

function prompt7() {




    const q = 'What is a type assertion in TypeScript ?'
    const choices = 'a) A way to tell the compiler the type of a value\nb) A way to create a new type that is based on an existing type\nc) A way to narrow down the type of a value in a conditional statement\n'


    console.log(q)
    readline.question(choices, answer => {
        answers.push(answer)
        console.clear();

        // console.log(answers)
        // readline.close();
        prompt8()
    });

}


function prompt8() {

    const q = 'What is optional chaining in TypeScript ?'
    const choices = 'a) A way to safely access properties in nested object structures\nb) A way to declare a variable that can be any type\nc) A way to create a new type that is based on an existing type\n'

    console.log(q)
    readline.question(choices, answer => {
        answers.push(answer)
        console.clear();

        // console.log(answers)
        // readline.close();
        prompt9()
    });
}

function prompt9() {




    const q = 'What is nullish coalescing in TypeScript ?'
    const choices = 'a) A way to declare a variable that can be any type\nb) A way to create a new type that is based on an existing type\nc) A way to specify a default value only when the value is null or undefined\n'


    console.log(q)
    readline.question(choices, answer => {
        answers.push(answer)
        console.clear();

        // console.log(answers)
        // readline.close();
        prompt10()
    });
}

function prompt10() {

    const q = 'How do you declare a union type in TypeScript ?'
    const choices = 'a) Using the & operator to separate the types\nb) Using the | operator to separate the types\nc) Using the ? operator to specify the optional type\n'


    console.log(q)
    readline.question(choices, answer => {
        answers.push(answer)
        console.clear();

        console.log('You scored : ', grader(answers), 'out of 100')
        readline.close();
    });
}


setTimeout(prompt1, 5000)


module.exports = { answers }
