var isValid = function (s) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];
  for (const x of s) {
    if (x in map) {
      stack.push(x);
      continue;
    };
    if (map[stack.pop()] !== x) { return false; }
  }
  return !stack.length;
};


console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // true
