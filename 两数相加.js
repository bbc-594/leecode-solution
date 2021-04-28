/*
 * @Author: bbc-594
 * @Date: 2021-03-03 16:03:14
 * @LastEditTime: 2021-03-03 16:16:00
 * @FilePath: /leecode/两数相加.js
 */
var addTwoNumbers = function(l1, l2) {
    const l3 = [];
    let upOne = false;
    for (let i = 0; i < l1.length; i ++) {
        const num = upOne ? l1[i] + l2[i] + 1 : l1[i] + l2[i];
        upOne = false;
        if (num >= 10) {
            l3[i] = 0;
            upOne = true;
        } else {
            l3[i] = num;
        }
    }
    console.log('l3 :>> ', l3);
    return l3;
    // const l1Int = parseInt(l1.reverse().join(""));
    // const l2Int = parseInt(l2.reverse().join(""));
    // console.log('l1Int :>> ', l1Int);
    // console.log('l2Int :>> ', l2Int);
    // return  (l1Int+l2Int).toString().split("").reverse();
};
console.log('object :>> ', addTwoNumbers([2,4,3], [5,6,4]));
addTwoNumbers([2,4,3], [5,6,4]);