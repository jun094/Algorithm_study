
const array = [1, 5, 2, 6, 3, 7, 4]	;
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
    var answer = [];

    for(let i=0;i<commands.length;i++){
        let a = array.slice(commands[i][0]-1, commands[i][1]);

        a.sort((x, y) => x - y);
        answer.push(a[commands[i][2]-1]);
    }
    

    console.log(answer);
}

solution(array, commands);
