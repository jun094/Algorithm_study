/** @format */

let n = 5;
let lost = [2, 4];
let reserve = [3];

// lost길이만큼 순회-> lost배열 pop하면서 가능하면 해당원소 resrve배열에서 제거
//                             불가능하면 n--;

function solution(n, lost, reserve) {
  var answer = n;

  for (let i = 0; i < lost.length; i++) {
    let check = lost[i];

    reserve.some(have => {
      console.log("없는사람 " + check);
      console.log("여벌있는사람 " + have);

      if (check - 1 === have) {
        let c = reserve.splice(reserve.indexOf(have), 1);
        console.log("-", reserve);
        return check - 1 === have;
      } else if (check + 1 === have) {
        let c = reserve.splice(reserve.indexOf(have), 1);
        console.log("+", reserve);
        return check + 1 === have;
      } else {
        console.log("!");
        answer = answer - 1;
      }

      console.log("============");
    });
  }
  //console.log(reserve);
  console.log(answer);
}

solution(n, lost, reserve);
