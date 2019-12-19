var H = prompt("시간:");
var M = prompt("분:");

function alarm(h, m) {
  if (m - 45 < 0) {
    h = h - 1;
    m = 60 - Math.abs(m - 45);
  } else {
    m = m - 45;
  }

  console.log(h, m);
}

alarm(H, M);
