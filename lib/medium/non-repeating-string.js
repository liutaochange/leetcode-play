// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let save = {};
  for (let index = 0; index < s.length; index++) {
    const ele = s.split("")[index];
    if (save.hasOwnProperty(ele)) {
      save[ele] = save[ele] + 1;
    } else {
      save[ele] = 1;
    }
  }
  let arr = [];
  Object.keys(save).forEach((item) => {
    arr.push(save[item]);
  });
  return Math.max(...arr);
};

const print = (val) => console.log(val);

print(lengthOfLongestSubstring("abcabcbb"));
print(lengthOfLongestSubstring("bbbbb"));
print(lengthOfLongestSubstring("pwwkew"));

const lengthOfLongestSubstringWay = function (s) {
  let save = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let index = save.indexOf(s[i]);
    if (index !== -1) {
      save.splice(0, index + 1);
    }
    save.push(s.charAt(i));
    max = Math.max(save.length, max);
  }
  return max;
};
print(lengthOfLongestSubstringWay("abcabcbb"));
print(lengthOfLongestSubstringWay("bbbbb"));
print(lengthOfLongestSubstringWay("pwwkew"));

// 解题思路： 使用一个数组来维护滑动窗口

// 遍历字符串，判断字符是否在滑动窗口数组里

// 不在 则 push 进数组
// 在 则删除滑动窗口数组里相同字符及相同字符前的字符，然后将当前字符 push 进数组
// 然后将 max 更新为当前最长子串的长度
// 遍历完，返回 max 即可

