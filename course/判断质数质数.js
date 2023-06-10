const assert = require('node:assert');

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

assert(isPrime(4) === false);
assert(isPrime(5) === true);
