// 零矩阵
// 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const n = matrix.length;
  const col = [];
  for (let i = 0; i < n; i++) {
    if (matrix[i].includes(0)) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          col.push(j);
        }
        matrix[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (col.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
