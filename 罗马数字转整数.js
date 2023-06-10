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
  for (let i in arr) {
    if (obj[arr[i]] < obj[arr[1 + Number(i)]]) {
      num = num - obj[arr[i]];
    } else {
      num = num + obj[arr[i]];
    }
  }
  return num;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("VI"));
console.log(romanToInt("IX"));
console.log(romanToInt("XI"));