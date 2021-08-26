function reverse1(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'error!';
  }

  let backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

console.log(reverse1('Hi My name is Andrei'));
console.log(reverse2('Hi My name is Andrei'));
