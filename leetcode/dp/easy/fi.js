// 피보나치 수열
function fi(n) {
  if (n === 0 || n === 1) return n;
  return fi(n - 1) + fi(n - 2);
}

console.log(fi(7));

// recursive
const array = [0, 1];
function fr(n) {
  if (n < array.length) {
    return array[n];
  } else {
    const fib = fr(n - 1) + fr(n - 2);
    array.push(fib);
    return fib;
  }
}

console.log(fr(7));

// bottom-up
function fb(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const array = [0, 1];
  for (let i = 2; i <= n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return array[n];
}
console.log(fb(7));
