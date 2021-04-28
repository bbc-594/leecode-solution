/*
 * @Author: bbc-594
 * @Date: 2021-03-03 15:29:10
 * @LastEditTime: 2021-03-03 15:45:35
 * @FilePath: /leecode/整数反转.js
 */
var reverse = function(x) {
    let isSmaller = false;
    if (x < 0) { 
        isSmaller = true;
     }
    if (x === 0) return 0;
    const border = Math.pow(2,31);
    const max = border -1;
    const min = -border;
    // console.log('object :>> ', object);
    const rX = parseInt(Math.abs(x).toString().split("").reverse().join(""));
    if (isSmaller) rX = -rX;
    if (rX <= min || rX >= max) {
        return 0 
    } else {
        return rX
    }
};
console.log('reverse(123) :>> ', reverse(123));
reverse(123);