class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const dict = {
            "[": "]",
            "{": "}",
            "(": ")",
        };
        const stack = [];

        for (let x of s) {
            if (stack.length > 0 && dict[stack[stack.length - 1]] === x) {
                stack.pop();
            } else {
                stack.push(x);
            }
        }

        return stack.length === 0;
    }
}
