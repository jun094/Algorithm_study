function solution(N) {
    var answer = 0;
    let arr = [];

    arr.push(1);
    arr.push(1);
    for (let i = 1; i < N - 1; i++) {
        arr.push(arr[i - 1] + arr[i]);
    }

    answer = arr[N - 1] * 2 + (arr[N - 1] + arr[N - 2]) * 2;

    return answer;
}

solution(6);
