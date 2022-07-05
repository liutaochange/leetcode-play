// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
// 解法一：逐个比较
var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let prevs = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const length = Math.min(prevs.length, strs[i].length);
    let j = 0;
    for (; j < length; j++) {
      if (prevs.charAt(j) !== strs[i].charAt(j)) break;
    }
    prevs = prevs.substring(0, j);
    if (prevs === '') return '';
  }
  return prevs;
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

// 解法二：仅需最大、最小字符串的最长公共前缀
var longestCommonPrefix2 = function (strs) {
  if (strs === null || strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let min = 0,
    max = 0;
  for (let i = 1; i < strs.length; i++) {
    if (strs[min] > strs[i]) min = i;
    if (strs[max] < strs[i]) max = i;
  }
  for (let j = 0; j < strs[min].length; j++) {
    if (strs[min].charAt(j) !== strs[max].charAt(j)) {
      return strs[min].substring(0, j);
    }
  }
  return strs[min];
};
console.log(longestCommonPrefix2(['flower', 'flow', 'flight']));
