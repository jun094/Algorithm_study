let a, b, firstN, cycleN;
let count = 1;

function plusCycle(n) {
  if (count === 1) {
    firstN = n;
  }

  if (n >= 10) {
    a = Math.floor(n / 10);
    b = n % 10;
  } else {
    a = 0;
    b = n;
  }

  cycleN = b * 10 + ((a + b) % 10);

  if (cycleN === firstN) {
    console.log(count);
  } else {
    count++;
    plusCycle(cycleN);
  }
}

plusCycle(52);
