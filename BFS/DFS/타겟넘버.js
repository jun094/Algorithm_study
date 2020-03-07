const numbers = [1, 1, 1, 1, 1];
const target = 3;

function solution(numbers, target) {
    var answer = 0;
    let sum = 0;

    const dfs = (numbers, target, node) => {
        if (node === numbers.length) {
            console.log(numbers);
            sum = 0;
            for (let num of numbers) {
                sum += num;
            }
            if (sum === target) {
                return answer++;
            }
        } else {
            numbers[node] *= 1;
            dfs(numbers, target, node + 1);

            numbers[node] *= -1;
            dfs(numbers, target, node + 1);
        }
    };
    dfs(numbers, target, 0);

    console.log(answer);
    return answer;
}

solution(numbers, target);
