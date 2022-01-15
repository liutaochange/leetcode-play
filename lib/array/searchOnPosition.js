// 搜索插入位置

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
// 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。

// 示例 1:
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

// 示例 2:
// 输入: nums = [1,3,5,6], target = 2
// 输出: 1

// 示例 3:
// 输入: nums = [1,3,5,6], target = 7
// 输出: 4

// 示例 4:
// 输入: nums = [1,3,5,6], target = 0
// 输出: 0

// 示例 5:
// 输入: nums = [1], target = 0
// 输出: 0

// 提示:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums 为无重复元素的升序排列数组
// -104 <= target <= 104

// 思路
// 循环数组
// target <= currentValue, 返回 currentIndex
// 不满足，则返回 nums.length

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  for (let index = 0; index < nums.length; index++) {
    if (target <= nums[index]) {
      return index;
    }
  }
  return nums.length;
};

// 验证
console.log(searchInsert([1, 3, 5, 6], 5));
// 2

console.log(searchInsert([1, 3, 5, 6], 2));
// 1

console.log(searchInsert([1, 3, 5, 6], 7));
// 4

console.log(searchInsert([1, 3, 5, 6], 0));
// 0

console.log(searchInsert([1], 0));
// 0

// 缺点：数值较多时，没有那么高效，因此可以引入二分查找

// 二分查找：

// 二分法思路
// 搜索过程从数组的中间元素开始，如果中间元素正好是要查找的元素，则搜索过程结束；
// 如果某一特定元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半中查找，
// 而且跟开始一样从中间元素开始比较。如果在某一步骤数组为空，则代表找不到。
// 这种搜索算法每一次比较都使搜索范围缩小一半。

// 二分搜索只对有序数组有效。
// 二分搜索先比较数组中比特素和目标值。
// 如果目标值与中比特素相等，则返回其在数组中的位置；
// 如果目标值小于中比特素，则搜索继续在前半部分的数组中进行。
// 如果目标值大于中比特素，则搜索继续在数组上部分进行。
// 由此，算法每次排除掉至少一半的待查数组。
var arr = [1, 3, 5, 7, 9, 10, 11, 12, 14, 15, 19, 20];
const binarySearch = (arr, target) => {
  const search = (start, end) => {
    if (start > end) return -1;
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > target) {
      return search(0, mid - 1);
    } else if (arr[mid] < target) {
      return search(mid + 1, end);
    } else {
      return mid;
    }
  };
  return search(0, arr.length - 1);
};
console.log(binarySearch(arr, 4));

// 解题思路
// 标签：二分查找
// 如果该题目暴力解决的话需要 O(n)O(n) 的时间复杂度，但是如果二分的话则可以降低到 O(logn)O(logn) 的时间复杂度
// 整体思路和普通的二分查找几乎没有区别，先设定左侧下标 left 和右侧下标 right，再计算中间下标 mid
// 每次根据 nums[mid] 和 target 之间的大小进行判断，相等则直接返回下标，nums[mid] < target 则 left 右移，nums[mid] > target 则 right 左移
// 查找结束如果没有相等值则返回 left，该值为插入位置
// 时间复杂度：O(logn)O(logn)
const binarySearchIndex = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1; // 注意
    } else {
      end = mid - 1; // 注意
    }
  }
  // 相关返回值
  return start;
};

// 验证
console.log(binarySearchIndex([1, 3, 5, 6], 5));
// 2

console.log(binarySearchIndex([1, 3, 5, 6], 2));
// 1

console.log(binarySearchIndex([1, 3, 5, 6], 7));
// 4

console.log(binarySearchIndex([1, 3, 5, 6], 0));
// 0

console.log(binarySearchIndex([1], 0));
// 0
