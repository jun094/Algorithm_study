let arr = [40, 80, 60];
let M = Math.max.apply(null, arr);

arr.map(function(n) {
  return (n / M) * 100;
});
console.log(arr);
