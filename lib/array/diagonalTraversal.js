// 对角线遍历;

// 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

// 题解思路
// 算每个数的x+y坐标，发现一样x+y的坐标的值是在同一条线上的；
// 当x+y的和是偶数的时候，线是向上斜走的
// 当x+y的和是奇数的时候，线是向下斜走的
// 那么，当线是向上斜走的时候，x坐标大的数是排在前面
// 那么，当线是向下斜走的时候，x坐标小的数是排在前面

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];

  const row = matrix.length,
    col = matrix[0].length;
  // nr，nc 分别记录下一条对角线遍历的开始坐标
  let nr = 0,
    nc = 0;
  let res = [];

  for (let i = 1; i < row + col; i++) {
    // 判断对角线方向
    if (i % 2 === 1) {
      while (nr > -1 && nc < col) {
        res.push(matrix[nr--][nc++]);
      }
      // 是否在最后一列（特别注意：不能先赋值 nc，因为 nr 赋值时依赖 nc）
      nr = nc === col ? nr + 2 : nr + 1;
      nc = nc === col ? nc - 1 : nc;
    } else {
      while (nr < row && nc > -1) {
        res.push(matrix[nr++][nc--]);
      }
      // 是否在最后一行（同样，注意赋值顺序）
      nc = nr === row ? nc + 2 : nc + 1;
      nr = nr === row ? nr - 1 : nr;
    }
  }

  return res;
};
