let unit = 3; // 단위

function compression(s) {
  let len = s.length;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.substr(i, unit) == s.substr(i + unit, unit)) {
      s = s.substr(i, unit) + s.substr(i + unit * 2, s.length);

      console.log(s);
    }
  }
}
compression("abcabcdefdefdef");
