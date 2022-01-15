// 旋转矩阵
// 给你一幅由 N × N 矩阵表示的图像，
// 其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
// 不占用额外内存空间能否做到

// 示例 1:
// 给定 matrix =
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

// 示例 2:
// 给定 matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

// 自我总结：
// 如果是顺时针旋转90°
// 一定是先对角线翻转，再水平翻转
// 如果是逆时针旋转90°
// 一定是先水平翻转，再对角线翻转
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  let length = matrix.length;
  // 先上下交换
  for (let i = 0; i < length / 2; i++) {
    let temp = matrix[i];
    matrix[i] = matrix[length - i - 1];
    matrix[length - i - 1] = temp;
  }
  // 在按照对角线交换
  for (let i = 0; i < length; ++i) {
    for (let j = i + 1; j < length; ++j) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};
