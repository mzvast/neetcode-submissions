class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // stack
        const n = s.length;

        const stack = [];

        const dict = {
            '(':')',
            '{':'}',
            '[':']'
        }

        for(let x of s){
            if(stack.length&&dict[stack[stack.length-1]]===x) {
                stack.pop()
            }else{
                stack.push(x)
            }
        }

        return stack.length === 0
    }
}
