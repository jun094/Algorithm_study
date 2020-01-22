/** @format */
const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

function checkPrior(arr, val) {
    return arr.some(function(arrVal) {
        console.log(arrVal, val);
    });
}

function solution(priorities, location) {
    var answer = 0;
    let len = priorities.length;
    let priorQ = [];
    priorities.forEach((prior, index) => {
        priorQ.push({ item: index, prior: prior });
    });
    console.log(priorQ);

    priorQ.forEach(item => {
        if (checkPrior(priorQ, item)) {
            console.log('발견');
        }
    });

    console.log(answer);
    return answer;
}

solution(priorities, location);
