/*
 * @Author: bbc-594
 * @Date: 2021-03-09 16:12:38
 * @LastEditTime: 2021-03-09 17:56:23
 * @FilePath: /leecode/删除数组重复项.js
 */
var removeDuplicates = function(nums) {
    let cur = nums[0];
    for (let i = 1; i < nums.length;) {
        if (cur === nums[i]) {
            nums.splice(i, 1);
            // continue;
        } else {
            cur = nums[i++];
        }
        
    }
    // console.log('nums :>> ', nums);
    return nums.length;
};
console.log('object :>> ', removeDuplicates([0,0,1,1,1,2,2,3,3,4]));