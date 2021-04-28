/*
 * @Author: bbc-594
 * @Date: 2021-03-03 16:59:02
 * @LastEditTime: 2021-04-28 14:41:23
 * @FilePath: /leecode/公共前缀.js
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (;j < ans.length && j < strs[i].length; j++) {
            if (ans[j] !== strs[i][j]) {
                break}
        }
        ans = ans.substr(0, j);
        if (ans === "") {
            return ans
        }
    }
    return ans
};
var longestCommonPrefix = function(strs) {
    strs.sort((prev, next) => prev.length - next.length)
    let temp = strs[0];
    let result = "";
    console.log('temp :>> ', temp);
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === str)
    }
};
console.log('object :>> ', longestCommonPrefix(["flower","flow","flight"]));