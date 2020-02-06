const numbers = '173';

function solution(numbers) {
    let answer = 0;
    let arr = numbers.split('').sort();
    let numPermu = [];

    let len = arr.length;
    while (len) {}

    let numArr = pre(arr);
    console.log(numArr);
    numArr.forEach((val, index) => {
        if (val === 2 || val === 3 || val === 5 || val === 7) {
            answer++;
        } else if (val > 10) {
            for (let i = 10; i < Math.floor(val / 2); i++) {
                if (val % i === 0) {
                    return;
                }
            }
            answer++;
        }
    });

    console.log(answer);
    return answer;
}

function pre(str) {
    return [...new Set(permu(str.map(val => val * 1)).map(val => parseInt(val.join(''))))];
}

function permu(a) {
    return a.reduce(
        function(list, element) {
            var newlist = [];

            list.forEach(function(seq) {
                for (var i = seq.length; i >= 0; i--) {
                    var newseq = [].concat(seq);
                    newseq.splice(i, 0, element);
                    newlist.push(newseq);
                }
            });
            return newlist;
        },
        [[]]
    );
}

solution(numbers);
