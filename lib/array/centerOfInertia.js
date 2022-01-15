// 寻找数组的中心索引

// 给你一个整数数组 nums ，请计算数组的 中心下标 。
// 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
// 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。
// 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。

// 示例 1：

// 输入：nums = [1, 7, 3, 6, 5, 6]
// 输出：3
// 解释：
// 中心下标是 3 。
// 左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
// 右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。
// 示例 2：

// 输入：nums = [1, 2, 3]
// 输出：-1
// 解释：
// 数组中不存在满足此条件的中心下标。
// 示例 3：

// 输入：nums = [2, 1, -1]
// 输出：0
// 解释：
// 中心下标是 0 。
// 左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），
// 右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。
//

// 提示：

// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

// 思路
// 1. 先求出数组之和，allSums
// 2. 定义变量leftSums, 表示左侧元素之和，遍历数组依次累加数组元素到 leftSums
// 3. 判断 如果 leftSums * 2 + nums[i] === allSums, 则返回 当前索引 i
// 4. 数组遍历完，没有符合条件的索引，则返回 -1

// 辅助函数
const sums = (nums) => nums.reduce((acr, cur) => acr + cur);

// 主函数
const getPivotIndex = (nums) => {
  const allSums = sums(nums);
  let resultIndex = -1;
  let leftSums = 0;
  for (let index = 0; index < nums.length; index++) {
    const currentValue = nums[index];
    if (leftSums * 2 + currentValue === allSums) {
      resultIndex = index;
      break;
    } else {
      leftSums += currentValue;
    }
  }
  return resultIndex;
};

// 验证
console.log(getPivotIndex([1, 7, 3, 6, 5, 6]));
// 3
console.log(getPivotIndex([1, 2, 3]));
// -1
console.log(getPivotIndex([2, 1, -1]));
// 0

// 看完官方答案，代码优化：
// 注意事项，少定义无用变量，节省内存
const getPivotIndex = (nums) => {
  const allSums = nums.reduce((a, b) => a + b);
  let leftSums = 0;
  for (let index = 0; index < nums.length; index++) {
    const currentValue = nums[index];
    if (leftSums * 2 + currentValue === allSums) {
      return index;
    }
    leftSums += currentValue;
  }
  return -1;
};
