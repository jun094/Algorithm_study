/** @format */
function unitCheck(s, unit) {
  let len = s.length;
  let answer = len;
  let cnt = 0;

  let i = 0;
  let checkString = s.substr(i, unit);

  while (i <= s.length - unit) {
    if (checkString == s.substr(i + unit, unit)) {
      cnt = cnt + 1;
    } else {
      len = len - cnt * unit; // 8 - 1 + 1 = 8

      console.log("-----------------" + cnt);
      if (cnt > 0 && cnt < 10) {
        len = len + 1;
      } else if (cnt >= 10 && cnt < 100) {
        len = len + 2;
      } else if (cnt >= 100 && cnt < 1000) {
        len = len + 3;
      } else {
        len = len + 4;
      }
      cnt = 0;
      checkString = s.substr(i + unit, unit);
    }

    i = i + unit;
  }

  answer = len;
  return answer;
}
function solution(s) {
  //console.log(s.length);
  let len = s.length;
  let cut_len = len / 2;
  let unit = 1;
  let min = 100000;

  if (len === 1) {
    console.log("1");
    min = 1;
  }

  for (unit; unit <= cut_len; unit++) {
    min = min > unitCheck(s, unit) ? unitCheck(s, unit) : min;
  }
  console.log(min);
  return min;
}

solution("aaaaaaaaaa");
