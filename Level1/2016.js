/** @format */

function solution(m, d) {
  var answer = "";
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayWeek = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let totalDay = 0;

  //totalDay구하기  ex) 3.10 -> 31+28+10
  for (let i = 0; i < m - 1; i++) {
    totalDay = totalDay + month[i];
  }
  totalDay = totalDay + d;

  answer = dayWeek[totalDay % 7];

  console.log(totalDay);
  console.log(answer);
  return answer;
}

solution(5, 24);
