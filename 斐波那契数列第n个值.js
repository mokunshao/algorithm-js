const assert = require('node:assert');

function fib(index) {
  const list = [1, 1];
  for (let i = 2; i < index + 1; i++) {
    list.push(list[i - 2] + list[i - 1]);
  }
  return list[index];
}

assert(fib(0) === 1);
assert(fib(1) === 1);
assert(fib(2) === 2);
assert(fib(3) === 3);
assert(fib(4) === 5);
