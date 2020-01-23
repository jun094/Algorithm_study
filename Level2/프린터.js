/** @format */
const priorities = [1, 2, 3, 2];
const location = 0;

function solution(priorities, location) {
    var answer = 0;
    let len = priorities.length;
    let priorQ = [];
    let answerQ = [];

    priorities.forEach((prior, index) => {
        priorQ.push({ item: index, prior: prior });
    });
    //console.log(priorQ);

    while (priorQ.length) {
        let wait = priorQ.shift();
        let max = Math.max.apply(
            Math,
            priorQ.map(function(i) {
                return i.prior;
            })
        );

        if (wait.prior < max) {
            //대기목록 중에 우선수위가 큰게 하나라도 있으면
            priorQ.push(wait);
        } else {
            answerQ.push(wait);
        }
    }

    console.log(answerQ);
    answerQ.forEach((item, index) => {
        if (item.item === location) {
            answer = index + 1;
        }
    });

    console.log(answer);
    return answer;
}

solution(priorities, location);
