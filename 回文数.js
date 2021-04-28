/*
 * @Author: bbc-594
 * @Date: 2021-03-03 15:47:53
 * @LastEditTime: 2021-03-03 15:54:31
 * @FilePath: /leecode/回文数.js
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    const newX = parseInt(x.toString().split("").reverse().join(""));
    console.log('newX :>> ', newX);
    return newX === x;
    // const reserveX = x.toString()
};
console.log('object :>> ', isPalindrome(0));