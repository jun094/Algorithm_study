let unit = 3; // 단위

function compression(s) {
  let len = s.length;
  let answer;
  let cnt = 0;

  if (len === 1) {
    answer = 1;
  } else {
    for (let i = 0; i <= s.length - unit; i++) {
      let checkString = s.substr(i, unit); // abc, bca, .., def

      let j = i + unit; //j=3, j=4, ..., j=9
      while (true) {
        if (j >= len) {
          break;
        }
        if (checkString == s.substr(j, unit)) {
          cnt++; // 3
          j = j + unit; // j=15

          console.log(checkString);
        } else {
          break;
        }
      }
    }
  }
  console.log(cnt);
}

compression("abcabcdefdefdef");
