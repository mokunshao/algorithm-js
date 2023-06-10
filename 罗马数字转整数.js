/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  const arr = s.split('');
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    const cur = obj[arr[i]];
    const next = obj[arr[i + 1]];
    if (cur < next) {
      num = num - cur;
    } else {
      num = num + cur;
    }
  }
  return num;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("VI"));
console.log(romanToInt("IX"));
console.log(romanToInt("XI"));