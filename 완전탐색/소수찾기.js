const numbers = '173';

function solution(numbers) {
    var answer = 0;
    let numSet = new Set();
    let numArr = numbers.split('');

    numArr.forEach((num, idx) => {
        numSet.add(num);

        for (let i = 0; i < numbers.length; i++) {
            if (numSet.has(num)) {
                if (i != idx) {
                    console.log(num.concat(numArr[i]));
                    numSet.add(num.concat(numArr[i]));
                }
            }
        }
    });

    console.log(numSet);
    return answer;
}

solution(numbers);
