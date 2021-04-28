/*
 * @Author: bbc-594
 * @Date: 2021-03-04 11:31:55
 * @LastEditTime: 2021-03-04 11:50:57
 * @FilePath: /leecode/爬楼梯.js
 */
var climbStairs = function(n) {
    if (n <= 1) return 1
    if (n < 0) return 0
    return climbStairs(n-1) + climbStairs(n-2)
};