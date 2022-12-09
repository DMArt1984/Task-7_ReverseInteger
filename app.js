'use strict';

console.log('Task 7');

// https://leetcode.com/problems/reverse-integer/
// 7. Reverse Integer
// Given a signed 32 - bit integer x, return x with its digits reversed.If reversing x causes the value to go outside the signed 32 - bit integer range[-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64 - bit integers(signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

var reverse = function (x) {
    let s = x.toString();
    let out = '';
    for (let i = s.length - 1; i >= 0; i--) {
        out += s.charAt(i);
    }

    x = parseInt(out);
    if (s.charAt(0) == '-') {
        x = - x;
    }

    if (x < - 2147483648 || x > 2147483648 - 1) {
        return 0;
    }

    return x;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));


// wait key...
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));

