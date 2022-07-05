/**
 * @param {number[]} nums
 * @return {number}
 */

//  给你一个整数数组 nums 。
//  如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
//  返回好数对的数目。

var numIdenticalPairs = function (nums) {
  let dp = [0],
    len = nums.length,
    map = new Map().set(nums[0], 1);
  for (let i = 1; i < len; i++) {
    if (map.has(nums[i])) {
      let count = map.get(nums[i]);
      dp[i] = dp[i - 1] + count;
      count++;
      map.set(nums[i], count);
    } else {
      map.set(nums[i], 1);
      dp[i] = dp[i - 1];
    }
  }
  return dp[len - 1];
};
