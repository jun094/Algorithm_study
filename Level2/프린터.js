/** @format */
const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

function solution(priorities, location) {
    var answer = 0;
    let len = priorities.length;
    let priorStack = [];

    priorities.forEach((item, index) => {
        priorStack.push({ index: index, item: item });
    });

    console.log(priorStack);
    console.log('========================');

    while (len) {
        let check = priorStack.shift();
        let temp = 1;
        for (let i = 0; i < priorStack.length; i++) {
            if (check.item < priorStack[i].item) {
                priorStack.push(check);
                temp = 0;
            }
        }
        if (temp != 0) {
            priorStack.unshift(check);
        }

        len = len - 1;
    }

    console.log(priorStack);
    console.log('========================');
    let i = 1;
    while (1) {
        let check = priorStack.shift();

        //console.log(check.index);
        if (check.index === location) {
            answer = i;
            break;
        }
        i++;
    }

    console.log(answer);
    return answer;
}

solution(priorities, location);
