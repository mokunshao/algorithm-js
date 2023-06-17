/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let res = strs[0];
  for (ch of strs) {
    for (let i = 0; i < res.length; i++) {
      if (ch[i] !== res[i]) {
        res = res.slice(0, i);
        break;
      }
    }
  }
  return res;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
