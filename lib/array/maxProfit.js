// 买卖股票的最佳时机 II

// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
// 返回 你能获得的 最大 利润 。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const result = [];
  for (let index = 0; index < prices.length; index++) {
    const current = prices[index];
    const next = prices[index + 1];
    if (typeof next !== 'undefined') {
      const rest = next - current;
      if (rest > 0) {
        result.push(rest);
      }
    }
  }
  return result.reduce((prev, current) => prev + current, 0);
};

// 解题思路，利用贪心算法， 求出每一步的最优解，然后累加

// 代码优化
const maxProfit2 = function (prices) {
  let total = 0;
  for (let index = 0; index < prices.length - 1; index++) {
    const current = prices[index];
    const next = prices[index + 1] || 0;
    total += Math.max(next - current, 0);
  }
  return total;
};
