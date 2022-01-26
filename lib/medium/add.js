// 两数相加
// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const addTwoNumbers = function (l1, l2) {
  var res = new ListNode(0);
  // now存放计算值
  var now = res;
  // 当任一节点存在时
  while (l1 || l2 || now) {
    // a的当前值
    var a = l1.val;
    // b的当前值
    var b = l2.val;
    // 两个数组相加之和
    var sum = a + b + now.val;
    // 当前结果节点的值
    now.val = sum % 10;
    // a与b寻找下一个节点
    l1 = l1.next;
    l2 = l2.next;
    // 当计算值大于9时
    if (sum > 9) {
      // 下一个节点数据带1（进位）
      now.next = new ListNode(1);
    } else if (l1 || l2) {
      // 不进位情况
      now.next = new ListNode(0);
    }
    // 结果节点寻找下一个节点
    now = now.next;
  }
  return res;
};

// 标签：链表
// 将两个链表看成是相同长度的进行遍历，如果一个链表较短则在前面补 00，比如 987 + 23 = 987 + 023 = 1010
// 每一位计算的同时需要考虑上一位的进位问题，而当前位计算结束后同样需要更新进位值
// 如果两个链表全部遍历完毕后，进位值为 11，则在新链表最前方添加节点 11
// 小技巧：对于链表问题，返回结果为头结点时，通常需要先初始化一个预先指针 pre，
// 该指针的下一个节点指向真正的头结点head。使用预先指针的目的在于链表初始化时无可用节点值，
// 而且链表构造过程需要指针移动，进而会导致头指针丢失，无法返回结果。

var addTwoNumbersWay = function (l1, l2) {
  let result = new ListNode("head");
  let str = result;
  let val = 0;

  while (l1 || l2 || val) {
    // 通过位运算符获取当前值 通过+=求和
    val += ~~(l1 && l1.val) + ~~(l2 && l2.val);
    // 当前节点的val则为当前和的余数
    str.next = new ListNode(val % 10);
    // 下一次循环的str
    str = str.next;
    // 下一次循环的l1
    l1 = l1 && l1.next;
    // 下一次循环的l2
    l2 = l2 && l2.next;
    // 如果本次循环的和大于9 则进位1 因为true为1 false为0可以直接代入使用
    val = val > 9;
  }
  return result.next;
};

// 解题思路
// 首先要理解链表的结构，其次要注意改变指向