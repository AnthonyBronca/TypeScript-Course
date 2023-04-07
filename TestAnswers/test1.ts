

const grader = (grades: string[]):number => {

let res = 0;

let answers = ['b', 'c', 'a', 'a', 'c', 'b', 'a', 'c', 'c', 'b']

grades.forEach((el: string, i: number): void => {
    if(el === answers[i]){
        res++
    }
})
return Math.floor((res /answers.length) * 100)

}


module.exports = grader
