/** @format */

let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  console.log(participant);
  console.log(completion);
}
solution(participant, completion);
