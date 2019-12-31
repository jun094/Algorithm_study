function solution(s) {
  let len = s.length;
  let cut_len = len / 2;
  let min = 1000;

  for (let unit = 1; unit <= cut_len; unit++) {
    let answer = len;
    let cnt = 0;

    if (s.substr(0, unit) != s.substr(unit, unit)) {
      answer = len;
    } else {
      for (let i = 0; i <= len - unit; i++) {
        let checkString = s.substr(i, unit); // abc, i=0, i=3,i=4, .., i=6, i=9, i=12

        if (checkString == s.substr(i + unit, unit)) {
          cnt++;
          answer = answer - unit;

          if (checkString == s.substr(i - unit, unit) && i - unit >= 0) {
            cnt--;
          }
          i = i + unit - 1;
        }
      }
      answer = answer + cnt;
    }
    min = min > answer ? answer : min;
  }

  return min;
}
