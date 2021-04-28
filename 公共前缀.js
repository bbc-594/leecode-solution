/*
 * @Author: bbc-594
 * @Date: 2021-03-03 16:59:02
 * @LastEditTime: 2021-03-03 17:39:09
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
// var longestCommonPrefix = function(strs) {
//     var temp;
//     var first = str[0]
//     var index = 1;
//     while(true){
//         var char;
//         char = first.substring(0,1);
//         var next = str[index]
//         if(char.startwith(next)){

//         }


//     }
    
//     };
longestCommonPrefix(["flower","flow","flight"])