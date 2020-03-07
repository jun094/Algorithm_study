const n = 3;
const computers = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
];

function solution(n, computers) {
    var answer = 0;
    let visit = [];

    for (let i = 0; i < n; i++) {
        visit.push(false);
    }

    const dfs = idx => {
        visit[idx] = true;

        for (let i = 0; i < computers.length; i++) {
            if (computers[idx][i] === 1 && visit[i] === false) {
                dfs(i);
            }
        }
        console.log(visit[idx]);
    };

    for (let i = 0; i < computers.length; i++) {
        if (!visit[i]) {
            dfs(i);
            answer += 1;
        }
    }

    console.log(answer);
    return answer;
}

solution(n, computers);
