var grader = function (grades) {
    var res = 0;
    var answers = ['b', 'c', 'a', 'a', 'c', 'b', 'a', 'c', 'c', 'b'];
    grades.forEach(function (el, i) {
        if (el === answers[i]) {
            res++;
        }
    });
    return Math.floor((res / answers.length) * 100);
};
module.exports = grader;
