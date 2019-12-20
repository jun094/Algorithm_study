let a, b, c;
let d, e, f;
let check = "false";

function recursive(a, b, c, d, e, f) {
  if (a == d && b == e && c == f) {
    check = "true";
  }

  if (a >= 2) {
    recursive(a - 2, b + 1, c, d, e, f);
    recursive(a - 2, b, c + 1, d, e, f);
  }
  if (b >= 2) {
    recursive(a + 1, b - 2, c, d, e, f);
    recursive(a, b - 2, c + 1, d, e, f);
  }
  if (c >= 2) {
    recursive(a, b + 1, c - 2, d, e, f);
    recursive(a + 1, b, c - 2, d, e, f);
  }
}
recursive(2, 2, 0, 1, 1, 1);
console.log(check);
