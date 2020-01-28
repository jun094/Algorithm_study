const number = '1924';
const k = 2;

function solution(number, k) {
    var answer = '';
    let numArr = number.split('');
    let numList = [];
    let digit = number.length - k; // 자릿수

    console.log(numArr);
    while (k) {
        let max = Math.max.apply(null, numArr.slice(0, numArr.length - k));
        numArr.splice(0, numArr.indexOf(max.toString()) + 1);
        answer += max;
        --k;

        console.log(answer);
        console.log(numArr);
    }

    answer += numArr;
    console.log(answer);

    return answer;
}

solution(number, k);
