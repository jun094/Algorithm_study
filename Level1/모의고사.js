/** @format */

function solution(answers) {
  let person = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  let cnt = [0, 0, 0];
  let max;
  let sol = [];

  for (let i in answers) {
    if (person[0][i % 5] == answers[i]) {
      cnt[0]++;
    }
    if (person[1][i % 8] == answers[i]) {
      cnt[1]++;
    }
    if (person[2][i % 10] == answers[i]) {
      cnt[2]++;
    }
  }

  max = Math.max.apply(null, cnt);
  for (let i = 1; i <= 3; i++) {
    if (cnt[i - 1] == max) {
      sol.push(i);
    }
  }

  return sol;
}

let answer = [1, 3, 2, 4, 2];
solution(answer);
