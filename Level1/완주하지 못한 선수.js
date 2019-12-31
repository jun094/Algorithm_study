/** @format */

// participant를 빼서 completion에 돌리는게 핵심..!

let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
  let bool = true;
  let answer;
  let cnt = 0,
    cnt2 = 0;
  while (bool) {
    console.log("================" + cnt++);
    let check = participant.pop(); // filipa, vinko
    answer = check;

    for (let i = 0; i <= completion.length; i++) {
      console.log(cnt2++);

      if (check == completion[i]) {
        completion.splice(i, 1);
        console.log(completion);
        i = 100001;
        answer = 1;
      }
    }
    cnt2 = 0;

    if (check == answer) {
      bool = false;
    }
  }

  return answer;
}

solution(participant, completion);
