/*
 * @Author: bbc-594
 * @Date: 2021-03-03 16:27:16
 * @LastEditTime: 2021-04-28 09:01:07
 * @FilePath: /leecode/罗马数字.js
 */

var romanToInt = function(s) {
    const map = {
        "I": 1,
        "V": 5,
        "IV": 4,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "XC": 90,
        "L": 50,
        "C": 100,
        "CD": 400,
        "CM": 900,
        "D": 500,
        "M": 1000
    }
    let result = 0;
    let i = 0;
    for (i = 0; i < s.length; i++) {
        console.log('i :>> ', i);
        const current = s[i];
        const next = s[i + 1];
        console.log('object :>> ', map[next]);
        if (map[current] < map[next]) {
            result += (map[next] - map[current]);
            i++;
        } else {
            result += map[current]
        }
    }
    return result
};
console.log(romanToInt("III"))