/** @format */

const progresses = [40, 93, 30, 55, 60, 65];
const speeds = [60, 1, 30, 5, 10, 7];

function solution(progresses, speeds) {
  var answer = [];
  let remain,
    day = [],
    min = 100,
    count = 0,
    distribute = 0,
    temp;

  progresses.forEach((pro, i) => {
    remain = 100 - pro;
    day.push(Math.ceil(remain / speeds[i]));

    console.log(min, day[i]);
    if (min < day[i]) {
      //temp = min;
      count++;
      distribute = 1;
      answer[count] = distribute;
    } else {
      answer[count] = ++distribute;
      min = day[i];
    }
  });

  console.log(answer);
  return answer;
}

solution(progresses, speeds);
