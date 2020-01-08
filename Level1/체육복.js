/** @format */

let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];

// lost길이만큼 순회-> lost배열 pop하면서 가능하면 해당원소 resrve배열에서 제거
//                             불가능하면 n--;

function solution(n, lost, reserve) {
  var answer = n;

  for (let i = 0; i < lost.length; i++) {
    let check = lost[i];
    console.log(check);
    let c = false;
    c = reserve.some(have => {
      return check - 1 === have || check + 1 === have;
    });

    console.log(check, c);
  }
  //console.log(reserve);
  //console.log(answer);
}

solution(n, lost, reserve);
