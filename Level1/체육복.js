/** @format */

let n = 10;
let lost = [3, 9, 10];
let reserve = [3, 8, 9];

// 탐욕법 -> reserve는 전체를 돌지 않는 것이 중요 !!
//        -> lost와 같은게 있을 때마다 for문 탈출
// lost길이만큼 s순회-> lost배열 pop하면서 가능하면 해당원소 resrve배열에서 제거
//                             불가능하면 n--;

function solution(n, lost, reserve) {
  var answer = n;
  let total = [];
  for (let i = 0; i < n; i++) {
    total[i] = 1;
  }
  for (let i = 0; i < reserve.length; i++) {
    total[reserve[i] - 1] = 2;
  }
  for (let i = 0; i < lost.length; i++) {
    if (total[lost[i] - 1] === 2) {
      total[lost[i] - 1] = 1;
    } else {
      total[lost[i] - 1] = 0;
    }
  }

  for (let i = 0; i < n; i++) {
    if (total[i] === 0 && total[i - 1] == 2) {
      total[i] = 1;
      total[i - 1] = 1;
    } else if (total[i] === 0 && total[i + 1] == 2) {
      total[i] = 1;
      total[i + 1] = 1;
    }
  }

  console.log(total);
  for (let i = 0; i < n; i++) {
    if (total[i] === 0) {
      answer--;
    }
  }

  console.log(answer);
  return answer;
}

solution(n, lost, reserve);
