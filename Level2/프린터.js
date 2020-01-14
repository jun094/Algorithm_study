/** @format */
const priorities = [2, 1, 3, 2];
const location = 2;

function solution(priorities, location) {
  var answer = 0;
  const len = priorities.length;

  priorities.forEach((item, index) => {
    item = { item: item, index: index };
  });

  //   priorities.forEach((item, index) => {
  //     if (index == location) {
  //       priorities.push({ item: item, index: index });
  //     }
  //     for (let i = 0; i < len; i++) {
  //       if (item < priorities[i]) {
  //         let temp = priorities.shift();
  //         priorities.push(temp);
  //       }
  //     }
  //   });

  console.log(priorities);
  return answer;
}

solution(priorities, location);
