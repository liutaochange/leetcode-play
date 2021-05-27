// 两数之和
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  if (!Array.isArray(nums)) {
    return;
  }
  let save = {};
  let result = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (save.hasOwnProperty(target - element)) {
      result = [save[target - element], index];
      break;
    }
    save[element] = index;
  }
  return result;
};

const arr = [1, 2, 3, 5, 6, 7, 913, 45, 67, 89, 23, 56];
console.log(twoSum(arr, 112));

// 解题思路：
// 先把数组里边的数字和索引以key => value 的形式存储在对象上。
// 也可以考虑使用map来存储 数组里边的数字和索引

const twoSumMap = (nums, target) => {
  let save = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    if (save.has(target - ele)) {
      result = [save.get(target - ele), i];
      break;
    }
    save.set(ele, i);
  }
  return result;
};

const nums = [2, 7, 11, 15];
console.log(twoSumMap(nums, 9));
