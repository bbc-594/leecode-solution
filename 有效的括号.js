/*
 * @Author: bbc-594
 * @Date: 2021-03-04 10:21:17
 * @LastEditTime: 2021-03-04 11:25:15
 * @FilePath: /leecode/有效的括号.js
 */
var isValid = function(s) {
    const l = s.length;
    if (l % 2 != 0) return false;
    const map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    const stack = [];
    // let top;
    for (let i = 0; i < l; i ++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        } else {
            // const length = stack.length;
            if (stack.length == 0) return false;
            // top = stack[stack.length - 1];
            if (map[stack[stack.length - 1]] == s[i]) {
                stack.pop();
            } else {
                return false
            }
        }
    }
    return stack.length == 0;
};
console.log('object :>> ', isValid("([)]"));