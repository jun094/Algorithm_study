const baseball = [
    [123, 1, 1],
    [356, 1, 0],
    [327, 2, 0],
    [489, 0, 1]
];

function solution(baseball) {
    var answer = 0;

    for (let i = 123; i <= 987; i++) {
        let answerNum = 0;
        let arr = i.toString().split('');

        if (!arr.includes('0') && !arr.filter((item, index) => arr.indexOf(item) !== index).length) {
            for (let j = 0; j < baseball.length; j++) {
                let strike = 0,
                    ball = 0;

                let numArr = baseball[j][0].toString().split('');
                let check = [];

                // strike체크 ---------------------------
                check.push(
                    i
                        .toString()
                        .split('')
                        .indexOf(numArr[0])
                );
                check.push(
                    i
                        .toString()
                        .split('')
                        .indexOf(numArr[1])
                );
                check.push(
                    i
                        .toString()
                        .split('')
                        .indexOf(numArr[2])
                );

                if (check[0] === 0) {
                    strike++;
                } else if (check[0] === 1 || check[0] === 2) {
                    // ball체크
                    ball++;
                }

                if (check[1] === 1) {
                    strike++;
                } else if (check[1] === 0 || check[1] === 2) {
                    // ball체크
                    ball++;
                }

                if (check[2] === 2) {
                    strike++;
                } else if (check[2] === 1 || check[2] === 0) {
                    // ball체크
                    ball++;
                }

                if (baseball[j][1] === strike && baseball[j][2] === ball) {
                    answerNum++;
                }
            }

            if (answerNum === baseball.length) {
                answer++;
            }
        }
    }

    //console.log(answer);
    return answer;
}

solution(baseball);
