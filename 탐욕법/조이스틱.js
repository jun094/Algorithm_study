const name = 'ABAAAAB';

function solution(name) {
    var answer = 0,
        count = 0;
    let nameCode = [],
        nameDiff = [];

    for (let i = 0; i < name.length; i++) {
        nameCode.push(name.charCodeAt(i));
    }
    console.log(nameCode);

    // 1-13 : 그대로 값 더하기
    // 14-26 : -27 값 더하기
    for (let i = 0; i < name.length; i++) {
        if (nameCode[i] - 65 > 13) {
            nameDiff.push(26 - (nameCode[i] - 65));
        } else {
            nameDiff.push(nameCode[i] - 65);
        }
    }
    console.log(nameDiff);

    nameDiff.forEach(check => {
        count++;
        answer += check;
    });

    answer += count;

    console.log(answer);
    return answer;
}

solution(name);
