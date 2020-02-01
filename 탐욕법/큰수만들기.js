const number = '999999999';
const k = 2;

function solution(number, k) {
    let numArr = number.split('');
    let len = numArr.length;
    let digit = number.length - k; // 자릿수

    var answer = [];

    while (digit) {
        let max, array;
        if (len === numArr.length && digit != 1) {
            array = numArr.slice(0, numArr.length - digit);
        } else {
            array = numArr.slice(0, numArr.length - digit + 1);
        }

        console.log(array);
        max = Math.max(...array.map(val => val * 1));
        numArr.splice(0, numArr.indexOf(max.toString()) + 1);

        answer.push(max);
        digit--;
    }

    console.log(answer.join(''));
    return answer.join('');
}

solution(number, k);
